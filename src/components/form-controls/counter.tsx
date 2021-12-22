import styled from "styled-components"
import React, { FC, ReactElement,useState , ReactNode, ChangeEvent } from "react"

interface IProps {
  name: string,
  icon?: string,
  children? : ReactNode,
}

const StyledCounter = styled.div`
  display: flex;
  padding: 0 15px;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  background-color: var(--jet);

  .counter {
    margin: 0;
    padding: 0;
    width: 100%;
    border: none;
    height: 100%;
    outline: none;
    display: flex;
    cursor: pointer;
    appearance: none;
    user-select: none;
    color: var(--white);
    align-items: center;
    font-size: 1.125rem;
    -webkit-appearance: none;
    background-color: var(--transparent);
  }

  .counter-button__container {
    cursor: pointer;
    position: relative;
  }

  .counter-button {
    padding: 0;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: var(--transparent);
  }

  .icon {
    margin-right: 44px;
  }
`


const Counter: FC<IProps> = ({ icon, name }) : ReactElement => {
  const [ count, setCount ] = useState(1)

  const handleCountChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    const numValue = Number(value)
    setCount(numValue || count)
  }

  const handleAddCountClick = () => setCount(count + 1)
  const handleSubtractCountClick = () => setCount(count - 1 || count)

  return (
    <StyledCounter>
      { icon && <i className={`icon icon-${icon}`}></i> }
      <label className="counter-button__container" htmlFor="add">
        <i className="button-icon icon-add"></i>
        <input
          id="add"
          name="add"
          type="button"
          className="counter-button"
          onClick={handleAddCountClick}
        />
      </label>
      <label className="counter__container" htmlFor={name}>
        <input
          id={name}
          name={name}
          type="number"
          value={count}
          className="counter"
          onChange={handleCountChange}
        />
      </label>
      <label className="counter-button__container" htmlFor="subtract">
        <i className="button-icon icon-less"></i>
        <input
          type="button"
          id="subtract"
          name="subtract"
          className="counter-button"
          onClick={handleSubtractCountClick}
        />
      </label>
    </StyledCounter>
  )
}


export default Counter