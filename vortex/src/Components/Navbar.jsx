// import hembar from './assets/hambaar.png'
import {Link,useLocation} from 'react-router-dom'



function  Navbar() {

      const location = useLocation();

  // Conditionally render the Navbar based on the current route
  if (location.pathname === '/Register' || location.pathname === '/Register') {
    return null; 
  }
    return (
         <>
  
  <div className="navbar">
        <div className="logo">
         Vortex
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/Inspiration">Inspiration</Link>
          <Link to="/advertise">Advertise</Link>
          <Link to="/premium">Premium</Link>
          <Link to="/login">Login</Link>
          <Link to="/login">menu</Link>

          {/* <Link to="#"><img src={hembar} alt="menu baar" ></img></Link> */}
        </div>
      </div>

</>
      );
}
export default Navbar;
