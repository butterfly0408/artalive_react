const Readme = () => {
  
  return (

    <>

      <h1>Specs and Instructions</h1>

      <ul>
        <li>You can use the current website as guidance on content: <a className="text-black" href="https://www.artalive.co.za/index.html">https://www.artalive.co.za/index.html</a> </li>
        <li>The client wants every page to be its own colour. She provided the main bright colours.</li>
        <li>Custom colours are in the custom.scss Sass file, here you can edit as you like. I named the light version of the colour the name: EG green, then the bright one EG bright-green</li>
        <li>And then she gave me this dark colour: #182e16, but if it looks toss do your own thing. </li>
        <li>I've started with the Home and About pages so you can see how the colour changes work. For each page define a page_color and use that in the className prop.</li>
        <li>I thought we could use the light colours for the main page bits, the bright colour as accents (like in the buttons) and then white-coloured cards for the text portions?</li>
        <li>This font is currently set as the default, in custom.scss, you can comment out lines at the bottom to set default font to Bootstrap default, and then use the class font-custom on elements that need this font</li>
        <li>Images are sorted by page so they are easy to find.</li>
        <li>I'm still working on removing the background from the logo image</li>
        <li>Skip the Workshops section on the Events page</li>
        <li>Skip the Blog page entirely!</li>
        <li>On the footer, leave out my details, if you want to, feel free to add yours in there, otherwise just do the Copyright bit.</li>
        <li>Instragram link: <a className="text-black" href="https://www.instagram.com/art_alive_art_school?igsh=MWQ3ejU1YjR2MXl1dA%3D%3D&utm_source=qr">https://www.instagram.com/art_alive_art_school?igsh=MWQ3ejU1YjR2MXl1dA%3D%3D&utm_source=qr</a> </li>
        <li>Facebook link: <a className="text-black" href="https://www.facebook.com/share/1DRvxBQwfC/?mibextid=wwXIfr">https://www.facebook.com/share/1DRvxBQwfC/?mibextid=wwXIfr</a> </li>
      </ul>
    
    </>

  );

}

export default Readme;