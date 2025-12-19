{/*Images*/}


{/*Components*/}
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Classes = () => {

  const page_color = 'green';

  return (

    <>

        <events className={`bg-${page_color}`}>

            <header>
                <Navbar page_color={page_color} />
            </header>
            
            <main>
                <div className={`bg-${page_color}`}>
                Events
                </div>
            </main>

            <footer>
                <Footer page_color={page_color} />
            </footer>

        </events>
    
    </>

  );

}