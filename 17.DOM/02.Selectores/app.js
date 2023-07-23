/*
  * document.- La interfaz Document representa cualquer página web cargada en el navegador
  y sirve como punto de entrada al contenido de la página (El árbol DOM).
*/
console.log(document)

// Algunas Propiedades de document
console.log(document.head)
console.log(document.title)
console.log(document.body)
console.log(document.domain)


/*
  #======================= Seleccionando Elementos del DOM =======================#
*/

/*
  document.getElementById(id) => Devuelve una referencia al elemento por su ID.
*/
const element = document.getElementById('element')
console.log(element)


/*
  document.querySelector(selector) => Devuelve el primer elemento del documento que coincida
  con el grupo especificado de selectores (id, class, tag, etc).
*/
const element2 = document.querySelector('.parrafo')
console.log(element2)


/*
  document.getElementsByTagName(tagName) => Devuelve una lista de elementos con un nombre determinado.
  Se busca en todo el documento, incluyendo el nodo raíz.
*/
const elements = document.getElementsByTagName('p')
console.log(elements)


/*
  document.getElementsByClassName(className) => Devuelve una lista con los elementos hijos que
  tengan todos los nombres de clase indicados.
*/
const elements2 = document.getElementsByClassName('parrafo')
console.log(elements2)


/*
  document.querySelectorAll(selector) => Devuelve una NodeList estática (no viva) que representa una
  lista de elementos del documento que coinciden con el grupo de selectores indicados.
*/
const elements3 = document.querySelectorAll('#parrafo2')
console.log(elements3)
