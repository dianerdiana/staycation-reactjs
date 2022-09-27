import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Example from './pages/Example'
import LandingPage from './pages/LandingPage'
import DetailsPage from './pages/DetailsPage'
import Checkout from './pages/Checkout'
import Error404 from './pages/404'

import './assets/scss/style.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/properties/:id" element={<DetailsPage />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/example" element={<Example />} />
        <Route exact path="*" element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default App
