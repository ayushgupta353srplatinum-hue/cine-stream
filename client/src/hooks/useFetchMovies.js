import { useState,useEffect } from "react"
import axios from "axios"

export default function useFetchMovies(search,page){

const [movies,setMovies] = useState([])

const API = import.meta.env.VITE_TMDB_KEY

useEffect(()=>{

const fetchMovies = async ()=>{

let url = ""

if(search){

url = `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${search}&page=${page}`

}else{

url = `https://api.themoviedb.org/3/movie/popular?api_key=${API}&page=${page}`

}

const res = await axios.get(url)

if(page === 1){
setMovies(res.data.results)
}else{
setMovies(prev=>[...prev,...res.data.results])
}

}

fetchMovies()

},[search,page])

return movies

}