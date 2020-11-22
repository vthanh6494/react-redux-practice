import React from "react";
import { useSelector } from "react-redux";
import { Film } from "./Film";

export const FilmsList = () => {
  const filmsList = useSelector((state) => state.films);
  console.log("filmsList", filmsList);

  const renderFilmItem = filmsList.map(film => {
    return <Film key={film.id} details={film} />
  })

  return (
    <div>
      <div className="head-line-1">List Films Recommend</div>
      <div className="list-films-wrapper">
        <div className="key id">Id</div>
        <div className="key name">Name</div>
        <div className="key type">Type</div>
        <div className="key origin">Origin</div>
        <div className="key rank">Rank</div>
      </div>
      {renderFilmItem}
    </div>
  );
};
