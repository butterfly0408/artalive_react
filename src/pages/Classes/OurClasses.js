import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

import class1 from '../../assets/images/classes/classes_01.jpeg';
import class2 from '../../assets/images/classes/classes_02.jpeg';




const OurClasses = ({page_color, buttonSize}) => {

  const isMobile = useMediaQuery({ maxWidth: 451 });
  const isSmallTablet = useMediaQuery({ minWidth: 452, maxWidth: 651 });
  const isTablet = useMediaQuery({ minWidth: 652, maxWidth: 901 });
  const isSmallDesktop = useMediaQuery({ minWidth: 902, maxWidth: 1101 });
  const isDesktop = useMediaQuery({ minWidth: 1101 });

  const [flexDirection, setFlexDirection] = useState('flex-row');
  const [width, setWidth] = useState('w-100');
  const [imageVisible, setImageVisible] = useState('');
  const [imageWidth, setImageWidth] = useState('')

  useEffect(() => {
    if (isMobile) {
      setFlexDirection('flex-column-reverse');
      setWidth('w-100');
      setImageVisible('d-none');
      setImageWidth('w-100');
    }

    if (isSmallTablet) {
      setFlexDirection('flex-column-reverse');
      setWidth('w-100');
      setImageVisible('');
      setImageWidth('');
    }

    if (isTablet) {
      setFlexDirection('flex-column-reverse');
      setWidth('w-75');
      setImageVisible('');
      setImageWidth('');
    }

    if (isSmallDesktop) {
      setFlexDirection('flex-row');
      setWidth('w-100');
      setImageVisible('d-none');
      setImageWidth('');
    }

    if (isDesktop) {
      setFlexDirection('flex-row');
      setWidth('w-100');
      setImageVisible('');
      setImageWidth('');
    }

  }, [isMobile, isSmallTablet, isTablet, isSmallDesktop, isDesktop]);

  return (

    <>
    
      <div className={`${width} d-flex ${flexDirection} gap-3 justify-content-center`}>
        <div className='d-flex justify-content-center gap-3' style={{ minWidth: '50%' }}>
          <div className={`card text-bg-dark text-center ${imageVisible}`}>
            <img src={class1} className='card-img img-fluid' style={{ opacity: 0.5, objectFit: 'cover', height: '100%' }} alt='painting'/>
          </div>
          <div className={`${imageWidth} card text-bg-dark text-center`}>
            <img src={class2} className='card-img img-fluid' style={{ opacity: 0.5, objectFit: 'cover', height: '100%' }} alt='painting'/>
          </div>
        </div>

        <div className='px-2 d-flex flex-column justify-content-center' style={{ minWidth: '50%' }}>
          <h2 className={`font-custom text-bright-${page_color}`}>Our Classes</h2>
          <p>In our interactive classes our teachers create an atmosphere where artists are free to create without inhibitions. Every student is guided on their own journey with art. Subject and medium is the choice of the artist.</p>
          <p>Whether you are an experienced artist, looking for a community of like-minded people to share ideas and inspiration, or if you've never even touched a brush or pencil, our teachers can guide you to build your skills, hone your craft, and bring your art alive.</p>
          <p>We offer art classes for children and adults, no one is too old or too young to be creative.</p>
          <p>All of our teachers can aid a student with drawing and painting, in addition, we have teachers who excel at realism, oils, acrylics, and various drawing mediums like pastels, pencils, and ink.</p>
          <div>
            <button className={`btn ${buttonSize} border border-2 border-bright-${page_color} text-bright-${page_color} font-custom`}>Join Now</button>
          </div>
        </div>
      </div>
    
    </>

  );

}


export default OurClasses;