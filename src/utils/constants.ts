import getCookie from "utils/get-cookie"
import { ServiceBody, ResponseMessages } from "types/services"

const BASE_API_URL = API_URL

const OK: number = 200
const FOUND: number = 302
const CREATED: number = 201
const UNAUTHORIZED: number = 401
const NO_CONNECTION: number = -1

const LOGIN_RESPONSE_MESSAGES: ResponseMessages  = {
  [OK]: 'Success!',
  [CREATED]: 'Welcome!',
  [FOUND]: 'Welcome!',
  [UNAUTHORIZED]: 'Invalid credentials.',
  [NO_CONNECTION]: "Oops! There was an unexpected error.",
}

const FETCH_CONFIG = (
  body?: ServiceBody<string|symbol|number>,
  mode?:RequestMode
) : RequestInit => (
  {
    mode: mode || 'cors',
    method: 'POST',
    redirect: 'follow',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': "application/json",
      'X-CSRFToken': getCookie('csrftoken'),
    },
  }
)

export {
  OK,
  FOUND,
  CREATED,
  UNAUTHORIZED,
  BASE_API_URL,
  FETCH_CONFIG,
  NO_CONNECTION,
  LOGIN_RESPONSE_MESSAGES,
}