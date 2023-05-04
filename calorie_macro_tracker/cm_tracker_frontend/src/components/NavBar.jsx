import { Link } from "react-router-dom"

export const NavBar = () => {

    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/search/'}>Search</Link>
            <Link to={'/recordmeal/'}>Record Meal</Link>
            <Link to={'/calendar/'}>Calendar</Link>
        </div>
    )
}