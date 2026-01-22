import { useParams } from 'react-router-dom'

// Images
import vlom01_teacher_profile from '../assets/images/teachers/vlom01_teacher_profile.jpeg'
import jbek02_teacher_profile from '../assets/images/teachers/jbek02_teacher_profile.jpeg'
import rlyt03_teacher_profile from '../assets/images/teachers/rlyt03_teacher_profile.jpeg'
import svdm04_teacher_profile from '../assets/images/teachers/svdm04_teacher_profile.jpeg'
import mvdv05_teacher_profile from '../assets/images/teachers/mvdv05_teacher_profile.jpeg'
import karen_teacher_profile from '../assets/images/teachers/karen_teacher_profile.jpeg'
import bfra07_teacher_profile from '../assets/images/teachers/bfra07_teacher_profile.jpeg'
import azot09_teacher_profile from '../assets/images/teachers/azot09_teacher_profile.jpeg'
import ghar010_teacher_profile from '../assets/images/teachers/ghar010_teacher_profile.jpeg'
import karenv_teacher_profile from '../assets/images/teachers/karenv_teacher_profile.jpeg'


// Data
import teachers from '../data/Teachers.json';

// Components
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Section from '../components/Section'
import { useMediaQuery } from 'react-responsive'
import { useEffect, useState } from 'react'




const TeacherProfile = () => {

  const page_color = 'orange';

  const images = {
    'vlom01_teacher_profile': vlom01_teacher_profile,
    'jbek02_teacher_profile': jbek02_teacher_profile,
    'rlyt03_teacher_profile': rlyt03_teacher_profile,
    'svdm04_teacher_profile': svdm04_teacher_profile,
    'mvdv05_teacher_profile': mvdv05_teacher_profile,
    'karen_teacher_profile': karen_teacher_profile,
    'bfra07_teacher_profile': bfra07_teacher_profile,
    'azot09_teacher_profile': azot09_teacher_profile,
    'ghar010_teacher_profile': ghar010_teacher_profile,
    'karenv_teacher_profile': karenv_teacher_profile,
  }


  const { id } = useParams();
  const teacher = teachers.find((teacher) => teacher.id === parseInt(id));


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


  if (!teacher) {
    return <p>Teacher not found</p>;
  }
  
  return (

    <>
    
      <Navbar page_color={page_color}/>


      <Section>
        <div className={`d-flex ${flexDirection} align-items-center gap-3`}>
          <div className={`${componentWidth} card text-bg-dark text-center`}>
            <img src={images[teacher.profileImage]} className="card-img img-fluid" style={{ objectFit: 'cover', height: '100%' }} />
          </div>

          <div className={`${componentWidth} d-flex flex-column justify-content-center`}>
            <h2 className={`font-custom text-bright-${page_color}`}>{teacher.name}</h2>
            {teacher.bio.map((line) => (
              <p>{line}</p>
            ))}
            <h4 className={`font-custom text-bright-${page_color}`}>Class Times</h4>
            {teacher.classTimes.adults && (
              <p><span className={`font-custom text-bright-${page_color}`}>Adults:</span> {teacher.classTimes.adults}</p>
            )}
            {teacher.classTimes.children && (
              <p><span className={`font-custom text-bright-${page_color}`}>Children:</span> {teacher.classTimes.children}</p>
            )}
          </div>
        </div>
      </Section>


      <Footer page_color={page_color} />
    
    </>

  );

}

export default TeacherProfile