import "/public/styles/ProjectComponent.css"
export function ProjectComponent(props) {
    return (
        <div id={"projectContainer"}>
            <img src={"/public/logo/atom.png"} alt={""}/>
            <div className={"Details"}>
                <h2>{props.project.name}</h2>
                <p>{props.project.detail}</p>
                <h5><a href={props.project.github}>GitHub</a></h5>
            </div>
        </div>
    )
}
