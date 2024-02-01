import { Canvas} from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Galaxy from "./components/Galaxy";


export default function App() {
  return (
    <>
       <Canvas dpr={[1,2]}>
        <color attach="background" args={["black"]} />
        <OrbitControls makeDefault />
        <ambientLight/>
        <Suspense fallback={null}>
          <Galaxy />
        </Suspense>
       </Canvas>
    </>
  );
}