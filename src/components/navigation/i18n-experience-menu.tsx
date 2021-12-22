import styled from "styled-components"
import React, { FC, ReactElement, useState } from "react"
import LanguageForm from "components/forms/language-form"
import CurrencyForm from "components/forms/currency-form"

const StyledI18NExperienceMenu = styled.menu`
  padding: 0;
  right: 58px;
  width: 48px;
  height: 48px;
  color: white;
  display: flex;
  align-items: center;
  font-size: 1.625rem;
  justify-content: center;

  .tooltip-pointer {
    top: -8px;
    right: 10px;
    width: 15px;
    height: 15px;
    position: absolute;
    transform: rotate(45deg);
    background-color: var(--darkgray);
  }

  .toggle-menu__button {
    padding: 0;
    width: 48px;
    height: 48px;
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    background-color: var(--transparent);
  }

  .icon-i18n-globe {
    width: 48px;
    height: 48px;
    display: flex;
    cursor: pointer;
    font-size: 1.75rem;
    border-radius: 50%;
    align-items: center;
    pointer-events: none;
    box-sizing: border-box;
    justify-content: center;
    backdrop-filter: opacity(35%);
    transition: background-color 0.2s;
    background-color: var(--transparent);
  }

  .toggle-menu__button.open + .icon-i18n-globe {
    background-color: rgba(245,245,245, .35);
  }

  .toggle-menu__button:hover + .icon-i18n-globe {
    background-color: rgba(245,245,245, .35);
  }

  .icon-i18n-globe:hover {
    background-color: rgba(245,245,245, .35);
  }

  .i18n-experience__list {
    top: 52px;
    right: 54px;
    z-index: 4;
    width: 280px;
    padding: 14px;
    display: none;
    margin: 24px 0;
    position: absolute;
    border-radius: 4px;
    grid-row-gap: 24px;
    list-style-type: none;
    box-sizing: border-box;
    background-color: var(--darkgray);
    grid-template-rows: repeat(2,auto);
    box-shadow: 4px 4px 14px 1px var(--darkgray);
  }

  .list-select {
    display: none;
  }

  .i18n-experience__list-item {
    z-index: 1;
    width: 100%;

    min-height: 58px;
    position: relative;
  }

  &.open .i18n-experience__list {
    display: grid;
  }

  @media screen and (min-width: 320px) and (max-width: 720px) {
    margin: 5px 5px;
  }

  @media screen and (min-width: 720px) {
    margin: 0 10px 0 36px;
  }
`

const I18NExperienceMenu: FC = () : ReactElement => {
  const [ open, setOpen ] = useState(false)
  const handleOpenClick = () => setOpen(!open)
  
  return (
      <StyledI18NExperienceMenu
        className={open && "open"}
      >
        <input
          type="button"
          onClick={handleOpenClick}
          className={`toggle-menu__button ${open && "open"}`}
        />
        <i className="icon-i18n-globe"></i>
        <ul className="i18n-experience__list">
          <li className="i18n-experience__list-item language-dropdown">
            <LanguageForm />
          </li>
          <li className="i18n-experience__list-item currency-dropdown">
            <CurrencyForm />
          </li>
        </ul>
      </StyledI18NExperienceMenu>
  )
}


export default I18NExperienceMenu