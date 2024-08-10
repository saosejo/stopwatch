import React, { useState, useEffect, useRef } from "react";
import "./StopWatch.css";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";

function StopWatch() {
    // const [isActive, setIsActive] = useState(false);
    // const [isPaused, setIsPaused] = useState(true);
    // const [elapsedTime, setElapsedTime] = useState(0);
    // const workerRef = useRef(null);

    // useEffect(() => {
    //     // Initialize the web worker
    //     workerRef.current = new Worker(new URL('../Tools/WebWorkerStopwatch.ts', import.meta.url));

    //     // Handle messages from the worker
    //     workerRef.current.onmessage = (event) => {
    //         setElapsedTime(event.data);
    //     };

    //     return () => {
    //         // Clean up the worker when the component is unmounted
    //         workerRef.current.terminate();
    //     };
    // }, []);

    // useEffect(() => {
    //     if (isActive && !isPaused) {
    //         workerRef.current.postMessage('start');
    //         const interval = setInterval(() => {
    //             workerRef.current.postMessage('getElapsedTime');
    //         }, 10); // Update every 10 milliseconds

    //         return () => clearInterval(interval);
    //     } else if (isActive && isPaused) {
    //         workerRef.current.postMessage('pause');
    //     } else {
    //         workerRef.current.postMessage('reset');
    //     }
    // }, [isActive, isPaused]);

    // const handleStart = () => {
    //     setIsActive(true);
    //     setIsPaused(false);
    // };

    // const handlePauseResume = () => {
    //     setIsPaused(!isPaused);
    // };

    // const handleReset = () => {
    //     setIsActive(false);
    //     setElapsedTime(0);
    // };

    // return (
    //     <div className="stop-watch">
    //         <Timer time={elapsedTime} />
    //         <ControlButtons
    //             active={isActive}
    //             isPaused={isPaused}
    //             handleStart={handleStart}
    //             handlePauseResume={handlePauseResume}
    //             handleReset={handleReset}
    //         />
    //     </div>
    // );
	const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timeInterval = useRef(null);
  const startTimeRef = useRef(null);
  const accumulatedTimeRef = useRef(0);
  const handleStart = () => {
    if (isRunning) return;
    console.log(performance.now())
    setIsRunning(true);
    startTimeRef.current = performance.now() - accumulatedTimeRef.current;
    timeInterval.current = setInterval(() => {
        const elapsedTime = performance.now() - startTimeRef.current;
        setTimer(elapsedTime);
    }, 10);
  };

  const handlePause = () => {
    console.log(isRunning);
    if (!isRunning) return;
    setIsRunning(false);
    clearInterval(timeInterval.current);
    accumulatedTimeRef.current = performance.now() - startTimeRef.current;
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(timeInterval.current);
    accumulatedTimeRef.current = 0;
    setTimer(0);
  };

  
 return (
        <div className="stop-watch">
            <Timer time={timer} />
            <ControlButtons
                // active={isActive}
                // isPaused={isPaused}
                handleStart={handleStart}
                handlePause={handlePause}
                handleReset={handleReset}
            />
        </div>
    );
}

export default StopWatch;
