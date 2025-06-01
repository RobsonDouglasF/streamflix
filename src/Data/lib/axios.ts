import axios from "axios"

export const API_URL = 'https://api.themoviedb.org/3'

export const Api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
    },
    
})

