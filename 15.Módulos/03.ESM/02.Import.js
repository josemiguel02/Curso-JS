/*
  @========================= Importando Módulos ESM =========================@
  Para hacer uso de los módulos ESM tenemos que establecer en el archivo
  package.json lo siguiente:
    "type": "module"


  O si estamos trabajando con HTML, podemos establecer la siguiente etiqueta
  con el atributo type="module"
    <script type="module" src="..">
*/


/*
  !Importando Exportaciones nombradas
  Para importar exportaciones nombradas lo hacemos mediante la
  sentencia import.

   - Sintaxis:
    import { export1 } from "module-name";
*/
import { PI, getArea, mensaje } from './01.Export.js'

console.log('ESM ->', PI)
console.log('ESM ->', getArea(5, 10))
console.log('ESM ->', mensaje)


// Importando con un alias a las exportaciones nombradas
import { usuario as usuarioObj } from './01.Export.js'

console.log('ESM ->', usuarioObj)




/*
  ? Importando Exportaciones por Defecto
  Para importar una exportación por defecto, no agregamos llaves como
  hicimos en la exportación nombrada, ya que una exportación por defecto
  puede ser importado con cualquier nombre.

  - Sintaxis:
    import defaultExport from "module-name";
*/
import ArrayNumeros from './01.Export.js'

console.log('ESM ->', ArrayNumeros)




/*
  # Importando Exportaciones por Defecto y nombradas a la vez
*/
import Array, { cubo, miNombre } from './01.Export.js'

console.log('ESM ->', Array[4])
console.log('ESM ->', cubo(2))
console.log('ESM ->', miNombre)




/*
  * Importando todo el módulo
*/
import * as modulo from './01.Export.js'

console.log('ESM ->', modulo.mensaje)
