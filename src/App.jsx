import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setTimer(0);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };
  return (
    <div className="bg-secondary stopwatch" style={{ height: "100vh" }}>
      <div className="container h-100">
        <div className="d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="p-4 bg-white  mx-auto border shadow rounded-3 ">
              <h3 className="text-center">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="background-image"
                  className="mx-2"
                />
                Stopwatch
              </h3>
              <div className="my-4">
                <h3 className="text-center">
                  <span className="px-2 ">{formatTime(timer)}</span>
                </h3>
              </div>

              <div className="gap-2 d-flex flex-sm-wrap justify-content-center ">
                <button
                  className="mx-2 rounded-2 p-1 bg-success text-white border-0"
                  onClick={handleStart}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="main-grid-item-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>{" "}
                  Start
                </button>
                <button
                  className="mx-2 rounded-2 p-1 bg-danger text-white border-0"
                  onClick={handleStop}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="main-grid-item-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <rect height="6" width="6" x="9" y="9" />
                  </svg>{" "}
                  Stop
                </button>
                <button
                  className="mx-2 rounded-2 p-1 bg-warning text-white border-0"
                  onClick={handleReset}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="main-grid-item-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <polyline points="23 4 23 10 17 10" />
                    <polyline points="1 20 1 14 7 14" />
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                  </svg>{" "}
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
