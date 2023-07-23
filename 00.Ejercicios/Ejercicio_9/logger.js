/*
**	José Domínguez Pérez
**	Created	7/9/2022
*/

const winston = require('winston')

module.exports = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' })
  ]
})
