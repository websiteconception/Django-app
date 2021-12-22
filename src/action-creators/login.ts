import { Credentials } from "types/services"
import { LoginEndAction, LoginStartAction } from "types/actions"
import {
  LOGIN_END,
  LOGIN_START,
} from "actions/login"


const loginStart = (
  payload: Credentials
) : LoginStartAction => (
  {
    type: LOGIN_START,
    payload,
  }
)

const loginEnd = (
  authenticated: boolean
): LoginEndAction => (
  {
    type: LOGIN_END,
    payload: {
      authenticated,
    },
  }
)

export {
  loginEnd,
  loginStart,
}