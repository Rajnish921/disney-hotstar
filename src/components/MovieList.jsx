// src/components/MovieList.jsx (unchanged, for reference)
import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";

const MovieList = ({ genreId }) => {
  const [movieList, setMovieList] = useState([]);
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const getMovieByGenreId = () => {
      GlobalApi.getMovieByGenreId(genreId).then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
    };
    getMovieByGenreId();
  }, [genreId]);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScroll);
      return () => scrollElement.removeEventListener("scroll", checkScroll);
    }
  }, [movieList]);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-3 pt-5 pb-5 scroll-smooth scrollbar-hide snap-x snap-mandatory"
      >
        {movieList.length > 0 ? (
          movieList.map((item, index) => (
            <div key={item.id || index} className="snap-start">
              <MovieCard movie={item} />
            </div>
          ))
        ) : (
          <div className="text-gray-400 px-3">No movies available.</div>
        )}
      </div>
      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-[14px] w-6 h-6 flex items-center justify-center rounded-full hover:bg-opacity-75 transition-opacity"
        >
          ←
        </button>
      )}
      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-[14px] w-6 h-6 flex items-center justify-center rounded-full hover:bg-opacity-75 transition-opacity"
        >
          →
        </button>
      )}
    </div>
  );
};

export default MovieList;
