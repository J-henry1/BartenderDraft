import './navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className="navbar">
            <h1><strong>Big Bob's Bar</strong></h1>
            <div className="nav-buttons">
                <button title='Home Page' className="button-home">
                    <Link to="/Home" className="links">Home</Link>
                </button>
            </div>
        </div>
    );
}

export default Navbar;