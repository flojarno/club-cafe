
import { Link } from "react-router-dom";
import './Header.css'

function Header() {

    return (
        <div className="Header">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex justify-content-center">
                        <Link className="brand text-dark" to="/">Club Café</Link>
                </div>
            </nav>
        </div>
    )
}

export default Header;