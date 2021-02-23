import React, {useEffect, useState} from "react";
import {useSpring, animated} from 'react-spring';
import './AsciiTitle.css'
import {maintext, maintext_font, subtext} from '../../metadata';

const AsciiTitle = () => {
  const [asciiText, setAsciiText] = useState("");
  const [props, set, stop] = useSpring(() => ({opacity: 1, transform: 'translate3d(0px,0,0) scale(0) rotateX(0deg)'}));

  useEffect(() => {
    
    // Get Ascii Text
    const Http = new XMLHttpRequest();
    const url= `https://cors-anywhere.herokuapp.com/https://artii.herokuapp.com/make?text=${maintext}&font=${maintext_font}`;
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
      setAsciiText(Http.responseText)
    }

    // Start Ascii text animation
    set({ transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)', config: {duration:1000}});

    // Run Typewriter effect on subtext
    setTimeout(typeWriter, 1000);
  }, [])


  // Typewriter Effect
  var i = 0;
  var speed = 100; /* The speed/duration of the effect in milliseconds */
  function typeWriter() {
    if (i < subtext.length) {
      document.getElementById("tagline").innerHTML += subtext.charAt(i);
      //console.log(txt.charAt(i));
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  return(
        <animated.div id="titleparent" style={props} >
          <p id="tagline"></p>
          <pre id="title">{asciiText}</pre>
        </animated.div>
    )
}

export default AsciiTitle;