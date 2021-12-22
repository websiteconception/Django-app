import GlobalStyles from "utils/global-styles"
import Navbar from "components/navigation/navbar"
import React, { FC, ReactElement, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Layout: FC<IProps> = ({ children }): ReactElement => (
  <>
    <GlobalStyles />
    <Navbar/>
    {children}
  </>
)

export default Layout