import styled from "styled-components"
import React, { FC, ReactElement, ReactNode } from "react"

import ModulePanelBooking from "components/module-panel-booking"

interface IProps {

}

const StyledListingDetailsHead = styled.section`
  .unit-details {
    display: flex;
    justify-content: space-between;
  }
  
  .unit-equipment {
    color: var(--violet);
  }

  .people::after {
    content: " person";
  }

  .bedrooms::after {
    content: " bed";
  }

  .bathrooms::after {
    content: " bath";
  }

  .size::after{
    content: " m2s";
  }
  
  .neighborhood__list,
  .listing-details-info__list,
  .amenities__list,
  .listing-details__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  .neighborhood__heading,
  .listing-details__heading {
    font-weight: bold;
    text-align: initial;
  }

  h2{
    margin-block-start: 0em !important;
  }
  
  .neighborhood__subheading,
  .amenities__list__heading{
    color: var(--violet);
    text-transform: uppercase;
  }

  .amenities-options__list{
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-row-gap: 15px;
    grid-column-gap: 76px;
    grid-template-rows: auto auto auto;
    grid-template-columns: 44% 1fr;
  }
  
  .listing-details-info-icon,
  .amenity-icon {
    color: var(--primary);
  }

  .amenities-options__list-element{
    display: grid;
    grid-template-columns: auto 1fr;
  }

  .listing-details-info__list-element{
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "listing-details-info-icon listing-details-info__heading"
      "listing-details-info__description listing-details-info__description";
  }

  .listing-details-info-icon{
    grid-area: listing-details-info-icon;
  }

  .listing-details-info__description{
    grid-area: listing-details-info__description;
  }
  
  .map-container,
  .carrousel-container {
    margin: 0;
    display: flex;
    justify-content: center;
  }
  
  .map__img,
  .carrousel__img {
    width: 100%;
    object-fit: cover;
  }

  .amenities__list::after{
    content:"";
    display: block;
    position: relative;
    vertical-align: bottom;
    width: 100%;
    height: 1px;
    background-color: #707070;
    opacity: 0.6;
  }

  @media screen and (min-width: 320px) and (max-width: 1439px) {
    .module-container{
      display: none;
    }

    .amenities-options__list{
      grid-row-gap: 10px;
    }

    .listing-details-section{
      display: grid;
      grid-row-gap: 16px;
      padding: 25px 40px;
      /*grid-column-gap: 70px;*/
      grid-template-rows: auto auto auto auto;
      grid-template-columns: 1fr;
    }

    .unit-equipment {
      font-size: 0.82rem;
    }

    .listing-details__heading{
      max-width: 189px;
      font-size: 1.8rem;
    }

    .listing-details-info__list{
      margin: 10px 0px;
    }

    .listing-details-info__list-element{
      grid-column-gap: 10px;
    }

    .listing-details-info-icon{
      font-size: 0.8rem;
      padding-top: 1.2em;
    }

    .listing-details-info__heading{
      font-size: 0.8rem;
      margin-block-end: 0.3em;
    }

    .amenities__list{
      margin-top: 0px;
      margin-bottom: 30px;
    }

    .amenities__list::after{
      bottom: -30px;
    }

    .amenities-options__list{
      grid-column-gap: 10px;
      grid-template-columns: 50% 1fr;
    }

    .amenities-options__list-element{
      font-size: 0.62rem;
      grid-column-gap: 10px;
    }

    .amenity-icon{
      padding: 0.85em 0px;
      font-size: 0.8rem;
    }

    .carrousel-container{
      padding: 0px 0px;
    }

    .neighborhood{
      display: grid;
      padding: 52.12px 40px;
      grid-template-columns: 1fr;
    }
    
    .amenities__list__heading{
      font-size: 0.6rem;
      margin-bottom: 30px;
    }

    .neighborhood__subheading{
      font-size: 0.6rem;
    }

    .neighborhood__description,
    .listing-details-info__description,
    .listing-details__description{
      font-size: 0.81rem;
    }

    .neighborhood__heading{
      font-size: 1.32rem;
    }

    .map__img,
    .carrousel__img {
      margin-bottom: -20px;
      height: 316px;
    }
  }

  @media screen and (min-width: 1440px) {
    .listing-details-section{
      display: grid;
      grid-row-gap: 16px;
      padding: 58.12px 212px;
      grid-column-gap: 170px;
      grid-template-rows: auto auto auto auto;
      grid-template-columns: 48% 1fr;
      grid-auto-flow: column;

      grid-template-areas:
      "unit-details module-container"
      "listing-details__list module-container"
      "amenities__list module-container"
      "listing-details-info__list module-container";
    }

    .module-container{
      grid-area: module-container;
    }

    .listing-details-info__list{
      margin: 100px 0px;
    }
    
    .amenities-options__list-element,
    .listing-details-info__list-element{
      grid-column-gap: 25px;
    }
    
    .unit-equipment {
      font-size: 1.125rem;
    }

    .separator{
      margin-left: 5px;
      margin-right: 5px;
    }

    .listing-details__heading {
      font-size: 2.54rem;
    }
    
    .neighborhood__description,
    .listing-details-info__description,
    .listing-details__description{
      font-size: 1rem;
    }
    
    .neighborhood__subheading,
    .amenities__list__heading{
      font-size: 0.81rem;
    }
  
    .amenity-icon {
      font-size: 1rem;
      padding-top: 1.1em;
    }

    .amenities__list::after{
      bottom: -60px;
    }

    .listing-details-info-icon{
      font-size: 1rem;
      padding-top: 1.2em;
    }

    .listing-details-info__heading{
      font-size: 1rem;
    }

    .carrousel-container{
      padding: 0px 110px;
    }

    .neighborhood{
      display: grid;
      padding: 58.12px 212px;
      grid-template-columns: 1fr;
    }

    .neighborhood__heading{
      font-size: 1.83rem;
    }
  }

  @media screen and (min-width: 1920px) {
    .listing-details-section{
      display: grid;
      grid-row-gap: 16px;
      padding: 58.12px 285px;
      /*grid-column-gap: 70px;*/
      grid-template-rows: auto auto auto auto;
      grid-template-columns: 48%;
    }
    
    .amenities-options__list-element,
    .listing-details-info__list-element{
      grid-column-gap: 15px;
    }

    .unit-equipment {
      font-size: 1.3rem;
    }

    .separator{
      margin-left: 7px;
      margin-right: 7px;
    }

    .listing-details__heading {
      font-size: 3.4rem;
    }
    
    .neighborhood__description,
    .listing-details-info__description,
    .listing-details__description {
      font-size: 1.36rem;
    }
    
    .neighborhood__subheading,
    .amenities__list__heading{
      font-size: 0.9rem;
    }
    
    .amenity-icon {
      font-size: 1.4rem;
      padding-top: 0.7em;
    }

    .listing-details-info-icon{
      font-size: 1.4rem;
      padding-top: 1em;
    }

    .listing-details-info__heading{
      font-size: 1.4rem;
    }

    .carrousel-container{
      padding: 0px 148px;
    }

    .neighborhood{
      padding: 58.12px 285px;
    }

    .neighborhood__heading{
      font-size: 2.45rem;
    }
  }
`
const searchResults = {
      id: 1,
      name: "Frida Kahlo Rooftop Suite",
      address: "Chapultepec 23, Condesa",
      price: 120,
      equipment: {
        people: 4,
        bedrooms: 2,
        bathrooms: 2,
      }
    }

