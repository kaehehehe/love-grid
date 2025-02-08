import React from "react";
import "./styles.css";
import { HeartCanvas } from "./components/HeartCanvas";

const heartColorSets = [
  {
    background: "#FFCAD4",
    heart: "#d80032",
  },
  {
    background: "#ECFFE6",
    heart: "#399918",
  },
  {
    background: "#BBE9FF",
    heart: "#0D92F4",
  },
  {
    background: "#FFE1FF",
    heart: "#7E60BF",
  },
];

const App = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
      }}
    >
      {heartColorSets.map((colors, index) => (
        <HeartCanvas
          key={index}
          backgroundColor={colors.background}
          heartColor={colors.heart}
        />
      ))}
    </div>
  );
};

export default App;
