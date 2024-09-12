import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Products() {
  const { data, error } = useSWR("api/products", fetcher);

  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>Failed to load</div>;
  }

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
