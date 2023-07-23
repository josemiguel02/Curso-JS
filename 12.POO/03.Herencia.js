/*
  #======================================= Herencia =======================================#
  La Herencia nos permite crear una clase a partir de otra clase padre, la cual heredará
  tanto sus propiedades o atributos como los métodos de la misma.
  En otras palabras, tendremos una clase que será padre, y otra clase que será hija.
  Esto nos da una jerarquía de padre e hijo.

  ~ Ejemplo:
  Si tuviéramos una clase “Vehiculo” (padre) y quisiéramos crear otra clase a partir de
  ella, la clase “Carro” (hija) tiene que heredar de la clase padre y así podríamos tomar
  los atributos y métodos de la clase padre.
*/


/*
  Clase Padre
*/
class Vehiculo {

  constructor(marca, modelo, ruedas = null) {
    this.marca = marca
    this.modelo = modelo
    this.ruedas = ruedas
  }

  acelerar() {
    console.log(`Soy ${this.marca}, estoy acelerando!`)
  }

  frenar() {
    console.log(`Soy ${this.marca}, estoy frenando!`)
  }

  toString() {
    console.log(`Marca: ${this.marca} \nModelo: ${this.modelo}`)
    // console.log(JSON.stringify(this, null, 2))
  }
}




/*
  Clase Hija
  Para heredar de la clase padre Vehiculo usamos la palabra reservada extends
*/
class Carro extends Vehiculo {

  constructor(marca, modelo, color) {
    // Con super() llamamos al constructor de la clase padre
    super(marca, modelo, 4)
    this.color = color
  }

  // Sobreescribimos el método de la clase Padre, se conoce como Override.
  toString() {
    super.toString()
    console.log(`Color: ${this.color} \nRuedas: ${this.ruedas}`)
  }

  girar(direccion) {
    console.log(`Soy ${this.marca}, estoy girando a la ${direccion}!`)
  }
}

const carro1 = new Carro('Tesla', 'X', 'rojo')
const carro2 = new Carro('Audi', 'Q3', 'blanco')

// Llamamos al método heredado de la clase Padre
carro1.acelerar()

// Y al método sobreescrito
carro1.toString()

carro2.girar('derecha')




console.log('-------------------------------------')




// Segunda Clase Hija
class Moto extends Vehiculo {

  constructor(marca, modelo, cilindrada) {
    super(marca, modelo, 2)
    this.cilindrada = cilindrada
  }

  toString() {
    super.toString()
    console.log(`Cilindrada ${this.cilindrada} \nRuedas: ${this.ruedas}`)
  }

  hacerAcrobacia() {
    console.log(`Soy ${this.marca}, estoy haciendo una acrobacia!`)
  }
}

const moto1 = new Moto('Ducati', 'Monster', 1500)
const moto2 = new Moto('Suzuki', 'A1', 1000)

moto1.acelerar()
moto1.toString()
moto2.hacerAcrobacia()
