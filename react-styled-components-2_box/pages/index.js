import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
//import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";
import StyledBox from "@/components/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <FlexContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox $isBlack="true" $isHover="rot"></StyledBox>
      <StyledBox $isBlack="false"></StyledBox>
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
