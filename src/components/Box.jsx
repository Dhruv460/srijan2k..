import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

function MysteryBoxContent() {
  const [isClicked, setIsClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Load texture
  const texture = new THREE.TextureLoader().load(
    "https://via.placeholder.com/300x200"
  );

  // Box animation
  const boxAnimation = useSpring({
    scale: isClicked ? [0, 0, 0] : [1, 1, 1],
    rotation: isClicked ? [0, 0, 0] : [0, Math.PI * 2, 0],
    config: { duration: 2000 },
  });

  // Card animation
  const cardAnimation = useSpring({
    scale: isClicked ? [1, 1, 1] : [0, 0, 0],
    position: isClicked ? [0, 0.5, 0] : [0, -1, 0],
    config: { mass: 1, tension: 150, friction: 18 },
  });

  // Card rotation
  const rotationAnimation = useSpring({
    rotation: hovered ? [0, 0, 0] : [0, Math.PI * 2, 0],
    config: { duration: 3000, loop: true },
  });

  return (
    <group onClick={() => setIsClicked(true)}>
      {/* Mystery Box */}
      <animated.mesh
        scale={boxAnimation.scale}
        rotation={boxAnimation.rotation}
        castShadow
      >
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#1abc9c" roughness={0.4} metalness={0.6} />
      </animated.mesh>

      {/* Rotating Card */}
      <animated.group
        scale={cardAnimation.scale}
        position={cardAnimation.position}
        rotation={rotationAnimation.rotation}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        {/* Card */}
        <mesh castShadow>
          <boxGeometry args={[1, 1.4, 0.1]} />
          <meshStandardMaterial
            color="#f1c40f"
            emissive="#f39c12"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Image */}
        <mesh position={[0, 0.2, 0.06]}>
          <planeGeometry args={[0.8, 0.6]} />
          <meshBasicMaterial map={texture} />
        </mesh>

        {/* Text */}
        <mesh position={[0, -0.5, 0.06]}>
          <planeGeometry args={[0.8, 0.3]} />
          <Html>
            <div
              style={{
                color: "black",
                background: "white",
                padding: "5px",
                textAlign: "center",
                borderRadius: "5px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Mystery Text
            </div>
          </Html>
        </mesh>
      </animated.group>
    </group>
  );
}

export default function MysteryBox() {
  return (
    <Canvas
      shadows
      camera={{ position: [3, 2, 5], fov: 50 }}
      style={{ height: "100vh", width: "100%" }}
    >
      <ambientLight intensity={0.4} />
      <spotLight
        position={[5, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <MysteryBoxContent />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
