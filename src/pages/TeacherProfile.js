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

// Data
import teachers from '../data/Teachers.json';

// Components
import Navbar from "../components/Navbar";




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
  }


  const { id } = useParams();
  const teacher = teachers.find((teacher) => teacher.id === parseInt(id));

  


  if (!teacher) {
    return <p>Teacher not found</p>;
  }
  
  return (

    <>
    
      <div className={`bg-${page_color}`}>

        <header>
          <Navbar page_color={page_color}/>
        </header>

        <main>
          <div className="d-flex gap-3 justify-content-center mx-auto my-4">
            {/* Image */}
            <div className="card w-50 text-bg-dark text-center mx-auto my-4">
              <img src={images[teacher.profileImage]} />
            </div>

            {/* Profile */}
            <div className='w-50 d-flex flex-column justify-content-center'>
              <h2 className='font-custom'>{teacher.name}</h2>

              {/* Bio */}
              {teacher.bio.map((line) => (
                <p>{line}</p>
              ))}

              {/* Classes */}
              <h4 className='font-custom'>Class Times</h4>
              {teacher.classTimes.adults && (
                <p><span className='font-custom'>Adults:</span> {teacher.classTimes.adults}</p>
              )}
              {teacher.classTimes.children && (
                <p><span className='font-custom'>Children:</span> {teacher.classTimes.children}</p>
              )}
            </div>
          </div>
        </main>

      </div>
    
    </>

  );

}

export default TeacherProfile