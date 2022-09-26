export default function Box({boxNumber, isSelected, handleColorChange}) {
  return (
    <div
      className={`${isSelected ? "green" : ""} box`}
      onClick={() => {
        handleColorChange(boxNumber);
      }}></div>
  );
}
