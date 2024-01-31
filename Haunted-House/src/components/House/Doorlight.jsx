import {useControls} from "leva";

function Doorlight() {

    const {distance,intensity} = useControls('Door Light',{
        intensity:1,
        distance:7,
    })

    return(
        <>
            <pointLight color={"orange"}castShadow distance={distance} intensity={intensity}  position={[0,2.7,2.9]} />
        </>
    )

}

export {Doorlight}