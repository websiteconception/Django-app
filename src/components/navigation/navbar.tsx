import Brand from "components/brand"
import { connect } from "react-redux"
import styled from "styled-components"
import { ModalAction } from "types/actions"
import Search from "components/forms/search"
import { openModal } from "action-creators/modal"
import { CleanEffectFunction } from "types/generics"
import SearchFilters from "components/forms/search-filters"
import I18NExperienceMenu from "components/navigation/i18n-experience-menu"
import React, {
  FC,
  useState,
  useEffect,
  ReactNode,
  ReactElement,
} from "react"


interface IProps {
  children? :ReactNode,
  landing?: boolean,
  openModal: (modal: string) => ModalAction
}

const StyledNavbar = styled.nav`
  top: 0;
  z-index: 3;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  align-items: center;
  box-sizing: border-box;
  background-color: var(--transparent);
  transition: background-color 0.5s, top 0.5s;

  &.non-top {
    position: fixed;
  }

  &.navbar,
  &.non-top {
    background-color: var(--licorice);
  }

  &.navbar {
    height: 185px;
    position: sticky;
    border-bottom: 1px solid var(--blackolive);
  }

  .pins-button__container {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: flex-end;
  }

  .my-pins__button {
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.125rem;
    letter-spacing: 0.14px;
    text-decoration: underline;
    text-transform: capitalize;
    color: var(--antiflashwhite);
    background-color: var(--transparent);
  }

  .icon-pin {
    margin: 0 18px;
    color: var(--antiflashwhite);
  }

  .login__button {
    outline: none;
    cursor: pointer;
    text-align: center;
    color: var(--white);
    border-radius: 40px;
    box-sizing: border-box;
    letter-spacing: -0.28px;
    border: 1px solid var(--white);
    background-color: var(--transparent);
  }

  .login__button:hover {
    content: "Welcome!";
  }

  @media screen and (min-width: 1440px) {
    padding: 16px 44px;

    .login__button {
      height: 50px;
      width: 200px;
      font-size: 1.25rem;
      padding: 12px 18px;
    }
  }

  @media screen and (min-width: 1920px) {
    font-size: 1.125rem;
  }

`

const Navbar:FC<IProps> = ({ landing, openModal }): ReactElement => {
  const [ topNavbarClassName, setTopNavbarClassName ] = useState("landing")
  const [ loginButtonText, setLoginButtonText ] = useState('Login/Sign Up')

  const handleScroll = (): void => {
      setTopNavbarClassName(
        scrollY >= innerHeight ? "landing non-top" : "landing"
      )
  }

  const handleMouseEnter = () => setLoginButtonText('Welcome!')
  const handleMouseLeave = () => setLoginButtonText('Login/Sign Up')

  const handleLoginSignUpClick = () => openModal('LOGIN_CHOICES')

  const scrollEffect = (): CleanEffectFunction => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  }

  useEffect(scrollEffect,[])

  return (
    <StyledNavbar
      className={(landing && topNavbarClassName) || !landing && "navbar"}
    >
      <Brand landing={landing} />
      { !landing && <Search /> }
      {
        !landing &&
        <label className="pins-button__container" htmlFor="my-pins">
          <input
            id="my-pins"
            name="my-pins"
            type="button"
            value="my pins"
            className="my-pins__button"
          />
          <i className="icon-pin"></i>
        </label>
      }
      <input
        type="button"
        value={loginButtonText}
        className="login__button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleLoginSignUpClick}
      />
      <I18NExperienceMenu />
      { !landing && <SearchFilters /> }
    </StyledNavbar>
  )
}

const mapDispatchToProps = {
  openModal,
}

export default connect(null, mapDispatchToProps)(Navbar)
