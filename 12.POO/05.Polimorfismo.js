/*
  *=================================== Polimorfismo ===================================*
  Polimorfismo proviene de la palabra:
    Poli => muchas
    Morfismo => formas

  El Polimorfismo es la capacidad que poseen los objetos para tener múltiples formas.
  Esto permite que las subclases (clases hijas) tengan métodos con el mismo nombre que
  los de sus superclases (clases padres) pero con diferentes implementaciones.

  Hay tres tipos de Polimorfismo en POO:
    - Polimorfismo Adhoc (Sobrecarga)
    - Polimorfismo Paramétrico
    - Polimorfismo de Subtipo
*/


/*
  !Polimorfismo de Sobrecarga
  La sobrecarga de métodos en JavaScript es diferente a comparación de otros lenguajes,
  porque no podemos declarar dos métodos diferentes con el mismo nombre.

  Para solucionarlo usamos un método, pero cambiamos los resultados de acuerdo con los
  parámetros que recibimos.
*/
class Cubo {
  volumenCuboid(longitud, amplitud, alto) {
    return longitud * amplitud * alto
  }

  volumenCubo(longitud) {
    return this.volumenCuboid(longitud, longitud, longitud)
  }

  calcularVolumen(...params) {
    if (params.length === 3) return this.volumenCuboid(...params)

    return this.volumenCubo(params[0])
  }
}

const cubo = new Cubo()
console.log(cubo.calcularVolumen(15, 20, 12))




/*
  # Polimorfismo Paramétrico
  Significa que no nos importa el tipo de dato, implementaremos el método de la misma
  manera para cualquier tipo de dato que recibimos como parámetro.
  Es como implementar un método genérico que no dependerá del tipo de dato.
*/
class Lista {
  items = []

  agregar(...items) {
    this.items.push(...items)
  }
}

const listaStr = new Lista()
listaStr.agregar('Texto 1', 'Texto 2', 'Texto 3')
console.log(listaStr)

const listaInt = new Lista()
listaInt.agregar(1, 2, 3)
console.log(listaInt)




/*
  * Polimorfismo de Subtipo
  El polimorfismo de subtipo implica la creación de objetos derivados (hijos) a partir
  de un objeto principal (padre).
*/
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
  }
}


class Programador extends Persona {
  constructor(nombre, apellido, lenguaje) {
    super(nombre, apellido)
    this.lenguaje = lenguaje
  }
}


class Main {
  getFullName(persona) {
    return `${persona.nombre} ${persona.apellido}`
  }
}

const jeff = new Persona('Jeffrey', 'Domínguez')
const jose = new Programador('José Miguel', 'Domínguez', 'JavaScript')

const main = new Main()

/*
  No importa si le pasamos un objeto diferente, con tal sea derivado de un objeto
  principal (padre).
*/
console.log(main.getFullName(jeff))
console.log(main.getFullName(jose))



/*
  ~ 2do Ejemplo de Polimorfismo de Subtipo
  Los objetos derivados pueden anular o sobreescribir (Override) un método del padre
  y seguirá funcionando.
*/
class Figura {
  constructor(color) {
    this.color = color
  }

  obtenerArea() {
    throw new Error('Implementar método!')
  }
}


class Triangulo extends Figura {
  constructor(base, altura, color) {
    super(color)
    this.base = base
    this.altura = altura
  }

  // Aquí se está sobreescribiendo el método de la clase Padre.
  obtenerArea() {
    return (this.base * this.altura) / 2
  }
}


class Circulo extends Figura {
  PI = 3.14159

  constructor(radio, color) {
    super(color)
    this.radio = radio
  }

  obtenerArea() {
    return parseFloat((this.radio * this.radio * this.PI).toFixed(2))
  }
}

const triangulo = new Triangulo(20, 30, 'amarillo')
console.log(triangulo.obtenerArea())

const circulo = new Circulo(15, 'rojo')
console.log(circulo.obtenerArea())
