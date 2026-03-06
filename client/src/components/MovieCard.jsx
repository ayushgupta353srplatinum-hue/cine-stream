export default function MovieCard({movie, addFav}){

const img = "https://image.tmdb.org/t/p/w500" + movie.poster_path

return(

<div className="card">

<img src={img} loading="lazy"/>

<h3>{movie.title}</h3>

<p>{movie.release_date?.slice(0,4)}</p>

<button onClick={()=>addFav(movie)}>❤️</button>

</div>

)

}