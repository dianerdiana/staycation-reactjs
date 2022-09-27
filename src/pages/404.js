import React from 'react'

import Button from '@core/components/Button'

import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/')
  }
  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center text-center"
        style={{ height: '100vh' }}
      >
        <div className="col-4">
          Are you lost?
          <p className="pt-4">
            Some page are still in development, maybe you can go back if you
            want
          </p>
          <div>
            <Button className="btn mt-5" type="button" onClick={goBack} isLight>
              Yes, bring me to safe place please
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound