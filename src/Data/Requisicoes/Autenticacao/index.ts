import { Api } from "../../lib/axios"

export interface Ilogin {
    username: string,
    password: string,
    request_token: string,
}
export interface IRespostaLogin {
  success: boolean
  expires_at: string
  request_token: string
}
export interface IsessionToken {
    request_token: string,
}
export interface IRespostaSession {
  success: boolean,
  session_id: string
}

const getRequestToken = async () => {
    const {data} = await Api.get('/authentication/token/new')
    return data;
}

const login = async (corpo: Ilogin) => {
    const {data} = await Api.post<IRespostaLogin>('/authentication/token/validate_with_login', corpo)
    return data;
}
const sessionToken = async (requestToken: IsessionToken) => {
    const {data} = await Api.post<IRespostaSession>('/authentication/session/new', requestToken)
    return data;
}


 //Autenticacao -> getRequestToken
export const Autenticacao = {
    getRequestToken,   
    login,
    sessionToken
    
}