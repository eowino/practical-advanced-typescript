interface IPet {
  name: string;
  age: number;
  owner?: string;
}
// The Readonly type is defined by TypeScript as follows below: (commented as can't redefine it)
// type Readonly<T> = { readonly [K in keyof T]: T[K] }

// Usage of Readonly
type ReadonlyPets = Readonly<IPet>;

// or

// A type like this can be useful in situations where a prop is immutable
// for e.g. in redux apps
type ReadonlyPet = { +readonly [K in keyof IPet]-?: IPet[K] };

// the above type reads as: add readonly to all properties in IPet
// and remove optional i.e. make required

const pet: IPet = { name: 'Buttons', age: 5 };
const readonlyPet: ReadonlyPet = {
  name: 'Buttons',
  age: 5,
  owner: 'Sue' // is now required as its optionality was removed
};

pet.age = 6;
readonlyPet.age = 6; // will error as its readonly

// This feature is known as 'map type modifiers' or 'mapped types'
// They make it easy to create new types based on old types — mapped types.
