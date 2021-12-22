import { fromApi } from "utils/services"
import { Credentials } from "types/services"

export const login = async (credentials: Credentials) =>
  await fromApi('/login/', credentials)