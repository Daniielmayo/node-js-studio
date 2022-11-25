const deadpool = {
    nombre: 'wade',
    apellido: 'Winston',
    poder:'Regeneracion',
    getNombre(){
        return `${ this.nombre} ${ this.apellido } ${ this.poder} `
    }
}

// const nombre  = deadpool.nombre
// const apellido= deadpool.apellido
// const poder= deadpool.poder

const { nombre, apellido, poder, edad = 0} = deadpool

// console.log(deadpool.getNombre)
// console.log( nombre, apellido, poder)
console.log( nombre, apellido, poder, edad)
