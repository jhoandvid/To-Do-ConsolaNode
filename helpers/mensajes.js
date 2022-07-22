
require('colors');

const mostrarMenu=()=>{

    return new Promise(resolve=>{
        console.clear();
        console.log("============================".green);
        console.log('    Seleccion una opción    '.green);
        console.log("============================\n".green);
    
        console.log(`${'1'.green}. crear una tarea`);
        console.log(`${'2'.green}. Listar tareas`)
        console.log(`${'3'.green}. Listar tareas complejas`);
        console.log(`${'4'.green}. Listar tareas pendientes`);
        console.log(`${'5'.green}. Completar tarea (s)`);
        console.log(`${'6'.green}. Borrar tarea`);
        console.log(`${'0'.green}. salir`);
    
        const readLine=require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question('Selecciones una opción:', (opt)=>{
            readLine.close();
            resolve(opt);

    
        });
    });
   

   
}


const pausa=()=>{

    return new Promise(resolve=>{
        const readLine=require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt)=>{
             readLine.close();
                resolve();

            });
    });
    


}


module.exports={
    mostrarMenu,
    pausa
}
