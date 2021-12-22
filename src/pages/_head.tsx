import { Helmet } from "react-helmet"
import React, { FC, ReactElement, ReactNode } from "react"

interface IProps {
  title: string,
  children?: ReactNode,
}

const Head:FC<IProps> = ({ title }): ReactElement => (
  <Helmet defaultTitle="Casai">
    <meta charSet="utf-8"/>
    <link rel="icon" href="/icons/favicon.ico"></link>
    <link rel="manifest" href="manifest.json" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>{ title }</title>
  </Helmet>
)


export default Head