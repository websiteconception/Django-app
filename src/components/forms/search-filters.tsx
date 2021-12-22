import styled from "styled-components"
import Select from "components/select"
import { IOption } from "types/generics"
import Datepicker from "react-datepicker"
import Counter from "components/form-controls/counter"
import React, { useState, FC, ReactElement, useRef, FormEvent, useEffect } from "react"

const StyledSearchFilters = styled.form`
  display: grid;
  flex-basis: 100%;
  margin-top: 24px;
  color: whitesmoke;
  grid-column-gap: 22px;
  grid-template-columns: repeat(2, 1fr) auto 1fr auto;

  .reservation__datepicker-wrapper, .reservation__datepicker-wrapper div {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .reservation__datepicker {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: var(--transparent);
  }

  .datepicker {
    margin-top: 0;
  }

  .locations__container{
    position: relative;
  }

  .locations__select {
    width: 100%;
    box-sizing: border-box;
  }

  .datepicker__container {
    display: flex;
    align-items: center;
    background-color: var(--jet);
  }

  .icon-dropdown-arrow {
    margin-right: 15px;
    font-size: 0.3125rem;
  }


  .more-filters__button {
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.125rem;
    text-decoration: underline;
    text-transform: capitalize;
    color: var(--antiflashwhite);
    background-color: var(--transparent);
  }


  .more-filters-button-container {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    height: 56px;
  }
`

const locations: Array<IOption> = [
  {
    text: "Mexico City, Mexico",
    value: "mx",
  },
  {
    text: "All Neighborhoods",
    value: "neighborhoods",
  },
  {
    text: "Condesa",
    value: "neighborhood-condesa",
  },
  {
    text: "Polanco",
    value: "neighborhood-polanco",
  },
  {
    text: "Cuauhtemoc",
    value: "neighborhood-cuauhtemoc",
  },
  {
    text: "Juarez",
    value: "neighborhood-juarez",
  },
]


const SearchFilters: FC = (): ReactElement => {
  const [ form, setForm ] = useState(null)
  const fromToday = date => date >= new Date()
  const formRef = useRef<HTMLFormElement>(null)


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
  }

  useEffect(() => {
    if(formRef && formRef.current) {
      setForm(formRef.current)
    }
  }, [ formRef ])

  return (
    <StyledSearchFilters ref={formRef} onSubmit={handleSubmit}>
      <div className="locations__container">
        <Select
          name="cities"
          icon="location"
          list={locations}
          className="locations__select"
          form={form}
        />
      </div>
      <label className="datepicker__container" htmlFor="reservation-datepicker">
        <span className="date-range">
  
        </span>
        <Datepicker
          monthsShown={2}
          filterDate={fromToday}
          showPopperArrow={false}
          shouldCloseOnSelect={false}
          id="reservation-datepicker"
          popperClassName="datepicker"
          className="reservation__datepicker"
          onChange={() => console.log("change")}
          wrapperClassName="reservation__datepicker-wrapper"
        />
        <i className="icon-dropdown-arrow"></i>
      </label>
      <Counter name="people-counter" icon="pax"/>
      <label className="more-filters-button-container">
        <input
          type="button"
          value="more filters"
          className="more-filters__button"
        />
      </label>
    </StyledSearchFilters>
  )
}



export default SearchFilters