import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { CreatePixelHeart } from "./CreatePixelHeart";

const heartPixelGrid = [
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
  [0, 1, 2, 2, 2, 1, 0, 1, 2, 2, 2, 1, 0],
  [1, 2, 3, 3, 2, 2, 1, 2, 2, 2, 2, 2, 1],
  [1, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
  [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
  [0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
];

export const BOX_SIZE = 0.3;

export function PixelHeart({ heartColor }) {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  const offsetX = (heartPixelGrid[0].length * BOX_SIZE) / 2;
  const offsetY = (heartPixelGrid.length * BOX_SIZE) / 2;

  return (
    <group ref={groupRef}>
      {heartPixelGrid.map((row, y) =>
        row.map((pixelValue, x) =>
          CreatePixelHeart({
            x,
            y,
            pixelValue,
            offsetX,
            offsetY,
            heartColor,
          })
        )
      )}
    </group>
  );
}
