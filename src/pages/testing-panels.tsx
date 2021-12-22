import Head from "./_head"
import Footer from "components/footer"
import GlobalStyles from "utils/global-styles"
import React, { FC, ReactElement, useEffect, useState } from "react"
import Navbar from "components/navigation/navbar"
import configureLocales from "i18n/configure-locales"
import styled from "styled-components"
import { ISearchResult } from "types/generics"

import SearchResult from "components/search-result"
import SearchResultSmall from "components/search-result-small"
import ModulePanel2 from "components/module-panel-2"
import ModulePanel3 from "components/module-panel-3"
import ModulePanelBooking from "components/module-panel-booking"

const TestingPanels: FC = () : ReactElement => {
  const [ configuredLocales, setConfiguredLocales ] = useState(false)
  useEffect(() => {
    if(!configuredLocales) {
      configureLocales()
      setConfiguredLocales(true)
    }
  })

  const StyledTestingPanels = styled.div`
    margin: 0;
    padding: 5% 20%;
    display: grid;
    grid-row-gap: 50px;
    grid-column-gap: 5%;
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 1fr;
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

  return (
    <>
      <Head title="Testing Panels"/>
      <GlobalStyles />
        {/*<Modal />*/}
        <Navbar/>
        <StyledTestingPanels>
          <SearchResult result={searchResults} key={`${searchResults.id}-search-result`}/>
          <SearchResult result={searchResults} key={`${searchResults.id}-search-result`} tooltip/>
          <SearchResultSmall result={searchResults} key={`${searchResults.id}-search-result`}/>
          <ModulePanel2 result={searchResults} key={`${searchResults.id}-search-result`}/>
          <ModulePanel3 result={searchResults} key={`${searchResults.id}-search-result`}/>
          {/*<ModulePanelBooking result={searchResults} coverImg/>*/}
          <ModulePanelBooking result={searchResults}/>
        </StyledTestingPanels>
        <Footer />
    </>
  )
}

export default TestingPanels