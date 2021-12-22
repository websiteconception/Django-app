import styled from "styled-components"
import Select from "components/select"
import { IOption } from "types/generics"
import React, {
  FC,
  useRef,
  useState,
  useEffect,
  FormEvent,
  ReactElement,
} from "react"

const StyledLanguageForm = styled.form`
  width: 100%;
`

const languages: Array<IOption> = [
  {
    text:"English",
    value: "en",
  },
  {
    text: "Spanish",
    value: "es",
  },
]

const LanguageForm: FC = (): ReactElement => {
  const [ form, setForm ] = useState(null)
  const formRef = useRef<HTMLFormElement>(null)
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
  }

  useEffect(() => {
    if(formRef && formRef.current) {
      setForm(formRef.current)
    }
  }, [ formRef ])

  return (
    <StyledLanguageForm ref={formRef} onSubmit={handleSubmit}>
      <Select
        name="language"
        list={languages}
        form={form}
      />
    </StyledLanguageForm>
  )
}

export default LanguageForm