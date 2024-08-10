import React from "react";
import "./Timer.css";

export default function Timer(props) {
  const hours = Math.floor(props.time / (1000 * 60 * 60));
  const minutes = Math.floor((props.time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((props.time % (1000 * 60)) / 1000);
  const milliseconds = Math.floor(props.time % 1000);

  return (
    <div className="timer">
      <span className="digits">{("0" + hours).slice(-2)}:</span>
      <span className="digits">{("0" + minutes).slice(-2)}:</span>
      <span className="digits">{("0" + seconds).slice(-2)}.</span>
      <span className="digits mili-sec">{("0" + milliseconds).slice(-2)}</span>
    </div>
  );
}
