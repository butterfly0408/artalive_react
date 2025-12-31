/*Images*/
import elaine from '../assets/images/about/aboutHTML_elaine.jpeg';
import studio_01 from '../assets/images/about/studio_01.jpeg';
import studio_02 from '../assets/images/about/studio_02.jpeg';

/*Components*/
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const About = () => {

  const page_color = 'blue';

  return (

    <>

      <about className={`bg-${page_color}`}>

        <header>
          <Navbar page_color={page_color} />
        </header>
        
        <main>
          <div className={`bg-${page_color}`}>

            <heading class='Heading' className='font-custom'>
              About Art Alive Art School
            </heading>

            <content class='Content' className=''>
              <div>
                <p>
                  Art Alive Art School, born from the visionary dream of founder Elaine Marx after a serendipitous moment in 2010, stands as a testament to the transformative power of art. What began as a conversation during a Sunday Church service blossomed into a thriving institution located in the heart of Northmead, Benoni.
                </p>
                <img src={elaine} className='my-4 d-block mx-auto' style={{ maxWidth: '50%' }} alt="Elaine Marx, Founder of Art Alive Art School" />
              </div>
              <div>
                <img src={studio_01} className='my-4 d-block mx-auto' style={{ maxWidth: '50%' }} alt="Art Alive Art School Studio" />
                <p>          
                  Housed in a captivating vintage residence adorned with wooden floors and pressed ceilings, the school not only provides a picturesque setting but serves as a nurturing haven for artists to flourish both in their art and personal lives. The founder's initial dedication, coupled with blessings and hard work, culminated in the school's inaugural class in February 2010.
                </p>
                <p>
                  Art Alive Art School distinguishes itself through interactive classes where a harmonious atmosphere empowers artists to create without inhibitions. The school's philosophy revolves around guiding each student on a unique artistic journey, allowing them the freedom to choose subjects and media under the insightful mentorship of experienced teachers.
                </p>
              </div>
              <p>
                What began as Elaine Marx personally teaching all classes has now evolved into a team of nine passionate educators. Elaine, having transitioned into a full-time artist, continues to impart her knowledge through regular workshops for both beginners and seasoned artists, reflecting her commitment to nurturing creative potential.
              </p>
              <div>
                <p>
                  At the core of Art Alive Art School's ethos lies the belief that anyone with an interest in creating art possesses the inherent talent to do so. The school's impact reverberates beyond its walls, with graduates pursuing art studies at prestigious universities across the country.
                </p>
                <p>
                  A recent testimony from one student echoes the sentiments of Vincent van Gogh, encapsulating the indescribable transformative power of art: "It is impossible to describe what a difference art has made in my life." Art Alive Art School, guided by this philosophy, stands as a beacon, encouraging every aspiring artist to silence their doubts and embrace the voice within that says, "I can paint."
                </p>
                <img src={studio_02} className='my-4 d-block mx-auto' style={{ maxWidth: '50%' }} alt="Art Alive Art School Studio" />
              </div>
            </content>

            <outro class='Outro' className=''>
              <p className='font-custom'>
                We would love to bring your Art Alive with you.
              </p>
            </outro>

          </div>
        </main>

        <footer>
            <Footer page_color={page_color} />
        </footer>
    
      </about>
    
    </>

  );

}

export default About;