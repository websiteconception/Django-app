import styled from "styled-components"
import React, { FC, ReactElement, ReactNode } from "react"


interface IProps {
  cityName: string,
  cityImgUrl: string,
  children? : ReactNode
}

interface IStyledProps {
  imgUrl?: string,
}

const StyledCityCard = styled.div`
  width: 350px;
  height: 446px;
  display: flex;
  position: relative;
  color: var(--white);
  justify-content: center;
  background-image: url("${({ imgUrl }:IStyledProps):string => imgUrl }");

  .city__name {
    margin: 0;
    display: flex;
    font-size: 1.875rem;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-family: ModeratRegular;
  }

  .city-card__explore-link {
    bottom: 70px;
    padding: 18px 40px;
    position: absolute;
    color: var(--white);
    border-radius: 40px;
    text-decoration: none;
    text-transform: capitalize;
    border: 1px solid whitesmoke;
  }
`

const CityCard: FC<IProps> = ({
  cityName,
  cityImgUrl,
}) : ReactElement => (
  <StyledCityCard imgUrl={cityImgUrl}>
    <h2 className="city__name">{cityName}</h2>
    <a href="#" className="city-card__explore-link">explore</a>
  </StyledCityCard>
)

export default CityCard