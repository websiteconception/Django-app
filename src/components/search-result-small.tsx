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

const StyledSearchResultSmall = styled.div<IStyledProps>`
  position: relative;
  border-radius: 6px;
  background-color: var(--raisinblack);

  display: grid;
  position: relative;
  grid-template-rows: 141px;
  grid-template-columns: 131px 1fr;

  .search-result__img-container {
    margin: 0;
    z-index: 0;
  }

  .search-result__img {
    height: 141px;
    width: 131px;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    object-fit: cover;
  }

  .search-result__details {
    display: grid;
    padding: 12px 18px;
    position: relative;
    grid-template-rows: auto auto auto auto;
    grid-template-columns: auto auto;
    grid-template-areas:
      "equipment equipment"
      "name name"
      "address address"
      "starting-at price";
  }

  .search-result__tooltip-triangle {
    left: 28px;
    bottom: -14px;
    position: absolute;
    transform: rotate(45deg);
    background-color: var(--darkgray);
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
    grid-area: name;
  }

  .address {
    font-weight: 300;
    grid-area: address;
  }
  
  .starting-at,
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

  .search-result__link {
    display: flex;
    text-align: end;
    font-size: 0.75rem;
    align-items: flex-end;
    text-decoration: none;
    justify-content: flex-end;
    color: var(--antiflashwhite);
  }

  @media screen and (min-width: 320px) {
    width: 333px;
    height: 141px;

    .equipment{
      font-size: 0.56rem;
    }

    .name{
      font-size: 1rem;
      font-size: 1rem;
      max-width: 101px;
    }

    .address{
      font-size: 0.62rem;
      letter-spacing: 0;
      margin-bottom: 15px;
    }

    .starting-at{
      font-size: 0.57rem;
      text-align: left !important;
      padding: 13px 0px;  
    }

    .price{
      font-size: 0.93rem;
      text-align: right;
    }
  }
`

const SearchResultSmall: FC<IProps> = ({ lat, lng, tooltip, result }): ReactElement => (
  <StyledSearchResultSmall lat={lat} lng={lng}>
    <figure className="search-result__img-container">
      <img
        alt="search result"
        src="/img/frida.png"
        className="search-result__img"
      />
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
        <h3 className="name">
          { result && result.name }
        </h3>
        <h4 className="address">
          { result && result.address }
        </h4>
        <p className="starting-at">starting at</p>
        <h3 className="price">
          { result && result.price }
        </h3>
      </div>
  </StyledSearchResultSmall>
)


export default SearchResultSmall