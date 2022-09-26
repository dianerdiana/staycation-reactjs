import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

// ** Import components
import Header from '../components/Header'
import Hero from '../components/Hero'
import MostPicked from '../components/MostPicked'
import Categories from '../components/Categories'
import Testimony from '../components/Testimony'
import Footer from '../components/Footer'

import { fetchPage } from '../store/actions/page'
import { useDispatch } from 'react-redux'

const LandingPage = (props) => {
  const refMostPick = useRef().current
  const dispatch = useDispatch()

  const [landingPage, setLandingPage] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = 'Staycation | Home'

    setLoading(true)
    dispatch(fetchPage('/landing-page', 'landingPage'))
      .then((res) => setLandingPage(res))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <div className="spinner"></div>
  }

  return (
    <>
      <Header {...props} />
      <Hero data={landingPage.hero} refMostPicked={refMostPick} />
      <MostPicked data={landingPage.mostPicked} refMostPicked={refMostPick} />
      <Categories data={landingPage.categories} refMostPicked={refMostPick} />
      <Testimony data={landingPage.testimonial} />
      <Footer />
    </>
  )
}

export default LandingPage
