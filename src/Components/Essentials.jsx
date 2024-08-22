import React, { useMemo } from 'react';
import { Environment, Lightformer, Text } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { extend } from '@react-three/fiber'

extend({ EffectComposer, Bloom })


const Essentials = React.memo(({ meshPosition = [0, 0, 0], modelName }) => {

  
  const TextBloom = useMemo(() => {
    return (
      <mesh position={[0, 0, 0.001]}>
        <Text fontSize={0.6} position={[0, 0, 0]}>
          {modelName}
          <meshStandardMaterial
            emissive="blue"   
            emissiveIntensity={2}
            color="white"        
          />
          <EffectComposer>
        <Bloom luminanceThreshold={0.2} mipmapBlur luminanceSmoothing={0} intensity={1} />
      </EffectComposer>
        </Text>
      </mesh>
    );
  }, [modelName]);
  

  
  const mesh = useMemo(() => (
    <mesh
      scale={4}
      position={meshPosition}
      rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
    >
      <circleGeometry args={[1, 64]} />
      <meshPhysicalMaterial
        color="white"
        roughness={0.1} 
        metalness={0.5}
        transmission={1}
        ior={1.5}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
      {TextBloom}
    </mesh>
  ), [meshPosition]); // Depend on meshPosition to recalculate when it changes

 
  const environment = useMemo(() => (
    <Environment resolution={512}>
      {/* Ceiling Lights - Soft Overhead Lighting */}
      {[...Array(7)].map((_, index) => (
        <Lightformer 
          key={index} 
          intensity={1.5} 
          rotation-x={Math.PI / 2} 
          position={[0, 5, -9 + index * 3]} 
          scale={[10, 1, 1]} 
          color="#FFFFFF" 
        />
      ))}

      {/* Side Ambient Lights with Soft Colors */}
      <Lightformer intensity={1.2} rotation-y={Math.PI / 4} position={[-50, 2, -10]} scale={[100, 2, 1]} color="#FF7F50" />
      <Lightformer intensity={1.2} rotation-y={Math.PI / 4} position={[-50, 2, 10]} scale={[100, 2, 1]} color="#FFD700" />
      <Lightformer intensity={1.2} rotation-y={-Math.PI / 4} position={[50, 2, -10]} scale={[100, 2, 1]} color="#00CED1" />
      <Lightformer intensity={1.2} rotation-y={-Math.PI / 4} position={[50, 2, 10]} scale={[100, 2, 1]} color="#9370DB" />

      {/* Soft Backlight for Depth and Dimension */}
      <Lightformer intensity={1.0} rotation-y={Math.PI} position={[0, 5, -15]} scale={[100, 1, 1]} color="#4682B4" />

      {/* Fill Light to Fill Shadows */}
      <Lightformer intensity={0.6} rotation-y={0} position={[0, 8, 0]} scale={[80, 80, 1]} color="#FFFFFF" />
    </Environment>
  ), []);

  return (
    <>
      {mesh}
      {environment}
    </>
  );
});

export default Essentials;

