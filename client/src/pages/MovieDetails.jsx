import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MovieDetails() {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const API = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {

    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API}`)
      .then((res) => setMovie(res.data));

  }, []);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div className="details">

      <h1>{movie.title}</h1>

      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
      />

      <p>{movie.overview}</p>

    </div>
  );
}

export default MovieDetails;