import { login } from "services/api"
import { LoginStartAction } from "types/actions"
import { loginEnd } from "action-creators/login"
import { openToastr } from "action-creators/toastr"
import { LOGIN_RESPONSE_MESSAGES } from "utils/constants"
import { ResponseMessage } from "types/services"

export const toLoginAttempt = async (
  action: LoginStartAction
) => {
  const { ok, status } = await login(action.payload)
  const message : ResponseMessage = LOGIN_RESPONSE_MESSAGES[status]
  const toastrType = ok ? 'success' : 'error'

  return [
    loginEnd(ok),
    openToastr(message,toastrType),
  ]
}