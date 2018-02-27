export function handleApiErrors (response) {
  if (!response.ok) throw Error(response.statusText)
  return response
}

export function setToken(idToken) {
  localStorage.setItem('id_token', idToken)
}

export function setId(id) {
  localStorage.setItem('id_user', id)
}

export function getId() {
  return localStorage.getItem('id_user')
}

export function getToken() {
  return localStorage.getItem('id_token')
}