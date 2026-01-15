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
import Footer from '../components/Footer';
import Section from '../components/Section'




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
    
      <div>

        <header>
          <Navbar page_color={page_color}/>
        </header>

        <main>

          <Section>
            {/* Image */}
            <div className={`card w-50 text-bg-dark text-center mx-auto my-4 border border-2 border-bright-${page_color}`}>
              <img src={images[teacher.profileImage]} />
            </div>
            {/* Profile */}
            <div className='w-50 d-flex flex-column justify-content-center'>
              <h2 className={`font-custom text-bright-${page_color}`}>{teacher.name}</h2>
              {/* Bio */}
              {teacher.bio.map((line) => (
                <p>{line}</p>
              ))}
              {/* Classes */}
              <h4 className={`font-custom text-bright-${page_color}`}>Class Times</h4>
              {teacher.classTimes.adults && (
                <p><span className={`font-custom text-bright-${page_color}`}>Adults:</span> {teacher.classTimes.adults}</p>
              )}
              {teacher.classTimes.children && (
                <p><span className={`font-custom text-bright-${page_color}`}>Children:</span> {teacher.classTimes.children}</p>
              )}
            </div>
          </Section>

        </main>

        <footer>
          <Footer page_color={page_color} />
        </footer>

      </div>
    
    </>

  );

}

export default TeacherProfile