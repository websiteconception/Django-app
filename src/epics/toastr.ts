import { OPEN_TOASTR } from "actions/toastr"
import { delay, mapTo } from "rxjs/operators"
import { closeToastr } from "action-creators/toastr"
import {
  Epic,
  ofType,
} from "redux-observable"


const openToastrEpic: Epic = (
  action$
) => (
  action$.pipe(
    ofType(OPEN_TOASTR),
    delay(3000),
    mapTo(closeToastr())
  )
)



export {
  openToastrEpic,
}