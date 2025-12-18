import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg'

const Navbar = ({ page_color }) => {

  return (
    <>

      <nav className={`p-3 mb-4 navbar navbar-expand-lg bg-${page_color}`}>
        <div className="container-fluid">
          {/* Moved the Art Alive to appear on top of the paint image */}
          <a className={`navbar-brand text-bright-${page_color} text-center`} href="/">
            <div>Art Alive</div>
            <img src={logo} width={"200"} className="d-block mx-auto" alt="Art Alive Logo" />
          </a>

          <div>
            <ul className="navbar-nav">
              <li className="me-2 nav-item">
                <Link className={`nav-link text-bright-${page_color}`} to="/WebTest">Home</Link>
              </li>
              <li className="me-2 nav-item">
                <Link className={`nav-link text-bright-${page_color}`} to="/about">About</Link>
              </li>
              <li className="me-2 nav-item">
                <Link className={`nav-link text-bright-${page_color}`} to="/classes">Classes</Link>
              </li>
              <li className="me-2 nav-item">
                <Link className={`nav-link text-bright-${page_color}`} to="/events">Events</Link>
              </li>
              <li className="me-3 nav-item">
                <Link className={`nav-link text-bright-${page_color}`} to="/blog">Blog</Link>
              </li>
              <div className="btn-group">
                <button className={`btn btn-bright-${page_color} text-${page_color}`}>Join Now</button>
                <button className={`btn btn-bright-${page_color} text-${page_color}`}>Contact</button>
              </div>
              <li className="me-3 nav-item">
                <Link className={`nav-link bg-white`} to="/readme">README</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
<hr className={`border-bright-${page_color}`} />
    </>
  );

}

export default Navbar;