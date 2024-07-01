import { useState, useEffect, useRef } from "react";

const Counter = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (seconds >= 5) {
      setSeconds(0);
      setMinutes((minutes) => minutes + 1);
    }
    if (minutes >= 5) {
      setMinutes(0);
      setHours((hours) => hours + 1);
    }
  }, [seconds, minutes]);

  const startTimer = () => {
    if (timerRef.current !== null) return; // Prevent multiple intervals
    timerRef.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer(); // Cleanup on unmount
  }, []);

  return (
    <div>
      <h1>Counter</h1>
      <div>
        {hours}:{minutes}:{seconds}
        <div className="flex flex-wrap justify-center gap-4 max-w-[300px] mx-auto mt-10">
          <button onClick={startTimer} className="px-10 py-2">
            Start
          </button>
          <button onClick={stopTimer} className="px-10 py-2">
            Stop
          </button>
          <button onClick={resetTimer} className="px-10 py-2">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
