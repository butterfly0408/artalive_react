import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg'

const Footer = ({ page_color }) => {

  return (
    <>

        <footer className={`pt-3 mt-4 mx-0 bg-${page_color}`}>
        <hr className={`border-bright-${page_color}`} />
            <div className="container-fluid">
              <div className="row">
                    <div className="col text-center my-auto">
                        <h5 className={`text-bright-${page_color}`}>Art Alive</h5>
                        <img src={logo} width={"100"} alt="Art Alive Logo" />
                    </div>
                    <div className="col text-center">
                        <h5 className={`text-bright-${page_color}`}>Browse</h5>
                        <ul className="list-unstyled">
                            <li><Link className={`text-bright-${page_color}`} to="/WebTest">Home</Link></li>
                            <li><Link className={`text-bright-${page_color}`} to="/about">About</Link></li>
                            <li><Link className={`text-bright-${page_color}`} to="/classes">Classes</Link></li>
                            <li><Link className={`text-bright-${page_color}`} to="/events">Events</Link></li>
                            <li><Link className={`text-bright-${page_color}`} to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <div className="col text-center my-auto">
                        <h5 className={`text-bright-${page_color}`}>Contact</h5>
                        <button className={`btn btn-bright-${page_color} text-${page_color} me-2`}>Join Now</button>
                        <button className={`btn btn-bright-${page_color} text-${page_color}`}>Contact</button>
                    </div>
                    <div className="col text-center my-auto">
                        <h5 className={`text-bright-${page_color}`}>Follow Us</h5>
                        <a href="https://www.instagram.com/art_alive_art_school?igsh=MWQ3ejU1YjR2MXl1dA%3D%3D&utm_source=qr" className={`text-bright-${page_color} me-2`}>Facebook</a>
                        <a href="https://www.facebook.com/share/1DRvxBQwfC/?mibextid=wwXIfr" className={`text-bright-${page_color} me-2`}>Instagram</a>
                    </div>
              </div>
              <hr className={`border-bright-${page_color}`} />
              <div className="mb-1 text-center">
                <p className={`text-bright-${page_color} mb-0`}>&copy; 2025 Art Alive. All rights reserved.</p>
              </div>
            </div>
        </footer>
        
    </>
    );
}

export default Footer;