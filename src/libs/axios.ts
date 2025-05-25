
import axios from 'axios'

export const Api = axios.create({
  baseURL: 'https://api.themoviedb.org',
  params: {
    api_key: 'e17a19e5fe9e528bd9d9e843a2b294db',
    language: 'pt-BR'
  }
})
