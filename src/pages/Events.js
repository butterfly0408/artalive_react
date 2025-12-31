/*Images*/
import exhibition from '../assets/images/events/exhibition 2025.jpg';

/*Components*/
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Events = () => {

  const page_color = 'purple';

  return (

    <>

      <events className={`bg-${page_color}`}>

        <header>
            <Navbar page_color={page_color} />
        </header>
        
        <main>
          <div className={`bg-${page_color}`}>
            
            {/* Art Exhibition */}
            <div className='Exhibition'>
              <div className='d-flex gap-3 justify-content-center m-4'>
                {/* Image */}
                <div className='card w-50 text-bg-dark text-center mx-auto my-4'>
                  <img src={exhibition} className='card-img' style={{ maxWidth: '100%', opacity: 0.5 }} alt='invitation' />
                </div>

                {/* Content */}
                <div className='w-50 d-flex flex-column justify-content-center'>
                  <h2 className='font-custom'>Our Annual Art Exhibition</h2>
                  <p className='font-custom'><em>La Quattordicesima Esposizione</em></p>
                  <p>Art Alive Art School takes pleasure in inviting you to our Fifteenth Annual Art Exhibition.</p>
                  <p>Bonfires, wine, hearty winter food ... and great company.</p>
                  <p>Together with the Rotary club of Benoni Auror, in aid of Clean Projects, an exhibition of artworks by Teachers and Students of Art Alive Art School and guest artist: Mike Franks.</p>
                  <p>Wednesday 29 July - Friday 31 July 4pm-9pm and Saturday 1 August 11am-9pm</p>
                  <p>56 11th Avenue, Northmead, Benoni</p>
                  <p>Tickets: R90 per person from the Art School or your Rotary or Clean Projects host/hostess. Book with Elaine: 084 581 6340</p>
                </div>
              </div>
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

export default Events;