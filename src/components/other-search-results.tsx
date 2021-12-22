import styled from "styled-components"
import React, { FC, ReactElement, ReactNode, useState } from "react"
import { ISearchResult } from "types/generics"

import OtherSearchResultList from "components/other-search-results-list"

interface IProps {
	children?: ReactNode,
}

const StyledOtherSearchResults = styled.section`
  background-color: #121212;

  .other-search-results__heading {
    font-weight: normal !important;
    text-align: center;
    color: var(--antiflashwhite);
  }

  .see-all-results__link{
  	font-weight: normal !important;
    text-align: center;
    color: var(--primary);
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1439px) {
    padding: 40px 0px;
    display: grid;
    grid-row-gap: 16px;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;

    .other-search-results__heading {
    	font-size: 0.75rem;
	}

	.see-all-results__link{
	  font-size: 0.75rem;
	  margin-top: 15px;
    text-decoration: underline;
	}
  }

  @media screen and (min-width: 1440px) {
	padding: 100px 49px;
	display: grid;
    grid-row-gap: 16px;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;

    .other-search-results__heading {
    	font-size: 1.9rem;
    	margin-bottom: 50px;
	}

	.see-all-results__link{
	  font-size: 1.2rem;
	  margin-top: 60px;
	}
  }

  @media screen and (min-width: 1920px) {
	padding: 100px 65px;

	.other-search-results__heading {
		font-size: 2.5rem;
		margin-bottom: 60px;
	}

	.see-all-results__link{
	  font-size: 1.4rem;
	}
  }
`


const OtherSearchResults: FC<IProps> = (): ReactElement => {
  const [ searchResults ] = useState<Array<ISearchResult>>([
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
  ])

  return (
    <>
      <StyledOtherSearchResults>
      	<h2 className="other-search-results__heading">Other search results</h2>
		<OtherSearchResultList list={searchResults} />
		<a className="see-all-results__link" href="#">See all results ></a>
	  </StyledOtherSearchResults>
    </>
  )
}


export default OtherSearchResults
