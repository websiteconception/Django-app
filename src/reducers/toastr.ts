import { ToastrAction } from "types/actions"
import { ToastrReducerState } from "types/reducers"

import {
  OPEN_TOASTR,
  CLOSE_TOASTR,
} from "actions/toastr"

const initialState = {
  open: false,
  message: '',
  toastrType: '',
}

const toastr = (
  state : ToastrReducerState = initialState,
  action: ToastrAction) : ToastrReducerState => {
  switch (action.type) {
    case OPEN_TOASTR:
      return {
        open: true,
        message: action.payload.message,
        toastrType: action.payload.toastrType,
      }
    case CLOSE_TOASTR:
      return {
        open: false,
        message: '',
        toastrType:'',
      }
    default:
      return state
  }
}

export default toastr