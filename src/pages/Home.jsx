import NavigationBar from "../components/NavigationBar.jsx";
import '/public/styles/Home.css'
import HomeVisuals from "../components/HomeVisuals.jsx";
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {Link} from "react-router-dom";
import {Suspense} from "react";
import Loading from "./Loading.jsx";


function Home() {
    return (
        <Suspense fallback={<Loading/>}>
            <div id={"Home_container"}>
                <NavigationBar />


                <div id={"Home-main_container"}>
                    {/*container 1*/}
                    <div className={"slide"}>
                        <div className={"Text"}>
                            <h1>HE<br />LLO</h1>
                            <p>
                                I am Rohit Dhir,<br />
                                A Full-Stack Developer, Gamer<br />
                                who loves to develop <span className={"highlight"}>crazy</span> things.
                            </p>
                        </div>
                        <div className={"Graphic"}>
                            <div className={"additional_info"}>
                                <h5><a href={"/"} target={"_blank"} >Linked-in</a></h5>
                            </div>
                        </div>
                    </div>

                    <div className={"slide"}>
                        <div className={"Text"}>
                            <h1>STU<br />DY?</h1>
                            <p>
                                I am currently a student at<br />
                                Lambton College.
                            </p>
                        </div>
                        <div className={"Graphic"}>
                            <div className={"additional_info"}>
                                <h5><a href={"https://www.lambtoncollege.ca/mississauga/"} target={"_blank"}>Lambton College, Mississauga</a></h5>
                            </div>
                        </div>
                    </div>
                    <div className={"slide"}>
                        <div className={"Text"}>
                            <h1>SK<br />ILLS</h1>
                            <p>
                                <span className={"highlight"}>Main Skills</span><br />
                                <ul>
                                    <li>React / React-Native</li>
                                    <li>Threejs</li>
                                    <li>C#</li>
                                    <li>Android Development with Kotlin/Java</li>
                                </ul>

                            </p>
                        </div>
                        <div className={"Graphic"}>
                            <div className={"additional_info"}>
                                <h5><Link to={"/skills"}>See More Skills</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>

                <Canvas className={"webgl"} aplha={true}>
                    <HomeVisuals />
                </Canvas>
            </div>
        </Suspense>
    )
}

export default Home;
