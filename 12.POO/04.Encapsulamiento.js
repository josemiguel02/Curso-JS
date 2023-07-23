/*
  ~=================================== Encapsulamiento ===================================~
  El Encapsulamiento se refiere al ocultamiento (encapsular) de los datos miembros de un
  objeto, es decir, encapsular los atributos y métodos del objeto, de manera que sólo se
  pueda cambiar mediante las operaciones definidas para ese objeto (Getters & Setters).
  Así quedando ocultos y protegidos evitando su modificación por quien no tenga derecho a
  acceder a ellos.

  Existen tres niveles de acceso (modificadores de acceso) para el Encapsulamiento,
  los cuales son:
    *Public: Se puede acceder desde cualquier parte (por defecto está implícito).

    *Private: Se puede acceder desde dentro de la propia clase.
      ?Ejemplo: #atributo

    *Protected: Se puede acceder desde dentro de la propia clase y desde clases
    descendientes (hijas).
      ?Ejemplo: _atributo
*/


class Animal {
  // Atributo Publico
  nombre

  // Atributo Privado
  #edad

  // Atributo Protegido
  _especie

  constructor(nombre, edad, especie) {
    this.nombre = nombre
    this.#edad = edad
    this._especie = especie
  }

  toString() {
    console.log(
      `Soy un ${this._especie}, me llamo ${this.nombre} y tengo ${this.#edad} año(s)!`
    )
  }

  // Declarando métodos Getters & Setters
  getEdad() {
    return this.#edad
  }

  setEdad(edad) {
    this.#edad = edad
  }
}



class Perro extends Animal {

  constructor(nombre, edad) {
    super(nombre, edad, 'perro')
  }

  ladrar() {
    console.log('Guau guau!')
  }
}


const animal = new Animal('Otto', 2, 'loro')
// animal.#edad -> Error, no se puede acceder porque es un atributo privado

// Obteniendo la edad con el método Getter
console.log(animal.getEdad())

// Cambiando la edad con el método Setter
animal.setEdad(4)

animal.toString()



const perro1 = new Perro('Teddy', 1)
perro1.toString()
