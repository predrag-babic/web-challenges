import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  lights,
  lightsCount,
  turnLightsOn,
  turnLightsOff,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        lights={lights}
        lightsCount={lightsCount}
        turnLightsOff={turnLightsOff}
        turnLightsOn={turnLightsOn}
      />
    </>
  );
}
