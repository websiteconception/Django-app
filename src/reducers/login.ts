import { Action } from "redux"
import {
  LOGIN_END,
  LOGIN_START,
} from "actions/login"


const initialState = {
  submitting: false,
}



const login = (state = initialState, action: Action) => {
  switch(action.type) {
    case LOGIN_START:
      return {
        submitting: true,
      }
    case LOGIN_END:
      return {
        submitting: false,
      }
    default:
      return state
  }
}

export default login