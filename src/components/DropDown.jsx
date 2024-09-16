export default function DropDown({ showDropdown, coords }) {
  console.log(showDropdown);
  return (
    <dialog
      style={{
        display: showDropdown ? "" : "none",
        position: "absolute",
        top: `${coords.y}px`,
        left: `${coords.x}px`,
      }}
    >
      <select>
        <option>Waldo</option>
      </select>
    </dialog>
  );
}
