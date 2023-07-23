let nombre = 'Jose Miguel'
let apellido = 'Dominguez Perez'

let estudiante = `${nombre} ${apellido}`

let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()

let numerosLetras = estudiante.length

let primeraLetra = nombre.slice(0, 1)
let ultimaLetra = apellido.slice(-1)

let sinEspacios = estudiante.replaceAll(' ', '')

let nombreIncluido = estudiante.includes(nombre)
