import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./styles.css";
import { PixelHeart } from "./components/PixelHeart";

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <PixelHeart />
      <OrbitControls minDistance={3} maxDistance={40} />
    </Canvas>
  );
};

export default App;
