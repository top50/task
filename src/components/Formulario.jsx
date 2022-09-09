import { useEffect, useState } from "react";
import AlertError from "./AlertError";

const Formulario = ({ tareas, setTareas,tarea,setTarea }) => {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

const [error, setError] = useState(false);

useEffect(()=>{
if(Object.keys(tarea).length > 0){
setTitulo(tarea.titulo);
setFecha(tarea.fecha);
setDescripcion(tarea.descripcion)

}
},[tarea])

const generalId=()=>{
  const id=Math.random().toString(20).substr(2);
  return id
}

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([titulo, fecha, descripcion].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    const objetoTareas = {
      titulo,
      fecha,
      descripcion,
    
    };

    if(tarea.id){
      objetoTareas.id=tarea.id;
      const tareasActualizadas=tareas.map( (tareaState) =>
      tareaState.id === tarea.id ? objetoTareas : tareaState
      );
      setTareas(tareasActualizadas);
      setTarea({})

    }else{
      objetoTareas.id = generalId();
      setTareas([...tareas, objetoTareas]);
    }


//limpiar formulario//
    setTitulo("");
    setFecha("");
    setDescripcion("");
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center mb-10">
        Creación de tareas
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        <div className="mb-5">
          {error && <AlertError mensaje="Faltan campos por diligenciar" />}
          <label
            htmlFor="titulo"
            className="black text-gray-700 uppercase font-bold"
          >
            Titulo
          </label>
          <input
            id="titulo"
            type="text"
            placeholder="Titulo tarea"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="black text-gray-700 uppercase font-bold"
          >
            Fecha
          </label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="descripcion"
            className="black text-gray-700 uppercase font-bold"
          >
            Descripción de la tarea
          </label>
          <textarea
            id="descripcion"
            type="text"
            placeholder="Descripción"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        {!tarea.id ? (
          <input
          type="submit"
          className="bg-blue-600 w-full p-3 text-white uppercase font-bold hover:bg-blue-800 transition-all rounded-md hover:shadow-sm cursor-pointer"
          value="Crear Tarea"
        />
        ):(
          <input
          type="submit"
          className="bg-purple-500 w-full p-3 text-white uppercase font-bold hover:bg-blue-800 transition-all rounded-md hover:shadow-sm cursor-pointer"
          value="Actualizar Tarea"
        />
        )
      
      }
      </form>
    </div>
  );
};

export default Formulario;
