import React from "react";
import Box from "./Box";
import "./App.css";

const numberOfBoxes = [0, 1, 2, 3, 4, 5, 6, 7];

function App() {
  const [selected, setSelected] = React.useState([]);
  const [isReversed, setIsReversed] = React.useState(false);

  const handleColorChange = id => {
    // make sure that clicked box cannot be choosen again
    if (!selected.includes(id)) {
      setSelected([...selected, id]);
    }
  };

  React.useEffect(() => {
    if (numberOfBoxes.length === selected.length) {
      setIsReversed(true);
    }

    function deleteLastEl() {
      if (isReversed && selected.length > 0) {
        const selectedCopy = [...selected];
        selectedCopy.pop();
        setSelected(selectedCopy);
      } else {
        setIsReversed(false);
      }
    }

    const interval = setInterval(deleteLastEl, 1000);

    return () => clearInterval(interval);
  }, [selected, isReversed]);

  return (
    <>
      <div className="App">
        <div className="container">
          {numberOfBoxes.map((_, id) => {
            return (
              <Box
                key={id}
                boxNumber={id}
                isSelected={selected.includes(id)}
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
