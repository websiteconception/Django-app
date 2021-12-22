import styled from "styled-components"
import React, { FC, ReactElement, ReactNode } from "react"

interface IProps {

}

const StyledLoungeLuggage = styled.section`
  display: grid;
    
  .amenities__list,
  .lounge-luggage__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .lounge-luggage__heading:before,
  .location::after{
    content:"";
    display: block;
    position: relative;
    vertical-align: bottom;
    width: 100%;
    height: 1px;
    background-color: #707070;
    opacity: 0.6;
  }

  .lounge-luggage__heading {
    font-weight: bold;
    text-align: initial;
  }

  .amenities__list__heading{
    color: var(--violet);
    text-transform: uppercase;
  }
    
  .amenities__list__description,
  .lounge-luggage__description {
    font-weight: 300;
    text-align: initial;
  }

  .lounge-luggage__img-container {
    margin: 0;
    display: flex;
    justify-content: center;
    padding: 20px 0px;
  }

  .lounge-luggage__img {
    width: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 320px) and (max-width: 1439px) {
    display: grid;
    grid-row-gap: 16px;
    padding: 78px 20px 20px 20px;
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 1fr;

    .lounge-luggage__heading:before{
      top: -61px;
    }

    .lounge-luggage__heading{
      font-size: 1.125rem;
    }

    .lounge-luggage__description{
      font-size: 0.875rem;
    }

    .lounge-luggage__img-container{
      margin: -25px;
    }

    .lounge-luggage__img{
      max-height: 165px;
    }

    .amenities__list__heading{
      font-size: 0.625rem;
    }

    .amenities__list__description{
      font-size: 0.75rem;
      color: var(--dimgray);
    }

    .location::after{
      top: 40px
    }
  }

  @media screen and (min-width: 1440px) {
    grid-row-gap: 16px;
    padding: 58.12px 212px;
    /*grid-column-gap: 70px;*/
    grid-template-rows: auto auto auto;
    grid-template-columns: repeat(1, minmax(485px, 48%));

    .lounge-luggage__heading:before{
      top: -50px
    }
    
    .location::after{
      top: 50px
    }

    .amenities__list__heading{
      font-size: 0.81rem;
    }

    .lounge-luggage__heading {
      /*max-width: 260px;*/
      font-size: 1.6rem;
    }
    
    .amenities__list__description,
    .lounge-luggage__description {
      font-size: 1.4rem;
    }

    .lounge-luggage__img {
      max-height: 327px;
    }
  }

  @media screen and (min-width: 1920px) {
    padding: 58.12px 283px;
    .lounge-luggage__heading:before{
      top: -70px
    }

    .location::after{
      top: 70px
    }
  }
`


const LoungeLuggage: FC<IProps> = ({  }): ReactElement => (
  <StyledLoungeLuggage>
      <ul className="lounge-luggage__list">
        <li>
          <h3 className="lounge-luggage__heading">Casai Lounge & Luggage Storage</h3>
          <p className="lounge-luggage__description">
            Have some time to kill before or after check-in/check-out? Come
            to our centrally-located Casai lounge where you can drop off your
            bags, connect to the WiFi and enjoy a coffee or beer.
          </p>
          <figure className="lounge-luggage__img-container">
            <img className="lounge-luggage__img" alt="lounge" src="/img/booking-confirmation-example.png"/>
          </figure>
        </li>
      </ul>
      <ul className="amenities__list">
        <li>
          <h3 className="amenities__list__heading">LOUNGE AMENITIES</h3>
          <p className="amenities__list__description">
            High-speed WiFi, working spaces, Luggage storage, Meet your
            concierge, Coffee and beer bar
          </p>
        </li>
      </ul>
      <ul className="amenities__list location">
        <li>
          <h3 className="amenities__list__heading">LOCATION</h3>
          <p className="amenities__list__description">
            Durango 357 Col. Hipódromo Condesa, Mexico City.
          </p>
        </li>
      </ul>
  </StyledLoungeLuggage>
)


export default LoungeLuggage
