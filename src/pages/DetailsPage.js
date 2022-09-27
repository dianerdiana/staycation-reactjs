import React, { useEffect, useState } from 'react'

import Fade from 'react-reveal/Fade'
import { useParams } from 'react-router-dom'

import Header from 'components/Header'
import PageDetailTitle from 'components/PageDetailTitle'
import FeaturedImage from 'components/FeaturedImage'
import PageDetailDescription from 'components/PageDetailDescription'
import BookingForm from 'components/BookingForm'

import ItemDetails from 'json/itemDetails.json'
import Categories from 'components/Categories'
import Testimony from 'components/Testimony'
import Footer from 'components/Footer'

// import store
import { checkoutBooking } from '../store/actions/checkout'
import { fetchPage } from '../store/actions/page'

import { useDispatch, useSelector } from 'react-redux'

const DetailsPage = (props) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const itemDetails = useSelector((state) => state.page.detailPage)

  const [loading, setLoading] = useState(true)

  const breadcrumb = [
    { pageTitle: 'Home', pageHref: '' },
    { pageTitle: 'House Details', pageHref: '' }
  ]

  useEffect(() => {
    document.title = `Details Page | ${
      itemDetails?.title ? itemDetails.title : 'Vacation'
    }`
    setLoading(true)
    dispatch(fetchPage(`/detail-page/${id}`, 'detailPage')).then(() =>
      setLoading(false)
    )
  }, [])

  if (loading) {
    return <div className="spinner"></div>
  }
  return (
    <>
      <Header {...props} />
      <PageDetailTitle breadcrumb={breadcrumb} data={itemDetails} />
      <FeaturedImage data={itemDetails.imageId} />
      <section className="container">
        <div className="row">
          <div className="col-7 pr-5">
            <Fade bottom>
              <PageDetailDescription data={itemDetails} />
            </Fade>
          </div>
          <div className="col-5">
            <Fade bottom>
              <BookingForm
                itemDetails={itemDetails}
                startBooking={checkoutBooking}
              />
            </Fade>
          </div>
        </div>
      </section>

      <Categories data={itemDetails.categoryId} />
      <Testimony data={itemDetails.testimonial} />
      <Footer />
    </>
  )
}

export default DetailsPage
