import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Play, Heart } from "lucide-react";
import { toast } from "sonner";
import confetti from "canvas-confetti";

interface MovieCardProps {
  image?: string;
  videoUrl?: string;
  title: string;
  date: string;
  description: string;
  audioUrl?: string;
  onClick?: () => void;
}

export default function MovieCard({
  image,
  videoUrl,
  title,
  date,
  description,
  audioUrl,
  onClick,
}: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (audioUrl) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.volume = 0.3;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [audioUrl]);

  const handleInteractionStart = () => {
    setIsHovered(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  const handleInteractionEnd = () => {
    setIsHovered(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleTouchStart = () => {
    setIsTouched(true);
    handleInteractionStart();

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsTouched(false);
      handleInteractionEnd();
    }, 3000);
  };

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast.success(`Playing moment: "${title}"! 🎬`, {
      description: "Bringing this beautiful memory back to life!",
      duration: 3000,
    });
    
    // Colorful confetti blast
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#E50914", "#FFD700", "#FF69B4", "#87CEEB"],
    });
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    
    if (newLikedState) {
      toast("Added to Favorites ❤️", {
        description: `You loved: "${title}"`,
        duration: 3000,
      });

      // Special red & pink heart confetti burst
      confetti({
        particleCount: 40,
        angle: 90,
        spread: 50,
        colors: ["#ff3366", "#ff0000", "#ff6699"],
        origin: { y: 0.8 },
      });
    } else {
      toast("Removed from Favorites 💔", {
        description: `Unliked: "${title}"`,
        duration: 2000,
      });
    }
  };

  return (
    <motion.div
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleTouchStart}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="relative flex-shrink-0 w-48 md:w-64 cursor-pointer group"
    >
      <div className="relative rounded-md overflow-hidden shadow-lg border border-zinc-800 group-hover:border-zinc-700 transition-all duration-300 bg-zinc-950 h-28 md:h-36">
        {videoUrl && !videoError ? (
          <div className="absolute inset-0 z-0 bg-zinc-950">
            {/* Blurred background video */}
            <video
              src={videoUrl}
              autoPlay
              muted
              loop
              playsInline
              onError={() => setVideoError(true)}
              className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-30 select-none pointer-events-none"
            />
            {/* Foreground contained video */}
            <video
              src={videoUrl}
              poster={image}
              autoPlay
              muted
              loop
              playsInline
              onError={() => setVideoError(true)}
              className="relative w-full h-full object-contain mx-auto z-10"
            />
          </div>
        ) : (
          image && (
            <>
              {/* Blurred background image */}
              <img
                src={image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-30 select-none pointer-events-none"
              />
              {/* Foreground contained image */}
              <img
                src={image}
                alt={title}
                className="relative w-full h-full object-contain transition-transform duration-300 z-0 mx-auto"
              />
            </>
          )
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered || isTouched ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-20"
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered || isTouched ? 1 : 0,
            y: isHovered || isTouched ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex flex-col justify-end p-3 md:p-4 z-30"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white text-sm md:text-base truncate">
                {title}
              </h3>
            </div>
            <div className="flex gap-1 ml-2 flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.85 }}
                onClick={handlePlayClick}
                className="p-1.5 md:p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
                aria-label="Play"
              >
                <Play className="w-3 h-3 md:w-4 md:h-4 text-black fill-current" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.85 }}
                onClick={handleLikeClick}
                className={`p-1.5 md:p-2 rounded-full transition-colors ${
                  isLiked 
                    ? "bg-red-600 hover:bg-red-700 text-white" 
                    : "bg-zinc-800/90 hover:bg-zinc-700 text-white"
                }`}
                aria-label="Like"
              >
                <Heart className={`w-3 h-3 md:w-4 md:h-4 ${isLiked ? "fill-current" : ""}`} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
