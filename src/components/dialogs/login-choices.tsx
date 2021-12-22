import styled from "styled-components"
import React, { FC, ReactElement  } from "react"


const StyledLoginChoices = styled.nav`
  display: flex;
  flex-direction: column;

  .login-choices__heading {
    text-align: center;
    color: var(--white);
    font-weight: normal;
  }

  .crowd-img__container {
    margin: 0;
  }

  .crowd-img {
    width: 100%;
    height: 100%;
  }

  .login-options__list {
    margin: 0;
    padding: 0;
    display: grid;
    list-style-type: none;
    grid-template-rows: repeat(4, auto);
  }

  .login-options__list-item {
    display: flex;
    background-color: var(--darkgray);
  }

  .login-option {
    height: 100%;
    color: var(--white);
    text-align: center;
    text-decoration: none;
  }

  .login-option__icon {
    color: var(--white);
  }

  .sign-up__link-container {
    color: var(--white);
    letter-spacing: -0.25px;
  }

  .sign-up__link {
    color: var(--white);
  }

  @media screen and (min-width: 1440px) {
    margin: 80px 112px;
    align-items: center;
    .login-choices__heading {
      width: 200px;
      font-size: 1.5rem;
      line-height: 28px;
    }

    .login-options__list {
      width: 100%;
      grid-row-gap: 12px;
    }

    .login-options__list-item {
      padding: 10px 0;
      align-items: center;
      justify-content: center;
    }

    .login-option {
      margin: 20px 0;
      font-size: 0.8rem;
      letter-spacing: -0.25px;
    }

    .crowd-img__container {
      width: 180px;
      height: 144px;
    }

    .sign-up__link-container {
      margin: 45px 0 24px 0;
    }

    .login-option__icon {
      margin-right: 28px;
    }

    .icon-email-transparent {
      margin-right: 18px;
    }
  }

  @media screen and (min-width: 1920px) {

    .login-choices__heading {
      width: 346px;
      font-size: 2.5rem;
      line-height: 44px;
    }

    .login-option {
      margin: 20px 0;
      font-size: 1.125rem;
      letter-spacing: -0.25px;
    }

    .login-options__list {
      grid-row-gap: 18px;
    }

    .login-options__list-item {
      padding: 18px 0;
    }

    .crowd-img__container {
      width: 222px;
      height: 198px;
    }

    .login-option__container {
      width: 220px;
    }

    .sign-up__link-container {
      margin: 65px 0 44px 0;
    }

    .login-option__icon {
      margin-right: 40px;
    }

    .icon-email-transparent {
      margin-right: 34px;
    }
  }
`
const LoginChoices: FC = (): ReactElement => (
  <StyledLoginChoices>
    <h1 className="login-choices__heading">
      Welcome, choose how to Log in
    </h1>
    <figure className="crowd-img__container">
      <img className="crowd-img" src="/img/crowd.png" alt="crowd"/>
    </figure>
    <ul className="login-options__list">
      <li className="login-options__list-item">
        <label className="login-option__container">
          <i className="login-option__icon icon-google-fill"></i>
          <a href="#" className="login-option">Log in with Google</a>
        </label>
      </li>
      <li className="login-options__list-item">
        <label className="login-option__container">
          <i className="login-option__icon icon-linkedin"></i>
          <a href="#" className="login-option">Log in with LinkedIn</a>
        </label>
      </li>
      <li className="login-options__list-item">
        <label className="login-option__container">
          <i className="login-option__icon icon-facebook"></i>
          <a href="#" className="login-option">Log in with Facebook</a>
        </label>
      </li>
      <li className="login-options__list-item">
        <label className="login-option__container">
          <i className="login-option__icon icon-email-transparent"></i>
          <a href="#" className="login-option">Log in with Email</a>
        </label>
      </li>
    </ul>
    <label className="sign-up__link-container">
      <span>If you don't have an account </span>
      <a href="#" className="sign-up__link">Sign up</a>
    </label>
  </StyledLoginChoices>
)


export default LoginChoices