import paintbrushes_01 from '../assets/images/home/paintbrushes_01.jpeg';
import painting_01 from '../assets/images/home/painting_01.jpeg';
import gallery_01 from '../assets/images/home/gallery_01.jpeg';
import gallery_02 from '../assets/images/home/gallery_02.jpeg';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {

  const page_color = 'pink';
  
  return (

    <>
    
      <home className={`bg-${page_color}`}>
        <header>
          <Navbar page_color={page_color} />
        </header>
        
        <main>
        {/* Paintbrush Card with image background and text overlay */}
        <div className='card w-75 text-bg-dark text-center mx-auto my-4'>
          <img src={paintbrushes_01} className='card-img' style={{ maxWidth: '100%', opacity: 0.5 }} alt="Paintbrushes" />
          <div className='card-img-overlay d-flex flex-column justify-content-center'>
          <h1 className='card-title'>Keeping Art Alive</h1>
          <p className='card-text'>We keep art alive with our interactive art classes and years of knowledge and experience to share. Experience the immersion of art at our annual exhibition.</p>
          <div>
            <button className='me-2 btn border border-2 border-white text-white'>Our Classes</button>
            <button className='btn border border-2 border-white text-white'>Our Exhibition</button>
          </div>
          </div>
        </div>

        {/* Benefits of Art Section */}
        <div className='d-flex gap-3 justify-content-center mt-4 mb-4 mx-4'>
          {/* Painting Card with image background*/}
          <div className='card w-50 text-bg-dark text-center mx-auto mt-4 mb-4'>
            <img src={painting_01} className='card-img' style={{ maxWidth: '100%', opacity: 0.5 }} alt='painting'/>
          </div>

          {/* Text Content beside the Painting Card */}
          <div className='w-50 d-flex flex-column justify-content-center'>
            <h2>The Benefits of Art</h2>
            <p>The relaxing practice of art can have many cognitive benefits. Our students have reported the following:</p>
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

        {/* Art Classes Section */}
        {/* Heading Card */}
          <div className='w-100 text-center mb-4'>
            <h1>Art Classes</h1>
          </div>
        <div className='d-flex gap-3 justify-content-center mt-4 mb-4 mx-4'>
          {/* Mediums Card */}
          <div className='card w-25 text-bg-dark text-center py-4'>
            <div className='card-body'>
              <h2 className='card-title'>Mediums</h2>
              <p className='card-text'>For the painter we teach Oil, Acrylics, and Watercolors. For the sketcher we teach Pencils, Pastels, Charcoal, and Ink Pen.</p>
            </div>
          </div>

          {/* Teachers Card */}
          <div className='card w-25 text-bg-dark text-center py-4'>
            <div className='card-body'>
              <h2 className='card-title'>Teachers</h2>
              <p className='card-text'>Art Alive has 9 teachers with various qualifications and years of experience.</p>
              <button className='btn border border-2 border-white text-white'>Meet Our Teachers</button>
            </div>
          </div>

          {/* Availability & Class Times Card */}
          <div className='card w-25 text-bg-dark text-center py-4'>
            <div className='card-body'>
              <h2 className='card-title'>Availability & Class Times</h2>
              <p className='card-text'>We have morning and afternoon classes, Mondays to Saturdays, with various teachers for children and adults.</p>
              <div className='d-flex gap-3 justify-content-center'>
                <button className='me-2 btn border border-2 border-white text-white'>Our Classes</button>
                <button className='btn border border-2 border-white text-white'>Join Today</button>
              </div>
            </div>
          </div>
        </div>

        {/* Art Exhibition Section */}
        {/* Heading Card */}
          <div className='w-100 text-center mt-4'>
            <h1>Art Exhibition</h1>
          </div>
        {/* Description and Find Out More Button */}
        <div className='w-75 mt-1 mx-auto text-center mb-2'>
          <p>Our annual winter exhibition affords great opportunity to teachers and students for showcasing their work to the public.</p>
        </div>
        <div className='w-75 mt-1 mx-auto text-center mb-2'>
          <button className='me-2 btn border border-2 border-black text-black'>Find out More</button>
        </div>
        

        {/* Gallery Cards Container */}
        <div className='d-flex gap-3 justify-content-center mb-4 mx-4'>
          {/* Gallery 1 Card with image background and text overlay */}
          <div className='card w-50 text-bg-dark text-center'>
            <img src={gallery_01} className='card-img' style={{ maxWidth: '100%', opacity: 0.5 }} alt='gallery 1'/>
          </div>
          
          {/* Gallery 2 Card with image background and text overlay */}
          <div className='card w-50 text-bg-dark text-center'>
            <img src={gallery_02} className='card-img' style={{ maxWidth: '100%', opacity: 0.5 }} alt='gallery 2'/>
          </div>
        </div>

        </main>

        <footer>
          <Footer page_color={page_color} />
        </footer>

      </home>

    
    </>

  );
}

export default Home;