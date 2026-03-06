import { useState } from "react"
import MoodMatcher from "./MoodMatcher"

export default function SearchBar({ setSearch, onMovieFound }) {

return(

<div>

<input
type="text"
placeholder="Search movies..."
onChange={(e)=>setSearch(e.target.value)}
className="search"
/>

<MoodMatcher onMovieFound={onMovieFound}/>

</div>

)

}