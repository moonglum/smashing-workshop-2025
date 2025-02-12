import { useState, memo } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h1>Counter</h1>
      <h2>
        Count: <span id="count">{count}</span>
      </h2>
      <button id="increment" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button id="decrement" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <ResetButton />
      <RandomNumber />
    </section>
  );
}

const ResetButton = memo(() => {
  console.log("SUPP SMASHING");
  return (
    <button id="reset" onClick={() => void 0}>
      Reset
    </button>
  );
});

const RandomNumber = memo(() => {
  return <div>Random number: {Math.random()}</div>;
});
