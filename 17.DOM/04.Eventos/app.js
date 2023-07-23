/*
  !============================= Eventos de Botones =============================!
*/
const boton = document.querySelector('.btn')
const botonRed = document.querySelector('.btn--red')

/*
  Algunas propiedades más usadas:
    boton.tagName;
    boton.className;
    boton.classList;
    boton.textContent;
    boton.innerHTML;
    boton.innerText;
    boton.childNodes;
*/

let contador = 0
/*
  addEventListener() => Registra un evento a un elemento en específico.

  Sintaxis:
  * target.addEventListener(tipo, listener)

  En este caso agregamos un evento de tipo click al botón.
*/
boton.addEventListener('click', () => {
  contador++
  boton.textContent = `Contador: ${contador}`
})


/*
  También podemos agregar un evento de tipo click directamente con la
  propiedad onclick.
*/
botonRed.onclick = () => {
  botonRed.classList.toggle('btn--red')
}



/*
  @============================= Eventos de Inputs =============================@
*/
const input = document.querySelector('.input')
const input2 = document.querySelector('.input-2')
const output = document.querySelector('.output')
const output2 = document.querySelector('.output-2')

input.onchange = () => {
  output.textContent = input.value
}

input2.oninput = (e) => {
  output2.textContent = e.target.value
}



/*
  *============================= Eventos de Checkboxes =============================*
*/
const checkbox1 = document.querySelector('.checkbox-1')
const checkbox2 = document.querySelector('.checkbox-2')
const checkbox3 = document.querySelector('.checkbox-3')
const checkboxOut = document.querySelector('.checkbox-out')

let list = []

function renderList() {
  checkboxOut.textContent = JSON.stringify(list)
}

renderList()

checkbox1.onchange = () => {
  if(checkbox1.checked) {
    list.push(checkbox1.value)
    renderList()
    return
  }

  let index = list.indexOf(checkbox1.value)
  list.splice(index, 1)
  renderList()
}

checkbox2.onchange = () => {
  if(checkbox2.checked) {
    list.push(checkbox2.value)
    renderList()
    return
  }

  let index = list.indexOf(checkbox2.value)
  list.splice(index, 1)
  renderList()
}

checkbox3.onchange = () => {
  if(checkbox3.checked) {
    list.push(checkbox3.value)
    renderList()
    return
  }

  let index = list.indexOf(checkbox3.value)
  list.splice(index, 1)
  renderList()
}



/*
  #============================= Eventos de RadioButtons =============================#
*/
const radio1 = document.querySelector('.radio-1')
const radio2 = document.querySelector('.radio-2')
const radio3 = document.querySelector('.radio-3')
const radioOut = document.querySelector('.radio-out')

radio1.onchange = () => {
  radioOut.textContent = radio1.value
}

radio2.onchange = () => {
  radioOut.textContent = radio2.value
}

radio3.onchange = () => {
  radioOut.textContent = radio3.value
}



/*
  ~============================= Eventos de Selects =============================~
*/
const select = document.querySelector('.select')
const selectOut = document.querySelector('.select-out')

select.onchange = e => {
  selectOut.textContent = e.target.value
}



/*
  -============================= Eventos de Forms =============================-
*/
const form = document.querySelector('.form')
const input3 = document.querySelector('.input-3').value
const input4 = document.querySelector('.input-4').value
const formOut = document.querySelector('.form-out')

form.onsubmit = e => {
  e.preventDefault()
  const fd = new FormData(e.target)
  formOut.textContent = JSON.stringify(Object.fromEntries(fd))
  e.target.reset()
}
