import React, { useState } from 'react'
import { Line } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'
import { Html } from '@react-three/drei'
import '../App.css'

const Ball = React.memo(({ position = [0, 0, 0], color = 'white', radius = 0.1, annotationText = 'Annotation' }) => {
  const [hovered, setHovered] = useState(false)
  const [annotationPosition, setAnnotationPosition] = useState([position[0] + 1, position[1] + 1, position[2] + 1])

  // Spring animation for scale
  const { scale } = useSpring({
    scale: hovered ? 1.5 : 1, // Scale up to 1.5 when hovered, otherwise 1
    config: { mass: 1, tension: 280, friction: 12 }, //For Smoothness
  })

  
  return (
    <>
      <animated.mesh
        position={position}
        scale={scale} // Animated scale
        onPointerOver={() => {
          setHovered(true)
          setAnnotationPosition([position[0] + 1, position[1] + 1, position[2] + 1]) // Set hovered to true on mouse over
        }} 
        onPointerOut={() => setHovered(false)} // Set hovered to false on mouse out
      >
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial attach="material" color={color} />

        </animated.mesh>

{/* Conditional rendering of annotation */}
      {hovered && (
        <>
          <Html
            position={annotationPosition}
            style={{ pointerEvents: 'none' }} //Prevent annotations from blocking pointer events
          >
            <div className="annotation">
              {annotationText}
            </div>
          </Html>

{/* Line connecting the ball to annotation */}
          <Line
            points={[position, annotationPosition]} //Line from ball to annotation
            color="white"
            lineWidth={1.5}
            dashed={false} //Solid line
          />
        </>
      )}
    </>
  )
})

export default Ball;




