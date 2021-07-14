import React from 'react';
import logo from './logo.svg';
import './App.css';
import useMousePosition from './useMousePosition';

function App() {
    const { x, y } = useMousePosition();

  const hasMovedCursor = typeof x === "number" && typeof y === "number";

  return (
    <div className="App">
      <h1>
        {hasMovedCursor
          ? `My cursor is at (${x}, ${y}).`
          : "Welcome to HRC"}
      </h1>
    </div>
  );
}

export default App;
