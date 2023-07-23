/*
**	José Domínguez Pérez
**	Created	7/9/2022
*/

const logger = require('./logger')

const lanzarError = () => {
  throw new Error('Esto es un mensaje de Error 🚫!')
}

try {
  lanzarError()
} catch (e) {
  logger.log('error', e.message)
}
