/*Images*/
import alice from '../assets/images/teachers/azot09_teacher_profile.jpeg';
import bonnie from '../assets/images/teachers/bfra07_teacher_profile.jpeg';
import gini from '../assets/images/teachers/ghar010_teacher_profile.jpeg';
import jacqueline from '../assets/images/teachers/jbek02_teacher_profile.jpeg';
import karen from '../assets/images/teachers/karen_teacher_profile.jpeg';
import monnette from '../assets/images/teachers/mvdv05_teacher_profile.jpeg';
import rourke from '../assets/images/teachers/rlyt03_teacher_profile.jpeg';
import sonette from '../assets/images/teachers/svdm04_teacher_profile.jpeg';
import valinda from '../assets/images/teachers/vlom01_teacher_profile.jpeg';

/*Components*/
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Teachers = () => {

  const page_color = 'green';

  return (

    <>

        <events className={`bg-${page_color}`}>

            <header>
                <Navbar page_color={page_color} />
            </header>
            
            <main>
                <div className={`bg-${page_color}`}>
                Teachers
                </div>
            </main>

            <footer>
                <Footer page_color={page_color} />
            </footer>

        </events>
    
    </>

  );

}

export default Teachers;