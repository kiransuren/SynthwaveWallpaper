import React from 'react'
import SynthwaveBackground from './experimental/SynthwaveBackground/SynthwaveBackground'
import AsciiTitle from './experimental/AsciiTitle/AsciiTitle';
// import Navbar from './experimental/Navbar/Navbar';
import "./styles.css";


export default function App(props) {
  return (
    <>
    <SynthwaveBackground />
    {/*<Navbar />       //Uncomment to enable the navbar */}
      <div id="overlay">
        <div id="titleOverlay">
          <AsciiTitle />
        </div>
      </div>
    </>
  );
}


