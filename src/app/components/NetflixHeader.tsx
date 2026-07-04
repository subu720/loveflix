import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Bell, User, Heart, Star, Sparkles, Smile, LogOut } from "lucide-react";
import { toast } from "sonner";
import confetti from "canvas-confetti";

interface NetflixHeaderProps {
  girlfriendName: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function NetflixHeader({
  girlfriendName,
  searchQuery,
  onSearchChange,
}: NetflixHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProfileSwitch = (profileName: string) => {
    toast.success(`Switched profile to: ${profileName}! ✨`, {
      description: "Welcome to your personalized Loveflix screen!",
    });
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 60,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 40,
      angle: 120,
      spread: 60,
      origin: { x: 1 },
    });
    setShowProfileMenu(false);
  };

  const handleSignOut = () => {
    toast.error("Error: Action Denied! ❌", {
      description: "You can never sign out of my heart! ❤️",
      duration: 4000,
    });
    
    // Heart splash confetti
    confetti({
      particleCount: 50,
      spread: 60,
      colors: ["#ff0000", "#ff69b4"],
      origin: { y: 0.5 },
    });
  };

  return (
    <motion.header
      initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      animate={{
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.95)" : "rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-40 px-4 md:px-12 py-4"
    >
      <div className="flex items-center justify-between relative">
        <div className="flex items-center gap-6 md:gap-8">
          <h1 className="text-2xl md:text-3xl font-bold text-red-600 cursor-pointer hover:scale-105 transition-transform" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            LOVEFLIX
          </h1>

          <nav className="hidden md:flex gap-6 text-sm text-zinc-300">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#memories" className="hover:text-white transition-colors">
              Our Memories
            </a>
            <a href="#favorites" className="hover:text-white transition-colors">
              Favorites
            </a>
            <a href="#us" className="hover:text-white transition-colors">
              About Us
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          {/* Animated Search Bar */}
          <motion.div
            animate={{ width: isSearchExpanded ? 220 : 36 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="flex items-center bg-black/60 border border-zinc-700/60 rounded-full px-2 py-1.5 overflow-hidden"
          >
            <button
              onClick={() => {
                setIsSearchExpanded(!isSearchExpanded);
                if (!isSearchExpanded) {
                  setTimeout(() => searchInputRef.current?.focus(), 100);
                } else {
                  onSearchChange("");
                }
              }}
              className="text-zinc-300 hover:text-white transition-colors focus:outline-none cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search memories..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="bg-transparent text-white text-xs outline-none ml-2 w-full focus:ring-0 placeholder-zinc-500"
              style={{ display: isSearchExpanded ? "block" : "none" }}
            />
          </motion.div>

          {/* Notifications button */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
              className="text-zinc-300 hover:text-white transition-colors focus:outline-none cursor-pointer relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5 md:w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-bold">
                3
              </span>
            </button>

            {/* Notifications Dropdown */}
            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute right-0 mt-3 w-80 bg-zinc-950/95 border border-zinc-800 rounded-md shadow-2xl p-4 z-50 text-white text-sm"
                >
                  <h3 className="font-semibold text-zinc-300 border-b border-zinc-800 pb-2 mb-2 flex items-center justify-between">
                    <span>Love Notifications</span>
                    <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                  </h3>
                  <div className="space-y-3">
                    <div className="flex gap-2.5 items-start hover:bg-zinc-900/50 p-1.5 rounded transition-colors cursor-pointer">
                      <div className="bg-red-500/10 p-1.5 rounded text-red-500 flex-shrink-0 mt-0.5">
                        <Heart className="w-4 h-4 fill-current" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-100 font-medium">Memory Liked!</p>
                        <p className="text-[10.5px] text-zinc-400">Gudi loved "Our First Date" photo gallery.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2.5 items-start hover:bg-zinc-900/50 p-1.5 rounded transition-colors cursor-pointer" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                      <div className="bg-amber-500/10 p-1.5 rounded text-amber-500 flex-shrink-0 mt-0.5">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-100 font-medium">Birthday Alert!</p>
                        <p className="text-[10.5px] text-zinc-400">It's a very special day! Make sure to blow the cake candle.</p>
                      </div>
                    </div>

                    <div className="flex gap-2.5 items-start hover:bg-zinc-900/50 p-1.5 rounded transition-colors cursor-pointer">
                      <div className="bg-emerald-500/10 p-1.5 rounded text-emerald-500 flex-shrink-0 mt-0.5">
                        <Smile className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-100 font-medium">Cute Reminder</p>
                        <p className="text-[10.5px] text-zinc-400">System check: Love levels are at 100% capacity.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Profile Switcher Menu */}
          <div className="relative">
            <div
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowNotifications(false);
              }}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center shadow-md group-hover:ring-2 group-hover:ring-white transition-all duration-300">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="hidden md:block text-sm text-zinc-300 group-hover:text-white transition-colors font-medium">
                {girlfriendName}
              </span>
            </div>

            {/* Profile Dropdown */}
            <AnimatePresence>
              {showProfileMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute right-0 mt-3 w-64 bg-zinc-950/95 border border-zinc-800 rounded-md shadow-2xl overflow-hidden z-50 text-white"
                >
                  <div className="p-3 border-b border-zinc-800">
                    <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-2">Switch Profile</p>
                    <div className="space-y-2">
                      <div
                        onClick={() => handleProfileSwitch("Gudi (Princess 👸)")}
                        className="flex items-center gap-2.5 p-2 rounded hover:bg-zinc-800 transition-colors cursor-pointer"
                      >
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center text-xs">👸</div>
                        <span className="text-xs font-medium text-zinc-200">Gudi (Princess)</span>
                      </div>
                      
                      <div
                        onClick={() => handleProfileSwitch("Prince Charming (Boyfriend 🙋‍♂️)")}
                        className="flex items-center gap-2.5 p-2 rounded hover:bg-zinc-800 transition-colors cursor-pointer"
                      >
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center text-xs">🙋‍♂️</div>
                        <span className="text-xs font-medium text-zinc-400 hover:text-zinc-200">Prince Charming</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-zinc-900/40 space-y-1.5 border-b border-zinc-800 text-xs">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Love Match:</span>
                      <span className="text-emerald-500 font-semibold">100% Match</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Days Together:</span>
                      <span className="text-zinc-300 font-semibold">Infinite 🔗</span>
                    </div>
                  </div>

                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-medium text-red-500 hover:bg-red-950/20 hover:text-red-400 transition-colors cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign out of Loveflix</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
