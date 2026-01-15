/*Images*/
import paintbrushes_01 from '../assets/images/home/paintbrushes_01.jpeg';
import painting_01 from '../assets/images/home/painting_01.jpeg';
import gallery_01 from '../assets/images/home/gallery_01.jpeg';
import gallery_02 from '../assets/images/home/gallery_02.jpeg';

/*Components*/
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from '../components/Section';
import { Collapse } from 'bootstrap';


const Home = () => {

  const page_color = 'pink';
  
  return (

    <>
    
      <home className={`bg-${page_color}`}>

        <header>
          <Navbar page_color={page_color} />
        </header>
        
        <main>

          {/* Keeping Art Alive Section */}
          <Section>
            {/* Paintbrush Card with image background and text overlay */}
            <div className='row'>
              <div className='col'>
                <div className='card text-bg-dark text-center mx-auto my-4'>
                  <img src={paintbrushes_01} className='card-img' style={{ maxWidth: '100%', opacity: 0.5 }} alt="Paintbrushes" />
                  <div className='card-img-overlay d-flex flex-column justify-content-center align-items-center'>
                    <h1 className={`card-title font-custom`}>Keeping Art Alive</h1>
                    <p className='w-75 card-text font-custom'>We keep art alive with our interactive art classes and years of knowledge and experience to share. Experience the immersion of art at our annual exhibition.</p>
                    <div>
                      <button className='me-2 btn border border-2 border-white text-white font-custom'>Our Classes</button>
                      <button className='btn border border-2 border-white text-white font-custom'>Our Exhibition</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>


          {/* Benefits of Art Section */}
          <Section page_color={page_color}>
            {/* Painting Card with image background*/}
            <div className='row'>
              <div className='col-12'>
                <div className='card text-bg-dark text-center mx-auto my-4'>
                  <img src={painting_01} className='card-img' style={{ maxWidth: '100%', opacity: 0.5 }} alt='painting'/>
                </div>
              </div>
              <div className='col-12'>
                {/* Text Content beside the Painting Card */}
                <div className='d-flex flex-column justify-content-center'>
                  <h2 className={`font-custom text-bright-${page_color}`}>The Benefits of Art</h2>
                  <p>
                    The relaxing practice of art can have many cognitive benefits. Our students have reported the following:
                  </p>
                  <ul>
                    <li>Increased concentration</li>
                    <li>Problem solving skills</li>
                    <li>Better self-esteem</li>
                    <li>Self-expression</li>
                    <li>Personal growth</li>
                    <li>Appreciation of art</li>
                    <li>Using talent to its full potential</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>


          {/* Art Classes Section */}
          <Section flex_direction='column' gap='3'>
            {/* <div className='d-flex gap-3 justify-content-center'> */}
            <div className='row gap-3'>
              {/* Heading Card */}
              <div className='col-12 text-center'>
                <h1 className={`m-0 font-custom text-bright-${page_color}`}>Art Classes</h1>
              </div>

              {/* Mediums Card */}
              <div className='col-12'>
                <div className={`card text-center py-4 border-${page_color} bg-${page_color}`}>
                  <div className='card-body'>
                    <h2 className={`card-title font-custom text-bright-${page_color}`}>Mediums</h2>
                    <p className='card-text'>For the painter we teach Oil, Acrylics, and Watercolors. For the sketcher we teach Pencils, Pastels, Charcoal, and Ink Pen.</p>
                  </div>
                </div>
              </div>

              {/* Teachers Card */}
              <div className='col-12'>
                <div className={`card text-center py-4 border-${page_color} bg-${page_color}`}>
                  <div className='card-body'>
                    <h2 className={`card-title font-custom text-bright-${page_color}`}>Teachers</h2>
                    <p className='card-text'>Art Alive has 9 teachers with various qualifications and years of experience.</p>
                    <button className={`btn border border-2 border-bright-${page_color} text-bright-${page_color} font-custom`}>Meet Our Teachers</button>
                  </div>
                </div>
              </div>

              {/* Availability & Class Times Card */}
              <div className='col-12'>
                <div className={`card text-center py-4 border-${page_color} bg-${page_color}`}>
                  <div className='card-body'>
                    <h2 className={`card-title font-custom text-bright-${page_color}`}>Availability & Class Times</h2>
                    <p className='card-text'>We have morning and afternoon classes, Mondays to Saturdays, with various teachers for children and adults.</p>
                    <div className='d-flex gap-3 justify-content-center'>
                      <button className={`btn border border-2 border-bright-${page_color} text-bright-${page_color} font-custom`}>Our Classes</button>
                      <button className={`btn border border-2 border-bright-${page_color} text-bright-${page_color} font-custom`}>Join Today</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>


          {/* Art Exhibition Section */}
          <Section flex_direction='column' gap='3' margin='mt-5 mb-0' page_color={page_color} style={{ marginBottom: '0 !important'}}>
            {/* Heading Card */}
            <div className='row gap-3'>
              <div className='col-12 text-center'>
                <h1 className={`m-0 font-custom text-bright-${page_color}`}>Art Exhibition</h1>
              </div>

              {/* Description and Find Out More Button */}
              <div className='col-12 mx-auto text-center'>
                <p>Our annual winter exhibition affords great opportunity to teachers and students for showcasing their work to the public.</p>
                <button className={`me-2 btn border border-2 border-bright-${page_color} text-bright-${page_color} font-custom`}>Find out More</button>
              </div>
              
              {/* Gallery Cards Container */}
              {/* <div className='d-flex gap-3 justify-content-center mb-4 mx-4'>
              </div> */}

            <div className="row justify-content-center gap-2">
              <div className="col-12 col-md-5">
                <div className="card text-bg-dark text-center">
                  <img src={gallery_01} className="card-img img-fluid" style={{ opacity: 0.5 }} alt="gallery 1"/>
                </div>
              </div>
              <div className="col-12 col-md-5">
                <div className="card text-bg-dark text-center">
                  <img src={gallery_02} className="card-img img-fluid" style={{ opacity: 0.5 }} alt="gallery 2"/>
                </div>
              </div>
            </div>

            </div>
          </Section>

        </main>

        <footer>
          <Footer page_color={page_color} style={{ marginTop: '0 !important' }} />
        </footer>

      </home>

    </>

  );
}

export default Home;