import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Footer = ({ page_color }) => {

  return (
    <>

      <footer className={`p-3 pt-4 bg-${page_color}`}>

        <div className="">
          <div className="d-flex align-items-center">
            <a className={`navbar-brand text-bright-${page_color} text-center`} href="/">
              <div className='font-custom'>Art Alive</div>
              <img src={logo} width={"200"} className="d-block mx-auto" alt="Art Alive Logo" />
            </a>

            <div className="mx-auto d-flex gap-4">
              <Link className={`text-bright-${page_color}`} to="/WebTest">Home</Link>
              <Link className={`text-bright-${page_color}`} to="/about">About</Link>
              <Link className={`text-bright-${page_color}`} to="/classes">Classes</Link>
              <Link className={`text-bright-${page_color}`} to="/events">Events</Link>
              <Link className={`text-bright-${page_color}`} to="/blog">Blog</Link>
            </div>

            <div className="d-flex gap-2 align-items-center">
              <div>
                <a href="https://web.facebook.com/artaliveartschool#" target='_blank' className={`btn btn-bright-${page_color} text-${page_color} me-2`}>
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/art_alive_art_school/?utm_source=qr#" target='_blank' className={`btn btn-bright-${page_color} text-${page_color} me-2`}>
                  <i class="bi bi-instagram"></i>
                </a>
              </div>
              <div>
                <button className={`btn btn-bright-${page_color} text-${page_color} font-custom me-2`}>Join Now</button>
                <button className={`btn btn-bright-${page_color} text-${page_color} font-custom`}>Contact</button>
              </div>
            </div>
          </div>

          <div className="mb-1 text-center">
            <p className={`text-bright-${page_color} mb-0`}>&copy; 2025 Art Alive. All rights reserved.</p>
          </div>
        </div>

      </footer>
        
    </>
    )
}

export default Footer;