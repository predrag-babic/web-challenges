import "./styles.css";

export default function App() {
  return <Greeting name="Jenny" />;
}

function Greeting({ name }) {
  const coaches = ["Andrea", "Felix", "Stephie"];
  return (
    <h1>{coaches.includes(name) ? "Hello, Coach!" : `Hello, ${name}!`}</h1>
  );
}
