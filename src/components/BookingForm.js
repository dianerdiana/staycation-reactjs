import React, { useState, useEffect, useRef } from 'react'

import propTypes from 'prop-types'

import Button from '@core/components/Button'
import { InputNumber, InputDate } from '@core/components/Form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const usePrevious = (value) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

const BookingForm = (props) => {
  const [state, setState] = useState({
    data: {
      duration: 1,
      date: {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    }
  })
  const prevState = usePrevious(state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // vars
  const { data } = state
  const { itemDetails } = props

  const updateData = (e) => {
    setState({
      ...state,
      data: {
        ...state.data,
        [e.target.name]: e.target.value
      }
    })
  }

  const startBooking = () => {
    const { data } = state

    dispatch(
      props.startBooking({
        _id: props.itemDetails._id,
        duration: data.duration,
        date: {
          startDate: data.date.startDate,
          endDate: data.date.endDate
        }
      })
    )

    navigate('/checkout')
  }

  useEffect(() => {
    if (prevState?.data.date !== data.date) {
      const startDate = new Date(data.date.startDate)
      const endDate = new Date(data.date.endDate)
      const countDuration = new Date(endDate - startDate).getDate()

      setState({
        data: {
          ...state.data,
          duration: countDuration
        }
      })
    }

    if (prevState?.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate)
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      )

      setState({
        ...state,
        data: {
          ...state.data,
          date: {
            ...state.data.date,
            endDate
          }
        }
      })
    }
  }, [state])

  return (
    <div className="card bordered" style={{ padding: '60px 80px' }}>
      <h4 className="mb-3">Start Booking</h4>
      <h5 className="h2 text-teal mb-4">
        ${itemDetails.price}{' '}
        <span className="text-gray-500 font-weight-light">
          per {itemDetails.unit}
        </span>
      </h5>

      <label htmlFor="duration">How long you will stay?</label>
      <InputNumber
        max={30}
        suffix={' night'}
        isSuffixPlural
        onChange={updateData}
        name="duration"
        value={data.duration}
      />

      <label htmlFor="date" className="mt-3">
        Pick a date
      </label>
      <InputDate onChange={updateData} name="date" value={data.date} />

      <h6
        className="text-gray-500 font-weight-light"
        style={{ marginBottom: 40 }}
      >
        You will pay{' '}
        <span className="text-gray-900 h6">
          ${itemDetails.price * data.duration} USD
        </span>{' '}
        per{' '}
        <span className="text-gray-900 h6">
          {data.duration} {itemDetails.unit}
        </span>
      </h6>

      <Button
        className="btn"
        hasShadow
        isPrimary
        isBlock
        onClick={startBooking}
      >
        Continue to Book
      </Button>
    </div>
  )
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func
}

export default BookingForm
