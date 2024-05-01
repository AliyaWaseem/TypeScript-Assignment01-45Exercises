//Exercise:45
//Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature.
//  Print the Object that’s returned to make sure all the information was stored correctly.

function storeInfo(
  manufacturer: string,
  modelName: string,
  ...extraOption: { [key: string]: any }[]
): object {
  const carInfo: any = {
    manufacturer,
    modelName,
    ...Object.assign({}, ...extraOption),
  };

  return carInfo;
}

let answer = storeInfo(
  "Honda",
  "Civic",
  { color: "blue" },
  { year: 2024 },
  { "optional feature": ["Bulletproof", "Navigation"] }
);

console.log(answer);
