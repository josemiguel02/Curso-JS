const obj = {
  nombre: 'Jose',
  apellidos: 'Domínguez P.',
  saludar: function() {
    console.log('Hola ' + this.nombre + ' ' + this.apellidos)
  }
}

let mensaje = 'Hola Mundo!'

obj.saludar()
console.log(mensaje)
