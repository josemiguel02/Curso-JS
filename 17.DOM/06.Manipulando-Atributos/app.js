const btnAgregarAttr = document.getElementById('btn-agregarAttr')
const btnObtenerAttr = document.getElementById('btn-obtenerAttr')
const btnEliminarAttr = document.getElementById('btn-eliminarAtrr')
const output = document.getElementById('output')

let item = document.createElement('li')
let outAttr = document.createElement('code')
item.textContent = 'Item 1'

function renderOutput() {
  output.textContent = item.outerHTML
}

renderOutput()


btnAgregarAttr.onclick = () => {
  /*
    setAttribute(name, value) => Establece un atributo a un elemento indicado.
    Si el atributo ya existe, el valor es actualizado, en caso contrario, el
    nuevo atributo es añadido con el nombre y valor indicado.
  */
  item.setAttribute('id', 1)
  item.setAttribute('class', 'item-1')
  item.setAttribute('data-name', 'li')
  renderOutput()
}


btnObtenerAttr.onclick = () => {
  /*
    getAttribute(name) => Devuelve el valor del atributo especificado en el elemento.
    Si no existe devuelve null.
  */
  let idAttr = item.getAttribute('id')
  let classAttr = item.getAttribute('class')
  let dataNameAttr = item.getAttribute('data-name')

  outAttr.innerText = (idAttr && classAttr && dataNameAttr)
    ? `Valores de Atributos
      id: ${idAttr}
      class: ${classAttr}
      data-name: ${dataNameAttr}
    `
    : 'No se han agregado los Atributos 😢'

  document.body.appendChild(outAttr)
}


btnEliminarAttr.onclick = () => {
  /*
    removeAttribute(name) => Elimina un atributo del elemento especificado.
  */
  item.removeAttribute('id')
  item.removeAttribute('class')
  item.removeAttribute('data-name')
  renderOutput()
}
