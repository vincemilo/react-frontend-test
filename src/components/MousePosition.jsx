import { useState, useRef } from "react";
import Modal from "./Modal";
import Canvas from "./Canvas";

export default function MousePosition() {
  const [x, setX] = useState("");
  const [y, sety] = useState("");
  const dialogRef = useRef(null);
  const canvasRef = useRef(null);
  const toggle = (e) => {
    setX(e.nativeEvent.offsetX);
    sety(e.nativeEvent.offsetY);
  };

  // constMarkLoc = () => {};

  const modal = () => {
    console.log(dialogRef.current);
    dialogRef.current.showModal();
  };
  return (
    <>
      <Canvas canvasRef={canvasRef} />
      <button onClick={modal} id="openModal">
        Open the modal
      </button>
      <Modal dialogRef={dialogRef} />
      <div>X Position: {x}</div>
      <div>Y Position: {y}</div>
      <button onClick={toggle}>Toggle</button>
    </>
  );
}
