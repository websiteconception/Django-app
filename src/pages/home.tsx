import Head from "./_head"
import Modal from "components/modal"
import Perks from "components/perks"
import Footer from "components/footer"
import Featured from "components/featured"
import Guarantee from "components/guarantee"
import Amenities from "components/amenities"
import GlobalStyles from "utils/global-styles"
import HeroHeader from "components/hero-header"
import React, { FC, ReactElement, useEffect, useState } from "react"
import Navbar from "components/navigation/navbar"
import ProductPitch from "components/product-pitch"
import configureLocales from "i18n/configure-locales"
import MobileAppCallToAction from "components/mobile-app-call-to-action"

const Home: FC = () : ReactElement => {
  const [ configuredLocales, setConfiguredLocales ] = useState(false)
  useEffect(() => {
    if(!configuredLocales) {
      configureLocales()
      setConfiguredLocales(true)
    }
  })

  return (
    <>
      <Head title="Welcome to Casai!"/>
      <GlobalStyles />
        <Modal />
        <Navbar landing/>
        <HeroHeader />
        <ProductPitch />
        <Featured />
        <Guarantee />
        <Perks />
        <Amenities />
        <MobileAppCallToAction />
        <Footer />
    </>
  )
}

export default Home