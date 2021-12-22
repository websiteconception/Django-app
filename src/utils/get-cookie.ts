const getCookie = (name:string): string => {
  if(!document.cookie) {
    return ''
  }

  const cookies: Array<string> = document.cookie.split(";")
  const foundCookie: string =
    cookies.filter(cookie => cookie.includes(name))[0]
  const cookieVal: string = foundCookie && foundCookie.split("=")[1] || ''
  return cookieVal
}


export default getCookie