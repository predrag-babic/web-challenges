import styled from "styled-components";
// export default function BoxWithStyledComponents({ $isBlack, $isHover }) {
//   return <StyledBox $isBlack={$isBlack} $isHover={$isHover}></StyledBox>;
// }

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ $isBlack }) =>
    $isBlack === "true" ? "green" : "black"};
  margin: 2rem;

  &:hover {
    background-color: ${({ $isHover }) =>
      $isHover === "rot" ? "red" : "yellow"};
  }
`;

export default StyledBox;
