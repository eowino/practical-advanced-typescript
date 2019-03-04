interface IStringContainer {
  format(): string;
}

interface INumberContainer {
  round(): number;
}

type Item<T> = {
  id: T;
  container: T extends string ? IStringContainer : INumberContainer;
};

let item: Item<string> = {
  id: 'one',
  container: {
    format() {
      return '';
    }
  }
};

const format = item.container.format();

// ------------------- End of Part 1 -----------------------------------

// if the generic param extends an array, return it, otherwise return never so compiler ignores it
type ArrayFilter<T> = T extends any[] ? T : never;

// hover on 'StringOrNumbers' will show it's of type string[] or number[] as non-arrays are filtered out
type StringOrNumbers = ArrayFilter<string | number | string[] | number[]>;

// typescript sees above in 2 steps while it applies the type ArrayFilter:
// 1 - never | never | string[] | number[]
// 2 - because by definition the 'never' type can never happen and TypeScript sees it in a union of types
// like step 1, then it will be ignored. Therefore, the type of 'StringOrNumbers' is 'string[] | number[]'

// ------------------- End of Part 2 -----------------------------------

interface IBook {
  id: string;
  contents: string[];
}

interface ITv {
  id: number;
  manufacturer: string;
}

interface IItemService {
  getItem<T extends string | number>(id: T): T extends string ? IBook : ITv;
  // Can use conditional types (above) as a replacement for function overloads (below)
  // getItem<T>(id: number): ITv;
  // getItem<T>(id: string): IBook;
}

let itemService!: IItemService;

const book = itemService.getItem('1');
console.log(book.contents.length);

const tv = itemService.getItem(1);
console.log(tv.manufacturer);

// Generics and conditional types

// conditional types can be used instead of function overloads as shown in IItemService
// <T extends string | number> is added to 'getItem' to lock the possible values
// otherwise 'getItem' can be passed anything as an argument
