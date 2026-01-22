import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import elaine from '../assets/images/about/aboutHTML_elaine.jpeg';
import studio_01 from '../assets/images/about/studio_01.jpeg';
import studio_02 from '../assets/images/about/studio_02.jpeg';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from '../components/Section';


const About = () => {

  const page_color = 'blue';

  const isSmallTablet = useMediaQuery({ maxWidth: 701 });
  const isTablet = useMediaQuery({ minWidth: 702, maxWidth: 901 })
  const isSmallDesktop = useMediaQuery({ minWidth: 902, maxWidth: 1001 });
  const isDesktop = useMediaQuery({ minWidth: 1002 });

  const [flexDirection, setFlexDirection] = useState('flex-row');
  const [elaineImg, setElaineImg] = useState('26rem');
  const [textWidth, setTextWidth] = useState('w-50');

  
  useEffect(() => {
    if (isSmallTablet) {
      setFlexDirection('flex-column');
      setElaineImg('26rem');
      setTextWidth('w-100');
    }
    
    if (isTablet) {
      setFlexDirection('flex-column');
      setElaineImg('26rem');
      setTextWidth('w-75');
    }
    
    if (isSmallDesktop) {
      setFlexDirection('flex-row');
      setElaineImg('26rem');
      setTextWidth('w-50');
    }

    if (isSmallDesktop) {
      setFlexDirection('flex-row');
      setElaineImg('26rem');
      setTextWidth('w-50');
    }

  }, [isSmallTablet, isTablet, isSmallDesktop, isDesktop]);


  return (

    <>

      <about className={`bg-${page_color}`}>

        <header>
          <Navbar page_color={page_color} />
        </header>
        
        <main>

          <Section>
            <h2 className={`font-custom text-bright-${page_color}`}>About Art Alive Art School</h2>
          </Section>
          
          <Section>
            <div className={`d-flex ${flexDirection} gap-3 justify-content-center align-items-center`}>
              <div className='d-flex gap-3' style={{ width: elaineImg }}>
                <div className={`card text-bg-dark text-center`}>
                  <img src={studio_02} className="card-img img-fluid" style={{ objectFit: 'cover', height: '100%' }}  />
                </div>
                <div className={`card text-bg-dark text-center`}>
                  <img src={studio_01} className="card-img img-fluid" style={{ objectFit: 'cover', height: '100%' }}  />
                </div>
              </div>
              <div className={`px-2 ${textWidth} d-flex flex-column justify-content-center`}>
                <p>Art Alive Art School, born from the visionary dream of founder Elaine Marx after a serendipitous moment in 2010, stands as a testament to the transformative power of art. What began as a conversation during a Sunday Church service blossomed into a thriving institution located in the heart of Northmead, Benoni.</p>
                <p>Housed in a captivating vintage residence adorned with wooden floors and pressed ceilings, the school not only provides a picturesque setting but serves as a nurturing haven for artists to flourish both in their art and personal lives. The founder's initial dedication, coupled with blessings and hard work, culminated in the school's inaugural class in February 2010.</p>
                <p>Art Alive Art School distinguishes itself through interactive classes where a harmonious atmosphere empowers artists to create without inhibitions. The school's philosophy revolves around guiding each student on a unique artistic journey, allowing them the freedom to choose subjects and media under the insightful mentorship of experienced teachers.</p>
              </div>
            </div>
          </Section>

          <Section>
            <div className={`d-flex gap-3 ${flexDirection} justify-content-center align-items-center`}>
              <div className={`px-2 ${textWidth} d-flex flex-column justify-content-center`}>
                <p>What began as Elaine Marx personally teaching all classes has now evolved into a team of nine passionate educators. Elaine, having transitioned into a full-time artist, continues to impart her knowledge through regular workshops for both beginners and seasoned artists, reflecting her commitment to nurturing creative potential.</p>
                <p>At the core of Art Alive Art School's ethos lies the belief that anyone with an interest in creating art possesses the inherent talent to do so. The school's impact reverberates beyond its walls, with graduates pursuing art studies at prestigious universities across the country.</p>
                <p>A recent testimony from one student echoes the sentiments of Vincent van Gogh, encapsulating the indescribable transformative power of art: "It is impossible to describe what a difference art has made in my life." Art Alive Art School, guided by this philosophy, stands as a beacon, encouraging every aspiring artist to silence their doubts and embrace the voice within that says, "I can paint."</p>
              </div>
              <div className={`card text-bg-dark text-center`} style={{ width: elaineImg }}>
                <img className="card-img img-fluid" style={{ objectFit: 'cover', height: '100%' }} src={elaine} alt="Elaine Marx, Founder of Art Alive Art School" />
              </div>
            </div>
          </Section>

          <Section>
            <h2 className={`px-2 font-custom text-bright-${page_color} text-center`}>We would love to bring your Art Alive with you.</h2>
          </Section>

        </main>

        <footer>
            <Footer page_color={page_color} />
        </footer>
    
      </about>
    
    </>

  );

}

export default About;