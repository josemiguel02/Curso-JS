/*
  ~============================= Creando Elementos =============================~
*/
const btnCrear = document.getElementById('btn-crear')

/*
  document.createElement() => Crea un elemento HTML especificado por su tagName.

  - Sintaxis:
  let element = document.createElement(tagName);
*/

btnCrear.onclick = () => {
  let parrafo = document.createElement('p')
  parrafo.textContent = 'Nuevo Elemento Párrafo ✅'


  /*
    appendChild(child) => Agrega un nuevo elemento nodo hijo dentro de un elemento padre.
  */
  document.body.appendChild(parrafo)
}



/*
  ?============================= Eliminando Elementos =============================?
*/
const btnEliminar = document.getElementById('btn-eliminar')

btnEliminar.onclick = () => {
  const ultimoElemento = document.body.lastElementChild
  let nElementos = document.body.childElementCount

  if (nElementos > 4) {

    /*
      removeChild(child) => Elimina un elemento nodo hijo del DOM y devuelve el nodo
      eliminado.
    */
    document.body.removeChild(ultimoElemento)
    return
  }

  alert('No hay elementos para eliminar')
}



/*
  !============================= Reemplazando Elementos =============================!
*/
const btnReemplazar = document.getElementById('btn-reemplazar')

btnReemplazar.onclick = () => {
  const ultimoElemento = document.body.lastElementChild
  const nElementos = document.body.childElementCount

  const nuevoElemento = document.createElement('p')
  nuevoElemento.textContent = 'Elemento Reemplazado ✏️'

  if (nElementos > 4) {

    /*
      replaceChild(newChild, oldChild) => Reemplaza un elemento nodo hijo del elemento
      especificado por otro.
    */
    document.body.replaceChild(nuevoElemento, ultimoElemento)
    return
  }

  alert('No hay elementos para reemplazar')
}
