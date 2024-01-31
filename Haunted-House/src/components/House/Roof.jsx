import { useTexture } from "@react-three/drei"


function Roof(props) {

    const textureProps = useTexture({
        map:'./textures/roof/color.jpg',
        normalMap:'./textures/roof/normal.jpg',
        roughnessMap:'./textures/roof/roughness.jpg',
        displacementMap:'./textures/roof/height.png',
    })

    return(
        <mesh castShadow {...props} position={[0,4,0]} rotation-y={Math.PI/4}>
            <coneGeometry args={[4.5,2,4]} />
            <meshStandardMaterial {...textureProps} displacementScale={0.01}/>
        </mesh>
    )

}

export {Roof}