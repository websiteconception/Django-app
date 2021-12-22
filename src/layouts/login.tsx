import styled from "styled-components"
import GlobalStyles from "utils/global-styles"
import React,{ FC, ReactElement, ReactNode } from "react"


const StyledLoginLayout = styled.div`
  height: 100vh;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background-color: var(--darkgray);

  .apartment__img-container {
    margin: 0;
    z-index: 0;
    width: 50vw;
    height: 100vh;
    display: flex;
    position: relative;
    align-items: center;
    background-size: cover;
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/img/amsterdam.jpg");
  }


  @media screen and (min-width:144px) and (max-width: 1024px){
    .apartment__img-container {
      display: none;
    }
  }
`

interface IProps {
  children?: ReactNode
}

const LoginLayout: FC<IProps> = ({ children }): ReactElement => (
  <>
    <GlobalStyles />
    <StyledLoginLayout>
      { children }
      <figure className="apartment__img-container">
      </figure>
    </StyledLoginLayout>
  </>
)



export default LoginLayout