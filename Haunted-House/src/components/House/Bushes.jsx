import { Instances, Instance } from "@react-three/drei";
import { useTexture } from "@react-three/drei";

function Bushes(props) {
    
    const color = useTexture("./textures/bushes/color.jpg")


    return(
        <Instances castShadow receiveShadow limit={4} position={[0,0.2,3.2]} {...props}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial map={color}/>
            <Instance position={[1.5,0,0]} />
            <Instance position={[2.5,0,-0.2]} scale={0.5} />
            <Instance position={[-1.2,0,0]}  scale={0.75}/>
            <Instance position={[-2,0,-0.5]} scale={0.5}/>
        </Instances>
    )
}

export {Bushes}