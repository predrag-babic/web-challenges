import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("Button clicked!!!");
  }
  return (
    <Button
      color="blue"
      backgroundColor="red"
      text="Click me"
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, backgroundColor, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        color: color,
        backgroundColor: backgroundColor,
        height: "100px",
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
