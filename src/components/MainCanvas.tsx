import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import my3DModel from '../assets/models/my3DModel.glb';

const MainCanvas = () => {
    const model = useGLTF(my3DModel); 
  
    return (
      <Canvas
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
        
        <primitive object={model.scene} scale={2.5} />
      </Canvas>
    );
  };
  
  export default MainCanvas;