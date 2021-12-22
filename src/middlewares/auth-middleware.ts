import { Store, Dispatch } from "redux"
import { LOGIN_END } from "actions/login"
import { LoginEndAction } from "types/actions"

export const authMiddleware = (store : Store) =>
  (next : Dispatch) =>
    (action: LoginEndAction) => {
      const { type, payload } = action
      if (type == LOGIN_END && payload.authenticated) {
        setTimeout(() => {
          window.location.replace("/")
        }, 3000)
      }
      next(action)
}