import viteLogo from '/src/assets/vite.svg'
import reactLogo from '/src/assets/react.svg'
import threeLogo from '/src/assets/three.svg'
import {useEffect} from "react";

import '/public/styles/Welcome.css'
import {useNavigate} from "react-router-dom";

/**
 * returns: popup display on top of landing page
 * with animation same as star and fade away on button click
 * */
function WelcomeOverlay() {

    let navigate = useNavigate();
    const loadHome = () => {
        const path = "/home";

        const loadAfterTime = setInterval(function () {
            navigate(path);
            clearInterval(loadAfterTime)
        }, 2000)


    }


    useEffect(() => {
        document.getElementById('welcome-overlay_container').style.display = 'none';
    })

    return (
            <div id={'welcome-overlay_container'}>
                <div id={"welcome-overlay"}>
                    <h1>Welcome, User</h1>
                    <div>
                        <h1>This website is created with </h1>
                        <h1>vite, react,& three</h1>
                    </div>
                    <div className={"Logo"}>
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                        <img src={reactLogo} className="logo react" alt="React logo" />
                        <img src={threeLogo} className="logo react" alt="Ract logo" />
                    </div>

                    <button
                        id={'Submit'}
                        onClick={loadHome}
                    >
                        Continue
                    </button>
                </div>
            </div>
    )
}

export default WelcomeOverlay