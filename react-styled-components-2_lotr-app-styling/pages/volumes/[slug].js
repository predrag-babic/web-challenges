import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";
import ChevronLeft from "../../icons/chevron-left.svg";
import ArrowLeft from "../../icons/arrow-left.svg";
import ArrowRight from "../../icons/arrow-right.svg";

const VolumeContainer = styled.div`
  background-color: ${({ $bgColor }) => $bgColor || "white"};
  padding: 20px;
  border-radius: 8px;
  color: var(--color-clouds);
  font: var(--font-body);
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h1`
  font: var(--font-headline-1);
`;

const Description = styled.p`
  margin-bottom: 1.5em;
  font: var(--font-body);
`;

const BookList = styled.ul`
  margin-bottom: 2em;
  list-style-type: none;
  padding-left: 0;
`;

const BookItem = styled.li`
  font: var(--font-body);
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 1.2rem;
`;

const StyledImage = styled(Image)`
  box-shadow: var(--box-shadow-book);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;

const NavigationLink = styled(Link)`
  color: var(--color-clouds);
  text-decoration: none;
  font: var(--font-title);
  &:hover {
    text-decoration: underline;
  }
`;

const StyledNavContainer = styled.div`
  display: flex;
  align-items: center;
  color: black;
`;

const StyledLinkLeft = styled.div`
  display: flex;
  justify-content: left;
  text-align: left;
  padding: 1rem;
`;

const StyledLinkRight = styled.div`
  display: flex;
  justify-content: right;
  text-align: right;
  padding: 1rem;
  font: var(--font-caption--italic);
`;

const StyledPageNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: black;
`;

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <>
      <NavigationLink href="/volumes">
        <StyledNavContainer>
          <ChevronLeft />
          <p>All Volumes</p>
        </StyledNavContainer>
      </NavigationLink>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <VolumeContainer $bgColor={color}>
        {" "}
        <BookList>
          {books.map(({ ordinal, title }) => (
            <BookItem key={title}>
              <em>{ordinal}</em> <strong>{title}</strong>
            </BookItem>
          ))}
        </BookList>
        <StyledImage
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </VolumeContainer>
      {previousVolume ? (
        <StyledLinkLeft>
          <NavigationLink href={`/volumes/${previousVolume.slug}`}>
            <StyledPageNavContainer>
              <ArrowLeft />
              <p>
                {" "}
                <em>Previous Volume</em>
                <br></br>
                {previousVolume.title}
              </p>
            </StyledPageNavContainer>
          </NavigationLink>
        </StyledLinkLeft>
      ) : null}
      {nextVolume ? (
        <StyledLinkRight>
          <NavigationLink href={`/volumes/${nextVolume.slug}`}>
            <StyledPageNavContainer>
              <p>
                <em>Next Volume</em>
                <br></br> {nextVolume.title}
              </p>
              <ArrowRight />
            </StyledPageNavContainer>
          </NavigationLink>
        </StyledLinkRight>
      ) : null}
    </>
  );
}
