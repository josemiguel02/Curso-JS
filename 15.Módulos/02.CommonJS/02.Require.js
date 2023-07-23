/*
  -========================= Importando Módulos CommonJS =========================-
*/

/*
  Para importar módulos CommonJS usamos require() y lo asignamos a una constante
*/
const modulo = require('./01.ModuleExports')


// También podemos hacer la desestructuración del Módulo directamente
const { sumar, elevar } = require('./01.ModuleExports')


// Utilizando módulos
console.log('CommonJS ->', modulo.cuadrado(2))
console.log('CommonJS ->', sumar(10, 22))
console.log('CommonJS ->', elevar(2, 3))
