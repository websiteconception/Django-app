import Head from "./_head"
import { connect } from "react-redux"
import Toastr from "components/toastr"
import LoginLayout from "layouts/login"
import { Credentials } from "types/services"
import GlobalStyles from "utils/global-styles"
import { LoginStartAction } from "types/actions"
import LoginForm from "components/forms/login-form"
import { LoginReducerState, StoreState } from "types/reducers"
import React, { FC, ReactElement, ReactNode, FormEvent } from "react"
import {
  loginStart,
} from "action-creators/login"

interface IProps {
  children?: ReactNode,
  submitting: boolean,
  loginStart: (payload: Credentials) => LoginStartAction,
}

const Login: FC<IProps> = ({
  submitting,
  loginStart,
}) : ReactElement => {

  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) : void => {
    e.preventDefault()
    const formData: FormData = new FormData(e.currentTarget)
    const emailEntry: FormDataEntryValue|string =
      formData.get('email') || ''
    const passwordEntry: FormDataEntryValue|string =
      formData.get('password') || ''

    if (!submitting && emailEntry && passwordEntry) {
      const credentials: Credentials = {
        email: emailEntry.toString(),
        password: passwordEntry.toString(),
      }
      loginStart(credentials)
    }
  }

  return (
    <LoginLayout>
      <Head title="Casai :: Check in to the future!"/>
      <GlobalStyles />
      <Toastr isLogin/>
      <LoginForm
        onSubmit={handleLoginSubmit}
      />
    </LoginLayout>
  )
}

const mapStateToProps = ({ login } : StoreState) : LoginReducerState => ({
    submitting: login.submitting,
})

const mapDispatchToProps = {
  loginStart,
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)