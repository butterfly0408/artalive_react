import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";




const ArtClasses = ({ page_color, buttonSize }) => {

  const isMobile = useMediaQuery({ maxWidth: 501 });
  const isTablet = useMediaQuery({ minWidth: 501, maxWidth: 851 });
  const isSmallDesktop = useMediaQuery({ minWidth: 851, maxWidth: 1061 });
  const isDesktop = useMediaQuery({minWidth: 1061});
  
  const [flexDirection, setFlexDirection] = useState('flex-row');
  const [alignCenter, setAlignCenter] = useState('');
  const [cardWidth, setCardWidth] = useState('w-100');

  useEffect(() => {
    if (isMobile) {
      setFlexDirection('flex-column');
      setCardWidth('w-100');
    }
    
    if (isTablet) {
      setFlexDirection('flex-column');
      setCardWidth('w-100')
    }
    
    if (isSmallDesktop) {
      setFlexDirection('flex-column');
      setAlignCenter('align-items-center');
      setCardWidth('w-75');
    }
    
    if (isDesktop) {
      setFlexDirection('flex-row');
      setAlignCenter('');
      setCardWidth('w-100');
    }
  }, [isMobile, isTablet, isSmallDesktop, isDesktop]);

  return (

    <>
    
      <div className="d-flex flex-column">
        <div className='text-center'>
          <h1 className={`mb-2 font-custom text-bright-${page_color}`}>Art Classes</h1>
        </div>

        <div className={`px-2 d-flex ${flexDirection} ${alignCenter} gap-3`}>
          <div className={`${cardWidth} card text-center border-${page_color} bg-${page_color}`}>
            <div className='card-body'>
              <h2 className={`card-title font-custom text-bright-${page_color}`}>Mediums</h2>
              <p className='card-text'>For the painter we teach Oil, Acrylics, and Watercolors. For the sketcher we teach Pencils, Pastels, Charcoal, and Ink Pen.</p>
            </div>
          </div>
        
          <div className={`${cardWidth} card text-center border-${page_color} bg-${page_color}`}>
            <div className='card-body'>
              <h2 className={`card-title font-custom text-bright-${page_color}`}>Teachers</h2>
              <p className='card-text'>Art Alive has 9 teachers with various qualifications and years of experience.</p>
              <button className={`btn ${buttonSize} border border-2 border-bright-${page_color} text-bright-${page_color} font-custom`}>Meet Our Teachers</button>
            </div>
          </div>
        
          <div className={`${cardWidth} card text-center border-${page_color} bg-${page_color}`}>
            <div className='card-body'>
              <h2 className={`card-title font-custom text-bright-${page_color}`}>Availability & Class Times</h2>
              <p className='card-text'>We have morning and afternoon classes, Mondays to Saturdays, with various teachers for children and adults.</p>
              <div className='d-flex gap-3 justify-content-center'>
                <button className={`btn ${buttonSize} border border-2 border-bright-${page_color} text-bright-${page_color} font-custom`}>Our Classes</button>
                <button className={`btn ${buttonSize} border border-2 border-bright-${page_color} text-bright-${page_color} font-custom`}>Join Today</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>

  );

}


export default ArtClasses;