import styled from "styled-components"
import React, { FC, ReactElement, ReactNode } from "react"
import { ISearchResult } from "types/generics"

interface IProps {
  tooltip?: boolean,
  children?: ReactNode,
  result?: ISearchResult,
}

interface IStyledProps {

}

const StyledModulePanel2 = styled.div<IStyledProps>`
  position: relative;
  border-radius: 6px;
  background-color: var(--raisinblack);

  .search-result__img-container {
    margin: 0;
    z-index: 0;
  }

  .search-result__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .search-result-tooltip__img{
    width: 100%;
    height: 284px;
    object-fit: cover;
  }

  .search-result__details {
    display: grid;
    padding: 20px;
    position: relative;
    grid-auto-flow: row;
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 1fr;
  }

  .buttons-section{
    display: grid;
    grid-template-columns: 48.5% 48.5%;
    grid-column-gap: 3%;
  }

  .search-result__tooltip-triangle {
    left: 40px;
    bottom: -10px;
    position: absolute;
    transform: rotate(45deg);
    background-color: var(--darkgray);
  }

  .search-result__tooltip-circle{
    height: 22px;
    width: 22px;
    background-color: var(--primary);
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 40px;
    top: calc(100% + 20px);
  }

  .equipment {
    display: flex;
    font-weight: bold;
    color: var(--primary);
  }

  .separator {
    margin: 0 5px;
  }

  .people::after {
    content: " People";
  }

  .bedrooms::after {
    content: " Bedroom";
  }

  .bathrooms::after {
    content: " Bath";
  }

  .starting-at {
    padding: 0;
    margin : 0;
    text-align: end;
    font-weight: bold;
    color: var(--dimgray);
    grid-area: starting-at;
    text-transform: uppercase;
  }

  .name {
    font-weight: normal;
  }

  .address {
    font-weight: 300;
  }

  .name,
  .price {
    padding: 6px 0px 0px 0px;
  }
  
  .name,
  .price,
  .address {
    margin: 0;
    color: var(--antiflashwhite);
  }

  .date-range{
    color: var(--antiflashwhite);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 10px;
  }

  .address {
    align-self: end;
  }

  .price {
    font-weight: bold;
  }


  .price::before {
    content: "$";
  }

  .price::after {
    content: "/Night";
  }

  .pin-button__container,
  .prev-unit-img-button__container,
  .next-unit-img-button__container,
  .tooltip-prev-unit-img-button__container,
  .tooltip-next-unit-img-button__container {
    width: 48px;
    height: 48px;
    display: flex;
    cursor: pointer;
    position: absolute;
    align-items: center;
    justify-content: center;
  }

  .pin-button,
  .prev-unit-img__button,
  .next-unit-img__button {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }

  .pin-button,
  .prev-unit-img__button,
  .next-unit-img__button {
    opacity: 0.8;
    border: none;
    outline: none;
    border-radius: 50%;
  }

  .icon-pin,
  .icon-prev,
  .icon-next {
    z-index: 1;
    position: absolute;
    pointer-events: none;
  }

  .search-result__link {
    display: flex;
    text-align: end;
    font-size: 0.75rem;
    align-items: flex-end;
    text-decoration: none;
    justify-content: flex-end;
    color: var(--antiflashwhite);
  }

  .panel-btn-2{
    border: 1px solid #8B6CCC;
    border-radius: 30px;
    opacity: 1;
    color: white;
    background: transparent;
    padding: 10px 0px;
    width: 100%;
  }

  .date-range-icon {
    color: var(--antiflashwhite);
  }

  @media screen and (min-width: 1440px) {
    width: 290px;

    .date-range-icon {
      padding-top: 1.1em;
    }
    
    .date-range,
    .panel-btn-2{
      font-size: 0.8rem;
    }

    .equipment {
      font-size: 0.625rem;
    }

    .starting-at {
      font-size: 0.5rem;
    }

    .pin-button__container {
      top: 10px;
    }

    .prev-unit-img-button__container,
    .next-unit-img-button__container {
      top: 124px;
    }

    .tooltip-prev-unit-img-button__container,
    .tooltip-next-unit-img-button__container{
      top: 128px;
    }

    .pin-button__container,
    .next-unit-img-button__container,
    .tooltip-next-unit-img-button__container {
      right: 10px;
    }

    .name,
    .price,
    .address {
      font-size: 0.8rem;
    }

    .prev-unit-img-button__container {
      left: 10px;
    }

    .search-result__tooltip-triangle {
      width: 22px;
      height: 22px;
    }
  }

  @media screen and (min-width: 1920px) {
    width : 402px;

    .date-range-icon {
      padding-top: 1.1em;
    }
    
    .date-range,
    .panel-btn-2{
      font-size: 1rem;
    }

    .equipment {
      font-size: 0.75rem;
    }

    .name,
    .price {
      font-size: 1.125rem;
    }

    .address {
      font-size: 0.875rem;
    }

    .starting-at {
      font-size: 0.625rem;
    }

    .search-result__tooltip-triangle {
      width: 22px;
      height: 22px;
    }

    .prev-unit-img-button__container,
    .next-unit-img-button__container {
      top: 154px;
    }

    .tooltip-prev-unit-img-button__container,
    .tooltip-next-unit-img-button__container{
      top: 141px;
    }
  }
`

const ModulePanel2: FC<IProps> = ({ tooltip, result }): ReactElement => (
  <StyledModulePanel2>
    <label className={tooltip ? "tooltip-prev-unit-img-button__container" : "prev-unit-img-button__container"}>
      <span className="icon-prev">
        <span className="path1"></span>
        <span className="path2"></span>
      </span>
      <input className="prev-unit-img__button" type="button"/>
    </label>
    <label className={tooltip ? "tooltip-next-unit-img-button__container" : "next-unit-img-button__container"}>
      <span className="icon-next">
        <span className="path1"></span>
        <span className="path2"></span>
      </span>
      <input className="next-unit-img__button" type="button"/>
    </label>
    <figure className="search-result__img-container">
      {
        tooltip ? 
          <img
          alt="search result"
          src="/img/panel-unit-1.png"
          className="search-result-tooltip__img"
          />:
          <img
            alt="search result"
            src="/img/module-panel-2.png"
            className="search-result__img"
          />
      }
    </figure>
    <div className="search-result__details">
        <div className="equipment">
          <span className="people">
            { result && result.equipment.people }
          </span>
          <span className="separator">|</span>
          <span className="bedrooms">
            { result && result.equipment.bedrooms }
          </span>
          <span className="separator">|</span>
          <span className="bathrooms">
            { result && result.equipment.bathrooms }
          </span>
        </div>
        {
          tooltip && <div className="search-result__tooltip-triangle"></div>
        }
        <h3 className="name">
          { result && result.name }
        </h3>
        <div className="date-range">
          <i className="date-range-icon icon-wifi"></i>
          <p >Mon 23 Feb - Wed 27 Feb</p>
        </div>
        <nav className="buttons-section">
          <button className="panel-btn-2">View Details</button>
          <button className="panel-btn-2">Manage Stay</button>
        </nav>
      </div>
      {
          tooltip && <div className="search-result__tooltip-circle"></div>
        }
  </StyledModulePanel2>
)


export default ModulePanel2