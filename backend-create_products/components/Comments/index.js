export default function Comments({ reviews }) {
  return (
    <>
      <h3>Comments</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <h4>{review.title}</h4>
            <p>
              {review.rating}/5: {review.text}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
