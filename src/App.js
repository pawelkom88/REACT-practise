import React from "react";
import Box from "./Box";
import "./App.css";

const numberOfBoxes = [0, 1, 2, 3, 4, 5, 6, 7];

function App() {
  const [selected, setSelected] = React.useState([]);
  const ref = React.useRef(false);

  const handleColorChange = id => {
    // make sure that clicked box cannot be choosen again
    if (!selected.includes(id)) {
      setSelected([...selected, {id}]);
    }
  };

  React.useEffect(() => {
    if (numberOfBoxes.length == selected.length) {
      ref.current = true;
    }

    function deleteLastEl() {
      if (ref.current == true && selected.length > 0) {
        let selectedCopy = [...selected];
        selectedCopy.pop();
        setSelected(selectedCopy);
      } else {
        ref.current = false;
      }
    }

    const interval = setInterval(deleteLastEl, 1000);

    return () => clearInterval(interval);
  }, [selected.length, selected]);

  return (
    <>
      <div className="App">
        <div className="container">
          {numberOfBoxes.map((_, i) => {
            return (
              <Box
                key={i}
                boxNumber={i}
                selected={selected}
                handleColorChange={handleColorChange}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
