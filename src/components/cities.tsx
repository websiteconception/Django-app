import styled from "styled-components"
import React, { FC, ReactElement, ReactNode } from "react"
import { ICity } from "types/generics"

interface IProps {
  Component: FC<any>,
  list: Array<ICity>,
  children?: ReactNode,
}


const StyledCities = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  .city-card {
    color: var(--black);
  }
`


const Cities: FC<IProps> = ({
  list,
  Component,
 }) : ReactElement => (
  <StyledCities>
    {
      list.map((city: ICity) => <Component {...city}/>)
    }
  </StyledCities>
)


export default Cities