import { login, toastr, map, modal } from "reducers"
import { AppAction } from "types/actions"
import { authMiddleware } from "middlewares/auth-middleware"
import { loginEpic, openToastrEpic, loadingLoginMessageEpic } from "epics"
import {
  combineEpics,
  EpicMiddleware,
  createEpicMiddleware,
} from "redux-observable"

import {
  Store,
  Reducer,
  createStore,
  combineReducers,
  applyMiddleware,
} from "redux"

const rootReducer: Reducer = combineReducers({
  map,
  login,
  toastr,
  modal,
})

const rootEpic = combineEpics(
  loginEpic,
  openToastrEpic,
  loadingLoginMessageEpic,
)

const epicMiddleware: EpicMiddleware<AppAction> =
  createEpicMiddleware<AppAction>()

const store: Store =
  createStore(rootReducer,
    applyMiddleware(epicMiddleware, authMiddleware))

epicMiddleware.run(rootEpic)

export default store

