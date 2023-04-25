const myString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam sit amet magna nec dictum. Ut viverra mollis purus vel porta. Aenean ut sem fermentum enim viverra interdum vehicula eu nibh. Nullam accumsan tortor eu turpis egestas, et maximus mauris elementum. Vivamus varius vel lacus non tincidunt. Aenean vel arcu arcu."
const stringUp = myString.toUpperCase();
const stringLower = myString.toLowerCase();
const sting0 = myString.replaceAll('i', 'o');

console.log(string0);

const words = myString.split("i");
const wordsLength = words.length
console.log(words);

const index = myString.slice(19, 23);
console.log(index);