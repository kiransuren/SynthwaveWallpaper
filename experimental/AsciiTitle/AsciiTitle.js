import React, {useContext, useEffect, useState} from "react";
import {useSpring, animated} from 'react-spring';
import './AsciiTitle.css'
import MainContext from '../../MainContext'
import {text, font} from '../../metadata';

const AsciiTitle = () => {
  const api = useContext(MainContext);
  const [name, setName] = useState("");
  const [toggle,setToggle] = useState(false);
  const [props, set, stop] = useSpring(() => ({opacity: 1, transform: 'translate3d(0px,0,0) scale(0) rotateX(0deg)'}));
          //setProj(!proj);
        //set({width: '100rem', from: {width: '0rem'},
        //config: {mass:10}
        //})
  useEffect(() => {
    
    const Http = new XMLHttpRequest();
    const url=`https://cors-anywhere.herokuapp.com/https://artii.herokuapp.com/make?text=${text}&font=${font}`;
    Http.open("GET", url);
     Http.send();

    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
      setName(Http.responseText)
    }
  }, [])

  useEffect(() => {
    if(api.currentPage() != "HOME"){
      console.log("ASCII");
      console.log("SpringSet?");
      set({
        transform: 'translate3d(0px,0,0) scale(0) rotateX(0deg)',
        config: {duration:1000}
       });
    }
    if(api.currentPage() === "HOME"){
      console.log("ASCII");
      console.log("SpringSet?");
      set({
        transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
        config: {duration:1000}
       });
       //document.getElementById("tagline").innerHTML = "";
       //setTimeout(typeWriter, 1000);
    }
  });

  var i = 0;
  var txt = 'Programmer | Designer | Tech Enthusiast'; /* The text */
  var speed = 100; /* The speed/duration of the effect in milliseconds */
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("tagline").innerHTML += txt.charAt(i);
      //console.log(txt.charAt(i));
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  useEffect(() => {
       //setTimeout(typeWriter, 1000);
    }, []
  );
  

  return(
        <animated.div id="titleparent" style={props} className={api.currentPage()}>
          <p id="tagline"></p>
          <pre id="title">
          {name}
          </pre>
        </animated.div>
    )
}

export default AsciiTitle;