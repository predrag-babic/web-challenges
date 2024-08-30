import { cities } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Cities() {
  const router = useRouter();

  function handleRandomCities() {
    const randomCity = getRandomElement(cities);
    router.push(`/cities/${randomCity.slug}`);
  }

  return (
    <>
      <h1 style={{ marginLeft: "10px" }}>CITIES</h1>
      <ul>
        {cities.map((city) => (
          <li style={{ color: "#1E90FF", listStyle: "circle" }} key={city.id}>
            <Link
              style={{
                fontSize: "16px",
                color: "#1E90FF",
                textDecoration: "none",
              }}
              href={`/cities/${city.slug}`}
            >
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={handleRandomCities}
        style={{
          backgroundColor: "#17A2B8",
          color: "white",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginLeft: "10px",
        }}
      >
        Random cities{" "}
      </button>
    </>
  );
}
