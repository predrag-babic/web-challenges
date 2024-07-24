import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1337, name: "🍌 Banana", color: "yellow" },
    { id: 1338, name: "🍎 Apple", color: "red" },
    { id: 1339, name: "🍍 Pineapple", color: "brown" },
    { id: 1340, name: "🥭 Mango", color: "orange" },
    { id: 1341, name: "🍉 Watermelon", color: "green" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return (
          <div key={fruit.id}>
            {" "}
            <Card name={fruit.name} id={fruit.id} color={fruit.color} />
          </div>
        );
      })}
    </div>
  );
}
