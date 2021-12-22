import styled from "styled-components"
import { IUnit } from "types/generics"
import React, { FC, ReactElement, ReactNode } from "react"

interface IProps {
  Component: FC<any>,
  list: Array<IUnit>,
  children? : ReactNode,
}

const StyledFeaturedUnits = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-column-gap: 42px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
`

const FeaturedUnits: FC<IProps> = ({
  list,
  Component,
}) : ReactElement => (
  <StyledFeaturedUnits>
    {
      list.map((unit: IUnit) => <Component unit={unit} />)
    }
  </StyledFeaturedUnits>
)

export default FeaturedUnits