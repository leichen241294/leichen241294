function saveAccessToken(accessToken: string) {
  localStorage.setItem('accessToken', accessToken);
}

function getAccessToken() {
  return localStorage.getItem('accessToken');
}

function clearAccessToken() {
  return localStorage.removeItem('accessToken');
}

export { saveAccessToken, getAccessToken, clearAccessToken }