import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";
import Image from "next/image";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function Volumes() {
  return (
    <>
      <Title>The Lord of the Rings</Title>
      <p>{introduction}</p>
      <div>
        <h2>All Volumes</h2>
      </div>
      <CoverList>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <StyledLink href={`/volumes/${volume.slug}`}>
              <Image
                src={volume.cover}
                alt={`Cover image of ${volume.title}`}
                width={126}
                height={207}
              />
              <StyledBookTitle>{volume.title}</StyledBookTitle>
            </StyledLink>
          </li>
        ))}
      </CoverList>
    </>
  );
}

const Title = styled.h1`
  font: var(--font-headline-1);
  color: black;
`;

const CoverList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 1em;
  list-style: none;
  padding: 0;
`;

const StyledBookTitle = styled.p`
  font-family: ${lora.style.fontFamily}, serif;
  color: var(--color-earth);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-clouds);
  display: block;
  text-align: center;

  &:hover {
    color: var(--color-earth);
  }
`;
