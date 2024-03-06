import {Outlet} from "react-router-dom"
import { Link } from 'react-router-dom'

export default function Layout () {
    
    return (
        <div>
            <nav className="navbar">
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                </ul>
            </nav>
            <Outlet/>
            <div>
            <h1>Hi</h1>
            <br></br>
            <h1>I'm Marcia, a web developer...</h1>
        </div>
        </div>
    )
}