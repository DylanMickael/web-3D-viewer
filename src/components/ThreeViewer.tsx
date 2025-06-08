import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Box3, Vector3 } from 'three';
import { useState } from 'react';

const ThreeViewer = ({
  file
}: {
  file: string
}) => {  
  const [isDragging, setIsDragging] = useState(false);
  const model = useGLTF(file);
  
  const bbox = new Box3().setFromObject(model.scene);
  const center = bbox.getCenter(new Vector3());
  const size = bbox.getSize(new Vector3());
  
  return (
    <Canvas
      className={isDragging ? 'cursor-grabbing' : 'cursor-grab'}
      frameloop="demand"
      camera={{ 
        position: [0, size.y * 1.5, size.z * 2],
        fov: 45, 
        near: 0.1,
        far: 200 
      }}
      onPointerDown={() => setIsDragging(true)}
      onPointerUp={() => setIsDragging(false)}
      onPointerLeave={() => setIsDragging(false)}
    >
      <ambientLight intensity={2} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={5}
        castShadow
      />
      
      <OrbitControls
        enableZoom={true}
        enablePan={true} 
        enableRotate={true}
        zoomSpeed={0.8}
        panSpeed={0.8}
        rotateSpeed={0.8}
        minDistance={size.length() * 0.1}
        maxDistance={size.length() * 5}
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
        target={center}
      />
      
      <primitive 
        object={model.scene} 
        scale={2.5} 
      />
    </Canvas>
  );
};

export default ThreeViewer;