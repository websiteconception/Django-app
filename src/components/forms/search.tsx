import styled from "styled-components"
import React, { FC, useState, ReactElement } from "react"


const StyledSearch = styled.form`
  flex-grow: 1;
  display: flex;
  position: relative;
  align-items: center;

  .icon-search {
    right: 18px;
    cursor: pointer;
    position: absolute;
    pointer-events: none;
    color: var(--antiflashwhite);
  }

  .search__container {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    align-items: center;
    background-color: var(--darkgray);
  }

  .search {
    height:100%;
    width: 100%;
    flex-grow: 1;
    border: none;
    outline: none;
    color: var(--white);
    background-color: var(--transparent);
  }

  .bottom-border {
    left: 0;
    bottom: 0;
    width: 100%;
    position: absolute;
    background-color: var(--primary);
  }

  .bottom-border.open {
    height: 1px;
    animation-duration: 0.1s;
    animation-name: borderFocus;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
  }

  .bottom-border.closed {
    height: 1px;
    animation-duration: 0.1s;
    animation-name: borderBlur;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
  }

  @keyframes borderFocus {
    from {
      transform: scaleX(0);
    }

    to {
      transform: scaleX(1);
    }
  }

  @keyframes borderBlur {
    from {
      transform: scaleX(1);
    }

    to {
      transform: scaleX(0);
    }
  }

  @media screen and (min-width: 375px) {
    height: 48px;
  }


  @media screen and (min-width: 1024px) {
    height: 55px;
    margin: 0 235px 0 118px;

    .search__container {
      box-sizing: border-box;
    }

    .search {
      font-size: 18px;
      padding-left: 18px;
    }

    .icon-search {
      font-size: 20px;
    }
  }
`


const Search: FC = (): ReactElement => {
  const [ borderClassName, setBorderClassName ] = useState("")

  const handleSearchFocus = () => setBorderClassName("open")
  const handleSearchBlur = () => setBorderClassName("closed")

  return (
    <StyledSearch>
      <label className="search__container" htmlFor="search">
        <input
          id="search"
          autoComplete="off"
          className="search"
          placeholder="Write where, when and with whom you want to go…"
          onBlur={handleSearchBlur}
          onFocus={handleSearchFocus}
        />
        <div
          className={`bottom-border ${borderClassName}`}
        ></div>
        <i className="icon-search"></i>
      </label>
    </StyledSearch>
  )
}


export default Search