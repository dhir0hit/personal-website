import {ProjectComponent} from "./ProjectComponent.jsx";
import {projects} from  "/src/utils/projects.json";
import "/public/styles/ProjectsList.css"

function ProjectsList() {
    let projects_list = []
    for (let i in projects) {
        projects_list.push(<ProjectComponent project={projects[i]} />)
    }
    return (
        <div id={"ProjectsList"}>
            <div id={"projectContainer"}>
                <div>
                    <h2>Skills</h2>
                    <ul>
                        <li>React</li>
                        <li>Three.js</li>
                        <li>Python</li>
                        <li>AJAX</li>
                        <li>Kotlin</li>
                        <li>C#</li>
                        <li>Android development</li>
                        <li>SASS</li>
                        <li>Database</li>
                        <li>Tailwind css</li>
                        <li>Java</li>
                    </ul>
                </div>
            </div>
            {projects_list}
        </div>
    );
}

export default ProjectsList;