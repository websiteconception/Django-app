import styled from "styled-components"
import React, { FC, ReactElement, ReactNode } from "react"

interface IProps {

}

const StyledSpecialRequests = styled.section`
  .special-requests-questions__list:before{
    content:"";
    display: block;
    position: relative;
    vertical-align: bottom;
    width: 100%;
    height: 1px;
    background-color: #707070;
    opacity: 0.6;
  }

  .special-requests__heading {
    font-weight: bold;
    text-align: initial;
  }
  
  .special-requests-actions__name,
  .special-requests__description {
    font-weight: 300;
    text-align: initial;
  }

  .special-requests__controls-container {
    display: flex;
    position: relative;
    align-items: center;
    background-color: var(--lightgray);
    border-bottom: 1px solid var(--primary);
  }

  .special-requests-input {
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 0 22px;
    color: var(--white);
    background-color: var(--transparent);
  }

  .send-request__link {
    text-align: center;
    color: var(--white);
    border-radius: 40px;
    text-decoration: none;
    box-sizing: border-box;
    background-color: var(--primary);
    margin-top: 1em;
    border: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1439px) {
    display: grid;
    grid-row-gap: 16px;
    padding: 30px 20px;
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 1fr;

    .special-requests__list,
    .special-requests-actions__list,
    .special-requests-questions__list{
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    
    .special-requests__heading{
      font-size: 1.125rem;
    }
  
    .special-requests-actions__name,
    .special-requests__description{
      font-size: 0.875rem;
    }

    .special-requests__controls-container {
      height: 250px;
      width: 100%;
    }

    .send-request__link {
      width: 175px;
      padding: 15px 25px;
      font-size: 0.875rem;
      margin: 45px 0px 10px 0px;
    }

    .send-request__link-container{
      text-align: center;
    }

    .end-requests-actions-group{
      margin-bottom: 40px;
    }
  }

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-row-gap: 16px;
    padding: 58.12px 212px;
    grid-column-gap: 159px;
    grid-template-rows: auto auto;
    grid-template-columns: 48% 1fr;

    grid-template-areas:
    "special-requests__list special-requests-actions__list"
    "special-requests__list special-requests-questions__list";

    .special-requests__list {
      grid-area: special-requests__list;
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    .special-requests-actions__list{
      grid-area: special-requests-actions__list;
      margin: 0;
      padding: 0;
      list-style-type: none;
      display: grid;
      grid-row-gap: 1em;
      grid-column-gap: 102px;
      grid-template-rows: auto auto auto;
      grid-template-columns: 33% 1fr;
      grid-auto-flow: column;
    }

    .special-requests-questions__list{
      grid-area: special-requests-questions__list;
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    .special-requests__heading {
      font-size: 1.6rem;
    }
    
    .special-requests-actions__name,
    .special-requests__description {
      font-size: 1.4rem;
    }

    .special-requests__controls-container {
      height: 160px;
      width: 100%;
    }

    .special-requests-input {
      font-size: 1rem;
    }

    .send-request__link {
      width: 153px;
      padding: 10px 25px;
      font-size: 0.92rem;
    }
  }

  @media screen and (min-width: 1920px) {
    padding: 58.12px 283px;
    .special-requests__controls-container {
      height: 168px;
      width: 100%;
    }

    .special-requests-input {
      font-size: 1.125rem;
    }

    .send-request__link {
      width: 205px;
      padding: 15px 35px;
      font-size: 1.2rem;
    }
  }
`


const SpecialRequests: FC<IProps> = ({  }): ReactElement => (
  <StyledSpecialRequests>
    <ul className="special-requests__list">
      <li>
        <h3 className="special-requests__heading">Special Requests</h3>
        <p className="special-requests__description">
          Don't leave anyone out: Let us know who's staying with you and
          invite them to download the app.
        </p>
      </li>
      <li>
        <label className="special-requests__controls-container">
          <input className="special-requests-input"/>
        </label>
      </li>
      <li className="send-request__link-container"> 
        <button className="send-request__link">Send</button>
      </li>
    </ul>
    <ul className="special-requests-actions__list">
      <li>
        <p className="special-requests-actions__name">
          Add to Calendar
        </p>
      </li>
      <li>
        <p className="special-requests-actions__name">
          Apple Calendar
        </p>
      </li>
      <li> 
        <p className="special-requests-actions__name end-requests-actions-group">
          Google Calendar
        </p>
      </li>
      <li> 
        <p className="special-requests-actions__name">
          Download PDF
        </p>
      </li>
      <li> 
        <p className="special-requests-actions__name">
          Request Invoice
        </p>
      </li>
      <li> 
        <p className="special-requests-actions__name">
          Share Details
        </p>
      </li>
    </ul>
    <ul className="special-requests-questions__list">
      <li>
        <h3 className="special-requests__heading">Questions?</h3>
        <p className="special-requests__description">
          Don't leave anyone out: Let us know who's staying with you and
          invite them to download the app.
        </p>
      </li>
    </ul>
  </StyledSpecialRequests>
)


export default SpecialRequests
