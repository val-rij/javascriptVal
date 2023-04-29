const prompt = require('prompt-sync')({sigint: true});

const welcomeMessage = prompt(`Hola, elige porfa:
1. Contar Letras
2. Generar contraseña
3. Calculadora`);

const selectedApp = Numer(welcomeMessage);



const countLetters = "countLetters";

const generatePass = "generatePass";

const calculator = "calculator";

if (selectedApp === 1) {
    console.log(countLetters);
} else if (selectedApp === 2) {
    console.log(generatePass);
} else if (selectedApp === 3); {
    console.log(generatePass);
} else () {
    console.log('no existe')};

 
