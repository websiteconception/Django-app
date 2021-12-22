import { LOGIN_START } from "actions/login"
import { Epic, ofType } from "redux-observable"
import { openToastr } from "action-creators/toastr"
import { toLoginAttempt } from "action-streams/login"
import { mergeMap,switchMap, mapTo } from "rxjs/operators"

const loginEpic: Epic = (
  action$
) => (
  action$.pipe(
    ofType(LOGIN_START),
    switchMap(toLoginAttempt),
    mergeMap(action => action),
  )
)

const loadingLoginMessageEpic: Epic = (
  action$
) => (
  action$.pipe(
    ofType(LOGIN_START),
    mapTo(openToastr('Signing in...','loading'))
  )
)

export {
  loginEpic,
  loadingLoginMessageEpic,
}