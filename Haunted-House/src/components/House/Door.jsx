import { useTexture } from "@react-three/drei";

 export function Door(props) {

    const textureProps = useTexture({
        map:"./textures/door/color.jpg",
        normalMap:"./textures/door/normal.jpg",
        roughnessMap:"./textures/door/roughness.jpg",
        displacementMap:"./textures/door/displacement.png",
        alphaMap:"./textures/door/alpha.jpg",
        aoMap:"./textures/door/ambientOcclusion.jpg",
        displacementMap:"./textures/door/height.jpg",
    })

    return(
        <mesh receiveShadow position={[0,1,2.51]} {...props}>
            <planeGeometry args={[2.1,2.1,100,100]} />
            <meshStandardMaterial {...textureProps} displacementScale={0.1} transparent/>
        </mesh>
    )
}

