import {
  generatePersons,
  Person,
  measureArrayItemInterations,
  measureArrayItemMapping,
} from "./utils";

export function runTest() {
  console.log(">>> Running performance tests for native Array");
  console.log("\n");
  const pushOnArray = (collection: any, element: Person) => {
    // console.log(element);
    collection.push(element);
  };

  console.log("[Run Array generation | Pushing elements into array]");
  console.time("Generating 10 persons");
  const persons10 = generatePersons(10, [], pushOnArray);
  console.timeEnd("Generating 10 persons");
  console.log(persons10);

  console.time("Generating 100 persons");
  const persons100 = generatePersons(100, [], pushOnArray);
  console.timeEnd("Generating 100 persons");

  console.time("Generating 1000 persons");
  const persons1000 = generatePersons(1000, [], pushOnArray);
  console.timeEnd("Generating 1000 persons");

  console.time("Generating 10000 persons");
  const persons10000 = generatePersons(10000, [], pushOnArray);
  console.timeEnd("Generating 10000 persons");

  console.time("Generating 100000 persons");
  const persons100000 = generatePersons(100000, [], pushOnArray);
  console.timeEnd("Generating 100000 persons");

  console.time("Generating 1000000 persons");
  const persons1000000 = generatePersons(1000000, [], pushOnArray);
  console.timeEnd("Generating 1000000 persons");

  console.log("\n");

  console.log("[Run Array Iteration | Iterate elements of the array]");

  measureArrayItemInterations(persons10);
  measureArrayItemInterations(persons100);
  measureArrayItemInterations(persons1000);
  measureArrayItemInterations(persons10000);
  measureArrayItemInterations(persons100000);
  measureArrayItemInterations(persons1000000);

  console.log("\n");

  console.log("[Run Array Mapping | Mapping elements of the array]");

  measureArrayItemMapping(persons10);
  measureArrayItemMapping(persons100);
  measureArrayItemMapping(persons1000);
  measureArrayItemMapping(persons10000);
  measureArrayItemMapping(persons100000);
  measureArrayItemMapping(persons1000000);
}
