import Head from "./_head"
import Footer from "components/footer"
import GlobalStyles from "utils/global-styles"
import React, { FC, ReactElement, useEffect, useState } from "react"
import Navbar from "components/navigation/navbar"
import configureLocales from "i18n/configure-locales"

import ImageCoverHead from "components/image-cover-head"
import ListingDetailsHead from "components/listing-details/listing-details-head"
import OtherSearchResults from "components/other-search-results"


const ListingDetails: FC = () : ReactElement => {
  const [ configuredLocales, setConfiguredLocales ] = useState(false)
  useEffect(() => {
    if(!configuredLocales) {
      configureLocales()
      setConfiguredLocales(true)
    }
  })

  return (
    <>
      <Head title="Listing Details"/>
      <GlobalStyles />
        {/*<Modal />*/}
        <Navbar/>
        <ImageCoverHead/>
        <ListingDetailsHead/>
        <OtherSearchResults/>
        <Footer />
    </>
  )
}

export default ListingDetails