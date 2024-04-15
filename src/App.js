import { useState } from "react";
import TooltipComponent from "./TooltipComponent";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function App() {
  const [position, setPosition] = useState("left");

  const handleButtonClick = (value) => {
    setPosition(value);
  };

  return (
    <div className="App">
      <TooltipComponent position={position} />
      <ButtonGroup aria-label="Button Group" id="buttons">
        <Button variant="primary" onClick={() => handleButtonClick("left")}>
          Left
        </Button>
        <Button variant="secondary" onClick={() => handleButtonClick("top")}>
          Top
        </Button>
        <Button variant="success" onClick={() => handleButtonClick("right")}>
          Right
        </Button>
        <Button variant="warning" onClick={() => handleButtonClick("bottom")}>
          Bottom
        </Button>
      </ButtonGroup>
      ;
    </div>
  );
}

export default App;
