import React, {useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Html, OrbitControls } from '@react-three/drei';
import F35 from '../public/F35';
import Bmw from '../public/Bmw';
import './App.css';
import SceneButton from './Components/Button';
import Ball from './Components/Ball';
import Essentials from './Components/Essentials';

const F35Main = React.memo(({onBack}) => {
  const [showAnnotations, setShowAnnotations] = useState(true); // State to manage ball visibility

  const toggleAnnotations = () => {
    setShowAnnotations((prev) => !prev); //For Toggle of state
  };
  
  return (
    <>
      <Canvas gl={{ logarithmicDepthBuffer: true, antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 25 }}>
      <color attach="background" args={['#15151a']} />
      <F35 rotation={[0, Math.PI / 1.5, 0]} scale={0.04} position={[0, 0, 0]}/>
      <hemisphereLight intensity={0.5} />
      <ContactShadows resolution={1024} frames={1} position={[0, -1.05, 0]} scale={15} blur={0.5} opacity={1} far={20} />
      <Essentials meshPosition={[0, -1.09, 0]} modelName={"F35"}/>
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />

{/* Conditional rendering of balls based on the showAnnotations state */}
       {showAnnotations && (
          <>
      <Ball position={[-1.9,0.3,-2.5]} annotationText='The F-35 is equipped with cutting-edge avionics that provide pilots with unparalleled situational awareness.'/>
      <Ball position={[0.91,0.01,1.6]} annotationText='The F-35 can reach speeds of up to Mach 1.6, making it a fast and agile fighter jet.'/>
      <Ball position={[-0.6,-0.7,-1.5]} annotationText='The F-35 Lightning is designed with advanced stealth capabilities, making it nearly invisible to enemy radar.'/>
      <Ball position={[-1,0.2,1]} annotationText='The F-35 features a unique high-aspect-ratio wing design, which enhances its aerodynamic efficiency and allows for superior maneuverability and stability at various speeds.'/>
      </>
        )}
    <Html className='SideText' style={{left: "75vh", bottom: "15vh"}}>
      <h4>
      THE F-35
      </h4>
      <h1>
      Lightning II
      </h1>
      <h3>
      Lethal. Survivable. Connected.
      </h3>
    </Html>
    </Canvas>
    <SceneButton onClick={onBack} label="Go Back" />
    <SceneButton onClick={toggleAnnotations} label={showAnnotations ? 'Hide Annotations' : 'Show Annotations'} style={{ position: 'absolute', top: '20px', left: '20px', padding: '10px', fontSize: '16px' }} />
    
    </>
  )
});
   
     
      
const BmwMain = React.memo(({onBack}) => {
  const [showAnnotations, setShowAnnotations] = useState(true);

  const toggleAnnotations = () => {
    setShowAnnotations((prev) => !prev);
  };
  

  return (
    <>
      <Canvas gl={{ logarithmicDepthBuffer: true, antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 25 }}>
      <color attach="background" args={['#15151a']} />
      <Bmw rotation={[0, Math.PI / 1.5, 0]} scale={1} position={[0, -1.160, 0]}/>
      <hemisphereLight intensity={0.5} />
      <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={1} far={20} />
      <Essentials meshPosition={[0, -1.161, 0]} modelName={"BMW"} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
    
{/* Conditional rendering of balls based on the showAnnotations state */}

  {showAnnotations && (
          <>
      
      <Ball position={[2.5,0.3,-1.5]} annotationText='The BMW M4 Competition features a 3.0-liter twin-turbocharged inline-six engine, producing 503 horsepower and 479 lb-ft of torque.'/>
      <Ball position={[1,-0.5,-2.5]} annotationText='The M4 Competition comes equipped with adaptive M suspension and M-specific kinematics for precise handling and agility.'/>
      <Ball position={[-1,0.9,0.6]} annotationText='The M4 Competition features advanced aerodynamics, including a sculpted roof and aggressive rear diffuser for enhanced downforce.'/>
      <Ball position={[-0.6,0.4,-1]} annotationText='The M4 Competition includes state-of-the-art technology such as a 12.3-inch digital instrument cluster and a head-up display.'/>

      </>
        )}
    <Html className='SideText'>
      <h4>
      THE NEW
      </h4>
      <h1>
      M4
      </h1>
      <h3>
      BMW M4 COMPETITION
      </h3>
    </Html>
       </Canvas>
    <SceneButton onClick={onBack} label="Go Back" />
    <SceneButton onClick={toggleAnnotations} label={showAnnotations ? 'Hide Annotations' : 'Show Annotations'} style={{ position: 'absolute', top: '20px', left: '20px', padding: '10px', fontSize: '16px' }} />
    
    </>
  )
});    
    
export { F35Main, BmwMain };  



