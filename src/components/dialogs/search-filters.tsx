import styled from "styled-components"
import React, { FC, ReactElement, useState } from "react"
import RadioButton from "components/form-controls/radio-button"

const StyledSearchFilters = styled.nav`
  .filters__heading {
    margin:0;
    text-align: center;
    font-weight: normal;
    text-transform: capitalize;
    color: var(--antiflashwhite);
  }

  .search__container {
    display: flex;
    position: relative;
    align-items: center;
    background-color: var(--darkgray);
  }

  .separator {
    margin: 0;
    position: absolute;
  }

  .separator,
  .spaces__separator,
  .equipment__separator {
    padding: 0;
    height: 1px;
    border: none;
    
    background-color: var(--dimgray);
  }

  .search {
    height:100%;
    width: 100%;
    flex-grow: 1;
    border: none;
    outline: none;
    color: var(--white);
    background-color: var(--transparent);
  }

  .spaces-filters__list {
    display: grid;
  }

  .spaces-filters__list,
  .equipment-filters__list,
  .spaces-filters__heading,
  .equipment-filters__heading,
  .amenities__heading {
    color: var(--antiflashwhite);
  }

  .spaces-filters__list,
  .equipment-filters__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .spaces-filters__list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon-search {
    right: 18px;
    cursor: pointer;
    position: absolute;
    pointer-events: none;
    color: var(--antiflashwhite);
  }

  .bottom-border {
    left: 0;
    bottom: 0;
    width: 100%;
    position: absolute;
    background-color: var(--primary);
  }

  .bottom-border.open {
    height: 1px;
    animation-duration: 0.1s;
    animation-name: borderFocus;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
  }

  .bottom-border.closed {
    height: 1px;
    animation-duration: 0.1s;
    animation-name: borderBlur;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
  }

  @keyframes borderFocus {
    from {
      transform: scaleX(0);
    }

    to {
      transform: scaleX(1);
    }
  }

  @keyframes borderBlur {
    from {
      transform: scaleX(1);
    }

    to {
      transform: scaleX(0);
    }
  }

  @media screen and (min-width: 1440px) {
    margin: 46px 78px 92px 66px;

    .filters__heading {
      font-size: 1.8rem;
    }

    .separator {
      top: 100px;
    }

    .search {
      padding: 12px;
      font-size: 1rem;
      letter-spacing: 0.14px;
    }

    .spaces-filters__list {
      grid-column-gap: 42px;
      grid-template-columns: repeat(2, auto);
    }

    .search {
      padding: 14px;
      font-size: 1rem;
    }

    .search__container {
      margin: 40px 0;
    }

    .separator {
      left: 18px;
      right: 18px;
    }

    .amenities__heading,
    .spaces-filters__heading,
    .equipment-filters__heading {
      font-size: 1rem;
    }

    .equipment-filters__list,
    .spaces-filters__heading {
      margin: 18px 0;
    }

    .equipment-filters__list {
      display: grid;
      grid-row-gap: 18px;
      grid-template-rows: repeat(3, auto);
    }

    .equipment-name {
      font-size:0.8rem;
    }
    
    .amenities__heading {
      margin: 18px 0 0 0;
    }
  }
  
  @media screen and (min-width: 1920px) {
    .filters__heading {
      font-size: 2.5rem;
    }

    .search__container {
      margin: 64px 0 56px 0;
    }

    .search {
      padding: 16px;
      font-size: 1.125rem;
    }

    .separator {
      top: 124px;
    }

    .spaces__separator,
    .equipment__separator {
      left: 70px;
      right: 80px;
    }

    .equipment__separator {
      margin: 42px 0 52px 0;
    }

    .equipment-name {
      font-size: 1.125rem;
    }

    .spaces__separator {
      margin: 52px 0 34px 0;
    }

    .spaces-filters__heading {
      margin: 26px 0;
    }

    .equipment-filters__heading {
      margin: 30px 0;
    }

    .amenities__heading,
    .spaces-filters__heading,
    .equipment-filters__heading {
      font-size: 1.25rem;
    }

    .equipment-filters__list {
      grid-row-gap: 36px;
    }
  }
`

const SearchFilters: FC = (): ReactElement => {
  const [ borderClassName, setBorderClassName ] = useState('')
  const handleSearchFocus = () => setBorderClassName("open")
  const handleSearchBlur = () => setBorderClassName("closed")

  return (
    <StyledSearchFilters>
      <h1 className="filters__heading">more filters</h1>
      <hr className="separator" />
      <label className="search__container" htmlFor="search">
        <input
          id="search"
          autoComplete="off"
          className="search"
          placeholder="Search for a filter"
          onBlur={handleSearchBlur}
          onFocus={handleSearchFocus}
        />
        <div
          className={`bottom-border ${borderClassName}`}
        ></div>
        <i className="icon-search"></i>
      </label>
      <h4 className="equipment-filters__heading">Rooms, beds and baths</h4>
      <ul className="equipment-filters__list">
        <li className="equipment-filters__list-item">
          <span className="equipment-name">Rooms</span>
        </li>
        <li className="equipment-filters__list-item">
          <span className="equipment-name">Beds</span>
        </li>
        <li className="equipment-filters__list-item">
          <span className="equipment-name">Bathrooms</span>
        </li>
      </ul>
      <hr className="equipment__separator"/>
      <h4 className="spaces-filters__heading">Spaces</h4>
      <ul className="spaces-filters__list">
        <li className="spaces-filters__list-item">
          <RadioButton id={1} name="space" text="Subtitle 1" expand/>
        </li>
        <li className="spaces-filters__list-item">
          <RadioButton id={2} name="space" text="Subtitle 1" expand/>
        </li>
        <li className="spaces-filters__list-item">
          <RadioButton id={3} name="space" text="Subtitle 1" expand/>
        </li>
        <li className="spaces-filters__list-item">
          <RadioButton id={4} name="space" text="Subtitle 1" expand/>
        </li>
      </ul>
      <hr className="spaces__separator"/>
      <h4 className="amenities__heading">Amenities</h4>
    </StyledSearchFilters>
  )
}

export default SearchFilters