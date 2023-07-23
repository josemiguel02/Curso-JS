/*
**	José Domínguez Pérez
**	Created	7/14/2022
*/

import { suma, multiplica } from './controller.js'
import chalk from 'chalk'

let res1 = suma(1, 2)
let res2 = suma(4, 5)

let total = multiplica(res1, res2)

console.log(chalk.green(total))
