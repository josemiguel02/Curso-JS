/*
  -================ Strings ================-
*/

let strDobl = 'Soy un string con comillas dobles'
let strSimp = 'Soy un string con comillas simples'

console.log(strDobl)
console.log(strSimp)


/*
  # Strings con comillas invertidas (backticks) o template string
*/
let strBackticks = `Soy un string con backticks`


/*
  ! Interpolando variables con template string
*/
let nombre = 'José Miguel'
let saludo = `Hola, ${nombre} bienvenido!`

console.log(saludo)


/*
  @ Uso de template string con HTML
*/
let html = `
  <div>
    <h1>Pagina web de ${nombre}</h1>
  </div>
`
console.log(html)
