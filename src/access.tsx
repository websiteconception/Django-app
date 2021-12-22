import store from "store"
import Login from "pages/login"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import ErrorBoundary from "components/error-boundary"
import React, { FC, ReactElement, ReactNode } from "react"


const Access: FC = () : ReactElement => (
  <Provider store={store}>
    <ErrorBoundary>
      <Login />
    </ErrorBoundary>
  </Provider>
)

const container: Element | null = document.querySelector('#root')

ReactDOM.render(<Access />, container)