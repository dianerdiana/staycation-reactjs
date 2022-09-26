import React from 'react'

// ** custom component
import Button from '../@core/components/Button'

// fading components
import Fade from 'react-reveal/Fade'

export default function MostPicked(props) {
  return (
    <section className="container mt-5 pt-4 pb-5" ref={props.refMostPicked}>
      <Fade bottom>
        <h4 className="mb-3">Most Picked</h4>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div
                className={`item column-4 ${index === 0 ? 'row-2' : 'row-1'}`}
                key={`mostpick-${index}`}
              >
                <Fade bottom delay={500 * index}>
                  <div className="card card-featured">
                    <div className="tag">
                      ${item.price}
                      <span className="font-weight-light">
                        {' '}
                        per {item.unit}
                      </span>
                    </div>
                    <figure className="img-wrapper">
                      <img
                        src={
                          item.imageId[0]
                            ? `${process.env.REACT_APP_URL_HOST}/${item.imageId[0].imageUrl}`
                            : ''
                        }
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        className="stretched-link d-block text-white"
                        type="link"
                        href={`/properties/${item._id}`}
                      >
                        <h5>{item.name}</h5>
                      </Button>
                      <span>
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            )
          })}
        </div>
      </Fade>
    </section>
  )
}
