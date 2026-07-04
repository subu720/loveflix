import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { Cake } from "lucide-react";

interface CakeGamePopupProps {
  onUnlock: () => void;
  girlfriendName: string;
  girlfriendPhotoUrl?: string;
}

export default function CakeGamePopup({
  onUnlock,
  girlfriendName,
  girlfriendPhotoUrl,
}: CakeGamePopupProps) {
  const [candleBlown, setCandleBlown] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleBlowCandle = () => {
    setCandleBlown(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#E50914", "#FFD700", "#FF69B4", "#87CEEB"],
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
    }, 250);

    setTimeout(() => {
      setShowProfile(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-md px-6"
        >
          <div className="bg-zinc-900 rounded-lg p-8 text-center shadow-2xl border border-zinc-800">
            {!candleBlown ? (
              <>
                <motion.div
                  animate={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-6 flex justify-center"
                >
                  <div className="relative">
                    <Cake className="w-32 h-32 text-pink-400" strokeWidth={1.5} />
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2"
                    >
                      <button
                        onClick={handleBlowCandle}
                        className="text-4xl cursor-pointer hover:scale-110 transition-transform"
                        aria-label="Blow out the candle"
                      >
                        🕯️
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Happy Birthday! 🎉
                </h2>
                <p className="text-zinc-400 text-lg">
                  Click the candle to make a wish...
                </p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="mb-6"
                >
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-pink-400 to-purple-600 p-1 shadow-xl">
                    <div className="w-full h-full rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
                      {girlfriendPhotoUrl ? (
                        <img
                          src={girlfriendPhotoUrl}
                          alt={girlfriendName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-5xl">👸</span>
                      )}
                    </div>
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl font-bold text-white mb-4"
                >
                  To the most amazing person in my life! ❤️
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-zinc-300 mb-8 leading-relaxed"
                >
                  Every moment with you is a beautiful memory worth celebrating.
                  Welcome to our story...
                </motion.p>

                {showProfile && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    onClick={onUnlock}
                    className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-zinc-200 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Enter Loveflix
                  </motion.button>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
