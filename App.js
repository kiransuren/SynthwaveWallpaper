import React from 'react'
import SynthwaveBackground from './experimental/SynthwaveBackground/SynthwaveBackground'
import AsciiTitle from './experimental/AsciiTitle/AsciiTitle';
import "./styles.css";


export default function App(props) {
  return (
    <>
    <SynthwaveBackground />
      <div id="overlay">
        <div id="titleOverlay">
          <AsciiTitle />
        </div>
      </div>
    </>
  );
}


