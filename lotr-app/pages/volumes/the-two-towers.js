import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TwoTowers() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        <li>
          <p>{volume.books[0].ordinal}</p>
          <p>{volume.books[0].title}</p>
        </li>
        <li>
          <p>{volume.books[1].ordinal}</p>
          <p>{volume.books[1].title}</p>
        </li>
      </ul>
      <Image
        src={"/../public/images/the-two-towers.png"}
        alt={`${volume.title} cover`}
        width={140}
        height={230}
      />
    </>
  );
}
