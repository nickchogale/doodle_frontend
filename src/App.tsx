import { useEffect } from "react";
import "./App.css";
import { fabric } from "fabric";

function App() {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      width: 200,
      height: 200,
      backgroundColor: "red",
    });

    // const rect = new fabric.Rect({
    //   width: 200,
    //   height: 200,
    //   fill: "red",
    // });

    // canvas.add(rect);
  }, []);

  return (
    <div className="App">
      <h1 className="text-[gray]">Canvas</h1>
      <canvas id="canvas" width="300" height="300"></canvas>
    </div>
  );
}

export default App;
