import styled from "styled-components"
import { IUnit } from "types/generics"
import React, { FC, ReactElement, ReactNode, Component } from "react"
import { ISearchResult } from "types/generics"

import SearchResult from "components/search-result"
import SearchResultSmall from "components/search-result-small"

interface IProps {
  children?: ReactNode,
  list?: Array<ISearchResult>,
  isMobile?: boolean,
}

interface State {
  isMobile?: boolean,
}

const StyledFeaturedUnits = styled.ul`
  @media screen and (min-width: 320px) and (max-width: 1439px) {
    padding-inline-start: 0px;
    margin: 0;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
    grid-template-row: auto auto;
  }

  @media screen and (min-width: 1440px) {
    padding-inline-start: 0px;
    margin: 0;
    display: grid;
    grid-column-gap: 45px;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1920px) {
    padding-inline-start: 0px;
    margin: 0;
    display: grid;
    grid-column-gap: 45px;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);
  }
`

/*const OtherSearchResultList: FC<IProps> = ({
  list,
}) : ReactElement => (
  <StyledFeaturedUnits>
    {
      list.map(searchResult =>
        <SearchResult
          result={searchResult}
          key={`${searchResult.id}-search-result`}
        />
        <SearchResultSmall
          result={searchResult}
          key={`${searchResult.id}-search-result`}
        />
      )
    }
  </StyledFeaturedUnits>
)*/

class OtherSearchResultList extends Component<IProps, State> {
  constructor(props: IProps, state: State) {
    super(props)

    this.state = {
      isMobile: window.innerWidth <= 510,
    }
  }

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth <= 510 });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);

    this.state = {
      isMobile: window.innerWidth <= 510,
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  render() {
    if(this.state.isMobile){
      return(
        <StyledFeaturedUnits>
          {
            this.props.list.map(function (searchResult) {
              if(searchResult.id <= 2){
                return (
                  <SearchResultSmall
                  result={searchResult}
                  key={`${searchResult.id}-search-result`}
                  />
                ); 
              } 
            })
          }
        </StyledFeaturedUnits>
      );
    }else if(window.innerWidth < 1600){
      return(
        <StyledFeaturedUnits>
          {
            this.props.list.map(function (searchResult) {
              if(searchResult.id <= 3){
                return (
                  <SearchResult
                  result={searchResult}
                  key={`${searchResult.id}-search-result`}
                  />
                ); 
              } 
            })
          }
        </StyledFeaturedUnits>
      );
    }
    else{
      return(
        <StyledFeaturedUnits>
          {
            this.props.list.map(searchResult =>
              <SearchResult
                result={searchResult}
                key={`${searchResult.id}-search-result`}
              />
            )
          }
        </StyledFeaturedUnits>
      );
    }
  }
}

export default OtherSearchResultList