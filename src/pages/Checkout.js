import React, { Component } from 'react'

import Header from 'components/Header'
import Fade from 'react-reveal/Fade'
import { connect } from 'react-redux'

import Button from '@core/components/Button'
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller
} from '@core/components/Stepper'

import BookingInformation from 'components/Checkout/BookingInformation'
import Payment from 'components/Checkout/Payment'
import Completed from 'components/Checkout/Completed'

import ItemDetails from 'json/itemDetails.json'

class Checkout extends Component {
  state = {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      proofPayment: '',
      bankName: '',
      bankHolder: ''
    }
  }

  onChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    })
  }

  componentDidMount() {
    window.scroll(0, 0)
  }

  render() {
    const { data } = this.state
    const { checkout } = this.props

    if (!checkout) {
      return (
        <div className="container">
          <div
            className="d-flex justify-content-center align-items-center text-center"
            style={{ height: '100vh' }}
          >
            <div className="col-3">
              Silakan Pilih Kamar Dulu
              <div>
                <Button
                  type="link"
                  className="mt-5 px-4 btn"
                  href="/"
                  isPrimary
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    const steps = {
      bookingInformation: {
        title: 'Booking Information',
        description: 'Please fill up the blank fields below',
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        )
      },
      payment: {
        title: 'Payment',
        description: 'Kindly follow the instruction below',
        content: (
          <Payment
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        )
      },
      completed: {
        title: 'Yay! Completed',
        description: null,
        content: <Completed />
      }
    }

    return (
      <>
        <Header isCentered />
        <Stepper steps={steps}>
          {(prevStep, nextStep, currentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={currentStep}
                style={{ marginBottom: 50 }}
              />

              <Meta data={steps} current={currentStep} />

              <MainContent data={steps} current={currentStep} />

              {currentStep === 'bookingInformation' && (
                <Controller>
                  {data.firstName !== '' &&
                    data.lastName !== '' &&
                    data.email !== '' &&
                    data.phone !== '' && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isLight
                    href={`/properties/${ItemDetails.id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {currentStep === 'payment' && (
                <Controller>
                  {data.proofPayment !== '' &&
                    data.bankName !== '' &&
                    data.bankHolder !== '' && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="button"
                    isBlock
                    isLight
                    onClick={prevStep}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {currentStep === 'completed' && (
                <Controller>
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    href=""
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout
})

export default connect(mapStateToProps)(Checkout)
