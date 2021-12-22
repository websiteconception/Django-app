import styled from "styled-components"
import React, { FC, ReactElement, ReactNode } from "react"

interface IProps {
  children?: ReactNode,
  expanded?: boolean,
}

const StyledAmenities = styled.section`
  .amenities__list {
    margin: 0;
    padding: 0;
    display: grid;
    list-style-type: none;
  }

  .amenities__list-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .amenities__heading {
    margin: 125px 0;
    padding: 0 160px;
    text-align: center;
    font-weight: normal;
  }

  .amenity-name {
    text-align: left;
    font-weight: bold;
    text-transform: capitalize;
  }

  .amenity-icon {
    color: var(--primary);
  }


  @media screen and (min-width: 1440px) {
    padding: 0 140px;

    .amenities__heading {
      font-size: 2rem;
    }

    .amenities__list {
      grid-row-gap: 88px;
      grid-column-gap: 142px;
      justify-content: center;
      grid-template-columns: repeat(5, minmax(138px, 212px));
    }

    .amenity-name {
      font-size: 1.5rem;
    }

    .wifi-heading {
      width: 138px;
    }


    .beverages-heading {
      width: 194px;
    }

    .kitchen-heading {
      width: 188px;
    }

    .organic-heading {
      width: 212px;
    }

    .spa-heading {
      width: 188px;
    }
  }

  @media screen and (min-width: 1920px) {
    .amenity-icon {
      font-size: 2rem;
    }

    .amenities__heading {
      font-size: 2.5rem;
    }

    .espresso {
      width: 104px;
    }
  }
`


const Amenities: FC<IProps> = ({ expanded }): ReactElement => (
  <StyledAmenities
    className={ expanded ? "expanded-landing__section" : "landing__section"}
  >
    <h2 className="amenities__heading">Our amenities</h2>
      <ul className="amenities__list">
        <li className="amenities__list-item">
          <i className="amenity-icon icon-wifi"></i>
          <h4 className="wifi-heading amenity-name">high speed wifi</h4>
        </li>
        <li className="amenities__list-item">
          <i className="amenity-icon icon-wifi"></i>
          <h4 className="amenity-name">working spaces</h4>
        </li>
        <li className="amenities__list-item">
          <i className="amenity-icon icon-wifi"></i>
          <h4 className="beverages-heading amenity-name">local beverages & treats</h4>
        </li>
        <li className="amenities__list-item">
          <i className="amenity-icon icon-wifi"></i>
          <h4 className="kitchen-heading amenity-name">fully equipped kitchen</h4>
        </li>
        <li className="amenities__list-item">
          <i className="amenity-icon icon-wifi"></i>
          <h4 className="espresso amenity-name">espresso machine</h4>
        </li>
        <li className="amenities__list-item">
          <i className="amenity-icon icon-wifi"></i>
          <h4 className="organic-heading amenity-name">organic bathroom products</h4>
        </li>
        <li className="amenities__list-item">
          <i className="amenity-icon icon-wifi"></i>
          <h4 className="amenity-name">smart home devices</h4>
        </li>
        <li className="amenities__list-item">
          <i className="amenity-icon icon-wifi"></i>
          <h4 className="amenity-name">smart lock access</h4>
        </li>
        <li className="amenities__list-item">
          <i className="amenity-icon icon-wifi"></i>
          <h4 className="spa-heading amenity-name">spa-grade towels & linens</h4>
        </li>
        <li className="amenities__list-item">
          <i className="amenity-icon icon-wifi"></i>
          <h4 className="amenity-name">smart lock access</h4>
        </li>
    </ul>
  </StyledAmenities>
)


export default Amenities