const ListingDetailsHead: FC<IProps> = ({  }): ReactElement => (
  <StyledListingDetailsHead>
    <div className="listing-details-section">
    <div className="unit-details">
      <div className="unit-equipment">
        <span className="people">4</span>
        <span className="separator"> | </span>
        <span className="bedrooms">2</span>
        <span className="separator"> | </span>
        <span className="bathrooms">2</span>
        <span className="separator"> | </span>
        <span className="size">84</span>
      </div>
    </div>
    <ul className="listing-details__list">
      <li>
        <h2 className="listing-details__heading">
          Frida Kahlo Rooftop Suite
        </h2>
        <p className="listing-details__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Morbi non tellus semper, varius velit quis, ornare purus. 
          Donec pellentesque, arcu eget dignissim dapibus, ex lacus 
          vestibulum nibh, sagittis cursus sem libero ac metus. Ut dapibus, 
          magna sit amet vestibulum ultricies, nibh nisi tincidunt lectus, 
          quis efficitur sem lacus auctor dui.
          <br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Morbi non tellus semper, varius velit quis, ornare purus. 
        </p>
      </li>
    </ul>
    <ul className="amenities__list">
      <li>
        <h3 className="amenities__list__heading">AMENITIES</h3>
        <ul className="amenities-options__list">
          <li className="amenities-options__list-element">
            <i className="amenity-icon icon-wifi"></i>
            <p className="amenities-options__name">
              High Speed Wifi
            </p>
          </li>
          <li className="amenities-options__list-element">
            <i className="amenity-icon icon-wifi"></i>
            <p className="amenities-options__name">
              Local Beverages & Treats
            </p>
          </li>
          <li className="amenities-options__list-element">
            <i className="amenity-icon icon-wifi"></i>
            <p className="amenities-options__name">
              Working Spaces
            </p>
          </li>
          <li className="amenities-options__list-element">
            <i className="amenity-icon icon-wifi"></i>
            <p className="amenities-options__name">
              Fully Equipped Kitchen
            </p>
          </li>
          <li className="amenities-options__list-element">
            <i className="amenity-icon icon-wifi"></i>
            <p className="amenities-options__name">
              Organic Bathroom Products
            </p>
          </li>
          <li className="amenities-options__list-element">
            <i className="amenity-icon icon-wifi"></i>
            <p className="amenities-options__name">
              Smart Lock Access
            </p>
          </li>
          <li className="amenities-options__list-element">
            <i className="amenity-icon icon-wifi"></i>
            <p className="amenities-options__name">
              Smart Home Devices
            </p>
          </li>
          <li className="amenities-options__list-element">
            <i className="amenity-icon icon-wifi"></i>
            <p className="amenities-options__name">
              Spa-grade Towels & Linens
            </p>
          </li>
          <li className="amenities-options__list-element">
            <i className="amenity-icon icon-wifi"></i>
            <p className="amenities-options__name">
              Espresso Machine
            </p>
          </li>
          <li className="amenities-options__list-element">
            <i className="amenity-icon icon-wifi"></i>
            <p className="amenities-options__name">
              Smart TV & Cable
            </p>
          </li>
        </ul>
      </li>
    </ul>
    <ul className="listing-details-info__list">
      <li className="listing-details-info__list-element">
        <i className="listing-details-info-icon icon-wifi"></i>
        <h3 className="listing-details-info__heading">
          Check-in & Check-out
        </h3>
        <p className="listing-details-info__description">
          Lorem ipsum dolor sit amet, consectetur adlpiscing elit. Morbi
          auctor enim eros, eu molestie.
        </p>
      </li>
      <li className="listing-details-info__list-element">
        <i className="listing-details-info-icon icon-wifi"></i>
        <h3 className="listing-details-info__heading">
          Parking
        </h3>
        <p className="listing-details-info__description">
          Lorem ipsum dolor sit amet, consectetur adlpiscing elit. Morbi
          auctor enim eros, eu molestie.
        </p>
      </li>
      <li className="listing-details-info__list-element">
        <i className="listing-details-info-icon icon-wifi"></i>
        <h3 className="listing-details-info__heading">
          House Rules
        </h3>
        <p className="listing-details-info__description">
          Lorem ipsum dolor sit amet, consectetur adlpiscing elit. Morbi
          auctor enim eros, eu molestie.
        </p>
      </li>
    </ul>
      <div className="module-container">
        <ModulePanelBooking result={searchResults}/>
      </div>
    </div>
    <figure className="carrousel-container">
      <img className="carrousel__img" alt="carrousel" src="/img/carrousel-placeholder.png"/>
    </figure>
    <div className="neighborhood">
      <ul className="neighborhood__list">
        <li>
          <h3 className="neighborhood__subheading">
            NEIGHBORHOOD
          </h3>
          <h2 className="neighborhood__heading">
            Hipódromo Condesa
          </h2>
          <p className="neighborhood__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Morbi non tellus semper, varius velit quis, ornare purus. 
            Donec pellentesque, arcu eget dignissim dapibus, ex lacus 
            vestibulum nibh, sagittis cursus sem libero ac metus. Ut dapibus, 
            magna sit amet vestibulum ultricies, nibh nisi tincidunt lectus, 
            quis efficitur sem lacus auctor dui.
          </p>
        </li>
      </ul>
    </div>
    <figure className="map-container">
      <img className="map__img" alt="carrousel" src="/img/dummy-map.png"/>
    </figure>
  </StyledListingDetailsHead>
)


export default ListingDetailsHead
