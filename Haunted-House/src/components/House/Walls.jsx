import { useTexture } from "@react-three/drei";

function Walls(){
    
    const textureProps = useTexture({
        map:"./textures/bricks/color.jpg",
        normalMap:"./textures/bricks/normal.jpg",
        roughnessMap:"./textures/bricks/roughness.jpg",
        aoMap:"./textures/bricks/ambientOcclusion.jpg",
        displacementMap:"./textures/bricks/height.png",
    })

    return(
        <mesh castShadow receiveShadow position={[0,1.5,0]}>
            <boxGeometry args={[5,3,5]} />
            <meshStandardMaterial {...textureProps} displacementScale={0.01}/>
        </mesh>
    )
}

export {Walls}