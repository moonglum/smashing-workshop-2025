import { createEffect, createSignal } from "./basic-signal";

const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const countElement = document.getElementById("count");
const randomNumberElement = document.getElementById("random-number");
const generateRandomNumberButton = document.getElementById(
  "generate-random-number"
);

const [count, setCount] = createSignal(0);
const [random, setRandom] = createSignal(Math.random());

countElement.textContent = count().toString();

createEffect(() => {
  console.log("Count changed", count());
  countElement.textContent = count().toString();
});

createEffect(() => {
  console.log("Random changed", random());
  randomNumberElement.textContent = random().toString();
});

document.addEventListener("click", (event) => {
  if (event.target === increment) {
    setCount(count() + 1);
  } else if (event.target === decrement) {
    setCount(count() - 1);
  } else if (event.target === reset) {
    setCount(0);
  } else if (event.target === generateRandomNumberButton) {
    setRandom(Math.random());
  }
});
