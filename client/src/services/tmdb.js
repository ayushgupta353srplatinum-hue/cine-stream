import axios from "axios"

const API = import.meta.env.VITE_TMDB_KEY

export async function searchMovie(title){

const res = await axios.get(
`https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${title}`
)

return res.data.results

}