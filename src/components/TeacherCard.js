import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

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




const TeacherCard = ({ id, name, profileImage, quote , quoteAuthor, started, color, buttonSize }) => {

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
  
  
  const isMobile = useMediaQuery({ maxWidth: 401 });
  const isSmallTablet = useMediaQuery({ minWidth: 402, maxWidth: 651 });
  const isTablet = useMediaQuery({ minWidth: 652, maxWidth: 901 });
  const isSmallDesktop = useMediaQuery({ minWidth: 902, maxWidth: 1051 });
  const isDesktop = useMediaQuery({ minWidth: 1051 });
  
  const [imgSize, setImgSize] = useState('28vw');


  useEffect(() => {
    if (isMobile) {
      setImgSize('95vw');
    }

    if (isSmallTablet) {
      setImgSize('75vw');
    }

    if (isTablet) {
      setImgSize('40vw');
    }

    if (isSmallDesktop) {
      setImgSize('30vw');
    }

    if (isDesktop) {
      setImgSize('28vw');
    }

  }, [isMobile, isSmallTablet, isTablet, isSmallDesktop, isDesktop]);




  return (

    <>
    
      <div className={`card border border-2 border-bright-${color} `} style={{ width: imgSize}}>
        <img src={images[profileImage]} className="card-img-top img-fluid" style={{ objectFit: 'cover', height: imgSize, width: imgSize }} alt={`${name}'s profile`} />
        <div className="card-body">
          <h5 className={`card-title text-bright-${color} font-custom`}>{name}</h5>
          <p className="card-text">
            <em>{quote}</em> - {quoteAuthor}
          </p>
          <p className='card-text'>I have been a Teacher at Art Alive since {started}</p>
          <Link className={`btn ${buttonSize} border border-2 border-bright-${color} text-bright-${color} font-custom`} to={`/teacher/${id}`}>More About Me</Link>
        </div>
      </div>
    
    </>

  );

}

export default TeacherCard;