const fs =require('fs');
const colors = require('colors')

const crearArchivoTabla = async( base  = 5, listar = false, hasta= 10) => {
    
      

        try {
    
        let salida = ''
        let consola = ''
        for (let i = 0; i <= hasta ; i++) {
            
            salida += `${base} x ${i} = ${base * i }\n`
            consola += `${base} ${ 'x'.blue } ${i} ${ '='.blue } ${base * i }\n`

        }

        if(listar) {
            
            console.log('==================='.green)
            console.log( 'tabla del'.green, colors.blue( base))
            // console.log( `tabla del ${base}`)
            console.log('==================='.green)


            console.log(consola)
        }
    
        fs.writeFileSync(`./salida/table-${base}.txt`, salida)
    
         return `tabla-${base}.txt `
    
    
        } catch (error) {
             throw err
        }

        

}
module.exports = {
    crearArchivoTabla
}