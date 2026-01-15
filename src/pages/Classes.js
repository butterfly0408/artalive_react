/*Images*/
import class1 from '../assets/images/classes/classes_01.jpeg';
import class2 from '../assets/images/classes/classes_02.jpeg';
import class3 from '../assets/images/classes/classes_03.jpeg';
import class4 from '../assets/images/classes/classes_04.jpeg';

// Data
import teachers from '../data/Teachers.json';

/*Components*/
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeacherCard from '../components/TeacherCard';
import Section from '../components/Section';


const Classes = () => {

  const page_color = 'green';

  // Dynamically resolve image paths
  const resolveImagePath = (path) => {
    try {
      return require(`${path}`);
    } catch (error) {
      console.error(`Image not found: ${path}`);
      return ''; // Return an empty string or a placeholder image path
    }
  };

  return (

    <>

      <events>

        <header>
          <Navbar page_color={page_color} />
        </header>
        
        <main>
          <div>
            
            {/* Our Classes Section */}
            <Section>
              <div className='d-flex gap-3 justify-content-center m-4'>
                {/* Images */}
                <div className='card w-25 text-bg-dark text-center mx-auto my-4'>
                  <img src={class1} className='card-img' style={{ maxWidth: '100%', opacity: 0.5 }} alt='painting'/>
                </div>
                <div className='card w-25 text-bg-dark text-center mx-auto my-4'>
                  <img src={class2} className='card-img' style={{ maxWidth: '100%', opacity: 0.5 }} alt='painting'/>
                </div>

                {/* Content */}
                <div className='w-50 d-flex flex-column justify-content-center'>
                  <h2 className={`font-custom text-bright-${page_color}`}>Our Classes</h2>
                  <p>In our interactive classes our teachers create an atmosphere where artists are free to create without inhibitions. Every student is guided on their own journey with art. Subject and medium is the choice of the artist.</p>
                  <p>Whether you are an experienced artist, looking for a community of like-minded people to share ideas and inspiration, or if you've never even touched a brush or pencil, our teachers can guide you to build your skills, hone your craft, and bring your art alive.</p>
                  <p>We offer art classes for children and adults, no one is too old or too young to be creative.</p>
                  <p>All of our teachers can aid a student with drawing and painting, in addition, we have teachers who excel at realism, oils, acrylics, and various drawing mediums like pastels, pencils, and ink.</p>
                  <div>
                    <button className={`btn border border-2 border-bright-${page_color} text-bright-${page_color} font-custom`}>Join Now</button>
                  </div>
                </div>
              </div>
            </Section>

            {/* Class Times and Fees Section */}
            <Section page_color={page_color}>
              <div className='d-flex gap-3 justify-content-center m-4'>
                {/* Images */}
                <div className='card w-25 text-bg-dark text-center mx-auto my-4'>
                  <img src={class3} className='card-img' style={{ maxWidth: '100%', opacity: 0.5 }} alt='painting'/>
                </div>
                <div className='card w-25 text-bg-dark text-center mx-auto my-4'>
                  <img src={class4} className='card-img' style={{ maxWidth: '100%', opacity: 0.5 }} alt='painting'/>
                </div>

                {/* Content */}
                <div className='w-50 d-flex flex-column justify-content-center'>
                  <h2 className={`font-custom text-bright-${page_color}`}>Class Times</h2>
                  <ul>
                    <li>Adults: Weekday Mornings 09:00 - 12:00</li>
                    <li>Adults: Alternate Saturday Mornings 09:00 - 12:00</li>
                    <li>Children: Weekday Afternoons 14:00 - 17:00</li>
                    <li>Children: Alternate Saturday Afternoons 13:30 - 16:30</li>
                    <li>Adult Evening Classes: Alternate Wednesday Evenings 18:00 - 21:00</li>
                  </ul>
                  <h2 className={`font-custom text-bright-${page_color}`}>Class Fees</h2>
                  <ul>
                    <li>Weekday Classes: R970 per month (one 3 hour class per week)</li>
                    <li>Alternate Saturday Classes: R760 per month (one class every alternate week)</li>
                    <li>Alternate Evening Classes: R760 per month (one class every alternate week)</li>
                  </ul>
                  <div>
                    <button className={`btn border border-2 border-bright-${page_color} text-bright-${page_color} font-custom`}>Join Now</button>
                  </div>
                </div>
              </div>
            </Section>

            {/* Meet Our Teachers Section */}
            <div className='my-5 d-flex flex-wrap gap-5 justify-content-center'>
              {teachers.map((teacher) => (
                <TeacherCard
                  key={teacher.id}
                  id={teacher.id}
                  name={teacher.name}
                  profileImage={teacher.profileImage}
                  quote={teacher.quote}
                  quoteAuthor={teacher.quoteAuthor}
                  started={teacher.started}
                  color={page_color}
                />
              ))}
            </div>

          </div>
        </main>

        <footer>
          <Footer page_color={page_color} />
        </footer>

      </events>
    
    </>

  );

}

export default Classes;