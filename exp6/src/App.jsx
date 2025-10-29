// App.js
import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(0);   // useState → to store counter value
  const inputRef = useRef(null);           // useRef → to directly access DOM element

  // useEffect → runs after component renders
  useEffect(() => {
    document.title = `You clicked ${count} times`; // updates browser tab title
  }, [count]); // runs whenever 'count' changes

  const focusInput = () => {
    inputRef.current.focus(); // directly focuses the input box using ref
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Hooks Demo</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Click Me</button>

      <div style={{ marginTop: "30px" }}>
        <input ref={inputRef} type="text" placeholder="Click button to focus me" />
        <br />
        <button onClick={focusInput} style={{ marginTop: "10px" }}>
          Focus Input
        </button>
      </div>
    </div>
  );
}
