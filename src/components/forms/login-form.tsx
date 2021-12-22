import Brand from "components/brand"
import styled from "styled-components"
import React, {
  FC,
  useState,
  useEffect,
  ReactNode,
  FormEvent,
  ChangeEvent,
  ReactElement,
  EffectCallback,
} from "react"

// #region Styles
const StyledLoginForm = styled.form`
  z-index: 1;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 10px 0 15px 2px black;

  .login__heading {
    color: var(--antiflashwhite);
  }

  .login__input {
    z-index: 2;
    height: 40px;
    border: none;
    width: 240px;
    outline: none;
    margin: 10px 0;
    padding: 0 10px;
    font-size: 1rem;
    position: relative;
    color: var(--white);
    font-family: inherit;
    box-sizing: border-box;
    background-color: var(--transparent);
    border-bottom: 1px solid var(--gray);
  }

  .login__input-text {
    top: 20px;
    margin: 0 5px;
    color: var(--white);
    position: absolute;
    transition-timing-function: linear;
    transition: top 0.2s, font-size 0.2s, color 0.2s;
  }

  .login__input.focus + .login__input-text {
    top: -10px;
    font-size: 0.875rem;
    color: var(--gray);
  }

  .login__input-container {
    display: flex;
    margin: 10px 0;
    position: relative;
    align-items: center;
  }

  .login__submit-button {
    z-index: 2;
    width: 240px;
    border: none;
    height: 40px;
    outline: none;
    margin: 25px 0;
    font-size: 1rem;
    cursor: pointer;
    position: relative;
    color: var(--white);
    border-radius: 2px;
    background-color: var(--primary);
    transition: background-color 0.4s;
    box-shadow: 4px 4px 15px 2px var(--black);
  }

  .login__submit-button:hover {
    background-color: var(--blue);
  }

  .login__password-visibility-button {
    right: 0;
    z-index: 3;
    width: 48px;
    height: 48px;
    border: none;
    cursor: pointer;
    appearance: none;
    position: absolute;
    background-color: var(--transparent);
  }

  .login__submit-button:focus {
    background-color: var(--blue);
  }

  .visibility-icon {
    z-index: 2;
    right: 12px;
    display: flex;
    font-size: 1.625rem;
    color: var(--gray);
    position: absolute;
    align-items: center;
    pointer-events: none;
    justify-content: center;
  }

  .visibility-layer {
    width: 12px;
    height: 12px;
    position: absolute;
    background-color: var(--gray);
  }

  .visibility-icon.show {
    color: var(--truewhite);
  }

  .visibility-layer.show {
    background-color: var(--transparent);
  }

  .visibility-slash {
    width: 4px;
    z-index: 3;
    right: 22px;
    height: 32px;
    display: flex;
    position: absolute;
    pointer-events: none;
    transform: rotate(60deg);
  }

  .visible-half-slash,
  .invisible-half-slash {
    width: 2px;
    height: 32px;
  }

  .visible-half-slash {
    background-color: var(--gray);
  }

  .invisible-half-slash {
    background-color: var(--darkgray);
  }

  .login__background-img-container {
    z-index: 0;
    width: 450px;
    opacity: 0.4;
    height: 600px;
    right: -100px;
    bottom: -100px;
    position: absolute;
  }

  .login__background-img {
    width: 100%;
    height: 100%;
  }


  @media screen and (min-width: 144px) and (max-width: 420px) {
  }

  @media screen and (min-width: 320px) and (max-width:1023px) {
    width: 100vw;
    .login__heading {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 50vw;
    .login__heading {
      font-size: 1.125rem;
    }
  }
`
// #endregion

interface IProps {
  onSubmit: (e:FormEvent<HTMLFormElement>) => void,
  children?: ReactNode,
}

const LoginForm: FC<IProps> = ({ onSubmit }) : ReactElement => {
  // #region State
  const [ emailInputValue, setEmailInputValue ] = useState<string>('')
  const [ passwordInputValue, setPasswordInputValue ] = useState<string>('')
  const [ passwordVisibility, setPasswordVisibility ] = useState<boolean>(false)
  
  const [
    visibilityClassName,
    setVisibilityClassName,
  ] = useState<string>('')

  const [
    emailInputFocusClassName,
    setEmailInputFocusClassName,
  ] = useState<string>('')

  const [
    passwordInputFocusClassName,
    setPasswordInputFocusClassName,
  ] = useState<string>('')

  // #endregion

  // #region Event Handlers
  const handleEmailInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement> ) : void =>
    setEmailInputValue(value)

  const handlePasswordInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) : void =>
    setPasswordInputValue(value)

  const handleEmailInputFocus = () : void =>
    setEmailInputFocusClassName("focus")

  const handlePasswordInputFocus = () : void =>
    setPasswordInputFocusClassName("focus")

  const handleEmailInputBlur = () : void =>
    setEmailInputFocusClassName(emailInputValue.length ? "focus": "")

  const handlePasswordInputBlur = () : void =>
    setPasswordInputFocusClassName(passwordInputValue.length ? "focus" : "")

  const handleVisibilityButtonClick = () : void =>
    setPasswordVisibility(!passwordVisibility)

  // #endregion

  // #region Effects
  const setVisibilityClassNameEffect: EffectCallback = () : void => {
    setVisibilityClassName(passwordVisibility ? "show": "")
  }

  useEffect(setVisibilityClassNameEffect,[ passwordVisibility ])
  // #endregion

  return (
    <StyledLoginForm onSubmit={onSubmit} method="post" action="/wAuth/">
      <Brand />
      <h1 className="login__heading">Check in to the future.</h1>
      <label className="login__input-container">
        <input
          name="email"
          value={emailInputValue}
          onBlur={handleEmailInputBlur}
          onFocus={handleEmailInputFocus}
          onChange={handleEmailInputChange}
          className={
            `login__input login__email-input ${
              emailInputFocusClassName
            }`
          }
        />
        <span className="login__input-text">Email</span>
      </label>
      <label className="login__input-container">
        <input
          name="password"
          value={passwordInputValue}
          onBlur={handlePasswordInputBlur}
          onFocus={handlePasswordInputFocus}
          onChange={handlePasswordInputChange}
          type={passwordVisibility ? "text":"password"}
          className={
            `login__input login__password-input ${passwordInputFocusClassName}`
          }
        />
        <span className="login__input-text">Password</span>
        <input
          type="button"
          className="login__password-visibility-button"
          onClick={handleVisibilityButtonClick}
        />
        <i className={
          `visibility-icon icon-remove_red_eyevisibility ${visibilityClassName}`
        }>
          <div className={`visibility-layer ${visibilityClassName}`}></div>
        </i>
        {
          (
            !passwordVisibility &&
            <div className="visibility-slash">
              <div className="visible-half-slash"></div>
              <div className="invisible-half-slash"></div>
            </div>
          )
        }
      </label>
      <input
        type="submit"
        value="Alright, check me in!"
        className="login__submit-button"
      />
    </StyledLoginForm>
  )
}

export default LoginForm