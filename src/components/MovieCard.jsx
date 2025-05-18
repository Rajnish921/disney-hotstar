// src/components/MovieCard.jsx
import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-[110px] md:w-[200px] h-[120px] rounded-lg overflow-hidden">
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={movie.title || "Movie Poster"}
        className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-150 ease-in cursor-pointer"
      />
    </div>
  );
};

export default MovieCard;
