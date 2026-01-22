import { useMediaQuery } from 'react-responsive';

import painting_01 from '../../assets/images/home/painting_01.jpeg';
import { useEffect, useState } from 'react';




const Benefits = ({ page_color }) => {

  const isMobile = useMediaQuery({ maxWidth: 601 });
  const isTablet = useMediaQuery({ minWidth: 602, maxWidth: 861 });
  const isDesktop = useMediaQuery({ minWidth: 861 });

  const [flexDireciton, setFlexDirection] = useState('flex-row');

  const [imageWidth, setImageWidth] = useState('w-50');
  const [textWidth, setTextWidth] = useState('w-50')

  useEffect(() => {
    if (isMobile) {
      setFlexDirection('flex-column');
      setImageWidth('w-100');
      setTextWidth('w-100');
    }

    if (isTablet) {
      setFlexDirection('flex-column');
      setImageWidth('w-75');
      setTextWidth('w-75');
    }

    if (isDesktop) {
      setFlexDirection('flex-row');
      setImageWidth('w-50');
      setTextWidth('w-50');
    }
  }, [isMobile, isTablet, isDesktop]);

  return (

    <>
    
      <div className={`d-flex ${flexDireciton} align-items-center gap-3`}>
        <div className={`${imageWidth} card text-bg-dark text-center`}>
          <img src={painting_01} className='card-img' style={{ maxWidth: '100%', opacity: 0.5 }} alt='painting'/>
        </div>
        
        <div className={`px-2 ${textWidth}`}>
          <h2 className={`font-custom text-bright-${page_color}`}>The Benefits of Art</h2>
          <p>
            The relaxing practice of art can have many cognitive benefits. Our students have reported the following:
          </p>
          <ul>
            <li>Increased concentration</li>
            <li>Problem solving skills</li>
            <li>Better self-esteem</li>
            <li>Self-expression</li>
            <li>Personal growth</li>
            <li>Appreciation of art</li>
            <li>Using talent to its full potential</li>
          </ul>
        </div>
      </div>

    </>

  );

}


export default Benefits;