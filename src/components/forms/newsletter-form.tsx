import React, { FC, ReactElement } from "react"
import styled from "styled-components"

const StyledNewsletterForm = styled.form`
  display: flex;
  color: var(--white);
  flex-direction: column;
  align-items: flex-start;

  .signup__heading {
    margin: 0;
    text-align: left;
    font-weight: normal;
    color: var(--white);
  }

  .newsletter-form__controls-container {
    display: flex;
    position: relative;
    align-items: center;
    background-color: var(--darkgray);
    border-bottom: 1px solid var(--primary);
  }

  .email-input {
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 0 22px;
    color: var(--white);
    background-color: var(--transparent);
  }

  .email-input::placeholder {
    color: var(--darkslategray);
  }

  .submit-button {
    right: 0;
    width: 48px;
    height: 48px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    position: absolute;
    color: var(--white);
    background-color: var(--transparent);
  }


  .terms-and-privacy__info {
    flex-grow: 1;
    display: grid;
    text-align: left;
    grid-column-gap: 30px;
    align-items: flex-end;
    grid-template-columns: repeat(2, auto);
  }

  .privacy-policy__link,
  .terms-and-conditions__link {
    color: var(--gray);
    text-decoration: none;
  }

  @media screen and (min-width: 1440px) {
    grid-row: 2;
    grid-column: 3;

    .signup__heading {
      font-size: 1rem;
      max-width: 250px;
      margin-bottom: 28px;
    }

    .newsletter-form__controls-container {
      height: 48px;
      width: 295px;
    }

    .icon-circle-right-arrow {
      margin-right: 16px;
    }

    .privacy-policy__link,
    .terms-and-conditions__link {
      font-size: 1rem;
    }

    .email-input {
      font-size: 1rem;
    }
  }


  @media screen and (min-width: 1920px) {
    .signup__heading {
      max-width: 342px;
      font-size: 1.375rem;
    }

    .privacy-policy__link,
    .terms-and-conditions__link {
      font-size: 1.375rem;
    }

    .newsletter-form__controls-container {
      width: 396px;
    }
    
    .newsletter-form__controls-container {
      height: 55px;
    }

    .email-input {
      font-size: 1.125rem;
    }
  }
`

const NewsletterForm : FC = (): ReactElement => (
  <StyledNewsletterForm>
    <h3 className="signup__heading">
      Subscribe to our blog to receive the latest news and updates
    </h3>
    <label className="newsletter-form__controls-container">
      <input className="email-input" placeholder="Email"/>
      <input
        type="button"
        className="submit-button"
      />
      <i className="icon-circle-right-arrow"></i>
    </label>
    <nav className="terms-and-privacy__info">
      <a href="#" className="terms-and-conditions__link">
        Terms & Conditions
      </a>
      <a href="#" className="privacy-policy__link">
        Privacy Policy
      </a>
    </nav>
  </StyledNewsletterForm>
)

export default NewsletterForm