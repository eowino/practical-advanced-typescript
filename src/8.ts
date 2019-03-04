interface IData {
  data: {
    value: string;
    id: string;
  };
}

function isData(type: any): type is IData {
  return (<IData>type).data !== undefined;
}

// set to 'unknown' instead of 'any' to guide the developer
// also because you're not in control of the shape of the type
let responseFromAPI!: unknown;

console.log(responseFromAPI.data); // this is intentionally erroneous

if (isData(responseFromAPI)) {
  console.log(responseFromAPI.data.id); // this is fine
}

// 'any' is the least restrictive type in TypeScript

// 'unknown' is the most restrictive as it doesn't let you call anything on it
// you have to provide checks to narrow down the type via control flows
