import { useState, useRef, useEffect } from "react";
import NetflixHeader from "./components/NetflixHeader";
import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";
import MovieModal from "./components/MovieModal";
import { Toaster, toast } from "sonner";
import { AnimatePresence } from "motion/react";
import {
  girlfriendName,
  heroBannerImages,
  heroMovieInfo,
  topPicks,
  romanticMoments,
  ourAdventures,
  videoMemories,
  Movie
} from "./data/mediaData";

export default function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [wasMusicPlayingBeforeModal, setWasMusicPlayingBeforeModal] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Auto-pause background music when viewing a video memory, restore it when closed
  useEffect(() => {
    if (selectedMovie && selectedMovie.videoUrl) {
      if (isMusicPlaying) {
        setWasMusicPlayingBeforeModal(true);
        setIsMusicPlaying(false);
      }
    } else if (!selectedMovie) {
      if (wasMusicPlayingBeforeModal) {
        setIsMusicPlaying(true);
        setWasMusicPlayingBeforeModal(false);
      }
    }
  }, [selectedMovie]);

  // Initialize and clean up background music
  useEffect(() => {
    audioRef.current = new Audio("/assets/audio/audio1.mpeg");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Sync background music state
  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play().catch(() => {
          // If browser blocks auto-play, reset state
          setIsMusicPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying]);

  const handlePlayMusic = () => {
    setIsMusicPlaying(true);
    toast.info("Romantic soundtrack playing 🎵", {
      description: "Enjoy the tunes while exploring our memories!",
    });
  };

  const handleToggleMusic = () => {
    const nextState = !isMusicPlaying;
    setIsMusicPlaying(nextState);
    if (nextState) {
      toast("Music On 🔊", { description: "Playing 'Beautiful Dream' piano theme." });
    } else {
      toast("Music Muted 🔇", { description: "You can unmute at any time!" });
    }
  };

  // Search filter helper
  const filterMovies = (movieList: Movie[]) => {
    if (!searchQuery) return movieList;
    const query = searchQuery.toLowerCase();
    return movieList.filter(
      (m) =>
        m.title.toLowerCase().includes(query) ||
        m.description.toLowerCase().includes(query) ||
        (m.date && m.date.toLowerCase().includes(query))
    );
  };

  const filteredTopPicks = filterMovies(topPicks);
  const filteredRomanticMoments = filterMovies(romanticMoments);
  const filteredOurAdventures = filterMovies(ourAdventures);
  const filteredVideoMemories = filterMovies(videoMemories);

  const hasSearchResults =
    filteredTopPicks.length > 0 ||
    filteredRomanticMoments.length > 0 ||
    filteredOurAdventures.length > 0 ||
    filteredVideoMemories.length > 0;

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-red-600 selection:text-white">
      {/* Toast notifications */}
      <Toaster position="top-right" theme="dark" closeButton richColors />

      {/* Main Netflix layout */}
      <NetflixHeader
        girlfriendName={girlfriendName}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div id="home">
        <HeroBanner
          title="The Story of Us"
          description="A collection of our most beautiful moments together. Every frame tells a story, every memory is a treasure, and every day with you is a new adventure worth celebrating."
          backgroundImages={heroBannerImages}
          onPlayMusic={handlePlayMusic}
          isMusicPlaying={isMusicPlaying}
          onToggleMusic={handleToggleMusic}
          onMoreInfo={() => setSelectedMovie(heroMovieInfo)}
        />
      </div>

      <div className="relative z-10 -mt-20 md:-mt-32 pb-12">
        {searchQuery && !hasSearchResults && (
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
            <p className="text-zinc-500 text-lg">No memories match "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 px-5 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition-colors text-sm"
            >
              Clear Search
            </button>
          </div>
        )}

        {filteredTopPicks.length > 0 && (
          <div id="favorites">
            <MovieRow
              title="Top Picks for Her ❤️"
              movies={filteredTopPicks}
              onSelectMovie={setSelectedMovie}
            />
          </div>
        )}

        {filteredVideoMemories.length > 0 && (
          <div id="videos">
            <MovieRow
              title="Our Video Diaries 🎥"
              movies={filteredVideoMemories}
              onSelectMovie={setSelectedMovie}
            />
          </div>
        )}

        {filteredRomanticMoments.length > 0 && (
          <div id="memories">
            <MovieRow
              title="Our Cute Memories 💕"
              movies={filteredRomanticMoments}
              onSelectMovie={setSelectedMovie}
            />
          </div>
        )}

        {filteredOurAdventures.length > 0 && (
          <div id="us">
            <MovieRow
              title="Our Adventures Together 🌍"
              movies={filteredOurAdventures}
              onSelectMovie={setSelectedMovie}
            />
          </div>
        )}
      </div>

      {/* Details modal overlay */}
      <AnimatePresence>
        {selectedMovie && (
          <MovieModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
            onPlay={() => setIsMusicPlaying(true)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}