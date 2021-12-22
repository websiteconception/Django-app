import { Coords } from "google-map-react"
export interface ToastrReducerState {
  open: boolean,
  message: string,
  toastrType: string,
}

export interface LoginReducerState {
  submitting: boolean,
}

export interface ModalReducerState {
  modal: string,
  open: boolean,
}

export interface StoreState {
  login: LoginReducerState,
  modal: ModalReducerState,
  toastr: ToastrReducerState,
}

export interface MapState {
  center: Coords,
  zoom: number
}