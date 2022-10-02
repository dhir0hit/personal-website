import {useFrame, useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {List} from "../utils/logo.js";
import {useRef} from "react";


/*TODO: Create a Linked List to save x and y and use them to change random position generated*/
function SkillsComponent(props) {

    const componentMesh = useRef();
    const image = useLoader(TextureLoader, '/logo/' + props.image + ".png");
    const final_x = Math.ceil(Math.random() * 8) * (Math.round(Math.random()) ? 1 : -1);
    const final_y = Math.ceil(Math.random() * 3) * (Math.round(Math.random()) ? 1 : -1);
    const speed = 0.5
    /*useFrame(() => {
        if (componentMesh.current.position.x < final_x) {
            componentMesh.current.position.x += speed
        }

        if (componentMesh.current.position.y < final_y) {
            componentMesh.current.position.y += speed
        }
    })*/

    return (
        <mesh
            position={[final_x, final_y, 0]}
            ref={componentMesh}
            scale={0.5}
        >
            <planeGeometry args={[1.5, 1.5]}/>
            <meshPhongMaterial map={image} alphaTest={0.9} />
        </mesh>
    )
}

export default SkillsComponent;
