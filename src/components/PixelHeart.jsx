import { Box } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const grid = [
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

const boxSize = 0.3;

const colors = {
  1: "#1A1A19",
  3: "#FFFFFF",
};

export function PixelHeart({ heartColor }) {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  const offsetX = (grid[0].length * boxSize) / 2;
  const offsetY = (grid.length * boxSize) / 2;

  return (
    <group ref={groupRef}>
      {grid.map((row, y) =>
        row.map((value, x) => {
          if (value !== 0) {
            return (
              <Box
                key={`${x}-${y}`}
                position={[x * boxSize - offsetX, -y * boxSize + offsetY, 0]}
                args={[boxSize, boxSize, boxSize]}
              >
                <meshStandardMaterial
                  color={value === 2 ? heartColor : colors[value]}
                />
              </Box>
            );
          }
          return null;
        })
      )}
    </group>
  );
}
