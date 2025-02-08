import { Box } from "@react-three/drei";
import React from "react";
import { BOX_SIZE } from "./PixelHeart";

const PIXEL_COLORS = {
  1: "#1A1A19",
  3: "#FFFFFF",
};

export function CreatePixelHeart({
  x,
  y,
  pixelValue,
  offsetX,
  offsetY,
  heartColor,
}) {
  if (pixelValue === 0) return null;

  return (
    <Box
      key={`${x}-${y}`}
      position={[x * BOX_SIZE - offsetX, -y * BOX_SIZE + offsetY, 0]}
      args={[BOX_SIZE, BOX_SIZE, BOX_SIZE]}
    >
      <meshStandardMaterial
        color={pixelValue === 2 ? heartColor : PIXEL_COLORS[pixelValue]}
      />
    </Box>
  );
}
