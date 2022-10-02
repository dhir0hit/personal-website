import {useEffect, useRef, useState} from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {List} from "../utils/logo.js";

/**
 * Single Star:
 * return star with random position and random image
 * from /utils/logo.js
 * */
function Star(props) {
    const mesh = useRef();
    const [speed, setSpeed] = useState(1);

    // every frame function called
    useFrame(() => {
        /*
        * if position is not in sight then give random  x,y. z = -79
        * */
        if (mesh.current.position.z > 70) {
            mesh.current.position.x = Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1);
            mesh.current.position.y = Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1);
            mesh.current.position.z = -79;
        } else {
            /*
            * adding speed every frame to move object/star toward camera
            * */
            mesh.current.position.z += speed;
        }
    }
    )

    /*
    * using effect to change speed it can also be directly inserted to useFrame method
    * */
    useEffect(() => {
        setSpeed(props.speed);
    });


    // loading Image using Texture loader
    // and using random to  load random image
    const image = useLoader(TextureLoader, '/logo/' + List[Math.floor(Math.random() * List.length)] + ".png");

    return (
        <mesh
            position={[
                Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1),
                Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1),
                Math.ceil(Math.random() * 79) * (Math.round(Math.random()) ? 1 : -1)
            ]}
            ref={mesh}
            scale={1}
        >
            <planeGeometry args={[1.5, 1.5]} />
            <meshPhongMaterial  map={image} alphaTest={0.9}/>
        </mesh>
    )
}

export default Star;








