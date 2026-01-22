import { useMediaQuery } from 'react-responsive';


import paintbrushes_01 from '../../assets/images/home/paintbrushes_01.jpeg';
import { useEffect, useState } from 'react';




const Hero = ({ buttonSize }) => {

  const isMobile = useMediaQuery({ maxWidth: 501 });
  const isTablet = useMediaQuery({ minWidth: 501, maxWidth: 701 });
  const isDesktop = useMediaQuery({ minWidth: 701 });
  
  const [imageWidth, setImageWidth] = useState('80%');
  const [imageHeight, setImageHeight] = useState('auto');


  useEffect(() => {
    if (isMobile) {
      setImageHeight('350px');
      setImageWidth('100%')
    }

    if (isTablet) {
      setImageWidth('90%');
      setImageHeight('auto');
    }

    if (isDesktop) {
      setImageWidth('80%');
      setImageHeight('auto');
    }
  }, [isTablet, isMobile, isDesktop]);
  

  return (

    <>
    
      <div className="card text-bg-dark text-center" style={{ maxWidth: `${imageWidth}`, height: `${imageHeight}` }}>
        <img src={paintbrushes_01} className='card-img img-fluid w-100' style={{ opacity: 0.5, objectFit: 'cover', height: '100%' }} alt="Paintbrushes" />

        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-wrap">
          <h1 className={`card-title font-custom text-center`}>Keeping Art Alive</h1>
          <p className='card-text font-custom text-center' style={{ maxWidth: '90%' }}>We keep art alive with our interactive art classes and years of knowledge and experience to share. Experience the immersion of art at our annual exhibition.</p>
          <div className='d-flex flex-wrap justify-content-center gap-2'>
            <button className={`btn ${buttonSize} border border-2 border-white text-white font-custom`}>Our Classes</button>
            <button className={`btn ${buttonSize} border border-2 border-white text-white font-custom`}>Our Exhibition</button>
          </div>
        </div>
      </div>
    
    </>

  );

}


export default Hero;