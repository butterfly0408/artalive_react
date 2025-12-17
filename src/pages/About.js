import Navbar from "../components/Navbar";




const About = () => {

  const page_color = 'blue';

  return (

    <>

      <Navbar page_color={page_color} />

      <div className={`bg-${page_color}`}>
        about
      </div>
    
    </>

  );

}

export default About;