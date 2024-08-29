import { useState } from "react";
import waldo from "../assets/waldo.jpg";
import MagnifyingGlass from "./MagnifyingGlass";

export default function MousePosition() {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setImgSize] = useState([0, 0]);
  const [isActive, setIsActive] = useState(false);
  const [showMagnifier, setShowMagnifier] = useState(false);

  const handleClick = (e) => {
    console.log(e.pageX);
    !isActive ? setIsActive(true) : null;
  };

  return (
    <>
      <div>X Position: {x}</div>
      <div>Y Position: {y}</div>
      <div className="image" onClick={handleClick}>
        <img
          src={waldo}
          onMouseEnter={(e) => {
            const elem = e.currentTarget;
            const { width, height } = elem.getBoundingClientRect();
            setImgSize([width, height]);
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
    </>
  );
}
