import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Navbar = ({ page_color }) => {

  return (
    <>

      <nav className={`p-3 mb-4 navbar navbar-expand-lg bg-${page_color}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-bright-${page_color} text-center`} href="/">
            <div className='font-custom'>Art Alive</div>
            <img src={logo} width={"200"} className="d-block mx-auto" alt="Art Alive Logo" />
          </a>

          <div>
            <ul className="navbar-nav">
              <li className="me-2 nav-item">
                <Link className={`nav-link text-bright-${page_color} font-custom`} to="/WebTest">Home</Link>
              </li>
              <li className="me-2 nav-item">
                <Link className={`nav-link text-bright-${page_color} font-custom`} to="/about">About</Link>
              </li>
              <li className="me-2 nav-item">
                <Link className={`nav-link text-bright-${page_color} font-custom`} to="/classes">Classes</Link>
              </li>
              <li className="me-2 nav-item">
                <Link className={`nav-link text-bright-${page_color} font-custom`} to="/events">Events</Link>
              </li>
              <div className="">
                <Link className={`me-2 btn btn-bright-${page_color} text-${page_color} font-custom`} to="/contact">Join Now</Link>
                <Link className={`btn btn-bright-${page_color} text-${page_color} font-custom`} to="/contact">Contact</Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );

}

export default Navbar;