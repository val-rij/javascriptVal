const myString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam sit amet magna nec dictum. Ut viverra mollis purus vel porta. Aenean ut sem fermentum enim viverra interdum vehicula eu nibh. Nullam accumsan tortor eu turpis egestas, et maximus mauris elementum. Vivamus varius vel lacus non tincidunt. Aenean vel arcu arcu";





const stringo= myString.replaceAll("i","o");
console.log(stringo);

const words = myString.split("i");
const wordslenght= words.length
console.log(wordslenght);


const index = myString.slice(19, 23)
console.log(index);


const lastExample ="   HOLA   "
const exampleTrim = lastExample.trim();

console.log(exampleTrim);