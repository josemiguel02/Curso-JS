const btn = document.querySelector('.btn')

btn.onclick = () => {
  alert('Click en el botón')
}

// JQuery
$('.btn-2').click(() => {
  console.log('Hola, estoy utilizando jQuery')
})
