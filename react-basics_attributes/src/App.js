import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Welcome to wikipedia!!</h2>
      <label htmlFor="input__id"></label>
      <input id="input__id"></input>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Wikipedia:Hauptseite"
      >
        Wikipedia
      </a>
    </article>
  );
}
