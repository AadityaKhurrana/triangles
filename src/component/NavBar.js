//import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NavBar.css'
function NavBar()
{
    return(
        <div className="nav">
            <ul className="nav-ul">
                <li className="nav-li"><Link to='/' className="nav-a" >IsTriangle?</Link>  </li>
                <li className="nav-li" ><Link className="nav-a"  to="/Quiz">Quiz</Link>  </li>
                <li className="nav-li"><Link className="nav-a" to="/Hypotenuse">Hypotenuse</Link>  </li>
                <li className="nav-li"><Link className="nav-a" to="/Area">Area</Link>  </li>

            </ul>

        </div>
    );
}
export default NavBar;