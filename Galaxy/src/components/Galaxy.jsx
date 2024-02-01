import {Points, Point, useTexture} from "@react-three/drei";
import {useControls} from "leva";
import * as THREE from "three";
import colors from 'nice-color-palettes'
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const particleTextures = [
    "./textures/particles/1.png",
    "./textures/particles/2.png",
    "./textures/particles/3.png",
    "./textures/particles/4.png",
    "./textures/particles/5.png",
    "./textures/particles/6.png",
    "./textures/particles/7.png",
    "./textures/particles/8.png",
    "./textures/particles/9.png",
    "./textures/particles/10.png",
    "./textures/particles/11.png",
    "./textures/particles/12.png",
    "./textures/particles/13.png",
]

const palette = colors[Math.floor(Math.random() * colors.length)]

const controls ={
    TextureType:{value:0 , min:0 , max:13 , step:1},
    Count: {value: 5000, min: 1000, max: 10000},
    Size:{value: 0.5, min: 0.1, max: 25},
    Radius:{value:25, min: 1, max: 100},
    Branches:{value:5, min:1 , max: 20, step:1},
    Spin:{value:0.5,  min:-3, max:3, step:0.001},
    Randomness:{value:0.1, min:0, max:1, step:0.0001},
    RandomnessPower:{value:8, min:1, max:10, step:0.001},
    RotationSpedd:{value:0.5, min:-5, max:5},
    InsideColor:palette[0],
    OutSideColor:palette[1 +Math.floor(Math.random() * 4)],
}
export default function Galaxy() {

    const{TextureType,Count,Size,Radius,Branches,Spin,Randomness,RandomnessPower,RotationSpedd,InsideColor,OutSideColor} = useControls('Galaxy',controls)
    const particalRef = useRef()
    const particleTexture = useTexture(particleTextures[TextureType])

    useFrame((state) => (particalRef.current.rotation.y = state.clock.getElapsedTime() * RotationSpedd))

    return(
        <Points ref={particalRef} limit={10000}>
            <pointsMaterial
                  size={Size}
                  transparent
                  depthWrite={false}
                  sizeAttenuation
                  vertexColors
                  blending={THREE.AdditiveBlending}
                  map={particleTexture}
                  alphaMap={particleTexture}
            />
            {Array.from({length:Count}).map((_,i) => {
                const pRad = Math.random() * Radius
                const sAngle = pRad * Spin
                const bAngle = ((i % Branches) / Branches) * Math.PI * 2
                
                const rndX = Math.pow(Math.random(), RandomnessPower) * (Math.random() < 0.5 ? 1 : -1) * Randomness * Radius
                const rndY = Math.pow(Math.random(), RandomnessPower) * (Math.random() < 0.5 ? 1 : -1) *Randomness * Radius
                const rndZ = Math.pow(Math.random(), RandomnessPower) * (Math.random() < 0.5 ? 1 : -1) *Randomness * Radius

                const position =[Math.cos(bAngle+sAngle) * pRad + rndX, rndY, Math.sin(bAngle + sAngle) * pRad + rndZ]
                const color = new THREE.Color(InsideColor).lerp(new THREE.Color(OutSideColor), pRad / Radius)

                return <Point key={i} position={position} color={color} />
                })}
        </Points>
    )

    
}