import styled from "styled-components"
import React, { FC, ReactElement, ReactNode } from "react"

interface IProps {
  nonTop?: boolean,
  landing?: boolean,
  children?: ReactNode,
}

const StyledBrand = styled.i`
  color: white;


  &.landing {
    flex-grow: 1;
  }

  @media screen and (min-width: 144px) and (max-width: 719px) {
    margin : 0 10px;
  }

  @media screen and (min-width: 144px) and (max-width: 1023px) {
    height: unset;
  }

  @media screen and (min-width: 144px) and (max-width: 319px) {
    font-size: 0.875rem;
  }

  @media screen and (min-width: 320px) and (max-width: 719px) {
    font-size: 1.375rem;
  }

  @media screen and (min-width: 1440px) {
    width: 148px;
    font-size: 3.125rem;

     &.non-top {
      font-size: 2.125rem;
    }
  }
`

const Brand: FC<IProps> = ({ nonTop, landing }) : ReactElement => {
  return (
    <StyledBrand
      className={
        `icon-casai-logo-white ${
          landing ? "landing" : ""
        } ${ landing && nonTop ? "non-top":"" }`
      }>
    </StyledBrand>
  )
}

export default Brand