import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

export const server = createServer((request, response) => {
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();

  const responseString = `Hello, my name is ${name} and i am ${age} years old. I am a ${profession}.`;

  response.end(responseString);
});
