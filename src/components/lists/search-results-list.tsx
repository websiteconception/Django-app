import styled from "styled-components"
import { ISearchResult } from "types/generics"
import SearchResult from "components/search-result"
import React, { FC, ReactNode, ReactElement } from "react"

interface IProps {
  mapOpen?: boolean,
  children?: ReactNode,
  list?: Array<ISearchResult>,
}

const StyledSearchResultsList = styled.ul`
  margin: 0;
  display: grid;
  grid-auto-flow: row;
  list-style-type: none;
  box-sizing: border-box;


  @media screen and (min-width: 1440px) {
    padding: 50px 64px;
    grid-row-gap: 48px;
    grid-column-gap: 52px;
    grid-template-columns: repeat(4, auto);

    &.map-open {
      overflow-y: auto;
      height: calc(100vh - 185px);
      grid-template-columns: repeat(2, 1fr);
    }
  }


  @media screen and (min-width: 1920px) {
    
  }

`


const SearchResultsList: FC<IProps> = ({ mapOpen, list }) : ReactElement => (
  <StyledSearchResultsList className={mapOpen ? "map-open": ""}>
    {
      list.map(searchResult =>
        <SearchResult
          result={searchResult}
          key={`${searchResult.id}-search-result`}
        />
      )
    }
  </StyledSearchResultsList>
)




export default SearchResultsList