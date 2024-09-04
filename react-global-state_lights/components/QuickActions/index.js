import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  turnLightsOff,
  turnLightsOn,
  lightsCount,
  lights,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={turnLightsOff}
        disabled={lightsCount === 0}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={turnLightsOn}
        disabled={lightsCount === lights.length}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
