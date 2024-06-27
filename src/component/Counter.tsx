import { useState } from "react";

const Counter = () => {
  const initialCounters = [0, 1, 0, 0];
  const [counters, setCounters] = useState(initialCounters);

  const handleCounterChange = (index, change) => {
    setCounters((prevCounters) =>
      prevCounters.map((prevCounter, i) =>
        i === index ? prevCounter + change : prevCounter
      )
    );
  };

  const handleReset = (index) => {
    console.log(index);
    setCounters((prevCounters) =>
      prevCounters.map((prevCounter, i) => (i === index ? 0 : prevCounter))
    );
  };

  return (
    <section className="flex flex-col mb-10">
      <h2 className="text-2xl">Count is</h2>
      {counters.map((counter, index) => (
        <div key={index}>
          <p className="text-xl">{counter}</p>
          <div className="flex justify-center gap-4 mb-4">
            <button onClick={() => handleCounterChange(index, -1)}>
              - Decrement
            </button>
            <button onClick={() => handleCounterChange(index, 1)}>
              + Increment
            </button>
          </div>
          <div className="flex justify-center">
            <button onClick={() => handleReset(index)}>Reset</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Counter;
