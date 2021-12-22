import Modal from "components/modal"
import { connect } from "react-redux"
import styled from "styled-components"
import { Coords } from "google-map-react"
import Map from "components/navigation/map"
import { ISearchResult } from "types/generics"
import GlobalStyles from "utils/global-styles"
import Navbar from "components/navigation/navbar"
import SearchResult from "components/search-result"
import React, { FC, ReactElement, useState, ReactNode } from "react"
import SearchResultsList from "components/lists/search-results-list"

interface IProps {
  zoom: number,
  center: Coords,
  children?: ReactNode,
}

const StyledSearchResults = styled.div`
  position: relative;
  background-color: var(--licorice);

  .icon-map-collapse {
    z-index: 1;
    position: absolute;
    color: var(--black);
    pointer-events: none;
  }

  .collapse-map-button__container {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }

  .collapse-map__button {
    opacity: 0.8;
    border: none;
    outline: none;
    border-radius: 50%;
    pointer-events: none;
  }

  @media screen and (min-width: 1440px) {
    .collapse-map-button__container {
      top: calc(50vh + 24px);
      z-index: 2;
      width: 48px;
      height: 48px;
      position: fixed;
      right: calc(-24px);
    }

    .collapse-map__button {
      width: 32px;
      height: 32px;
    }

    &.map-open {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    &.map-open .collapse-map-button__container {
      right: calc(50% - 24px);
    }
  }
`

const SearchResults: FC<IProps> = ({ center, zoom }): ReactElement => {
  const [ mapOpen, setMapOpen ] = useState(true)
  const [ mapSearchResults, setMapSearchResults ] =
    useState<Array<ISearchResult>>(
      [
        {
          id: 1,
          lat: 19.390734,
          lng: -99.143613,
          tooltip: true,
          name: "Frida Kahlo Rooftop Suite",
          address: "Chapultepec 23, Condesa",
          price: 120,
          equipment: {
            people: 4,
            bedrooms: 2,
            bathrooms: 2,
          },
        },
      ]
    )
  const [ searchResults, setSearchResults ] = useState<Array<ISearchResult>>([
    {
      id: 1,
      name: "Frida Kahlo Rooftop Suite",
      address: "Chapultepec 23, Condesa",
      price: 120,
      equipment: {
        people: 4,
        bedrooms: 2,
        bathrooms: 2,
      },
    },
    {
      id: 2,
      name: "Frida Kahlo Rooftop Suite",
      address: "Chapultepec 23, Condesa",
      price: 120,
      equipment: {
        people: 4,
        bedrooms: 2,
        bathrooms: 2,
      },
    },
    {
      id: 3,
      name: "Frida Kahlo Rooftop Suite",
      address: "Chapultepec 23, Condesa",
      price: 120,
      equipment: {
        people: 4,
        bedrooms: 2,
        bathrooms: 2,
      },
    },
    {
      id: 4,
      name: "Frida Kahlo Rooftop Suite",
      address: "Chapultepec 23, Condesa",
      price: 120,
      equipment: {
        people: 4,
        bedrooms: 2,
        bathrooms: 2,
      },
    },
    {
      id: 5,
      name: "Frida Kahlo Rooftop Suite",
      address: "Chapultepec 23, Condesa",
      price: 120,
      equipment: {
        people: 4,
        bedrooms: 2,
        bathrooms: 2,
      },
    },
    {
      id: 6,
      name: "Frida Kahlo Rooftop Suite",
      address: "Chapultepec 23, Condesa",
      price: 120,
      equipment: {
        people: 4,
        bedrooms: 2,
        bathrooms: 2,
      },
    },
    {
      id: 7,
      name: "Frida Kahlo Rooftop Suite",
      address: "Chapultepec 23, Condesa",
      price: 120,
      equipment: {
        people: 4,
        bedrooms: 2,
        bathrooms: 2,
      },
    },
    {
      id: 8,
      name: "Frida Kahlo Rooftop Suite",
      address: "Chapultepec 23, Condesa",
      price: 120,
      equipment: {
        people: 4,
        bedrooms: 2,
        bathrooms: 2,
      },
    },
  ])

  const handleMapOpenClick = () => setMapOpen(!mapOpen)

  return (
    <>
      <GlobalStyles />
      <Modal />
      <Navbar />
      <StyledSearchResults className={mapOpen ? "map-open" : ""}>
        <label className="collapse-map-button__container">
          <span className="icon-map-collapse">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
          </span>
          <input
            type="button"
            onClick={handleMapOpenClick}
            className="collapse-map__button"
          />
        </label>
        <SearchResultsList list={searchResults} mapOpen={mapOpen}/>
        <Map open={mapOpen} zoom={zoom} center={center}>
          <SearchResult
            lat={19.390734}
            lng={-99.143613}
            result={mapSearchResults[0]}
          />
        </Map>
      </StyledSearchResults>
    </>
  )
}


const mapStateToProps = ({ map: { center, zoom } }) => ({
  zoom,
  center,
})

export default connect(mapStateToProps)(SearchResults)