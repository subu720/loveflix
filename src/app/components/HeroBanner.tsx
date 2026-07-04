import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Play, Info, Volume2, VolumeX } from "lucide-react";

interface HeroBannerProps {
  title: string;
  description: string;
  backgroundImages: string[];
  onPlayMusic: () => void;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
  onMoreInfo?: () => void;
}

export default function HeroBanner({
  title,
  description,
  backgroundImages,
  onPlayMusic,
  isMusicPlaying,
  onToggleMusic,
  onMoreInfo,
}: HeroBannerProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (backgroundImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [backgroundImages.length]);

  return (
    <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      {backgroundImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-zinc-200 mb-6 leading-relaxed drop-shadow-lg max-w-xl">
            {description}
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onPlayMusic}
              className="flex items-center gap-2 bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded-md font-semibold hover:bg-zinc-200 transition-all shadow-lg cursor-pointer"
            >
              <Play className="w-5 h-5 md:w-6 md:h-6 fill-current" />
              <span className="text-sm md:text-base">Play</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onMoreInfo}
              className="flex items-center gap-2 bg-zinc-700/80 text-white px-6 md:px-8 py-2 md:py-3 rounded-md font-semibold hover:bg-zinc-600/80 transition-all shadow-lg backdrop-blur-sm cursor-pointer"
            >
              <Info className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-base">More Info</span>
            </motion.button>

            <div className="flex items-center gap-2 ml-auto md:ml-4">
              {isMusicPlaying && (
                <div className="flex items-end gap-[3px] h-6 px-2 pb-0.5 select-none pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      animate={{
                        height: [4, 20, 4],
                      }}
                      transition={{
                        duration: 0.5 + i * 0.12,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-[3px] bg-red-600 rounded-full"
                    />
                  ))}
                </div>
              )}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onToggleMusic}
                className="p-2 md:p-3 rounded-full border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all cursor-pointer"
                aria-label="Toggle music"
              >
                {isMusicPlaying ? (
                  <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                ) : (
                  <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-white" />
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
