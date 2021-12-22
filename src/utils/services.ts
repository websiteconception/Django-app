import NProgress from "nprogress"
import { ServiceBody, ApiResult } from "types/services"
import { BASE_API_URL, FETCH_CONFIG } from "./constants"

const catchResponseError = (error: Error): ApiResult => ({
    error,
    ok: false,
    status: -1,
    result: null,
})


const resolveApiResponse = async (response: Response) : Promise<ApiResult> => {
  const { ok, status } = response
  const result = await response.json()
  return { ok, status, result }
}

export const fromApi = async (
  path: string,
  body?: ServiceBody<string|number|symbol>,
  mode?: RequestMode
) => {
  NProgress.start()
  const url = `${BASE_API_URL}${path}`
  const { ok, error, status, result }: ApiResult =
    await fetch(url, FETCH_CONFIG(body,mode))
      .then(resolveApiResponse)
      .catch(catchResponseError)
  
  NProgress.done()

  return { ok, status, result, error }
}