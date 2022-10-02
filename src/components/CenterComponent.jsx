import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {List} from "../utils/logo.js";
import {useRef} from "react";

function CenterComponent() {
    const centerMesh = useRef();
    const image = useLoader(TextureLoader, '/logo/' + List[Math.floor(Math.random() * List.length)] + ".png");
    const PythonImage = useLoader(TextureLoader, '/logo/python.png');

    return (
        <mesh
            ref={centerMesh}
        >
            <planeGeometry args={[1.5, 1.5]}/>
            <meshPhongMaterial map={PythonImage} alphaTest={0.9} />
        </mesh>
    )
}

export default CenterComponent;