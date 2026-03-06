import { useState, useEffect } from "react"
import SearchBar from "../components/SearchBar"
import MovieCard from "../components/MovieCard"
import useDebounce from "../hooks/useDebounce"
import useFetchMovies from "../hooks/useFetchMovies"

export default function Home(){

const [search,setSearch] = useState("")
const [page,setPage] = useState(1)
const [aiMovie,setAiMovie] = useState(null)

const debounced = useDebounce(search,500)

useEffect(()=>{
setPage(1)
},[debounced])

const movies = useFetchMovies(debounced,page)

// AI movie search
const handleAiMovie = (title)=>{
setSearch(title)
setAiMovie(title)
}

// favorites
const addFav = (movie)=>{

let fav = JSON.parse(localStorage.getItem("fav")) || []

if(!fav.find(f=>f.id === movie.id)){
fav.push(movie)
}

localStorage.setItem("fav",JSON.stringify(fav))

}

// infinite scroll
useEffect(()=>{

const handleScroll = ()=>{

if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 200){

setPage(prev => prev + 1)

}

}

window.addEventListener("scroll",handleScroll)

return ()=> window.removeEventListener("scroll",handleScroll)

},[])

return(

<div>

<SearchBar setSearch={setSearch} onMovieFound={handleAiMovie}/>

{aiMovie && (
<h2 style={{textAlign:"center"}}>
AI Suggested: {aiMovie}
</h2>
)}

<div className="grid">

{movies.map(m=>(
<MovieCard key={m.id} movie={m} addFav={addFav}/>
))}

</div>

</div>

)

}