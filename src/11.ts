function generateID(offset: number) {
  return offset + 3;
}

// read as: if T extends a function with a varible number of args,
// infer its return type, store it into R and then return R,
// or if T doesn't extend a function, return 'any' as a placeholder
// type 'ReturnType' is so useful that its shipped with TypeScript v2.8+
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type Id = ReturnType<typeof generateID>;

function lookupEntity(id: Id) {
  // do stuff
  console.log(id);
}

// this can be useful when you want to type an external API.
// in this example 'generateID' represents an external API that exports a function but not its return type

// example use case
type UnpackPromise<T> = T extends Promise<infer K>[] ? K : any;
const arr = [Promise.resolve([1, 2, 4])];

type ExpectedArray = UnpackPromise<typeof arr>; // --> number[]
