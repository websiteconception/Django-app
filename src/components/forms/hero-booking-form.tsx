import styled from "styled-components"
import DatePicker from "react-datepicker"
import React, { useState, FC, ReactElement } from "react"


const StyledHeroBookingForm = styled.form`
  display: flex;
  margin: 90px 0;
  align-items: center;
  justify-content: space-between;

  .places__search-container,
  .people-counter-container,
  .datepicker-input-container {
    margin: 0 30px;
    border-bottom:1px solid var(--white);
  }

  .places__search-container,
  .datepicker-input-container {
    flex-grow: 1;
  }

  .people-counter {
    width: 48px;
    text-align: center;
  }

  .book-now-button {
    width: 160px;
  }

  .places__search,
  .people-counter ,
  .datepicker-input {
    border: none;
    outline: none;
    padding: 16px;
    font-size: 1rem;
    color: var(--white);
    text-transform: capitalize;
    background-color: var(--transparent);
  }

  .datepicker-input {
    z-index: 2;
  }

  .places__search::placeholder, .datepicker-input::placeholder {
    font-size: 1rem;
    color: var(--white);
  }

  .book-now-button {
    border: none;
    outline: none;
    font-size: 1.125rem;
    cursor: pointer;
    color: var(--white);
    padding: 14px 20px;
    border-radius: 40px;
    text-transform: capitalize;
    background-color: var(--primary);
  }

  .icon {
    font-size: 1.125rem;
  }

  .counter-button {
    width: 48px;
    height: 48px;
    border: none;
    outline: none;
    font-size: 1.125rem;
    cursor: pointer;
    color: var(--white);
    justify-self: flex-end;
    background-color: var(--transparent);
  }
`

const HeroBookingForm: FC = (): ReactElement => {
  const [ currentDate, setCurrentDate ] = useState(null)
  const [ people, setPeople ] = useState(1)

  const handleChange = (date: Date) => setCurrentDate(date)

  const handlePeopleInputChange = e => {
    if(!(Number(e.target.value) < 1)) {
      setPeople(e.target.value)
    }
  }

  const handleAddCounter = e => setPeople(people +1)

  const handleSubtractCounter = e => setPeople(people - 1 || people)

  const fromToday = (date: Date) => date >= new Date()

  return (
    <StyledHeroBookingForm>
      <label className="places__search-container">
        <i className="icon icon-location"></i>
        <input className="places__search" placeholder="where are you going?"/>
      </label>
      <label className="datepicker-input-container">
        <i className="icon icon-datepicker"></i>
        <DatePicker
          monthsShown={2}
          selected={currentDate}
          filterDate={fromToday}
          onChange={handleChange}
          showPopperArrow={false}
          className="datepicker-input"
          placeholderText="check in - check out"
        />
      </label>
      <label className="people-counter-container" htmlFor="counter">
        <i className="icon icon-user"></i>
        <input
          value="+"
          type="button"
          className="counter-button"
          onClick={handleAddCounter}
        />
        <input
          id="counter"
          type="number"
          value={people}
          className="people-counter"
          onChange={handlePeopleInputChange}
        />
        <input
          value="-"
          type="button"
          className="counter-button"
          onClick={handleSubtractCounter}
        />
      </label>
      <input type="button" className="book-now-button" value="book now"/>
    </StyledHeroBookingForm>
  )
}


export default HeroBookingForm