export default function TargetingBox({ coords, isActive }) {
  let active = "targeting-box";
  if (isActive) active += " active";
  const boxStyle = {
    top: coords.y * 0.9,
    left: coords.x * 0.9,
  };
  return <div className={active} style={boxStyle} id="tBox"></div>;
}
