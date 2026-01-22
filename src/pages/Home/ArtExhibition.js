import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';


import gallery_01 from '../../assets/images/home/gallery_01.jpeg';
import gallery_02 from '../../assets/images/home/gallery_02.jpeg';





const ArtExhibition = ({ page_color, buttonSize }) => {

  const isMobile = useMediaQuery({ maxWidth: 601 });
  const isTablet = useMediaQuery({ minWidth: 602, maxWidth: 901 });
  const isSmallDesktop = useMediaQuery({ minWidth: 902, maxWidth: 1000 });
  const isDesktop = useMediaQuery({ minWidth: 1001 });

  const [imgContainerWidth, setImgContainerWidth] = useState('w-75');
  const [imgContainerFlex, setImgContainerFlex] = useState('flex-row');
  const [imageWidth, setImageWidth] = useState('w-50');
  const [textWidth, setTextWidth] = useState('w-75');

  useEffect(() => {
    if (isMobile) {
      setTextWidth('w-100');
      setImgContainerWidth('w-100');
      setImgContainerFlex('flex-column');
      setImageWidth('w-100');
    }
    
    if (isTablet) {
      setTextWidth('w-75');
      setImgContainerWidth('w-75');
      setImgContainerFlex('flex-column');
      setImageWidth('w-100');
    }
    
    if (isSmallDesktop) {
      setTextWidth('w-100');
      setImgContainerWidth('w-100');
      setImgContainerFlex('flex-row');
      setImageWidth('w-50');
    }
    
    if (isDesktop) {
      setTextWidth('w-75');
      setImgContainerWidth('w-75');
      setImgContainerFlex('flex-row');
      setImageWidth('w-50');
    }

  }, [isMobile, isTablet, isSmallDesktop, isDesktop]);

  return (

    <>
    
      <div className='d-flex flex-column align-items-center'>
        <div className={`text-center`}>
          <h1 className={`mb-2 font-custom text-bright-${page_color}`}>Art Exhibition</h1>
        </div>
        
        <div className={`p-2 ${textWidth} text-center`}>
          <p>Our annual winter exhibition affords great opportunity to teachers and students for showcasing their work to the public.</p>
          <button className={`me-2 btn ${buttonSize} border border-2 border-bright-${page_color} text-bright-${page_color} font-custom`}>Find out More</button>
        </div>

        <div className={`${imgContainerWidth} d-flex ${imgContainerFlex} gap-3`}>
          <div className={`${imageWidth} card text-bg-dark text-center`}>
            <img src={gallery_01} className="card-img img-fluid" style={{ opacity: 0.5, objectFit: 'cover', height: '100%' }} alt="gallery 1"/>
          </div>
          <div className={`${imageWidth} card text-bg-dark text-center`}>
            <img src={gallery_02} className="card-img img-fluid" style={{ opacity: 0.5, objectFit: 'cover', height: '100%' }} alt="gallery 2"/>
          </div>
        </div>

      </div>
    
    </>

  );

}


export default ArtExhibition;