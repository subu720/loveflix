import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

interface Movie {
  id: string;
  image: string;
  videoUrl?: string;
  title: string;
  date: string;
  description: string;
  audioUrl?: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

export default function MovieRow({ title, movies, onSelectMovie }: MovieRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const updateArrows = () => {
    if (rowRef.current) {
      setShowLeftArrow(rowRef.current.scrollLeft > 10);
    }
  };

  useEffect(() => {
    const el = rowRef.current;
    if (el) {
      el.addEventListener("scroll", updateArrows);
      updateArrows();
      window.addEventListener("resize", updateArrows);
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", updateArrows);
      }
      window.removeEventListener("resize", updateArrows);
    };
  }, [movies]);

  const handleScroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="mb-8 md:mb-12 px-4 md:px-12 relative group">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-red-500 flex items-center gap-2">
        {title}
      </h2>

      <div className="relative">
        {/* Left Control Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-0 bottom-6 w-10 md:w-12 bg-black/60 hover:bg-black/85 backdrop-blur-sm z-30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-r-md cursor-pointer border-r border-y border-zinc-800/40"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 hover:scale-125 transition-transform" />
          </button>
        )}

        {/* Scrollable Row List */}
        <div
          ref={rowRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-6 pt-2 px-2 -mx-2 scrollbar-hide"
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              image={movie.image}
              videoUrl={movie.videoUrl}
              title={movie.title}
              date={movie.date}
              description={movie.description}
              audioUrl={movie.audioUrl}
              onClick={() => onSelectMovie(movie)}
            />
          ))}
        </div>

        {/* Right Control Arrow */}
        {movies.length > 3 && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-0 bottom-6 w-10 md:w-12 bg-black/60 hover:bg-black/85 backdrop-blur-sm z-30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-l-md cursor-pointer border-l border-y border-zinc-800/40"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 hover:scale-125 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
}
