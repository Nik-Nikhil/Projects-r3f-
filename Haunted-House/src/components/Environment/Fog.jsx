import { useControls } from "leva";

export function Fog() {

    const {fogcolor,near, far}= useControls("Fog",{
        fogcolor: '#5c7551',
        near:{min:1, value:1},
        far:{min:10, value:20},
    })

    return(
        <>
           <fog attach={"fog"} args={[fogcolor,near,far]}/>
           <color attach="background" args={[fogcolor]}/>
        </>
    )
}