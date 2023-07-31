import React from "react";

const Card = ({ title, total, icon }) => {
  return (
    <div className="card card-side shadow-md flex p-4 w-11/12  ">
      <figure className="text-[2rem]">{icon}</figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-3xl">Ghc {total}</p>
      </div>
    </div>
  );
};

export default Card;
