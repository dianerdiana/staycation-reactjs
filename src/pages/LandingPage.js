import React, { Component } from 'react'
import { connect } from 'react-redux'

// ** Import components
import Header from '../components/Header'
import Hero from '../components/Hero'
import MostPicked from '../components/MostPicked'
import Categories from '../components/Categories'
import Testimony from '../components/Testimony'
import Footer from '../components/Footer'

// ** Import fake data (json)
import landingPage from '../json/landingPage.json'

import { fetchPage } from '../store/actions/page'
class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.refMostPick = React.createRef()
  }

  componentDidMount() {
    window.title = 'Staycation | Home'
    window.scrollTo(0, 0)

    if (!this.props.landingPage) {
      this.props.fetchPage(
        'https://staycation-dianerdiana.herokuapp.com/api/v1/member/landing-page',
        'landingPage'
      )
    }
  }

  render() {
    const { page } = this.props

    if (!page.hasOwnProperty('landingPage')) {
      return null
    }

    console.log({ page })

    return (
      <>
        <Header {...this.props} />
        <Hero data={page.landingPage.hero} refMostPicked={this.refMostPick} />
        <MostPicked
          data={page.landingPage.mostPicked}
          refMostPicked={this.refMostPick}
        />
        <Categories
          data={page.landingPage.categories}
          refMostPicked={this.refMostPick}
        />
        <Testimony data={page.landingPage.testimonial} />
        <Footer />
      </>
    )
  }
}

const mapToStateProps = (state) => ({
  page: state.page
})

export default connect(mapToStateProps, { fetchPage })(LandingPage)
