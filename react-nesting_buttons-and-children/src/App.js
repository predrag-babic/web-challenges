import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click me</Button>
      <Button>Hier clicken!</Button>
      <Button>
        Press the <strong>Button</strong>{" "}
      </Button>
      <Button>ALARM!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
