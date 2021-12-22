import styled from "styled-components"
import React, { FC, ReactElement, ReactNode } from "react"

interface IProps {
  id?: number,
  name?: string,
  text?: string,
  children?: ReactNode,
  expand?: boolean,
}

interface IStyledProps {
  expand: boolean
}


const StyledRadioButton = styled.label<IStyledProps>`
  height: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  width: ${({ expand }) => expand ? "100%":"fit-content"};

  .radio {
    display: none;
  }

  .radio-icon {
    width: 20px;
    height: 20px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    border: 2px solid var(--dimgray);
    background-color: var(--transparent);
  }

  .radio-check {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    background-color: var(--transparent);
  }

  .radio-text {
    margin-right: 5px;
  }


  .radio:checked + .radio-text + .radio-icon {
    border-color: var(--primary);
  }

  .radio:checked + .radio-text + .radio-icon .radio-check {
    background-color: var(--primary);
  }

  @media screen and (min-width: 1440px) {
    .radio-text {
      font-size: 0.8rem;
    }
  }
  
  @media screen and (min-width: 1920px) {
    .radio-text {
      font-size: 1rem;
    }
  }

`

const RadioButton: FC<IProps> = ({ id, name, text, expand }): ReactElement => (
  <StyledRadioButton expand={expand} htmlFor={`${name}-radio-${id}`}>
    <input
      type="radio"
      name={name}
      className="radio"
      id={`${name}-radio-${id}`}
    />
    <span className="radio-text">{text}</span>
    <i className="radio-icon">
      <span className="radio-check"></span>
    </i>
  </StyledRadioButton>
)

export default RadioButton