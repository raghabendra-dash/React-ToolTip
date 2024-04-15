import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function TooltipComponent({ position }) {
  return (
    <>
      <OverlayTrigger
        className="tooltip"
        placement={position}
        overlay={
          <Tooltip id={`tooltip-${position}`}>
            Thanks for Hovering! I'm a Tooltip.
          </Tooltip>
        }
      >
        <Button variant="info">Hover over me !!</Button>
      </OverlayTrigger>
    </>
  );
}

export default TooltipComponent;
