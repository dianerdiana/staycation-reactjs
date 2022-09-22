import React from 'react'

// ** Import components
import Header from '../components/Header'
import Hero from '../components/Hero'
import MostPicked from '../components/MostPicked'
import Categories from '../components/Categories'
import Testimony from '../components/Testimony'
import Footer from '../components/Footer'

// ** Import fake data (json)
import landingPage from '../json/landingPage.json'

export default function LandingPage(props) {
  const refMostPick = React.createRef()
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
