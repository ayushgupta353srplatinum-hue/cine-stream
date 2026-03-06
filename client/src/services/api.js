import axios from "axios"

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_KEY

export const fetchPopular = (page)=>
axios.get(
`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
)

export const searchMovie=(query,page)=>
axios.get(
`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
)