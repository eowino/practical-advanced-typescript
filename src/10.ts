const numbers = [1, 2];

const obj = {
  id: 1,
  name: 'abc',
  cars: ['a', 'b', 'c']
};

const bool = true;

// from this:
// type FlattenArray<T extends any[]> = T[number];
// type FlattenObject<T extends object> = T[keyof T];

// type FlattenedNumbers = FlattenArray<typeof numbers>; // --> number
// type FlattenedObject = FlattenObject<typeof obj>; // --> string | number | string[]

// to this:
type Flatten<T> = T extends any[]
  ? T[number]
  : T extends object
  ? T[keyof T]
  : T;

type FlattenedNumbers = Flatten<typeof numbers>; // --> number
type FlattenedObject = Flatten<typeof obj>; // --> string | number | string[]
type FlattenedBoolean = Flatten<typeof bool>; // --> boolean

// use conditional types to create a reusable flatten type
