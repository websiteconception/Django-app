import styled from "styled-components"
import { IUnit } from "types/generics"
import FeaturedUnits from "components/featured-units"
import FeaturedUnit from "components/featured-unit-card"
import React, { FC, useState, ReactElement, ReactNode } from "react"

interface IProps {
  children?: ReactNode,
  expanded?: boolean,
}


const StyledFeatured = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  .featured-units__heading {
    margin: 0;
    text-align: center;
    font-weight: normal;
    font-family: Moderat;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 140px;
    .featured-units__heading {
      width: 462px;
      padding: 100px 0;
      font-size: 1.8rem;
    }
  }

  @media screen and (min-width: 1920px) {
    .featured-units__heading {
      font-size: 2.5rem;
    }
  }

`

const Featured: FC<IProps> =  ({ expanded }): ReactElement => {
  const [ units ] = useState<Array<IUnit>>([
    {
      id: 1,
      price: 120,
      address: '',
      unitName: "Frida Kahlo Rooftop Suite",
      cityName: "Mexico City",
      neighborhood: "Condesa",
      unitImgUrl: "/img/condesa-unit.png",
      equipment: {
        people: 4,
        bedrooms: 2,
        bathrooms: 2,
      },
    },
    {
      id: 2,
      price: 120,
      address: '',
      unitName: "Frida Kahlo Rooftop Suite",
      cityName: "Mexico City",
      neighborhood: "Polanco",
      unitImgUrl: "/img/polanco-unit.png",
      equipment: {
        people: 4,
        bedrooms: 2,
        bathrooms: 2,
      },
    },
    {
      id: 3,
      price: 120,
      address: '',
      unitName: "Frida Kahlo Rooftop Suite",
      cityName: "Mexico City",
      neighborhood: "Roma Norte",
      unitImgUrl: "/img/roma-norte-unit.png",
      equipment: {
        people: 4,
        bedrooms: 2,
        bathrooms: 2,
      },
    },
  ])

  return (
    <StyledFeatured
      className={ expanded ? "expanded-landing__section" : "landing__section"}
    >
      <h2 className="featured-units__heading">Our featured apartments</h2>
      <FeaturedUnits list={units} Component={FeaturedUnit} />
    </StyledFeatured>
  )
}


export default Featured

