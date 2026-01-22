import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

import class3 from '../../assets/images/classes/classes_03.jpeg';
import class4 from '../../assets/images/classes/classes_04.jpeg';




const TimesFees = ({page_color, buttonSize}) => {

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
          <div className={`${imageWidth} card text-bg-dark text-center`}>
            <img src={class3} className='card-img img-fluid' style={{ opacity: 0.5, objectFit: 'cover', height: '100%' }} alt='painting'/>
          </div>
          <div className={`card text-bg-dark text-center ${imageVisible}`}>
            <img src={class4} className='card-img img-fluid' style={{ opacity: 0.5, objectFit: 'cover', height: '100%' }} alt='painting'/>
          </div>
        </div>

        <div className='px-2 d-flex flex-column justify-content-center' style={{ minWidth: '50%' }}>
          <h2 className={`font-custom text-bright-${page_color}`}>Class Times</h2>
          <ul>
            <li className={`text-bright-${page_color}`}><strong>Art Classes:</strong></li>
            <li>Adults: Weekday Mornings 09:00 - 12:00</li>
            <li>Adults: Alternate Saturday Mornings 09:00 - 12:00</li>
            <li>Children: Weekday Afternoons 14:00 - 17:00</li>
            <li>Children: Alternate Saturday Afternoons 13:30 - 16:30</li>
            <li>Adult Evening Classes: Alternate Wednesday Evenings 18:00 - 21:00</li>
            <li className={`text-bright-${page_color}`}><strong>Sculpting Classes:</strong></li>
            <li>Adults: Thursday Mornings 09:00 - 12:00</li>
            <li>Children: Thursday Afternoons 14:00 - 17:00</li>
          </ul>
          <h2 className={`font-custom text-bright-${page_color}`}>Class Fees</h2>
          <ul>
            <li className={`text-bright-${page_color}`}><strong>Art Classes:</strong></li>
            <li>Weekday Classes: R970 per month (one 3 hour class per week)</li>
            <li>Alternate Saturday Classes: R760 per month (one class every alternate week)</li>
            <li>Alternate Evening Classes: R760 per month (one class every alternate week)</li>
            <li className={`text-bright-${page_color}`}><strong>Sculpting Classes:</strong></li>
            <li>Weekday Classes: R1 200 per month (one 3 hour class per week)</li>
          </ul>
          <div>
            <button className={`btn ${buttonSize} border border-2 border-bright-${page_color} text-bright-${page_color} font-custom`}>Join Now</button>
          </div>
        </div>
      </div>
    
    </>

  );

}


export default TimesFees;