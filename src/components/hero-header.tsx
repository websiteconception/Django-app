import styled from "styled-components"
import { Link } from "react-router-dom"
import React, { FC, ReactElement } from "react"
import { useTranslation } from "react-i18next"


const StyledHeroHeader = styled.header`
  height: 100vh;
  display: flex;
  grid-column: 1/-1;
  color: var(--white);
  align-items: center;
  box-sizing: border-box;
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: brightness(0.01%);
  background-image: url("/img/casai-unit.png");

  .hero-heading {
    margin: 0;
    letter-spacing: 0;
    font-weight: bold;
    text-align: center;
    color: var(--antiflashwhite);
  }

  .hero-subheading {
    text-align: center;
    font-weight: normal;
    letter-spacing: 0.2px;
    color: var(--antiflashwhite);
  }

  .all-units__link {
    text-align: center;
    color: var(--white);
    border-radius: 40px;
    text-decoration: none;
    box-sizing: border-box;
    background-color: var(--primary);
  }


  @media screen and (min-width: 1440px) {
    .hero-heading {
      width: 980px;
      font-size: 6.25rem;
    }

    .hero-subheading {
      width: 740px;
      font-size: 2.5rem;
      line-height: 55px;
      margin: 46px 0 52px 0;
    }

    .all-units__link {
      width: 245px;
      padding: 15px 40px;
      font-size: 1.875rem;
    }
  }
`

const HeroHeader: FC = (): ReactElement => {
  const { t } = useTranslation()
  return (
    <StyledHeroHeader>
        <h1 className="hero-heading">
          { t("hero-heading") }
        </h1>
        <h2 className="hero-subheading">
          Hand-picked apartments in the coolest neighborhoods in Mexico City
        </h2>
        <Link to="/units" className="all-units__link">See all units</Link>
    </StyledHeroHeader>
  )
}


export default HeroHeader