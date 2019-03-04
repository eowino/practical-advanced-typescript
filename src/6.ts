// TypeScript uses structural types - as long as the structure is the same
// As a result IAnimal and AnimalTypeAlias are mostly equivalent
interface IAnimal {
  age: number;
  eat(): void;
  speak(): string;
}

type AnimalTypeAlias = {
  age: number;
  eat(): void;
  speak(): string;
};

let animalInterface: IAnimal;
let animalTypeAlias!: AnimalTypeAlias;

animalInterface = animalTypeAlias;

// The major difference between types and interfaces is that types can express union types.
// Interfaces can't as they express a contract
// Thats why although classes can 'implements' both types and interfaces,
// they can't 'implements' union types as classes are blueprints of how to create objects and must be specific

// Another difference is that TypeScript merges interfaces with the same name as shown below
// This comes in handy when extending other functionality e.g. $.fn.extend
// The following wouldn't be possible if 'type' was used.
// N.B. Therefore, public API's must be typed as interfaces for extensibility

interface IOne {
  number: string;
}

interface IOne {
  digit: number;
}

const number: IOne = {
  digit: 1,
  number: 'one'
};
