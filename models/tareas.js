const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    get listadoArr() {
        const listado = [];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea)
        })


        return listado;
    }

    constructor() {
        this._listado = {};
    }


    borrarTarea(id=''){

        if(this._listado[id]){
            delete this._listado[id];
        }
    }




    cargarTareasArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })

    }


    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {

        this.listadoArr.forEach((tarea, i) => {
            const { desc, completadoEn } = tarea
            const idx = `${i + 1}`.green
            const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red

            console.log(`${idx}. ${desc} :: ${estado}`)


        })

        /*      let esCompletado;
             console.log();
            Object.values(this._listado).forEach((value,i)=>{
     
             const idx=`${i+1}`.green
     
             if(value.completadoEn==null){
                     esCompletado='Pendiente'.red
                }else{
                     esCompletado='Completado'.green
                }
                console.log(`${idx}. ${value.desc} :: ${esCompletado}`)
            })
         } */

    }


    listarPendientesCompletadas(completadas=true){
       
     
    
        let i=0;

        this.listadoArr.forEach((tarea)=>{

            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red

            if(completadas===true){

                if(completadoEn){
                    i++;
                    console.log(`${(i+'.').green} ${desc} :: ${completadoEn.green}`)
                }
            }else{
                if(!completadoEn){
                    i++;
                    console.log(`${(i+'.').green} ${desc} :: ${estado}`)
                }
            }
            
            
        });

        



}

    toggleCompletada(ids=[]){
        
        ids.forEach(id=>{
            const tarea=this._listado[id];

            if(!tarea.completadoEn){
                tarea.completadoEn=new Date().toISOString();
            }

        });

        this.listadoArr.forEach(tarea=>{
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn=null;
        
            }

        })

    }


}


module.exports = Tareas;

