import { Api } from "../../lib/axios"

export interface Ilogin {
    username: string,
    password: string,
    request_token: string,
}
export interface Root {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export interface Result {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
const getRequestToken = async () => {
    const {data} = await Api.get('/authentication/token/new')
    return data;
}

const login = async (corpo: Ilogin) => {
    const {data} = await Api.post('/authentication/token/validate_with_login', corpo)
    return data;
}

const dataFilmesPopulares = async () => {
    const {data} = await Api.get('/movie/popular')
    return data
}
const dataFilmesMaisAssistidos = async () => {
    const {data} = await Api.get('/movie/top_rated')
    return data;
}

const dataFilmesLancamentos = async () => {
    const {data} = await Api.get('/movie/upcoming') 
    return data;
}
 //Autenticacao -> getRequestToken
export const Autenticacao = {
    getRequestToken,   
    login,
    dataFilmesPopulares,
    dataFilmesMaisAssistidos,
    dataFilmesLancamentos
}