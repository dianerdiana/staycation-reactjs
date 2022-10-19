import React from 'react'
import Button from '../@core/components/Button'
import IcontText from '../components/IconText'

export default function Footer() {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-12 col-lg-auto" style={{ minWidth: 360 }}>
          <IcontText /> <br />
          <p className="brand-tagline">
            We kaboom your beauty holiday <br /> instantly and memorable.
          </p>
        </div>
        <div className="col-12 col-lg-auto mr-5">
          <h6 className="mt-2">For Beginners</h6>
          <ul className="list-group list-group-floush">
            <li className="list-group-item">
              <Button href="/register" type="link">
                New Account
              </Button>
            </li>
            <li className="list-group-item">
              <Button href="/properties" type="link">
                Start Booking a Room
              </Button>
            </li>
            <li className="list-group-item">
              <Button href="/use-payments" type="link">
                Use Payments
              </Button>
            </li>
          </ul>
        </div>
        <div className="col mr-5">
          <h6 className="mt-2">Explore Us</h6>
          <ul className="list-group list-group-floush">
            <li className="list-group-item">
              <Button href="/career" type="link">
                Our Career
              </Button>
            </li>
            <li className="list-group-item">
              <Button href="/privacy" type="link">
                Privacy
              </Button>
            </li>
            <li className="list-group-item">
              <Button href="/terms" type="link">
                Terms & Conditions
              </Button>
            </li>
          </ul>
        </div>
        <div className="col mr-5">
          <h6 className="mt-2">Connect Us</h6>
          <ul className="list-group list-group-floush">
            <li className="list-group-item">
              <Button
                href="mailto:support@staycation.id"
                type="link"
                isExternal
              >
                support@staycation.id
              </Button>
            </li>
            <li className="list-group-item">
              <Button href="tel:+622122081996" type="link" isExternal>
                021 - 2208 - 1996
              </Button>
            </li>
            <li className="list-group-item">
              <span>Staycation, Kemang, Jakarta</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center copyrights">
          Copyright 2022 • All rights reserved • Staycation
        </div>
      </div>
    </footer>
  )
}
