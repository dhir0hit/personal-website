import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '/public/styles/App.css'
import {Canvas, useFrame} from "@react-three/fiber";
import Star from "../components/Star.jsx";
import {Suspense} from "react";
import WelcomeOverlay from "../components/WelcomeOverlay.jsx";
import Loading from "./Loading.jsx";
// import {Router, Redirect} from 'react-router-dom';

/**
 * Landing Page: 
 * shown right after visiting site
 * contain three js animation
 * fallback{Loading.jsx}
 * */
function Landing() {
  return (
      <>
          <Suspense fallback={<Loading />}>
              <Canvas>
                  <ambientLight />
                  <pointLight position={[0,1,2]} />
                  <Stars />
              </Canvas>
              <WelcomeOverlay />
          </Suspense>
      </>
  )
}


// TODO make different file
var buttonClicked = false;
function Stars (props) {
    const Stars = [];
    // creating dynamic variable using state
    const [slowMotion, setSlowMotion] = useState(false);


    // setting slow-motion to true/false using document id selector and onclick
    document.getElementById("Submit").onclick = () => {
        if(slowMotion) {
            buttonClicked = true;
            setSlowMotion(false)
            clearInterval(interval);
        }
    }

    useFrame(() => {
        if(buttonClicked) {
        console.log(buttonClicked);
            let elementScale = document.getElementById('welcome-overlay_container').style.scale;
            document.getElementById('welcome-overlay_container').style.animation = 'slide-out 1s linear forwards';

            // TODO: re-dirent to another page
        }
    })

    let interval = setInterval(() => {
        document.getElementById('welcome-overlay_container').style.display = 'flex';
        if(!buttonClicked) {
            setSlowMotion(true);
        }
    }, 1000 * 3)

    // Loading 1000 number of stars/logo
    for (let i = 0; i < 1000; i++) {
        Stars.push(<Star speed={(slowMotion ? 0.01 : 1)} />);
    }
    return Stars;
}

export default Landing;
