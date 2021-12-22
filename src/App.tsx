import store from "store"
import Home from "pages/home"
import BookingConfirmation from "pages/booking-confirmation"
import ListingDetails from "pages/listing-details"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import SearchResults from "pages/search-results"
import React, { FC, ReactElement } from "react"

import TestingPanels from "pages/testing-panels"

import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom"


const App: FC = (): ReactElement =>(
  <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
            {/* <SearchResults /> */}
          </Route>
          <Route path="/booking-confirmation">
            <BookingConfirmation />
          </Route>
          <Route path="/listing-details">
            <ListingDetails />
          </Route>
          <Route path="/testing-panels">
            <TestingPanels />
          </Route>
          <Route exact path="/units">
            <SearchResults />
          </Route>
          <Route path="*" component={() => <div>Not found</div>}/>
        </Switch>
      </Router>
  </Provider>
)

const container: Element | null = document.querySelector('#root')

ReactDOM.render(<App />, container)