import { Box } from "@react-three/drei";
import React from "react";

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

const colors = {
  1: "#1A1A19",
  2: "#d80032",
  3: "#FFFFFF",
};

const boxSize = 0.3;

export function PixelHeart() {
  const offsetX = (grid[0].length * boxSize) / 2;
  const offsetY = (grid.length * boxSize) / 2;

  return (
    <>
      {grid.map((row, y) =>
        row.map((value, x) => {
          if (value !== 0) {
            return (
              <Box
                key={`${x}-${y}`}
                position={[x * boxSize - offsetX, -y * boxSize + offsetY, 0]}
                args={[boxSize, boxSize, boxSize]}
              >
                <meshStandardMaterial color={colors[value]} />
              </Box>
            );
          }
          return null;
        })
      )}
    </>
  );
}
