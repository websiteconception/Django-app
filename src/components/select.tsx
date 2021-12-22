import styled from "styled-components"
import { IOption } from "types/generics"
import React, {
  FC,
  useRef,
  useState,
  useEffect,
  ReactNode,
  ChangeEvent,
  ReactElement,
} from "react"

interface IProps {
  name: string,
  icon? : string,
  className?: string,
  form?: HTMLFormElement,
  list: Array<IOption>,
  children? : ReactNode,
}

const StyledSelect = styled.label`
  display: flex;
  position: absolute;
  align-items: center;
  background-color: var(--darkgray);

  &.select__container {
    width: 100%;
    min-width: 128px;
    box-sizing: border-box;
    background-color: var(--jet);
  }

  .select {
    width: 0;
    visibility: collapse;
  }

  .select:focus + .dropdown .option {
    color: red;
  }

  .dropdown {
    margin: 0;
    padding: 0;
    width: 100%;
    cursor: pointer;
    font-size: 1.375rem;
    list-style-type: none;
    box-sizing: border-box;
    background-color: var(--jet);
  }

  .open {
    box-shadow: 0px 9px 46px var(--licorice);
  }

  .focused {
    z-index: 4;
  }

  .option {
    cursor: pointer;
    min-width: 126px;
    user-select: none;
    padding: 16px 28px;
    font-size: 1.375rem;
    box-sizing: border-box;
    color: var(--antiflashwhite);
  }

  .option-icon {
    padding: 16px 28px 16px 48px;
  }

  .icon-dropdown-arrow, .icon-checkmark {
    right: 15px;
    position: absolute;
    pointer-events: none;
  }

  .icon-dropdown-arrow {
    top: 26px;
    font-size: 0.3125rem;
  }
  
  .icon-checkmark {
    top: 22px;
    font-size: 0.7rem;
  }

  .inverted {
    transform: rotate(180deg);
  }

  .icon {
    top: 18px;
    left: 18px;
    font-size: 1.5rem;
    position: absolute;
  }
`

const Select: FC<IProps> = ({
  name,
  list,
  icon,
  form,
  className,
}): ReactElement => {

  const [ open, setOpen ] = useState(false)
  const dropdownRef = useRef<HTMLSelectElement>(null)
  const [ selected, setSelected ] = useState("")
  const [ optionsFromDropdownRef,setOptionsFromDropdownRef ] =
    useState<ReactNode>([])
  
  const handleOpenClick = () => setOpen(!open)
  
  const handleSelectedClick = (e: React.MouseEvent<HTMLOptionElement>) => {
    if(open) {
      setSelected(e.currentTarget.value)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(form ? 'dispatching': 'no form')
    form &&
    form.dispatchEvent(new Event('submit',{
      bubbles: true,
      cancelable: true,
    }))
  }

  const displayOptions = (options: HTMLOptionsCollection): ReactNode => {
      const optionsList = Array.from(options)
      if(open) {
        const { 0:selectedOption } =
          optionsList.filter(option => option.selected)
        const remainingOptionsList =
          optionsList.filter(option => !option.selected)
          return [ selectedOption, ...remainingOptionsList ]
            .map(option => (
            <option
              value={option.value}
              onClick={handleSelectedClick}
              className={`option ${icon ? "option-icon" : ""}`}
              key={`${name}-option-${option.value}-dropdown`}
          >
            { option.text }
          </option>
        ))
      }

      if(optionsList.filter(option => selected === option.value).length) {
        return optionsList
        .filter(option => selected === option.value)
        .map(option => (
          <option
            value={option.value}
            onClick={handleSelectedClick}
            className={`option ${icon ? "option-icon":""}`}
            key={`${name}-option-${option.value}-dropdown`}
          >
            { option.text }
          </option>
        ))
      }

      const { 0: firstOption } = optionsList
      const { value, text } = firstOption
      return (
        <option
          value={value}
          onClick={handleSelectedClick}
          className={`option ${icon ? "option-icon":""}`}
          key={`${name}-option-${value}-dropdown`}
        >
          { text }
        </option>
      )
  }

  useEffect(() => {
    if(selected) {
      dropdownRef
      && dropdownRef.current &&
      dropdownRef.current.dispatchEvent(new Event("change", {
        bubbles: true,
        cancelable: true,
      }))
    }
  }, [ selected ])

  useEffect(() => {
    if(dropdownRef && dropdownRef.current) {
      setOptionsFromDropdownRef(displayOptions(dropdownRef.current.options))
    }
  }, [ dropdownRef, open ])

  return (
    <StyledSelect
      htmlFor={name}
      className={`select__container ${className || ""}`}
      >
      { icon && <i className={`icon icon-${icon}`}></i> }
      <select
        id={name}
        name={name}
        value={selected}
        ref={dropdownRef}
        className="select"
        onChange={handleChange}
      >
        {
          list.map(({ text, value }) =>
            (
              <option
                value={value}
                key={`${name}-option-${value}`}
                
              >
                {text}
              </option>
            )
          )
        }
      </select>
      <ul
        className={`dropdown ${open ? "open":""}`} onClick={handleOpenClick}>
        {
            optionsFromDropdownRef
        }
      </ul>
      <i className={`${open && "icon-checkmark" || "icon-dropdown-arrow"}`}></i>
    </StyledSelect>
  )
}


export default Select