import { Action } from "redux"
import { ToastrType } from "types/toastr"
import { OpenToastrAction } from "types/actions"
import {
  OPEN_TOASTR,
  CLOSE_TOASTR,
} from "actions/toastr"

const openToastr = (
  message: string,
  toastrType: ToastrType
): OpenToastrAction => (
  {
    type: OPEN_TOASTR,
    payload: {
      message,
      toastrType,
    },
  }
)

const closeToastr = (): Action => (
  { type: CLOSE_TOASTR }
)

export {
  openToastr,
  closeToastr,
}