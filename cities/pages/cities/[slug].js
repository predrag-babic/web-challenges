import { cities } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function CityDetails() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const cityIndex = cities.findIndex(({ slug: citySlug }) => citySlug === slug);

  const city = cities[cityIndex];
  const nextCity = cities[cityIndex + 1];
  const previousCity = cities[cityIndex - 1];

  if (!city) {
    return <p>City not found</p>;
  }

  const { name, country, population, description, cover } = city;

  return (
    <>
      <Link style={{ textDecoration: "none", color: "#1E90FF" }} href="/cities">
        ← All cities
      </Link>
      <h1 style={{ marginLeft: "10px" }}>{name}</h1>
      <p style={{ marginLeft: "10px" }}>
        Country: <strong>{country}</strong>
      </p>
      <p style={{ marginLeft: "10px" }}>
        Population: <strong>{population}</strong>
      </p>
      <p style={{ marginLeft: "10px" }}>
        <em>{description}</em>
      </p>
      {previousCity ? (
        <div style={{ marginBottom: "10px" }}>
          <Link
            style={{ textDecoration: "none" }}
            href={`/cities/${previousCity.slug}`}
          >
            <span
              style={{
                fontSize: "16px",
                color: "#1E90FF",
                textDecoration: "none",
              }}
            >
              ← Previous city: {previousCity.name}
            </span>
          </Link>
        </div>
      ) : null}
      {nextCity ? (
        <div style={{ marginTop: "10px" }}>
          <Link
            style={{ textDecoration: "none" }}
            href={`/cities/${nextCity.slug}`}
          >
            <span
              style={{
                fontSize: "16px",
                color: "#1E90FF",
                textDecoration: "none",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              Next city: {nextCity.name} →
            </span>
          </Link>
        </div>
      ) : null}
      <br></br>
      <Image
        style={{ marginLeft: "10px" }}
        src={cover}
        height={300}
        width={180}
        alt={`Cover image of ${city.name}`}
      />
    </>
  );
}
