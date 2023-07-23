/**
 * @Author: José Domínguez Pérez
*/


// Lista de compras
const listaCompras = ['Yogurt', 'Cereales', 'Frutas', 'Enlatados', 'Verduras']


// Agregando Aceite de Girasol a la lista
listaCompras.push('Aceite de Girasol')


// Eliminando Aceite de Girasol de la lista
listaCompras.pop()



// Lita de 3 películas favoritas
const peliculas = [
  {
    titulo: 'Spider Man',
    director: 'Sam Raimi',
    fecha: new Date(2002, 4, 17)
  },
  {
    titulo: '8 Millas',
    director: 'Curtis Hanson',
    fecha: new Date(2002, 10, 6)
  },
  {
    titulo: 'Avengers: Infinity War',
    director: 'Anthony Russo',
    fecha: new Date(2018, 3, 23)
  }
]


// Filtrando películas posteriores al 1 de enero de 2010
const pelisFiltradas = peliculas.filter(peli => {
  return peli.fecha.getTime() > new Date(2010, 0, 1).getTime()
})
console.log(pelisFiltradas)


// Directores de películas
const directoresPeli = peliculas.map(peli => peli.director)
console.log(directoresPeli)


// Titulos de películas
const titulosPeli = peliculas.map(peli => peli.titulo)
console.log(titulosPeli)


// Concatenando lista de Directores y Titulos de películas
const directoresTitulos = directoresPeli.concat(titulosPeli)
console.log(directoresTitulos)


// Concatenando lista de Directores y Titulos de películas con factor de propagación
const directoresTitulos2 = [...directoresPeli, ...titulosPeli]
console.log(directoresTitulos2)
