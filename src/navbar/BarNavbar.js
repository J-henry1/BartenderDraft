import './navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div className="navbar">
            <h1><strong>Lumber Yard</strong></h1>
            {/* <button title='Home Page' class="button"><Link to="/Home" className="links"><FontAwesomeIcon icon={faHouse} /></Link></button> */}
        </div>
    )
}

export default Navbar;