import { useState } from "react";
import TargetingBox from "./TargetingBox";

export default function MousePosition() {
  const [x, setX] = useState(0);
  const [y, sety] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const position = (e) => {
    setX(e.nativeEvent.offsetX);
    sety(e.nativeEvent.offsetY);
    setIsActive(true);
  };

  return (
    <>
      <div>X Position: {x}</div>
      <div>Y Position: {y}</div>
      <div className="image" onClick={position}>
        <TargetingBox coords={{ x: x, y: y }} isActive={isActive} />
      </div>
    </>
  );
}
