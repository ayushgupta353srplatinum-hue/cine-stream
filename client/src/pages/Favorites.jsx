import MovieCard from "../components/MovieCard"

export default function Favorites(){

const fav = JSON.parse(localStorage.getItem("fav")) || []

return(

<div className="grid">

{fav.map(m=>(
<MovieCard key={m.id} movie={m}/>
))}

</div>

)

}