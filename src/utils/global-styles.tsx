import Fonts from "./styles/fonts"
import Icons from "./styles/icons"
import React, { FC, ReactElement } from "react"
import SiteGlobal from "./styles/site-global"
import ThirdParties from "./styles/third-parties"

const GlobalStyles: FC = (): ReactElement => (
  <>
    <Fonts />
    <Icons />
    <ThirdParties />
    <SiteGlobal />
  </>
)

export default GlobalStyles