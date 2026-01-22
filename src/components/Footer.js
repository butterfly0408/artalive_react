import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';

import logo from '../assets/images/logo.png'

const Footer = ({ page_color }) => {

  const isMobile = useMediaQuery({ maxWidth: 551 });
  const isNotMobile = useMediaQuery({ minWidth: 552 });

  const [buttonSize, setButtonSize] = useState('');

  useEffect(() => {
    if (isMobile)     {
      setButtonSize('btn-sm');
    }

    if (isNotMobile) {
      setButtonSize('');
    }
  }, [isMobile, isNotMobile]);


  return (
    <>

      <footer className={`p-3 pt-4 m-0 bg-${page_color}`}>

        <div className="">
          <div className="d-flex flex-wrap align-items-center justify-content-center">
            <a className={`navbar-brand text-bright-${page_color} text-center mb-3`} href="/">
              <div className='font-custom'>Art Alive</div>
              <img src={logo} width={"200"} className="d-block mx-auto" alt="Art Alive Logo" />
            </a>

            <div className="mx-auto d-flex flex-wrap gap-4 justify-content-center mb-3">
              <Link className={`text-bright-${page_color}`} to="/WebTest">Home</Link>
              <Link className={`text-bright-${page_color}`} to="/about">About</Link>
              <Link className={`text-bright-${page_color}`} to="/classes">Classes</Link>
              <Link className={`text-bright-${page_color}`} to="/events">Events</Link>
              <Link className={`text-bright-${page_color}`} to="/blog">Blog</Link>
            </div>

            <div className="d-flex flex-wrap gap-2 align-items-center justify-content-center">
                <a href="https://web.facebook.com/artaliveartschool#" target='_blank' className={`btn ${buttonSize} btn-bright-${page_color} text-${page_color}`}>
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/art_alive_art_school/?utm_source=qr#" target='_blank' className={`btn ${buttonSize} btn-bright-${page_color} text-${page_color}`}>
                  <i className="bi bi-instagram"></i>
                </a>
                <button className={`btn ${buttonSize} btn-bright-${page_color} text-${page_color} font-custom`}>Join Now</button>
                <button className={`btn ${buttonSize} btn-bright-${page_color} text-${page_color} font-custom`}>Contact</button>
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