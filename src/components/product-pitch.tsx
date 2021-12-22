import styled from "styled-components"
import React, { FC, ReactElement, ReactNode } from "react"


interface IProps {
  expanded?: boolean,
  children? : ReactNode,
}

const StyledProductPitch = styled.section`
  width: 100%;
  display: flex;
  grid-column: 1/-1;
  color: var(--black);
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;

  .product-pitch-heading,
  .product-pitch-description {
    box-sizing: border-box;
  }

  .product-pitch-heading {
    text-align: center;
    font-weight: normal;
    color: var(--black);
    font-family: Moderat;
  }

  .product-pitch-description {
    margin: 12px 0;
    font-weight: 300;
    line-height: 1.5;
    text-align: center;
  }


  @media screen and (min-width: 1440px) {
    padding: 170px 0;

    .product-pitch-heading,
    .product-pitch-description {
      margin: 16px 0;
    }


    .product-pitch-heading {
      width: 778px;
      margin: 12px 0;
      font-size: 5rem;
    }


    .product-pitch-description {
      width: 1038px;
      font-size: 2.25rem;
    }
  }
`

const ProductPitch: FC<IProps> = ({ expanded }): ReactElement => (
  <StyledProductPitch
    className={ expanded ? "expanded-landing__section" : "landing__section"}
  >
    <h1 className="product-pitch-heading">
      Sophisticated spaces for curious souls
    </h1>
    <p className="product-pitch-description">
      We’ve curated the best apartments in Mexico City so you don’t
      have to. All of our spaces are custom designed for optimal work
      and play to suit the needs of the modern-day traveler.
    </p>
  </StyledProductPitch>
)

export default ProductPitch

