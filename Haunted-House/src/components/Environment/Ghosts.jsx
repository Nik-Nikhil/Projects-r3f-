import { useFrame } from "@react-three/fiber";
import {useControls} from 'leva'
import { useRef } from "react";

export default function Ghosts() {

    const firstGhost = useRef()
    const secondGhost = useRef()
    const thirdGhost = useRef()
    const fourthGhost = useRef()
    const fifthGhost = useRef()
    const sixthGhost = useRef()


    const {colGhost1,colGhost2,colGhost3,colGhost4,colGhost5,colGhost6} = useControls('Ghosts',{
        colGhost1:"Violet",
        colGhost2:"Indigo",
        colGhost3:"Blue",
        colGhost4:"Greenyellow",
        colGhost5:"Gold",
        colGhost6:"Red",
    })

    useFrame(({clock})=>{
        const elapsedTime = clock.getElapsedTime()
        
        // Ghost 1
        const ghost1Angle = elapsedTime * 0.5
        firstGhost.current.position.x = Math.cos(ghost1Angle) * 5
        firstGhost.current.position.y = Math.sin(elapsedTime * 5)
        firstGhost.current.position.z = Math.sin(ghost1Angle) * 5

        // Ghost 2
        const ghost2Angle = -elapsedTime * 0.32
        secondGhost.current.position.x = Math.cos(ghost2Angle) * 6
        secondGhost.current.position.y = Math.sin(elapsedTime * 6) + Math.sin(elapsedTime * 2.5)
        secondGhost.current.position.z = Math.sin(ghost2Angle) * 6

        // Ghost 3
        const ghost3Angle = -elapsedTime * 0.18
        thirdGhost.current.position.x = Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32))
        thirdGhost.current.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5)
        thirdGhost.current.position.z = Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5))

        // Ghost 4
        const ghost4Angle = elapsedTime * 0.6
        fourthGhost.current.position.x = Math.cos(ghost4Angle) * 8
        fourthGhost.current.position.y = Math.sin(elapsedTime * 2) + Math.sin(elapsedTime * 1.5)
        fourthGhost.current.position.z = Math.sin(ghost4Angle) * 8

        // Ghost 5
        const ghost5Angle = elapsedTime * 0.27
        fifthGhost.current.position.x = Math.cos(ghost5Angle) * (7 + Math.sin(elapsedTime * 0.37))
        fifthGhost.current.position.y = Math.sin(elapsedTime * 1.5) + Math.sin(elapsedTime * 1.5)
        fifthGhost.current.position.z = Math.sin(ghost5Angle) * (7 + Math.sin(elapsedTime * 0.5))

        // Ghost 6
        const ghost6Angle = -elapsedTime * 0.48
        sixthGhost.current.position.x = Math.cos(ghost6Angle) * (7 + Math.sin(elapsedTime * 0.37))
        sixthGhost.current.position.y = Math.sin(elapsedTime * 1.5) + Math.sin(elapsedTime * 1.5)
        sixthGhost.current.position.z = Math.sin(ghost6Angle) * (7 + Math.sin(elapsedTime * 0.5))


    })

    return(
        <>
            <pointLight castShadow ref={firstGhost} args={[colGhost1, 2, 3]} />
            <pointLight castShadow ref={secondGhost} args={[colGhost2, 2, 3]} />
            <pointLight castShadow ref={thirdGhost} args={[colGhost3, 2, 3]} />
            <pointLight castShadow ref={fourthGhost} args={[colGhost4, 2, 3]} />
            <pointLight castShadow ref={fifthGhost} args={[colGhost5, 2, 3]} />
            <pointLight castShadow ref={sixthGhost} args={[colGhost6, 2, 3]} />
        </>
    )
}