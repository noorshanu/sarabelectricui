"use client";

import { useRef, useLayoutEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BuildingModel() {
  const group = useRef<THREE.Group>(null);

  // A procedural abstract building
  return (
    <group ref={group}>
      {/* Base */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 1, 4]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.1} metalness={0.2} />
      </mesh>
      
      {/* Main Tower */}
      <mesh position={[0, 4, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 6, 2.5]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.2} metalness={0.5} transparent opacity={0.9} />
      </mesh>

      {/* Glass facade elements */}
      <mesh position={[0, 4, 1.3]} castShadow>
        <boxGeometry args={[2.2, 5.8, 0.1]} />
        <meshPhysicalMaterial color="#3b82f6" transmission={0.9} opacity={1} metalness={0.9} roughness={0.1} ior={1.5} thickness={0.5} />
      </mesh>
      <mesh position={[0, 4, -1.3]} castShadow>
        <boxGeometry args={[2.2, 5.8, 0.1]} />
        <meshPhysicalMaterial color="#3b82f6" transmission={0.9} opacity={1} metalness={0.9} roughness={0.1} ior={1.5} thickness={0.5} />
      </mesh>
      <mesh position={[1.3, 4, 0]} castShadow>
        <boxGeometry args={[0.1, 5.8, 2.2]} />
        <meshPhysicalMaterial color="#3b82f6" transmission={0.9} opacity={1} metalness={0.9} roughness={0.1} ior={1.5} thickness={0.5} />
      </mesh>
      <mesh position={[-1.3, 4, 0]} castShadow>
        <boxGeometry args={[0.1, 5.8, 2.2]} />
        <meshPhysicalMaterial color="#3b82f6" transmission={0.9} opacity={1} metalness={0.9} roughness={0.1} ior={1.5} thickness={0.5} />
      </mesh>

      {/* Top section */}
      <mesh position={[0, 7.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 1, 2]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.3} metalness={0.8} />
      </mesh>
      
      {/* Antenna */}
      <mesh position={[0, 9, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.1, 2]} />
        <meshStandardMaterial color="#94a3b8" metalness={1} roughness={0.2} />
      </mesh>
    </group>
  );
}

function CameraRig() {
  const { camera } = useThree();
  
  useLayoutEffect(() => {
    // Initial camera setup
    camera.position.set(8, 5, 8);
    camera.lookAt(0, 3, 0);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main-scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    // Section 1 -> 2 (Hero to Approach)
    tl.to(camera.position, {
      x: 0,
      y: 8,
      z: 10,
      ease: "power1.inOut"
    }, 0);
    
    // Section 2 -> 3 (Approach to Services)
    tl.to(camera.position, {
      x: -8,
      y: 4,
      z: 6,
      ease: "power1.inOut"
    }, 1);

    // Section 3 -> 4 (Services to Dashboard)
    tl.to(camera.position, {
      x: -4,
      y: 10,
      z: -8,
      ease: "power1.inOut"
    }, 2);

    // Section 4 -> 5 (Dashboard to Projects)
    tl.to(camera.position, {
      x: 6,
      y: 2,
      z: -6,
      ease: "power1.inOut"
    }, 3);

    // Section 5 -> End
    tl.to(camera.position, {
      x: 8,
      y: 5,
      z: 8,
      ease: "power1.inOut"
    }, 4);

    // Always look at the building
    tl.eventCallback("onUpdate", () => {
      camera.lookAt(0, 4, 0);
    });

    return () => {
      tl.kill();
    };
  }, [camera]);

  return null;
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas shadows camera={{ fov: 45 }}>
        <color attach="background" args={["#ffffff"]} />
        <ambientLight intensity={0.5} />
        <directionalLight 
          castShadow 
          position={[10, 10, 5]} 
          intensity={1.5} 
          shadow-mapSize={[1024, 1024]}
        />
        <Environment preset="city" />
        
        <BuildingModel />
        <ContactShadows position={[0, 0, 0]} opacity={0.4} scale={20} blur={2} far={10} />
        <CameraRig />
      </Canvas>
    </div>
  );
}
