/*
  #=========================== Exportando Módulos CommonJS ===========================#
*/

function sumar(n1, n2) {
  return n1 + n2
}

function cuadrado(n) {
  return n * n
}

/*
  Para exportar un módulo usamos module.exports

  !NOTA: solo se puede tener un módulo principal por archivo, el cual se
  !define con module.exports, si se tiene más de 1 se sobreescribe con el
  !último que se define.
*/
module.exports = {
  sumar,
  cuadrado
}



/*
  También podemos exportar de manera individual con exports, pero
  sólo se puede usar mientras no esté definido un módulo principal.

  - Sintaxis
  Sin módulo principal:
    exports.foo = () => {...}

  Con módulo principal:
    module.exports.foo = () => {...}
*/
module.exports.elevar = (n1, n2) => {
  return n1 ** n2
}

module.exports.dividir = (n1, n2) => {
  return n1 / n2
}
