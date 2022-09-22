import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './assets/scss/style.scss'
import Example from './pages/Example'
import LandingPage from './pages/LandingPage'
import DetailsPage from './pages/DetailsPage'
import Checkout from './pages/Checkout'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/properties/:id" element={<DetailsPage />}></Route>
        <Route exact path="/checkout" element={<Checkout />}></Route>
        <Route exact path="/example" element={<Example />}></Route>
      </Routes>
    </Router>
  )
}

export default App
