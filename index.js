// Require the lodash library here in this line
const _ = require('lodash');
function sum(a, b) {
  // Use de add() function from lodash to sum the two numbers
  return _.add(a, b);
}
console.log(sum(6, 4));

function filterFalsyValues(array) {
  
  return _.compact(array);
}


const result = filterFalsyValues([0, 1, false, 2, '', 3]);
console.log(result); 




function differenceInArrays(firstArray, secondArray) {
  // Use the difference() function from lodash to get the difference between the two arrays
  return _.difference(firstArray, secondArray);
}

const difference = differenceInArrays([1, 2, 3], [1, 2, 4]);
console.log(difference); 


function fillArray(arr, value) {
  // Use the fill() function from lodash to fill the array with the value
return _.fill(arr, value);
}
console.log(fillArray(array, 4));
var array = [1, 2, 3];

function calculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
return _.mean(arr);

}
let media=[1, 2, 3];

console.log(calculateMean(media));


function camelCase(str) {
  // Use the camelCase() function from lodash to convert the string to camelCase

  return _.camelCase(str);
}
let string="hello world"
console.log(camelCase(string));



function capitalize(str) {
  // Use the capitalize() function from lodash to capitalize the string

  return _.capitalize(str);
}

let capitan="hello world";
console.log(capitalize(capitan));

function sortByNames(arr) {
  // Use the sortBy() function from lodash to sort the array by name

  return _.sortBy(arr, ['name']);

}
let names=([{ name: "John" }, { name: "Alex" }]);
console.log(sortByNames(names));


function flatArrayAndCalculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  // Use the flatten() function from lodash to flatten the array

  const flattenedArray = _.flatten(arr);
  // Calcula la media de los valores del arreglo aplanado
  return _.mean(flattenedArray);

}

let numeros=([
  [1, 2],
  [3, 4],
]);
console.log(flatArrayAndCalculateMean(numeros));

function sortByNamesAndCapitalizeFirstLetter(arr) {
  
  const sortedArray = _.sortBy(arr, ['name']);

  return sortedArray.map(obj => {
    return {
      ...obj,
      name: _.capitalize(obj.name)
    };
  });
}

let nombres = [
  { name: "john" },
  { name: "alex" },
];


console.log(sortByNamesAndCapitalizeFirstLetter(nombres));

function transformToSnakeCaseAndAllCaps(arr) {
  // Use the snakeCase() function from lodash to convert the string to snake_case
  // Use the toUpper() function from lodash to convert the string to uppercase
  return arr.map(obj => {
    // Crear un nuevo objeto para almacenar las claves transformadas
    let transformedObj = {};

    // Iterar sobre cada clave del objeto
    for (let key in obj) {
      // Convertir la clave a snake_case y luego a mayúsculas
      let newKey = _.toUpper(_.snakeCase(key));
      // Asignar el valor original a la nueva clave transformada
      transformedObj[newKey] = obj[key];
    }

    // Devolver el nuevo objeto con claves transformadas
    return transformedObj;
  });
}

// Ejemplo de uso:
let objects = [
  { 'Foo Bar': 'value1' },
  { 'fooBar': 'value2' },
  { '--FOO-BAR--': 'value3' }
];

console.log(objects);

module.exports = {
  sum,
  filterFalsyValues,
  differenceInArrays,
  fillArray,
  calculateMean,
  camelCase,
  capitalize,
  sortByNames,
  flatArrayAndCalculateMean,
  sortByNamesAndCapitalizeFirstLetter,
  transformToSnakeCaseAndAllCaps,
};
