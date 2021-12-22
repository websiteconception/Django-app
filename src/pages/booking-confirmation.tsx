import Head from "./_head"
import Footer from "components/footer"
import GlobalStyles from "utils/global-styles"
import React, { FC, ReactElement, useEffect, useState } from "react"
import Navbar from "components/navigation/navbar"
import configureLocales from "i18n/configure-locales"

import BookingConfirmationHead from "components/booking-confirmation/booking-confirmation-head"
import LoungeLuggage from "components/booking-confirmation/lounge-luggage"
import AddGuests from "components/booking-confirmation/add-guests"
import SpecialRequests from "components/booking-confirmation/special-requests"

const BookingConfirmation: FC = () : ReactElement => {
  const [ configuredLocales, setConfiguredLocales ] = useState(false)
  useEffect(() => {
    if(!configuredLocales) {
      configureLocales()
      setConfiguredLocales(true)
    }
  })

  return (
    <>
      <Head title="Booking Confirmation"/>
      <GlobalStyles />
        {/*<Modal />*/}
        <Navbar/>
        <BookingConfirmationHead />
        <AddGuests />
        <LoungeLuggage />
        <SpecialRequests />
    </>
  )
}

export default BookingConfirmation