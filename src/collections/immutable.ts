import { List } from "immutable";

import {
  generatePersons,
  Person,
  measureListItemInterationsWithMap,
} from "./utils";

export function runTest() {
  console.log(">>> Running performance tests for Immutable");

  const pushOnList = (collection: any, element: Person) =>
    collection.push(element);

  console.log("\n");

  console.log("[Run List generation | Pushing elements into List]");
  console.time("Generating 10 persons");
  const persons10: List<Person> = generatePersons(10, List(), pushOnList);
  console.timeEnd("Generating 10 persons");

  console.time("Generating 100 persons");
  const persons100: List<Person> = generatePersons(100, List(), pushOnList);
  console.timeEnd("Generating 100 persons");

  console.time("Generating 1000 persons");
  const persons1000: List<Person> = generatePersons(1000, List(), pushOnList);
  console.timeEnd("Generating 1000 persons");

  console.time("Generating 10000 persons");
  const persons10000: List<Person> = generatePersons(10000, List(), pushOnList);
  console.timeEnd("Generating 10000 persons");

  console.time("Generating 100000 persons");
  const persons100000: List<Person> = generatePersons(
    100000,
    List(),
    pushOnList
  );
  console.timeEnd("Generating 100000 persons");

  console.time("Generating 1000000 persons");
  const persons1000000: List<Person> = generatePersons(
    1000000,
    List(),
    pushOnList
  );
  console.timeEnd("Generating 1000000 persons");

  console.log("\n");

  console.log("[Run List Mapping | Mapping elements of the list]");
  measureListItemInterationsWithMap(persons10);
  measureListItemInterationsWithMap(persons100);
  measureListItemInterationsWithMap(persons1000);
  measureListItemInterationsWithMap(persons10000);
  measureListItemInterationsWithMap(persons100000);
  measureListItemInterationsWithMap(persons1000000);
}
