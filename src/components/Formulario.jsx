import React from 'react'

export const Formulario = () => {
  return (
    <form className="flex flex-col bg-cyan-700 p-10 rounded-xl mt-5">
      <div className="my-3">
        <label htmlFor="nombre" className="text-2xl block text-white">
          Nombre película
        </label>
        <input
          type="text"
          id="nombre"
          className="w-full bg-white rounded-xl py-2 px-2 text-xl text-black focus:outline-none focus:ring-2"
          placeholder="Nombre de la película"
        />
      </div>
      <div className="my-3 ">
        <label className="text-2xl block text-white">Año</label>
        <textarea
          className="bg-white w-full px-2 text-xl rounded-xl resize-none focus:outline-none focus:ring-2 p-3"
          rows={3}
          name="descripcion"
          id=""
          placeholder="Resumen de la trama..."
        ></textarea>
      </div>
      <div className="my-3">
        <label className="text-2xl text-white " htmlFor="categoria">
          Categoria
        </label>
        <select
          className="w-full bg-white py-3 text-xl rounded-xl focus:outline-none focus:ring-2"
          name="categoria"
          id="categoria"
        >
          <option value="">Seleccionar categoria</option>
          <option value="accion">Acción</option>
          <option value="comedia">Comedia</option>
          <option value="drama">Drama</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div className="my-3">
        <button
          type="submit"
          className="bg-blue-500 text-white mt-3 py-2 px-4 rounded-md text-2xl hover:cursor-pointer"
        >
          Enviar pelicula
        </button>
      </div>
    </form>
  );
}
