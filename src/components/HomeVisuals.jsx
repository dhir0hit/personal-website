import {Canvas, useFrame} from "@react-three/fiber";
import {useEffect, useRef} from "react";
import {PerspectiveCamera} from "@react-three/drei";

function HomeVisuals() {
    const object1 = useRef();
    const object2 = useRef();
    const object3 = useRef();
    const camera = useRef();
    const cameraGroup = useRef();

    const commonDistance = 5;
    let scrollY = window.scrollY

    let sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }
    let cursor = {
        x: 0,
        y: 0
    }


    window.addEventListener('resize', () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
    })

    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        camera.current.position.y = -scrollY / sizes.height * commonDistance;
    })
    window.addEventListener('mousemove', (event) => {
        cursor.x = event.clientX / sizes.width-0.5;
        cursor.y = event.clientY / sizes.height -0.5;

        cameraGroup.current.position.x = (cursor.x - cameraGroup.current.position.x) *0.2;
        cameraGroup.current.position.y = - (cursor.y - cameraGroup.current.position.y)*0.2;
    })


    useEffect(() => {

        object1.current.position.y = - commonDistance * 0;
        object2.current.position.y = - commonDistance * 1;
        object3.current.position.y = - commonDistance * 2;

        object1.current.position.x = 1.5;
        object2.current.position.x = -1.5;
        object3.current.position.x = 1.5;

        camera.current.position.y = -scrollY / sizes.height * commonDistance;

    })


    useFrame(() => {
        object1.current.rotation.x += 0.002;
        object1.current.rotation.y += 0.002;

        object2.current.rotation.x += 0.002;
        object2.current.rotation.y += 0.002;

        object3.current.rotation.x += 0.002;
        object3.current.rotation.y += 0.002;

        // camera.current.position.y = -scrollY / sizes.height * commonDistance;

    })

    return (
        <>
            <group
                ref={cameraGroup}
            >
                <PerspectiveCamera
                    ref={camera}
                    makeDefault={true}
                    position={[0, 0, 6]}
                />
            </group>

            <directionalLight position={[1, 1, 0]} />
            <mesh
                ref={object1}
            >
                <torusGeometry args={[1, 0.4, 16, 60]} />
                <meshToonMaterial color={"#ffeded"} />
            </mesh>
            <mesh
                ref={object2}
            >
                <coneGeometry args={[1, 2, 32]} />
                <meshToonMaterial color={"#ffeded"} />
            </mesh>
            <mesh
                ref={object3}
            >
                <torusKnotGeometry args={[0.8, 0.35, 100, 16]} />
                <meshToonMaterial color={"#ffeded"} />
            </mesh>
        </>
    )
}



export default HomeVisuals;