import { v4 as uuidV4 } from "uuid";
import { List } from "immutable";

export const names = [
  "Carlos",
  "Jose",
  "Esteban",
  "Edgardo",
  "Robert",
  "Sofia",
  "Agustina",
  "Camila",
  "Florencia",
];

export const surnames = [
  "Currales",
  "Lopez",
  "Gonzales",
  "Ramirez",
  "Perez",
  "Martinez",
];

export type Person = {
  id: string;
  name: string;
  surname: string;
};

export function generatePersons(
  numberOfElements: number,
  emptyCollection: any,
  aggregationFunction: (collection: any, element: Person) => any
) {
  let elements = emptyCollection;
  for (let i = 0; i < numberOfElements; i++) {
    const aggregationReturn = aggregationFunction(elements, {
      id: uuidV4(),
      name: names[Math.floor(Math.random() * names.length)],
      surname: surnames[Math.floor(Math.random() * surnames.length)],
    });

    if (!!aggregationReturn) {
      elements = aggregationReturn;
    }
  }
  return elements;
}

export function measureArrayItemInterations(array: Person[]) {
  const arrayLenght = array.length;
  console.time(`${arrayLenght} Elements | with for`);
  let mappedWithFor = [];
  for (let i = 0; i < array.length; i++) {
    const p = array[i];
    mappedWithFor.push({
      ...p,
      displayName: `${p.name} ${p.surname}`,
    });
  }
  console.timeEnd(`${arrayLenght} Elements | with for`);

  console.time(`${arrayLenght} Elements | with (for let x of array)`);
  let mappedWithFor_Each = [];
  for (let p of array) {
    mappedWithFor_Each.push({
      ...p,
      displayName: `${p.name} ${p.surname}`,
    });
  }
  console.timeEnd(`${arrayLenght} Elements | with (for let x of array)`);

  console.time(`${arrayLenght} Elements | with Array.forEach`);
  let mappedWithForEach = [];
  array.forEach((p: Person) => {
    mappedWithForEach.push({
      ...p,
      displayName: `${p.name} ${p.surname}`,
    });
  });
  console.timeEnd(`${arrayLenght} Elements | with Array.forEach`);
}

export function measureArrayItemMapping(array: Person[]) {
  const arrayLenght = array.length;
  console.time(`${arrayLenght} Elements`);
  array.map((p: Person) => ({
    ...p,
    displayName: `${p.name} ${p.surname}`,
  }));
  console.timeEnd(`${arrayLenght} Elements`);
}

export function measureListItemInterationsWithMap(list: List<Person>) {
  const listLenght = list.size;
  console.time(`${listLenght} Elements`);
  list.map((p: Person) => ({
    ...p,
    displayName: `${p.name} ${p.surname}`,
  }));
  console.timeEnd(`${listLenght} Elements`);
}
