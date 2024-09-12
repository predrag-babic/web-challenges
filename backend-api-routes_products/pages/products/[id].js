import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>Failed to load</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Price: ${data.price}</p>
      <p>{data.description}</p>
    </div>
  );
}
