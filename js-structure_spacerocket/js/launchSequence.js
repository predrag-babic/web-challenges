// Implement the launch sequence function here and export it as the default export.
import { FISHSAT, NFSAT } from "./payload/satellites.js";
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

export default function launch() {
  loadPayload(NFSAT);
  loadPayload(FISHSAT);

  fuel();

  Array(5).fill(null).forEach(countdown);
  console.log(Array(5).fill(null));
  //liftoff();
  //deployPayload();
}
