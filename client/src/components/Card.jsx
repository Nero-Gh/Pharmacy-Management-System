import React from "react";

const Card = ({ title, total, icon }) => {
  return (
    <div className="card card-side shadow-md flex p-4 w-11/12 items-center h-24 ">
      <div className="text-5xl ">{icon}</div>
      <div className="card-body sm:flex">
        <h2 className="card-title">{title}</h2>
        <p className="text-md font-semibold sm:text-2xl ">Ghc {total}</p>
      </div>
    </div>
  );
};

export default Card;
