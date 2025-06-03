import { Api } from "../../lib/axios"

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

const dataFilmesPopulares = async () => {
const {data} = await Api.get<Root>('/movie/popular?language=pt-BR')
return data
}


const dataFilmesMaisAssistidos = async () => {
const {data} = await Api.get<Root>('/movie/top_rated?language=pt-BR')
return data;
}

const dataFilmesLancamentos = async () => {
const {data} = await Api.get<Root>('/movie/upcoming?language=pt-BR') 
return data;
}



export const Filmes = {
    dataFilmesPopulares,
    dataFilmesMaisAssistidos,
    dataFilmesLancamentos
}