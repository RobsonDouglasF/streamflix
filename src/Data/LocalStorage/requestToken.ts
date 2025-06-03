const getRequestToken = () => localStorage.getItem('request_token');
const setTokenRequest = (token:string) => { //TOKEN PARAMETRO
    //LOCALSTORAGE SET
    localStorage.setItem('request_token', token)
}
const getRequestSession = () => localStorage.getItem('request_session')
const setRequestSession = (token: string) => {
    localStorage.setItem('request_session', token)
}
const logout = () => {
    localStorage.removeItem('request_token')
    localStorage.removeItem('request_session')
}

//RequestToken -> setTokenRequest
export const RequestToken = {
    getRequestToken,
    setTokenRequest,
    getRequestSession,
    setRequestSession,
    logout
}