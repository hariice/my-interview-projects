import React, { useState, useEffect } from "react";

const BoxMovement = () => {
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [timer, setTimer] = useState(0);
  const moveDuration = 5000; // 5 seconds

  // Handle the movement of the box
  useEffect(() => {
    if (isPaused) return;

    const intervalId = setInterval(() => {
      setPosition((prev) => prev + 1);
      setTimer((prev) => prev + 10);
    }, 1);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  // Reset the position after a given time
  useEffect(() => {
    if (timer >= moveDuration) {
      setIsPaused(true);
      setTimer(0);
      setPosition(0);
    }
  }, [timer]);

  const startMovement = () => {
    setIsPaused(false);
  };

  const pauseMovement = () => {
    setIsPaused(true);
  };

  const resumeMovement = () => {
    setIsPaused(false);
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "1000px",
          height: "50px",
          backgroundColor: "lightgrey",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: `${position}px`,
            width: "20px",
            height: "20px",
            backgroundColor: "blue",
          }}
        />
      </div>
      <button onClick={startMovement} disabled={!isPaused && timer > 0}>
        Start
      </button>
      <button onClick={pauseMovement} disabled={isPaused}>
        Pause
      </button>
      <button onClick={resumeMovement} disabled={!isPaused || timer === 0}>
        Resume
      </button>
    </div>
  );
};

export default BoxMovement;