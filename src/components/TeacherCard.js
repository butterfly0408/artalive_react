import { Link } from 'react-router-dom'

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




const TeacherCard = ({ id, name, profileImage, quote , quoteAuthor, started }) => {

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
  }




  return (

    <>
    
      <div className="card" style={{ width: "26rem" }}>
        <img src={images[profileImage]} className="card-img-top" alt={`${name}'s profile`} />
        <div className="card-body">
          <h5 className="card-title font-custom">{name}</h5>
          <p className="card-text">
            <em>{quote}</em> - {quoteAuthor}
          </p>
          <p className='card-text'>I have been a Teacher at Art Alive since {started}</p>
          <Link className='btn border border-2 border-black font-custom' to={`/teacher/${id}`}>More About Me</Link>
        </div>
      </div>
    
    </>

  );

}

export default TeacherCard;