import { Bushes } from "./Bushes";
import { Door } from "./Door";
import { Roof } from "./Roof";
import { Walls } from "./Walls";
import {Doorlight} from "./Doorlight"

function House(props) {

    return(
        <group {...props}>
            <Roof />
            <Walls />
            <Doorlight />
            <Door />
            <Bushes />
        </group>
    )
}

export default House