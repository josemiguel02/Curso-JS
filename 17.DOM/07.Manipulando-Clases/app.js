const btnAgregar = document.getElementById('btn-agregar')
const btnEliminar = document.getElementById('btn-eliminar')
const btnToggle = document.getElementById('btn-toggle')
const caja = document.querySelector('.caja')


/*
  classList => La propiedad classList devuelve una lista que contiene las
  diferentes clases de un elemento.
*/
console.log(caja.classList)


btnAgregar.onclick = () => {
  /*
    classList.add(className) => Agrega las clases indicadas a un elemento.
  */
  caja.classList.add('ocultar')
}


btnEliminar.onclick = () => {
  /*
    classList.remove(className) => Elimina las clases indicadas de un elemento.
  */
  caja.classList.remove('ocultar')
}


btnToggle.onclick = () => {
  /*
    classList.toggle(className) => Alterna el valor de una clase.
    Ejemplo: si la clase existe la elimina, y si no la agrega.
  */
  caja.classList.toggle('ocultar')
}
