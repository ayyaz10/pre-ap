import { useState, useEffect } from "react";

const AutoCounter = () => {
  const [counterValue, setCounterValue] = useState(10);

  const startCounter = () => {
    const timer = setInterval(() => {
      setCounterValue((counterVal) => {
        return counterVal + 1;
      });
      console.log("counter value updated");
    }, 100);
    return timer;
  };

  const stopCounter = () => {
    setCounterValue(counterValue - 1);
  };

  const resetCounter = () => {
    setCounterValue(0);
  };

  useEffect(() => {
    //mount
    const timer = startCounter();

    return () => {
      //unmount
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="flex flex-col mb-10">
      <h2 className="text-2xl">Count is</h2>
      <div>
        <p className="text-xl">{counterValue}</p>
        <div className="flex justify-center gap-4 mb-4">
          <button onClick={startCounter}>Start Counter</button>
          <button onClick={stopCounter}>Stop Counter</button>
        </div>
        <div className="flex justify-center">
          <button onClick={resetCounter}>Reset</button>
        </div>
      </div>
    </section>
  );
};

export default AutoCounter;
