import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
} from "@fortawesome/free-regular-svg-icons";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer container">
        <Link to={'/'} className="logo">Booking.Gbr</Link>
        <div className="navItems">
          <span>EGP</span>
          <FontAwesomeIcon icon={faCircleQuestion} />
          <div>
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar