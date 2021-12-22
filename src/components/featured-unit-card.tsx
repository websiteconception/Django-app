import styled from "styled-components"
import { IUnit } from "types/generics"
import React, { FC, ReactElement, ReactNode } from "react"

interface IProps {
  children?: ReactNode,
  unit?: IUnit,
}

const StyledFeaturedUnitCard = styled.div`
  display: grid;
  grid-template-rows: 1fr repeat(2, auto);

  .unit-img__container {
    margin: 0;
    padding: 0;
    overflow: hidden;
    max-height: 750px;
  }

  .unit-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .unit-details {
    display: flex;
    justify-content: space-between;
  }

  .unit-equipment {
    grid-area: equipment;
    color: var(--violet);
  }

  .unit-price {
    margin: 0;
    text-align: end;
    grid-area: price;
    font-weight: bold;
    font-family: Moderat;
    display: inline-block;
    text-transform: capitalize;
  }

  .unit-price::before {
    content: "$";
  }

  .unit-price::after {
    content: "/Night";
  }

  .unit-name {
    margin: 0;
    grid-area: name;
    text-align: left;
    font-weight: normal;
  }

  .unit-info {
    display: grid;
    grid-template-areas:
      "equipment starting-at"
      "name price"
      "name link-to-unit";
    padding: 24px 12px;
  }

  .link-to-unit {
    display: flex;
    font-size: 0.8rem;
    color: var(--black);
    align-items: center;
    text-decoration: none;
    grid-area: link-to-unit;
    justify-content: flex-end;
  }

  .starting-at {
    margin: 0;
    font-size: 1rem;
    text-align: end;
    font-family: Moderat;
    color: var(--dimgray);
    grid-area: starting-at;
    text-transform: uppercase;
  }

  .people,
  .bedrooms,
  .bathrooms {
    text-transform: capitalize;
  }

  .people::after {
    content: " people";
  }

  .bedrooms::after {
    content: " bedroom";
  }

  .bathrooms::after {
    content: " bath";
  }

  @media screen and (min-width: 1440px) and (max-width: 1919px) {
    .unit-img__container {
      width: 358px;
    }
  }

  @media screen and (min-width: 1440px) {
    .unit-img__container {
     
      height: 750px;
    }

    .unit-name {
      width: 188px;
      font-size: 1.875rem;
    }

    .unit-equipment {
      font-size: 1.125rem;
    }
    
    .unit-price {
      font-size: 1.75rem;
    }
  }

  @media screen and (min-width: 1920px) {
    .unit-img__container {
      width: 518px;
      height: 750px;
    }
  }
`


const FeaturedUnitCard: FC<IProps> = ({
  unit: {
    price,
    unitName,
    unitImgUrl,
    equipment: { people, bedrooms, bathrooms },
  },
}): ReactElement => (
  <StyledFeaturedUnitCard>
    <figure className="unit-img__container">
      <img
        alt="unit"
        src={unitImgUrl}
        className="unit-img"
      />
    </figure>
    <div className="unit-info">
      <div className="unit-details">
        <div className="unit-equipment">
          <span className="people">{people}</span>
          <span className="separator"> | </span>
          <span className="bedrooms">{bedrooms}</span>
          <span className="separator"> | </span>
          <span className="bathrooms">{bathrooms}</span>
        </div>
      </div>
      <h4 className="starting-at">starting at</h4>
      <h3 className="unit-name">
        { unitName }
      </h3>
      <h3 className="unit-price">
        { price }
      </h3>
      <a href="#" className="link-to-unit">
        <i className="icon-right-arrow"></i>
      </a>
    </div>
  </StyledFeaturedUnitCard>
)

export default FeaturedUnitCard