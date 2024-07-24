import "./Card.css";

export default function Card({ name, color, id }) {
  return (
    <p className={`card card--${color}`}>
      {name}
      {id}
    </p>
  );
}
