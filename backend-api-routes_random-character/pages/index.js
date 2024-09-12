import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, error } = useSWR("api/random-character", fetcher);

  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <>
      <h1>Random Character</h1>
      <p>First name: {data.firstName}</p>
      <p>Last name: {data.lastName}</p>
      <p>Twitter: {data.twitter}</p>
      <p>Geohash: {data.geohash}</p>
    </>
  );
}
