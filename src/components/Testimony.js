import React from 'react'

import Star from '../@core/components/Star'
import testimonialAccent from '../assets/images/landing-testimony-frame.jpg'
import Button from '../@core/components/Button'

// fading components
import Fade from 'react-reveal/Fade'

export default function Testimony({ data }) {
  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-auto mb-5">
            <div
              className="testimonial-hero"
            >
              <img
                src={`${process.env.REACT_APP_URL_HOST}/${data.imageUrl}`}
                alt="Testimonial"
                className="position-relative testimonial-image"
                style={{ zIndex: 2 }}
              />
              <img
                src={testimonialAccent}
                alt="Testimonial Frame"
                className="position-absolute testimonial-frame"
              />
            </div>
          </div>
          <div className="col">
            <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
            <Star value={data.rate} width={35} height={35} spacing={4} />
            <h5 className="h2 font-weight-light line-height-2 my-3">
              {data.content}
            </h5>
            <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                href={`/testimonial/${data._id}`}
                className="btn px-5"
                style={{ marginTop: '40px' }}
                isPrimary
                hasShadow
                type="link"
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  )
}
