import React from "react";
import "./ToolPalette.styles.scss";
import { CirclePicker } from "react-color";
import { Button, Tooltip } from "@material-ui/core";
const ToolPalette = ({ handleColorChange, handleToolClick, activeTool }) => {
  return (
    <div className="tool-palette">
      <div className="color-picker">
        <CirclePicker onChange={handleColorChange} />
      </div>
      <div className="tool-picker">
        <div className="tool-picker__column">
          <Tooltip title="Circle" placement="top">
            <Button
              className="btn"
              variant="contained"
              color={activeTool === "CIRCLE" ? "secondary" : "primary"}
              onClick={() => handleToolClick("CIRCLE")}
            >
              <i className="fas fa-circle"></i>
            </Button>
          </Tooltip>
          <Tooltip title="Square">
            <Button
              className="btn"
              variant="contained"
              color={activeTool === "SQUARE" ? "secondary" : "primary"}
              onClick={() => handleToolClick("SQUARE")}
            >
              <i className="fas fa-square"></i>
            </Button>
          </Tooltip>
        </div>
        <div className="tool-picker__column">
          <Tooltip title="Brush" placement="top">
            <Button
              className="btn"
              variant="contained"
              color={activeTool === "BRUSH" ? "secondary" : "primary"}
              onClick={() => {
                handleToolClick("BRUSH");
              }}
            >
              <i className="fas fa-paint-brush" />
            </Button>
          </Tooltip>
          <Tooltip title="Erase">
            <Button
              className="btn"
              variant="contained"
              color={activeTool === "ERASE" ? "secondary" : "primary"}
              onClick={() => handleToolClick("ERASE")}
            >
              <i className="fas fa-eraser"></i>
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ToolPalette;
