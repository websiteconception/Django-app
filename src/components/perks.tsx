import styled from "styled-components"
import React, { FC, ReactElement, ReactNode } from "react"


interface IProps {
  children?: ReactNode,
  expanded?: boolean,
}

const StyledPerks = styled.section`
  .perks__list {
    margin: 0;
    padding: 0;
    display: grid;
    grid-column-gap: 36px;
    list-style-type: none;
    grid-template-columns: repeat(4, 1fr);
  }

  .perk-name {
    font-weight: bold;
    text-align: initial;
  }

  .perk-description {
    font-weight: 300;
    text-align: initial;
  }

  .amenities {
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
  }

  .perk__img-container {
    margin: 0;
    display: flex;
    justify-content: center;
  }
  
  .perk__img {
    width: 100%;
    object-fit: cover;
  }


  @media screen and (min-width: 1440px) {
    padding: 170px 140px;

    .perk-name {
      max-width: 260px;
      font-size: 2.25rem;
    }

    .perk-description {
      font-size: 1.5rem;
    }

    .perk__img-container {
      max-width: 384px;
      height: 570px;
    }
  }
`

const Perks: FC<IProps> = ({ expanded }): ReactElement => (
  <StyledPerks
    className={ expanded ? "expanded-landing__section" : "landing__section"}
  >
    <ul className="perks__list">
      <li className="perks__list-item">
        <figure className="perk__img-container">
          <img className="perk__img" alt="perk" src="/img/concierge-service.png"/>
        </figure>
        <h4 className="concierge-perk perk-name">
          24/7 Concierge service
        </h4>
        <p className="perk-description">
          Dim the lights, play your favorite song, or even ask your
          Google assistant for the local news. Control your entire home in
          just one click.
        </p>
      </li>
      <li className="perks__list-item">
        <figure className="perk__img-container">
          <img className="perk__img" alt="perk" src="/img/neighrborhoods.png"/>
        </figure>
        <h4 className="perk-name">
          The best neighborhoods
        </h4>
        <p className="perk-description">
          We’ve carefully chosen the best locations to ensure
          personal safety, proximity to must-see spots and walkability to
          all of your day-to-day essentials.
        </p>
      </li>
      <li className="perks__list-item">
        <figure className="perk__img-container">
          <img className="perk__img" alt="perk" src="/img/care.png"/>
        </figure>
        <h4 className="perk-name">
          Local premium products
        </h4>
        <p className="perk-description">
          We work with local artisans to offer eclectic products you can’t
          find anywhere else: cold craft beers, organic bath products,
          regional candies and art.
        </p>
      </li>
      <li className="perks__list-item">
        <figure className="perk__img-container">
          <img className="perk__img" alt="perk" src="/img/events.png"/>
        </figure>
        <h4 className="perk-name casai-perk-name">
          Casai special events
        </h4>
        <p className="perk-description">
          Enjoy one of our private rooftop events or sample some wine with
          like-minded travelers. Simply download our app and we’ll send
          you the invitation.
        </p>
      </li>
    </ul>
  </StyledPerks>
)


export default Perks