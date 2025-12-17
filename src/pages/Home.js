import paintbrushes_01 from '../assets/images/home/paintbrushes_01.jpeg';

import Navbar from "../components/Navbar";


const Home = () => {

  const page_color = 'pink';
  
  return (

    <>
    
      <header className={`bg-${page_color}`}>
        <Navbar page_color={page_color} />

        <div className='card w-50 text-bg-dark text-center mx-auto'>
          <img src={paintbrushes_01} className='card-img' style={{ maxWidth: '100%', opacity: 0.5 }} />
          <div className='card-img-overlay d-flex flex-column justify-content-center'>
            <h1 className='card-title'>Keeping Art Alive</h1>
            <p className='card-text'>We keep art alive with our interactive art classes and years of knowledge and experience to share. Experience the immersion of art at our annual exhibition.</p>
            <div>
              <button className='me-2 btn border border-2 border-white text-white'>Our Classes</button>
              <button className='btn border border-2 border-white text-white'>Our Exhibition</button>
            </div>
          </div>
        </div>

      </header>

    
    </>

  );
}

export default Home;