import { useState } from "react";
import TargetingBox from "./TargetingBox";

export default function MousePosition() {
  const [x, setX] = useState(0);
  const [y, sety] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const position = (e) => {
    setX(e.nativeEvent.offsetX);
    sety(e.nativeEvent.offsetY);
    console.log(e.pageX);
    setImgWidth(e.target.clientWidth);
    setImgHeight(e.target.clientHeight);
    !isActive ? setIsActive(true) : null;
  };

  return (
    <>
      <div>X Position: {x}</div>
      <div>Y Position: {y}</div>
      <div className="image" onClick={position}>
        <TargetingBox
          coords={{ x: x, y: y }}
          imgSize={{ h: imgHeight, w: imgWidth }}
          isActive={isActive}
        />
      </div>
    </>
  );
}
