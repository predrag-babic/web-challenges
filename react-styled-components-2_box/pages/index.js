import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <FlexContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents
        $isBlack="true"
        $isHover="true"
      ></BoxWithStyledComponents>
      <BoxWithStyledComponents
        $isBlack="false"
        $isHover="true"
      ></BoxWithStyledComponents>
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
