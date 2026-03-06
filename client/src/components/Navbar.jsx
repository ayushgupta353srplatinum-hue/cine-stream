import { Link } from "react-router-dom"

export default function Navbar(){

return(
<div className="nav">

<h1>CineStream</h1>

<div>
<Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
<Link to="/favorites">Favorites</Link>
</div>

</div>
)

}