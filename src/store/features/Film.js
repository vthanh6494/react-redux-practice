import React from "react";

export const Film = ({ key, details }) => {
  return (
    <div className="list-films-wrapper" key={key}>
      <div className="value id">{details.id}</div>
      <div className="value name">{details.name}</div>
      <div className="value type">{details.type}</div>
      <div className="value origin">{details.origin}</div>
      <div className="value rank">{details.rank}</div>
    </div>
  );
};
