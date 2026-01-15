/*Components*/
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";




const Contact = () => {

  const page_color = 'red';

  return (

    <>
    
      <header>
          <Navbar page_color={page_color} />
      </header>

      <main>

            {/* Contact */}
            <Section margin='0'>
              <div className="d-flex flex-column justify-cotnent-center">
                <h2 className={`font-custom text-bright-${page_color}`}>Contact Art Alive Art School</h2>
                <p>WhatsApp us on  <a className={`text-bright-${page_color} font-custom`} href="http://wa.me/27845816340">084 581 6340</a></p>
                <p>Email us at  <a className={`text-bright-${page_color} font-custom`} href="mailto:elaine@artalive.co.za" target="_blank">elaine@artalive.co.za</a></p>
                <p>Find us on  <a className={`text-bright-${page_color} font-custom`} href="https://web.facebook.com/artaliveartschool#" target="_blank"> <i class="bi bi-facebook"></i> Facebook</a></p>
                <p>Follow us on  <a className={`text-bright-${page_color} font-custom`} href="https://www.instagram.com/art_alive_art_school/?utm_source=qr#" target="_blank"> <i class="bi bi-instagram"></i> Instagram</a></p>
              </div>
            </Section>

            {/* Join */}
            <Section margin="0">
              <div className="d-flex flex-column justify-content-center">
                <h2 className={`font-custom text-bright-${page_color}`}>Join Art Alive Art School</h2>
                <p>Download our <a className={`text-bright-${page_color} font-custom`} href="/application_form.pdf" download={true}>application form</a> and email it to <a className={`text-bright-${page_color} font-custom`} href="mailto:elaine@artalive.co.za" target="_blank">elaine@artalive.co.za</a>.</p>
                <p>Alternatively, fill in this <a className={`text-bright-${page_color} font-custom`} href="https://form.jotform.com/250063475938059" target="_blank">online form</a>.</p>
              </div>
            </Section>

      </main>

      <footer>
          <Footer page_color={page_color} />
      </footer>
    
    </>

  );

}

export default Contact