import { ModalAction } from "types/actions"
import { ModalReducerState } from "types/reducers"

import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from "actions/modal"

const initialState = {
  open: false,
  modal: '',
}

const toastr = (
  state : ModalReducerState = initialState,
  action: ModalAction) : ModalReducerState => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        open: true,
        modal: action.payload.modal,
      }
    case CLOSE_MODAL:
      return {
        open: false,
        modal: '',
      }
    default:
      return state
  }
}

export default toastr