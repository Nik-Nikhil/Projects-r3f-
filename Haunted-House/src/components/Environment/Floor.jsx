import * as THREE from "three";
import { useLayoutEffect } from "react";
import { useTexture } from "@react-three/drei";

export default function Floor() {

    const textureprops = useTexture({
        map: "./textures/floor/color.jpg",
        normalMap: "./textures/floor/normal.jpg",
        roughnessMap: "./textures/floor/roughness.jpg",
        displacementMap: "./textures/floor/displacement.png",
    })

    useLayoutEffect(() => {
        Object.values(textureprops).forEach((texture) => {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(10, 10);
        })
    }, [textureprops])


    return (
        <mesh receiveShadow rotation-x={-Math.PI /2}>
            <planeGeometry args={[250,250]} />
            <meshStandardMaterial {...textureprops}  displacementScale={0.1}/>
        </mesh>

    )




}
