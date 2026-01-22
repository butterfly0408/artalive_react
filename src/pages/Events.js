import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from '../components/Section';

import exhibition from '../assets/images/events/exhibition 2025.jpg';


const Events = () => {

  const page_color = 'purple';


  const isMobile = useMediaQuery({ maxWidth: 601 })
  const isTablet = useMediaQuery({ minWidth: 602, maxWidth: 951 });
  const isDesktop = useMediaQuery({ minWidth: 952 });
  
  const [flexDirection, setFlexDirection] = useState('flex-row');
  const [componentWidth, setComponentWidth] = useState('w-50');
  

  useEffect(() => {
    if (isMobile) {
      setFlexDirection('flex-column-reverse');
      setComponentWidth('w-100');
    }

    if (isTablet) {
      setFlexDirection('flex-column-reverse');
      setComponentWidth('w-75');
    }

    if (isDesktop) {
      setFlexDirection('flex-row');
      setComponentWidth('w-50');
    }
  }, [isMobile, isTablet, isDesktop]);


  return (

    <>

      <Navbar page_color={page_color} />

          
      <Section>
        <div className={`d-flex ${flexDirection} gap-3 align-items-center`}>
          <div className={`${componentWidth} card text-bg-dark text-center`}>
            <img src={exhibition} className="card-img img-fluid" style={{ objectFit: 'cover', height: '100%' }} alt='invitation' />
          </div>

          <div className={`${componentWidth} d-flex flex-column justify-content-center`}>
            <h2 className={`font-custom text-bright-${page_color}`}>Our Annual Art Exhibition</h2>
            <p className={`font-custom text-bright-${page_color}`}><em>La Quattordicesima Esposizione</em></p>
            <p>Art Alive Art School takes pleasure in inviting you to our Fifteenth Annual Art Exhibition.</p>
            <p>Bonfires, wine, hearty winter food ... and great company.</p>
            <p>Together with the Rotary club of Benoni Auror, in aid of Clean Projects, an exhibition of artworks by Teachers and Students of Art Alive Art School and guest artist: Mike Franks.</p>
            <p>Wednesday 29 July - Friday 31 July 4pm-9pm and Saturday 1 August 11am-9pm</p>
            <p>56 11th Avenue, Northmead, Benoni</p>
            <p>Tickets: R90 per person from the Art School or your Rotary or Clean Projects host/hostess. Book with Elaine: 084 581 6340</p>
          </div>
        </div>
      </Section>


      <Footer page_color={page_color} />
    
    </>

  );

}

export default Events;