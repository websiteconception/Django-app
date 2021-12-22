import { ToastrType } from "./toastr"
import { OpenToastrAction } from "./actions"

export type OpenToastrActionCreator = (
  message: string,
  toastrType: ToastrType
) => OpenToastrAction