import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from '../components/Section';
import OurClasses from "./Classes/OurClasses";
import TimesFees from "./Classes/TimesFees";
import TeacherCards from "./Classes/TeacherCards";




const Classes = () => {

  const page_color = 'green';

  return (

    <>

      <Navbar page_color={page_color} />
        
      <main>
          
        {/* Our Classes Section */}
        <Section>
          <OurClasses page_color={page_color} />
        </Section>

        {/* Class Times and Fees Section */}
        <Section page_color={page_color} minPadding="py-5">
          <TimesFees page_color={page_color} />
        </Section>

        {/* Meet Our Teachers Section */}
        <Section >
          <TeacherCards page_color={page_color} />
        </Section>

      </main>

      <Footer page_color={page_color} />
    
    </>

  );

}

export default Classes;