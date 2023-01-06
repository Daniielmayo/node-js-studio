const { crearArchivoTabla } = require('./helpers/multiplicar')
const colors = require('colors')
const argv = require('./config/yargs')

//vamos a imprimir en consola la tabla del 5

console.clear()
 
// console.log(argv)

// console.log('base: yargs', argv.b)
// console.log(base)

// const base = 3;

crearArchivoTabla( argv.b, argv.l, argv.h )
     .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
     .catch(err => console.log(err))
