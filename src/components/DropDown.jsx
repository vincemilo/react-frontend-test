export default function DropDown({ showDropdown, coords, modal }) {
  return (
    <dialog
      ref={modal}
      className="modal"
      style={{
        top: `${coords.y}px`,
        left: `${coords.x}px`,
      }}
    >
      <div className="modalDiv">
        Who do you see?
        <select>
          <option>Waldo</option>
        </select>
      </div>
    </dialog>
  );
}
