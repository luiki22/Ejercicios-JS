// Crea una arrow function que tenga dos parametros a y b y 
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros. 

// - Ejecuta esta función sin pasar ningún parametro
// - Ejecuta esta función pasando un solo parametro
// - Ejecuta esta función pasando dos parametros


//Opción 1//

// const sum = (a = 10, b = 5) => a + b;
// const suma = sum(a, b)
// console.log(suma);

//Opción 2//
let a = 10;
let b = 5;
const sum = (a, b) => a + b;
const suma = sum(10, b)
console.log(suma);



// //Opción 3//
// const sum = (a, b) => a + b;
// const suma = sum(10, 5)
// console.log(suma);



