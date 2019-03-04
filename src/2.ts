class Library {
  titles!: string[];
  // ^
  // Notice this '!' modifier.
  // This is the "definite assignment assertion"
}

const library = new Library();

library.titles.forEach(title => {
  // do stuff
});

// By setting the strictPropertyInitialization flag (and strictNullChecks) in the .tsconfig file,
// TypeScript will start throwing errors unless we initialize all properties of classes on construction.

// If you can’t initialize directly but you’re sure it will be assigned to at runtime
// by a dependency injection library, you can use the definite assignment assertion
// operator to ask TypeScript to ignore that property.
