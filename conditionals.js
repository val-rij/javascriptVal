const prompt = require('prompt-sync')({sigint: true});

const LEGAL_AGE = 18;

const userInput = prompt('edad:');
const userAge = Number(userInput);

if (userAge > LEGAL_AGE) {
  console.log('podes comprar');
} else if (userAge === LEGAL_AGE) {
    console.log('podes comprar, PERO CASI CASI');
}
else {
    console.log('no podes comprar');
}

