import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import CenterComponent from "../components/CenterComponent.jsx";
import SkillsComponent from "../components/SkillsComponent.jsx";
import {List} from "../utils/logo.js";
import NavigationBar from "../components/NavigationBar.jsx";
import ProjectsList from "../components/ProjectsList.jsx";
import "/public/styles/Skills.css"
import Loading from "./Loading.jsx";

function Skills() {
    return (
        <Suspense fallback={<Loading/>}>
            <Canvas >
                <ambientLight />
                <pointLight position={[0, 1, 2]} />
                <SkillsComponents />
                <CenterComponent />
            </Canvas>

            <ProjectsList />
            <NavigationBar />

        </Suspense>
    )
}


function SkillsComponents() {
    const Skills_list = []
    let count = 0
    for (let x in List) {
        if (List[x] !== "python") {
            Skills_list.push(<SkillsComponent image={List[x]}/>)
        }
    }

    return Skills_list;
}

export default Skills;