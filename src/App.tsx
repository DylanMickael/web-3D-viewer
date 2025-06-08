import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import room from './assets/models/room.glb';

const HomeCanvas = () => {
  const earth = useGLTF(room); 

  return (
    <Canvas
      style={{ width: '100%', height: '100vh' }}
      frameloop="demand"
      camera={{ position: [-3, 4, 3], fov: 45, near: 0.1, far: 200 }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
      />
      
      <OrbitControls
        enableZoom={true}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      
      <primitive object={earth.scene} scale={2.5} />
    </Canvas>
  );
};

export default function App() {
  return (
    <div className='w-full h-screen'>
      <HomeCanvas />
    </div>
  );
}