import {Canvas} from '@react-three/fiber'
import {Suspense} from 'react'
import {Stats, OrbitControls} from '@react-three/drei'
import Floor from './components/Environment/Floor'
import  House  from './components/House/House'
import { Fog } from './components/Environment/Fog'
import { Graves } from './components/Environment/Graves'
import Ghosts from './components/Environment/Ghosts'


export default function App() {
  return(
    <Canvas shadows dpr={[1,2]} camera={{position:[0,4,12]}}>
      <Stats />
      <OrbitControls maxPolarAngle={Math.PI* 0.49} minDistance={6} maxDistance={24} makeDefault/>
      <ambientLight intensity={0.4} color="grey" />
      <directionalLight color="grey" intensity={0.5} castShadow />
      <Fog />
      <Suspense fallback={null}>
        <House/>
        <Graves />
        <Ghosts/>
        <Floor/>      
      </Suspense>
    </Canvas>
  )
}