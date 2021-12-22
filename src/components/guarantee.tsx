import styled from "styled-components"
import React, { FC, ReactNode ,ReactElement } from "react"


interface IProps {
  children?: ReactNode,
  expanded?: boolean,
}

const StyledGuarantee = styled.section`
  /* width: 100vw; */
  padding: 170px 0;
  color: var(--black);
  box-sizing: border-box;

  .guarantee__list-item {
    padding: 100px 0;
  }

  .guarantee__heading {
    font-weight: normal;
  }

  .guarantee__description {
    font-weight: 300;
  }
  
  .guarantee__heading,
  .guarantee__description {
    text-align: left;
  }

  .guarantee__list {
    margin: 0;
    padding: 0;
    display: grid;
    grid-auto-flow: row;
    list-style-type: none;
    grid-template-rows: repeat(3,1fr);
  }

  .guarantee__img-container {
    margin: 0;
  }

  .guarantee__img {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    .guarantee__list {
      grid-template-columns: repeat(2, 1fr);
    }

    .guarantee__list-item {
      padding-left: 140px;
    }

    .premium-spaces__heading {
      width: 264px;
    }

    .carefully-curated-recommendation__heading {
      width: 480px;
    }

    .innovative-technology__heading {
      width: 425px;
    }

    .guarantee__heading {
      font-size: 2.75rem;
    }

    .guarantee__pic {
      padding-left: 290px;
    }

    .guarantee__description {
      width: 435px;
      font-size: 1.8rem;
    }
  }

  @media screen and (min-width: 1920px) {
    .guarantee__list {
      grid-template-columns: auto 1fr;
    }

    .premium-spaces__heading {
      width: 364px;
    }

    .guarantee__heading {
      font-size: 3.75rem;
    }

    .guarantee__list-item {
      padding: 0 290px 0 140px;
    }

    .guarantee__description {
      width: 535px;
      font-size: 2.25rem;
    }
  }
`

const Guarantee: FC<IProps> = ({ expanded }): ReactElement => (
  <StyledGuarantee
    className={ expanded ? "expanded-landing__section" : "landing__section"}
  >
    <ul className="guarantee__list">
      <li className="guarantee__list-item">
        <h2 className="premium-spaces__heading guarantee__heading">
          Premium living spaces
        </h2>
        <p className="guarantee__description">
          Enjoy your fully-equipped apartment offering modern local art and
          design, private working spaces and spa-grade amenities.
        </p>
      </li>
      <li className="guarante__pic">
        <figure className="guarantee__img-container">
          <img
            className="guarantee__img"
            src="/img/premium-living-experiences.png"
            alt="guarantee img"/>
        </figure>
      </li>
      <li className="guarantee__list-item">
        <h2
          className="carefully-curated-recommendation__heading guarantee__heading"
        >
          Carefully curated recommendation
        </h2>
        <p className="guarantee__description">
          Don’t waste time sifting through travel blogs. We’re here to point
          you in the right direction so you don’t miss the best spots.
        </p>
      </li>
      <li className="guarante__pic">
        <figure className="guarantee__img-container">
          <img className="guarantee__img" src="/img/carefully-curated-recommendations.png" alt="guarantee img"/>
        </figure>
      </li>
      <li className="guarantee__list-item">
        <h2
          className="innovative-technology__heading guarantee__heading"
        >
          Innovative technology
        </h2>
        <p className="guarantee__description">
          Don’t waste time sifting through travel blogs. We’re here to point
          you in the right direction so you don’t miss the best spots.
        </p>
      </li>
      <li className="guarante__pic">
        <figure className="guarantee__img-container">
          <img className="guarantee__img" src="/img/innovative-technology.png" alt="guarantee img"/>
        </figure>
      </li>
    </ul>
  </StyledGuarantee>
)


export default Guarantee