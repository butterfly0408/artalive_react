// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";

// Page Components
import Hero from "./Home/Hero";
import Benefits from "./Home/Benefits";
import ArtClasses from "./Home/ArtClasses";
import ArtExhibition from "./Home/ArtExhibition";




const Home = () => {

  const page_color = 'pink';
  
  return (

    <>

      <Navbar page_color={page_color} />

        
      {/* HERO */}
      <Section minMargin="my-0">
        <Hero />
      </Section>
      
      {/* BENEFITS */}
      <Section minPadding="py-4" minMargin="my-0" page_color={page_color}>
        <Benefits page_color={page_color} />
      </Section>
      
      {/* ART CLASSES */}
      <Section>
        <ArtClasses page_color={page_color} />
      </Section>
      
      {/* EXHIBITION */}
      <Section>
        <ArtExhibition page_color={page_color} />
      </Section>


      <Footer page_color={page_color} />

    </>

  );
}

export default Home;