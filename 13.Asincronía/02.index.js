// 1.Ejecuta esto de inmediato
console.log('Me ejecuto de inmediato 😄')


/*
	3.Esta funcion anónima que recibe setTimeout() pasa a ser manejado por la Web APIS.
	4.Espera los 3s de la funcion para que termine.
	5.Pasa al Callback Queue.
	6.El Event Loop verifica que el Call Stack esté vacío para que luego la funcion
	anónima pase a ejecutarse.
*/
setTimeout(() => {
  console.log('Yo me tardé 3s en ejecutar 😣')
}, 3000)


/*
	2.También se ejecuta de inmediato, ya que la funcion anterior setTimeout()
	se maneja de forma Asíncrona y no bloquea el flujo de ejecución.
*/
console.log('También me ejecuto de inmediato 😄')
