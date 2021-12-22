import { Action } from "redux"
import { ToastrType } from "types/toastr"
import { Credentials } from "types/services"


export interface AppAction extends Action {
}

export interface OpenToastrAction extends AppAction {
  payload: {
    message: string,
    toastrType: ToastrType,
  }
}

export interface LoginStartAction extends Action {
  payload: Credentials
}

export interface LoginEndAction extends Action {
  payload: {
    authenticated?: boolean|undefined,
  }
}

export interface ToastrAction extends Action {
  payload: {
    message: string,
    toastrType: string
  }
}


export interface ModalAction extends Action {
  payload: {
    modal?: string
  }
}

