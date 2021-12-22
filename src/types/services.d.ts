
export type ServiceBody<T extends symbol | string | number> = {
  [k in T]?:any
}

export interface ApiResult {
  ok: boolean,
  status: number,
  error?: Error,
  result?: ServiceBody<string|number|symbol>,
}

export interface Credentials {
  email: string,
  password: string,
}

export type ResponseMessage =
  'Success!' |
  'Welcome!' |
  'Invalid credentials.' |
  'Oops! There was an unexpected error.'

export interface ResponseMessages {
  [statusCode:number]: ResponseMessage
}