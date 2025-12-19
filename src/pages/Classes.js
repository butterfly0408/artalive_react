/*Images*/
import class1 from '../assets/images/classes/classes_01.jpeg';
import class2 from '../assets/images/classes/classes_02.jpeg';
import class3 from '../assets/images/classes/classes_03.jpeg';
import class4 from '../assets/images/classes/classes_04.jpeg';

/*Components*/
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

export default Classes;