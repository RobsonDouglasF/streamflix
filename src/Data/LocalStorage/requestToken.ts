const getRequestToken = () => localStorage.getItem('request_token');
const setTokenRequest = (token:string) => { //TOKEN PARAMETRO
    //LOCALSTORAGE SET
    localStorage.setItem('request_token', token)
}

//RequestToken -> setTokenRequest
export const RequestToken = {
    getRequestToken,
    setTokenRequest
}