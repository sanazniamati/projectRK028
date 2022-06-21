import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, RegularPolygon } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <RegularPolygon
          x={80}
          y={200}
          sides={5}
          radius={70}
          fill={"red"}
          stroke={"black"}
          strokeWidth={4}
          draggable
          onMouseEnter={(e) => {
            const container = e.target.getStage().container();
            container.style.cursor = "pointer";
          }}
          onMouseLeave={(e) => {
            const container = e.target.getStage().container();
            container.style.cursor = "default";
          }}
        />
        <RegularPolygon
          x={220}
          y={200}
          sides={5}
          radius={70}
          fill={"green"}
          stroke={"black"}
          strokeWidth={4}
          draggable
          onMouseEnter={(e) => {
            const container = e.target.getStage().container();
            container.style.cursor = "move";
          }}
          onMouseLeave={(e) => {
            const container = e.target.getStage().container();
            container.style.cursor = "default";
          }}
        />
        <RegularPolygon
          x={360}
          y={200}
          sides={5}
          radius={70}
          fillLinearGradientStartPoint={{ x: -50, y: -50 }}
          fillLinearGradientEndPoint={{ x: 50, y: 50 }}
          fillLinearGradientColorStops={[0, "red", 1, "yellow"]}
          stroke={"black"}
          strokeWidth={4}
          draggable
          onMouseEnter={(e) => {
            const container = e.target.getStage().container();
            container.style.cursor = "crosshair";
          }}
          onMouseLeave={(e) => {
            const container = e.target.getStage().container();
            container.style.cursor = "default";
          }}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
