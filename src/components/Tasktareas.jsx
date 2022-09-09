import Tareas from "./Tareas";

const Tasktareas = ({ tareas,setTarea,eliminarTarea }) => {

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 h-screen md:overflow-scroll">
            {tareas && tareas.length ? (<>
                <h2 className="font-black text-3xl text-center mb-10">
                Lista de <span className="text-blue-400">Tareas</span>
                </h2>
                {tareas.map((tarea) => {
                    return <Tareas key={tarea.id} tarea={tarea} setTarea={setTarea} eliminarTarea={eliminarTarea}/>;
                }
                )}
            </>
            ) : <h2 className="font-black text-3xl text-center mb-10">No tengo Tareas</h2>}

        </div>
    );
};

export default Tasktareas;
