import styled from "styled-components"
import Select from "components/select"
import { IOption } from "types/generics"
import React, { FC, ReactElement } from "react"

const StyledCurrencyForm = styled.form`
  width: 100%;
`

const currencies: Array<IOption> = [
  {
    text: "USD",
    value: "usd",
  },
  {
    text: "MXN",
    value: "mxn",
  },
]

const CurrencyForm: FC = (): ReactElement => (
  <StyledCurrencyForm>
    <Select list={currencies} name="currency"/>
  </StyledCurrencyForm>
)

export default CurrencyForm