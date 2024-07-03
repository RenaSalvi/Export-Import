// Importar la clase Calculadora
import Calculadora from './calculadora.js';

// Crear una instancia de Calculadora
const calculadora = new Calculadora();

// Usar los métodos multiplicar y dividir
const resultadoMultiplicacion = calculadora.multiplicar(5, 3);
const resultadoDivision = calculadora.dividir(10, 2);

// Mostrar resultados por consola
console.log('Multiplicación:', resultadoMultiplicacion);
console.log('División:', resultadoDivision);
