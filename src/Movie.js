import React from "react";
import "./Movie.css";
import PropTypes from "prop-types";
const Movie = ({ year, title, summary, poster, genres }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((item, index) => {
            return (
              <li className="genre" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
        <p className="movie__summary">
          {summary.length > 200 ? summary.slice(0, 200) + "..." : summary}
        </p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
