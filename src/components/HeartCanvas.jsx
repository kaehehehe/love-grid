import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PixelHeart } from "./PixelHeart";

export function HeartCanvas({ backgroundColor, heartColor }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{ width: "100%", height: "100%", backgroundColor }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <PixelHeart heartColor={heartColor} />
      <OrbitControls minDistance={4} maxDistance={30} />
    </Canvas>
  );
}
