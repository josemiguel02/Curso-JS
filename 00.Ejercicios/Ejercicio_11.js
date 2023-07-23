/*
**	José Domínguez Pérez
**	Created	7/20/2022
*/

class Estudiante {
  constructor(nombre) {
    this.nombre = nombre
    this.asignaturas = ['JavaScript', 'HTML', 'CSS']
  }

  obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas
    }
  }
}

const estudiante = new Estudiante('José Miguel')
console.log(estudiante.obtenDatos())
