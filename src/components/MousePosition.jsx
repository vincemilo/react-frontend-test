import { useState } from "react";
import waldo from "../assets/waldo2.jpg";
import MagnifyingGlass from "./MagnifyingGlass";

export default function MousePosition() {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setImgSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[xRatio, yRatio], setXYRatio] = useState([0, 0]);

  const handleClick = () => {
    setXYRatio([x / imgWidth, y / imgHeight]);
  };

  return (
    <>
      <div className="image" onClick={handleClick}>
        <img
          src={waldo}
          onMouseEnter={(e) => {
            setImgSize([e.target.clientWidth, e.target.clientHeight]);
            setShowMagnifier(true);
          }}
          onMouseMove={(e) => {
            const x = e.nativeEvent.offsetX;
            const y = e.nativeEvent.offsetY;
            setXY([x, y]);
          }}
          onMouseLeave={() => {
            setShowMagnifier(false);
          }}
          alt={"img"}
        />
        <MagnifyingGlass
          showMagnifier={showMagnifier}
          coords={{ x, y }}
          src={waldo}
          imgSize={{ w: imgWidth, h: imgHeight }}
        />
      </div>
      <div>Offset X Position: {x}</div>
      <div>Offset Y Position: {y}</div>
      <div>X Ratio: {xRatio}</div>
      <div>Y Ratio: {yRatio}</div>
    </>
  );
}
