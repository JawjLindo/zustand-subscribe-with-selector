import { useEffect } from "react";
import { Store1, useStore1 } from "./store1";
import { Store2, useStore2 } from "./store2";

const counterSelector = (state: Store1) => state.counter;
const incrementSelector = (state: Store1) => state.increment;
const decrementSelector = (state: Store1) => state.decrement;
const messageSelector = (state: Store2) => state.message;
const updateMessageSelector = (state: Store2) => state.updateMessage;

function App() {
  const counter = useStore1(counterSelector);
  const increment = useStore1(incrementSelector);
  const decrement = useStore1(decrementSelector);
  const message = useStore2(messageSelector);
  const updateMessage = useStore2(updateMessageSelector);

  useEffect(() => {
    const unsub = useStore1.subscribe(counterSelector, (cur, prev) => {
      console.log(cur, prev);
      updateMessage();
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <div>
      <div>Counter: {counter}</div>
      <div>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
      </div>
      <div>{message}</div>
    </div>
  );
}

export default App;
