import React from "react";
import './Navbar.css'

// Use this navbar to add any quick links (for an extension)
const Navbar = () => {    
    return(
        <nav id="navbarExperimental">
            <div id="contactButtons" >
                <a href="https://github.com/kiransuren" target="_blank" className="item">
                  <img src={require("../../public/github.png")} className="imageItem"/>
                </a>
                <a href="https://www.youtube.com/" target="_blank" className="item">
                  <img src={require("../../public/youtube.png")} className="imageItem"/>
                </a>
                <a href="https://www.twitch.tv/" target="_blank" className="item">
                  <img src={require("../../public/twitch.png")} className="imageItem"/>
                </a>
            </div>
        </nav>
    )
}


export default Navbar;