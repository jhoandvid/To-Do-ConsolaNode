require('colors');
const { guardarDB, leerDB} = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput,listarTareasBorrar, confirmar,  mostrarListadoCheckList } = require('./helpers/inquirer');


const Tareas = require('./models/tareas');



const main = async () => {


  let opt = '';
  const tareas = new Tareas();

  const tareasDB=leerDB();

  if(tareasDB){
    //Establec las tareas
    tareas.cargarTareasArray(tareasDB);
  }

  


  do {
    console.clear()
    opt = await inquirerMenu();

    switch (opt) {

      case '1':

        const desc = await leerInput('Descripción');
        tareas.crearTarea(desc);


        break;

      case '2':
        tareas.listadoCompleto();
        break;

        case '3':
          tareas.listarPendientesCompletadas(true);
          
          break;
        case '4':
          tareas.listarPendientesCompletadas(false);
        break;

        case '5': //Completado o pendiente
         const ids= await mostrarListadoCheckList(tareas.listadoArr);
         tareas.toggleCompletada(ids);
        break;


        case '6': //borrar

          const id=await listarTareasBorrar(tareas.listadoArr);
        
          if(id!=='0'){
            const ok=await confirmar('Esta seguro?');

            if(ok){
              tareas.borrarTarea(id);
              console.log("Tarea borrada")
            }
          }
         
        break;
  

    }

    

    guardarDB(tareas.listadoArr);
    await pausa();
  } while (opt !== '0');


}


main();


