import { useState } from "react";

export default function MousePosition() {
  const [x, setX] = useState("");
  const [y, sety] = useState("");

  const toggle = (e) => {
    setX(e.nativeEvent.offsetX);
    sety(e.nativeEvent.offsetY);
  };

  const modal = () => {};

  return (
    <>
      <div>X Position: {x}</div>
      <div>Y Position: {y}</div>
      <button onClick={toggle}>Toggle</button>
    </>
  );
}
