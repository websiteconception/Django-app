import styled from "styled-components"
import React, { FC, ReactElement, ReactNode } from "react"
import { ISearchResult } from "types/generics"

interface IProps {
  tooltip?: boolean,
  children?: ReactNode,
  lat?: number,
  lng?: number,
  result?: ISearchResult,
}

interface IStyledProps {
  lat?: number,
  lng?: number,
}

const StyledSearchResult = styled.div<IStyledProps>`
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
    grid-template-rows: 1fr auto 2fr;
    grid-template-columns: 1.5fr auto;
    grid-template-areas:
      "equipment starting-at"
      "name price"
      "address nav-link";
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
    grid-area: equipment;
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
    padding: 6px 0;
  }

  .name,
  .price,
  .address {
    margin: 0;
    color: var(--antiflashwhite);
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

  @media screen and (min-width: 1440px) {
    width: 290px;

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
      top: 148px;
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
      top: 200px;
    }

    .tooltip-prev-unit-img-button__container,
    .tooltip-next-unit-img-button__container{
      top: 141px;
    }
  }
`

const SearchResult: FC<IProps> = ({ lat, lng, tooltip, result }): ReactElement => (
  <StyledSearchResult lat={lat} lng={lng} style={tooltip ? {width : '420px'} :{width : '402px'} }>
    <label className="pin-button__container">
      <i className="icon-pin">
      </i>
      <input className="pin-button" type="button"/>
    </label>
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
            src="/img/frida.png"
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
        <p className="starting-at">starting at</p>
        {
          tooltip && <div className="search-result__tooltip-triangle"></div>
        }
        <h3 className="name">
          { result && result.name }
        </h3>
        <h3 className="price">
          { result && result.price }
        </h3>
        <h4 className="address">
          { result && result.address }
        </h4>
        <a href="#" className="search-result__link">
          <i className="icon-right-arrow"></i>
        </a>
      </div>
      {
          tooltip && <div className="search-result__tooltip-circle"></div>
        }
  </StyledSearchResult>
)


export default SearchResult