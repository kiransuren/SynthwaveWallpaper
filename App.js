//Module Imports
import React, { useState, useEffect} from 'react'
import SynthwaveBackground from './experimental/SynthwaveBackground/SynthwaveBackground'
import AsciiTitle from './experimental/AsciiTitle/AsciiTitle';
import MainContext from './MainContext'

import "./styles.css";


export default function App(props) {
  //const [cartItems, setCartItems] = useState([]); For Hooks
  const [experimentalMode, setExperimentalMode] = useState(false)
  const setExpMode = (mode) => setExperimentalMode(mode);
  const expMode = () => experimentalMode;

  const [page, setPage] = useState("HOME");
  const setCurrentPage = (inPage) => setPage(inPage);
  const currentPage = () => page;

  const [pPage, setpPage] = useState("HOME");
  const setPriorPage = (inPage) => setpPage(inPage);
  const priorPage = () => pPage;


  const api = {setCurrentPage, currentPage, setPriorPage, priorPage, setExpMode, expMode};

  return (
    <>
    <MainContext.Provider value={api}>
          {
            <>
            <SynthwaveBackground />
            <div id="overlay">
              <div id="titleOverlay">
                <AsciiTitle />
              </div>
            </div>
            </>
          }
  
    </MainContext.Provider>
    </>
  );
}


