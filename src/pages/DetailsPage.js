import React, { Component } from 'react'

import Fade from 'react-reveal/Fade'

import Header from 'components/Header'
import PageDetailTitle from 'components/PageDetailTitle'
import FeaturedImage from 'components/FeaturedImage'
import PageDetailDescription from 'components/PageDetailDescription'
import BookingForm from 'components/BookingForm'

import ItemDetails from 'json/itemDetails.json'
import Categories from 'components/Categories'
import Testimony from 'components/Testimony'
import Footer from 'components/Footer'

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = 'Details Page'
    window.scrollTo(0, 0)
  }

  render() {
    const breadcrumb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Details', pageHref: '' }
    ]

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm itemDetails={ItemDetails} />
              </Fade>
            </div>
          </div>
        </section>

        <Categories data={ItemDetails.categories} />
        <Testimony data={ItemDetails.testimonial} />
        <Footer></Footer>
      </>
    )
  }
}