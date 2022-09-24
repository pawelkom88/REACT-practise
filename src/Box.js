export default function Box({boxNumber, selected, handleColorChange}) {
  const isColoured = selected.find(({id}) => id === boxNumber) ? "green" : "";

  return (
    <div
      className={`${isColoured} box`}
      onClick={() => {
        handleColorChange(boxNumber);
      }}></div>
  );
}
