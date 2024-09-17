import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <div>
        {data.reviews.length > 0 &&
          data.reviews.map((review) => (
            <div key={review._id}>
              <h3>{review.title}</h3>
              <p>
                <strong>Review:</strong> {review.text}
              </p>
              <p>
                <strong>Rating:</strong> {"🦆".repeat(review.rating)}
              </p>
            </div>
          ))}
      </div>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
