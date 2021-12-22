import styled from "styled-components"
import React, { FC, ReactElement, ReactNode } from "react"

interface IProps {

}

const StyledImageCoverHead = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
	
  .image-cover-head__img-container {
    margin: 0;
    display: flex;
    justify-content: center;
  }	

  .image-cover-head__img {
    width: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 320px) {
    .image-cover-head__img {
      height: 316px;
    }
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 35px;
    .image-cover-head__img {
  	  height: 584px;
  	}
  }

  @media screen and (min-width: 1920px) {
    .image-cover-head__img {
  	  height: 780px;
  	}
  }
`


const ImageCoverHead: FC<IProps> = ({  }): ReactElement => (
  <StyledImageCoverHead>
  	<figure className="image-cover-head__img-container">
    	<img className="image-cover-head__img" alt="people" src="/img/img-header.png"/>
    </figure>
  </StyledImageCoverHead>
)


export default ImageCoverHead
