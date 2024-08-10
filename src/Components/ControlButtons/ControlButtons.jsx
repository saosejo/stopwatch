import React from "react";
import { Button, TextField } from "@mui/material";

export default function ControlButtons(props) {
  const StartButton = (
    <Button className="btn btn-one btn-start" onClick={props.handleStart}>
      Start
    </Button>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <Button onClick={props.handleReset}>Reset</Button>
      <Button
        className="btn btn-one"
        onClick={props.handlePauseResume}
      >
        {props.isPaused ? "Resume" : "Pause"}
      </Button>
    </div>
  );

  return (
    <div className="Control-Buttons">
       <div className="btn-grp">
        <Button onClick={props.handleStart}>Start</Button>
        <Button onClick={props.handlePause}>Pause</Button>
        <Button onClick={props.handleReset}>Reset</Button>
      </div>
      {/* <div>{props.active ? ActiveButtons : StartButton}</div> */}
    </div>
  );
}