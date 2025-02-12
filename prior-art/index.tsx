import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function Counter() {
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
    </section>
  );
}

function ResetButton() {
  return (
    <button id="reset" onClick={() => void 0}>
      Reset
    </button>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<Counter />);
