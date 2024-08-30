import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to city overview</h1>
      <Link href="cities">See all cities</Link>
    </div>
  );
}
