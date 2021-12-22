import { Action } from "redux"
import { ModalAction } from "types/actions"
import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from "actions/modal"

const openModal = (
  modal: string,
): ModalAction => (
  {
    type: OPEN_MODAL,
    payload: {
      modal,
    },
  }
)

const closeModal = (): ModalAction => (
  { type: CLOSE_MODAL, payload: { modal: '' } }
)

export {
  openModal,
  closeModal,
}