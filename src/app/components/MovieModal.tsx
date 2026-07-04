import { motion } from "motion/react";
import { X, Play, Heart, Calendar, Award, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import confetti from "canvas-confetti";

interface Movie {
  id: string;
  image: string;
  videoUrl?: string;
  title: string;
  date: string;
  description: string;
  audioUrl?: string;
  secretNote?: string;
  matchRating?: string;
  duration?: string;
}

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
  onPlay?: () => void;
}

export default function MovieModal({ movie, onClose, onPlay }: MovieModalProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const handlePlayClick = () => {
    if (onPlay) {
      onPlay();
    }
    toast.success(`Reliving: "${movie.title}" 🎥`, {
      description: "Enjoying the background tunes of this special memory!",
    });
    
    // Fireworks/confetti effect
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#E50914", "#FFD700", "#FF69B4"]
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#E50914", "#FFD700", "#FF69B4"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const handleLikeClick = () => {
    const nextState = !isLiked;
    setIsLiked(nextState);
    if (nextState) {
      toast.success("Saved to your heart's list! ❤️", {
        description: `"${movie.title}" is officially a top-tier moment.`,
      });
      // Concentrated heart burst confetti
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#ff0055", "#ff3366", "#ff66aa"],
      });
    } else {
      toast("Removed from your heart's list 💔");
    }
  };

  // Autogenerate some realistic Netflix metadata if not present
  const matchRating = movie.matchRating || `${Math.floor(Math.random() * 5) + 95}% Match`;
  const duration = movie.duration || `${Math.floor(Math.random() * 5) + 1} Episode`;
  const secretNote = movie.secretNote || `This day represents a special chapter in our book of love. Looking back, the laughter we shared and the warmth of your presence remind me how incredibly lucky I am to have you in my life. Let's make many more memories like this!`;

  const showVideo = movie.videoUrl && !videoError;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      <motion.div
        initial={{ y: 50, scale: 0.95 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 50, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-zinc-900 rounded-xl overflow-hidden shadow-2xl border border-zinc-800 my-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white transition-colors cursor-pointer border border-zinc-800"
          aria-label="Close dialog"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Banner Image or Video */}
        <div className="relative w-full h-[250px] sm:h-[350px] bg-zinc-950 overflow-hidden">
          {showVideo ? (
            <div className="w-full h-full relative">
              {/* Blurred background video */}
              <video
                src={movie.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                onError={() => setVideoError(true)}
                className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-30 select-none pointer-events-none z-0"
              />
              {/* Foreground contained video */}
              <video
                src={movie.videoUrl}
                poster={movie.image}
                autoPlay
                muted={false}
                loop
                playsInline
                onError={() => setVideoError(true)}
                className="relative w-full h-full object-contain mx-auto z-20"
              />
            </div>
          ) : (
            <div className="w-full h-full relative">
              {/* Blurred background image */}
              <img
                src={movie.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-30 select-none pointer-events-none z-0"
              />
              {/* Foreground contained image */}
              <img
                src={movie.image}
                alt={movie.title}
                className="relative w-full h-full object-contain mx-auto z-20"
              />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent z-10" />
          
          <div className="absolute bottom-6 left-6 right-6 z-30">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-3">
              {movie.title}
            </h2>
            
            <div className="flex flex-wrap gap-3 items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlayClick}
                className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-md font-semibold hover:bg-zinc-200 transition-colors shadow-lg cursor-pointer"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>Play Moment</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLikeClick}
                className={`p-2.5 rounded-full border border-white/40 backdrop-blur-sm transition-all cursor-pointer ${
                  isLiked ? "bg-red-600 border-red-600 text-white" : "bg-black/40 hover:bg-black/60 text-white"
                }`}
                aria-label="Like"
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Details Area */}
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="text-emerald-500 font-bold">{matchRating}</span>
              <span className="text-zinc-400 font-medium flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {movie.date}
              </span>
              <span className="px-1.5 py-0.5 text-xs text-zinc-300 border border-zinc-500 rounded font-semibold uppercase">
                HD
              </span>
              <span className="text-zinc-300 font-medium">{duration}</span>
            </div>
          </div>

          {/* Secret Notes / Romantic details side card */}
          <div className="space-y-4 md:border-l md:border-zinc-800 md:pl-6">
            <div className="flex items-center gap-2 text-pink-400 font-semibold text-sm tracking-wide uppercase">
              <Award className="w-4 h-4" />
              <span>Special Moment Spec</span>
            </div>
            
            <div className="space-y-2 text-sm text-zinc-400">
              <p>
                <span className="text-zinc-500">Genre:</span>{" "}
                <span className="text-zinc-300">Romance, Slice of Life, Adventure</span>
              </p>
              <p>
                <span className="text-zinc-500">Starring:</span>{" "}
                <span className="text-zinc-300">You & Me</span>
              </p>
              <p>
                <span className="text-zinc-500">Love Rating:</span>{" "}
                <span className="text-zinc-300">Infinite ♾️</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
