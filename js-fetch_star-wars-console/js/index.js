console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results[2].height);
  return data;
}

console.log(fetchData());

fetchData();
