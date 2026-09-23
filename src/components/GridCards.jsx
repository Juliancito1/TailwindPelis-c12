import React from "react";

export const GridCards = () => {
  return (
    <div className="bg-cyan-950 rounded-xl overflow-hidden mt-5">
      <div className="h-80 ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBvon-xkxgQXU1mhyWtw5Hu6E7GJtQuritH07kKjDqYPK9AeYjkckilc&s=10"
          alt="imagenPeli"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-5 pb-6">
        <h2 className="text-2xl text-cyan-400 my-3">Nombre de la peli</h2>
        <p className="text-gray-300 text-xl my-3">Descripción de la película</p>
        <button className="bg-cyan-600 text-white text-2xl py-2 my-3 px-4 rounded-lg">
          Ver más
        </button>
      </div>
    </div>
  );
};
