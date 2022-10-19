import React from 'react'

// ** import custom components
import Button from '@core/components/Button'

// // ** Import assets
import ImageHero from 'assets/images/image-hero.jpg'
import ImageHeroFrame from 'assets/images/image-hero-frame.jpg'
import IconCities from 'assets/icons/ic_cities.svg'
import IconTraveler from 'assets/icons/ic_traveler.svg'
import IconTreasure from 'assets/icons/ic_treasure.svg'

// fading components
import Fade from 'react-reveal/Fade'

// ** import utils
import formatNumber from 'utils/formatNumber'

export default function Hero(props) {
  function showMostPick() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth'
    })
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-12 col-lg-auto pr-5" style={{ width: '500px' }}>
            <h1 className="font-weight-bold line-height-1 mb-1">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-4 mt-3 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: '170%' }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5 py-2"
              isPrimary
              hasShadow
              onClick={showMostPick}
            >
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: '80px' }}>
              <div
                className="col-md-auto col-sm-12"
                style={{ marginRight: '20px' }}
              >
                <img
                  width="36"
                  height="36"
                  src={IconTraveler}
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3  md-d-inline">
                  {formatNumber(props.data.travelers)}{' '}
                  <span className="text-gray-500 font-weight-light">
                    travelers
                  </span>
                </h6>
              </div>
              <div
                className="col-md-auto col-sm-12"
                style={{ marginRight: '20px' }}
              >
                <img
                  width="36"
                  height="36"
                  src={IconTreasure}
                  alt={`${props.data.treasures} Treasures`}
                />
                <h6 className="mt-3 md-d-inline">
                  {formatNumber(props.data.treasures)}{' '}
                  <span className="text-gray-500 font-weight-light">
                    treasure
                  </span>
                </h6>
              </div>
              <div
                className="col-md-auto col-sm-12"
                style={{ marginRight: '20px' }}
              >
                <img
                  width="36"
                  height="36"
                  src={IconCities}
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3  md-d-inline">
                  {formatNumber(props.data.cities)}{' '}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 pl-5">
            <div className='hero-image-placeholder'>
              <img
                src={ImageHero}
                alt="Room with chouches"
                className="img-fluid position-absolute"
                style={{ margin: '-30px 0 0 -30px', zIndex: 2 }}
              />
              <img
                src={ImageHeroFrame}
                alt="Room with chouches frame"
                className="img-fluid position-absolute"
                style={{ margin: '0 -15px -15px 0'  }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  )
}
