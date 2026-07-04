export interface Movie {
  id: string;
  image: string;
  videoUrl?: string; // Optional video preview
  title: string;
  date: string;
  description: string;
  audioUrl?: string;
  secretNote?: string;
  matchRating?: string;
  duration?: string;
}

export const girlfriendName = "Gudi";

export const heroBannerImages = [
  "/assets/images/image1.jpg",
  "/assets/images/image2.jpg",
  "/assets/images/image3.jpg",
];

export const heroMovieInfo: Movie = {
  id: "hero",
  image: heroBannerImages[0],
  videoUrl: "/assets/videos/vid2.mp4",
  title: "The Story of Us",
  date: "Since Day One 💖",
  description: "A beautiful journey of love, adventure, and laughter. This website is a special tribute to Princess Gudi on her birthday, celebrating every little moment that makes our bond so extraordinary.",
  matchRating: "100% Match",
  duration: "Infinite Seasons"
};

// Purely image-based Top Picks
export const topPicks: Movie[] = [
  {
    id: "1",
    image: "/assets/images/image4.jpg",
    title: "Our outing",
    date: "January 2024",
    description: "The day everything changed. Coffee turned into hours of conversation.",
    secretNote: "I was so nervous when I saw you walking towards the cafe, but the second we started talking, it felt like we'd known each other forever. You looked absolutely stunning! 😍",
    matchRating: "99% Match",
    duration: "1 Episode"
  },
  {
    id: "2",
    image: "/assets/images/image5.jpg",
    title: "a cute moment",
    date: "March 2024",
    description: "Walking along the shore, hand in hand, as the sun painted the sky.",
    secretNote: "The way the golden light hit your face as you smiled at the sunset was the exact moment I realized I was falling head over heels for you. 🌅",
    matchRating: "98% Match",
    duration: "1 Episode"
  },
  {
    id: "3",
    image: "/assets/images/image6.jpg",
    title: "Our fun time",
    date: "April 2024",
    description: "Reaching new heights together, literally and figuratively.",
    secretNote: "Even when the trail got steep, you kept going with a smile. Holding your hand as we looked out from the peak is a memory I'll keep forever. 🏔️",
    matchRating: "97% Match",
    duration: "1 Episode"
  },
  {
    id: "4",
    image: "/assets/images/image7.png",
    title: "the mirror of love",
    date: "May 2024",
    description: "Dancing under the stars in the heart of the city.",
    secretNote: "Dancing in the middle of the crowded square, I didn't care about anything else around us. It was just you, me, and the city lights. 🌃",
    matchRating: "99% Match",
    duration: "1 Episode"
  },
  {
    id: "5",
    image: "/assets/images/image8.jpg",
    title: "Peaceful nap",
    date: "June 2024",
    description: "Lazy Sunday mornings are better with you.",
    secretNote: "No fancy dates can beat the simple comfort of waking up next to you, making pancakes, and talking about everything and nothing. 🥞",
    matchRating: "96% Match",
    duration: "1 Episode"
  },
  {
    id: "16",
    image: "/assets/images/image9.jpg",
    title: "Cozy shopping day",
    date: "July 2024",
    description: "Wrapped in blankets, sharing popcorn, and laughing at the same jokes.",
    secretNote: "You fell asleep halfway through the movie, and I just sat there feeling like the luckiest person in the world. This site is for those nights! 🍿",
    matchRating: "99% Match",
    duration: "1 Episode"
  },
  {
    id: "19",
    image: "/assets/images/image10.jpg",
    title: "a temple Date",
    date: "August 2024",
    description: "Rainy afternoons are best spent sharing a warm cup of coffee and endless laughter.",
    secretNote: "Sharing a single warm pastry while watching the rain patter against the window. The coziest morning ever. ☕",
    matchRating: "95% Match",
    duration: "1 Episode"
  },
  {
    id: "20",
    image: "/assets/images/image11.jpg",
    title: "Shopping day",
    date: "October 2024",
    description: "Adoring history and art, but honestly, I couldn't keep my eyes off you.",
    secretNote: "You were explaining the history of a sculpture with so much passion, and all I could think of was how beautiful your eyes looked in the gallery light. 🎨",
    matchRating: "97% Match",
    duration: "1 Episode"
  },
  {
    id: "21",
    image: "/assets/images/image12.JPG",
    title: "old place with new memory",
    date: "November 2024",
    description: "Walking through golden leaves, feeling the crisp air, and holding you close.",
    secretNote: "The sound of crunchy leaves under our feet and the smell of pumpkin spice. Cozying up in your oversized scarf was the highlight of my week! 🍁",
    matchRating: "96% Match",
    duration: "1 Episode"
  },
  {
    id: "22",
    image: "/assets/images/image13.jpg",
    title: "date with happiness",
    date: "December 2024",
    description: "Watching the festive lights reflect in your eyes. The warmest part of winter.",
    secretNote: "The magical lights at the winter market made everything glow, but none of them shone as bright as your beautiful smile. ❄️",
    matchRating: "98% Match",
    duration: "1 Episode"
  },
];

// Purely image-based Romantic Memories
export const romanticMoments: Movie[] = [
  {
    id: "6",
    image: "/assets/images/image24.jpg",
    title: "two fingers with one heart",
    date: "February 2024",
    description: "Our special anniversary celebration under the stars.",
    secretNote: "Celebrating our first anniversary under a canopy of fairy lights. Here's to a lifetime of candlelit conversations and beautiful dinners together! 🕯️",
    matchRating: "100% Match",
    duration: "1 Episode"
  },
  {
    id: "7",
    image: "/assets/images/image25.jpg",
    title: "memories❤️❤️😍",
    date: "January 2024",
    description: "The moment that made my heart skip a beat.",
    secretNote: "My heart was pounding so loud I was sure you could hear it. A perfect, magical spark that I will cherish forever. 💋",
    matchRating: "100% Match",
    duration: "1 Episode"
  },
  {
    id: "8",
    image: "/assets/images/image26.jpg",
    title: "a photo with so much emotions",
    date: "March 2024",
    description: "Who needs an umbrella when you have each other?",
    secretNote: "Getting completely soaked, laughing hysterically, and spinning around in the middle of the sidewalk. Best shower ever! 🌧️",
    matchRating: "99% Match",
    duration: "1 Episode"
  },
  {
    id: "9",
    image: "/assets/images/image27.jpg",
    title: "staring with love",
    date: "April 2024",
    description: "Finding constellations and making wishes together.",
    secretNote: "Laying on a blanket, counting shooting stars. My only wish was already right next to me, holding my hand. 🌟",
    matchRating: "98% Match",
    duration: "1 Episode"
  },
  {
    id: "10",
    image: "/assets/images/image28.jpg",
    title: "fun with you",
    date: "May 2024",
    description: "Simple moments that became precious memories.",
    secretNote: "Your homemade sandwiches, a sunny day in the park, and you reading your favorite book to me. Pure bliss. 🧺",
    matchRating: "97% Match",
    duration: "1 Episode"
  },
  {
    id: "17",
    image: "/assets/images/image29.jpg",
    title: "love every image of you",
    date: "August 2024",
    description: "Watching the sun dip below the horizon, feeling completely at peace with you.",
    secretNote: "Gliding across the water with the warm wind in our hair, feeling completely free and close to you as the day faded. ⛵",
    matchRating: "98% Match",
    duration: "1 Episode"
  },
  {
    id: "23",
    image: "/assets/images/image30.jpg",
    title: "it says the whole story",
    date: "September 2024",
    description: "A private dinner overlooking the city skyline, whispering sweet secrets.",
    secretNote: "The sparkling city lights below, the quiet night air, and tasting delicious desserts while laughing at our silly inside jokes. 🏙️",
    matchRating: "99% Match",
    duration: "1 Episode"
  },
  {
    id: "24",
    image: "/assets/images/image31.jpg",
    title: "I LOVE YOU❤️❤️❤️",
    date: "November 2024",
    description: "The bright smile on your face when I showed up with your favorite bouquet.",
    secretNote: "Your face of sheer surprise and joy when you saw the pink roses. Your happiness is my absolute favorite sight in the world. 🌹",
    matchRating: "99% Match",
    duration: "1 Episode"
  },
  {
    id: "25",
    image: "/assets/images/image32.jpg",
    title: "Holding you",
    date: "December 2024",
    description: "A silent promise written in the warmth of our intertwined fingers.",
    secretNote: "Whether we are walking in a crowded street or just sitting on the couch watching Netflix, holding your hand makes me feel safe, grounded, and loved. 🤝",
    matchRating: "100% Match",
    duration: "1 Episode"
  },
  {
    id: "26",
    image: "/assets/images/image33.jpg",
    title: "lauging with a happiness",
    date: "January 2025",
    description: "Savoring the last rays of sun, wishing this moment would last forever.",
    secretNote: "Watching the sun paint your skin golden, capturing that perfect photograph that I still look at every single day to remind myself how beautiful you are. ✨",
    matchRating: "97% Match",
    duration: "1 Episode"
  },
];

// Purely image-based Adventures
export const ourAdventures: Movie[] = [
  {
    id: "11",
    image: "/assets/images/image14.jpg",
    title: "river of love",
    date: "February 2024",
    description: "Adventures are better when we're lost together.",
    secretNote: "Singing along terribly to old 2000s pop songs, getting lost twice, and eating silly snacks at dodgy gas stations. Best trip ever! 🚗",
    matchRating: "98% Match",
    duration: "1 Episode"
  },
  {
    id: "12",
    image: "/assets/images/image15.jpg",
    title: "cute moments",
    date: "March 2024",
    description: "Discovering hidden gems and making new memories.",
    secretNote: "Getting sprayed by the cold mist of the waterfall, finding hidden pools, and sharing a victory kiss at the bottom. 💦",
    matchRating: "96% Match",
    duration: "1 Episode"
  },
  {
    id: "13",
    image: "/assets/images/image16.jpg",
    title: "i will always love you",
    date: "June 2024",
    description: "Paradise found, with you by my side.",
    secretNote: "Swimming in crystal clear water, walking on soft white sand, and forgetting that the rest of the world existed. Just pure tropical relaxation. 🏝️",
    matchRating: "99% Match",
    duration: "1 Episode"
  },
  {
    id: "14",
    image: "/assets/images/image17.jpg",
    title: "travling with you",
    date: "April 2024",
    description: "Lost in nature, found in each other.",
    secretNote: "Walking under giant redwoods, breathing in the fresh pine scent, and listening to the peaceful forest silence. Felt so connected to you. 🌲",
    matchRating: "95% Match",
    duration: "1 Episode"
  },
  {
    id: "15",
    image: "/assets/images/image18.jpg",
    title: "just you and me🥰",
    date: "May 2024",
    description: "Building memories around the campfire.",
    secretNote: "Struggling to set up the tent for an hour, roasting marshmallows, and talking until the fire burned out. I love roughing it with you! ⛺",
    matchRating: "97% Match",
    duration: "1 Episode"
  },
  {
    id: "18",
    image: "/assets/images/image19.jpg",
    title: "the love that says everything",
    date: "September 2024",
    description: "Finding mysterious paths and conquering our fears side-by-side.",
    secretNote: "Navigating dark passageways with our flashlights, feeling like real explorers, and holding onto each other tight when the bats flew past! 🦇",
    matchRating: "96% Match",
    duration: "1 Episode"
  },
  {
    id: "27",
    image: "/assets/images/image20.jpg",
    title: "the best moment of my life🥰",
    date: "October 2024",
    description: "Floating high above the clouds, witnessing the world from a brand new perspective.",
    secretNote: "Seeing the tiny houses below and floating silently through the sunrise. A breathtaking adventure with my favorite adventurer. 🎈",
    matchRating: "98% Match",
    duration: "1 Episode"
  },
  {
    id: "28",
    image: "/assets/images/image21.jpg",
    title: "love in every bite",
    date: "December 2024",
    description: "Rollercoasters, arcade games, cotton candy, and your beautiful laughter.",
    secretNote: "Winning a plush toy for you after five failed attempts, riding the giant ferris wheel at night, and screaming on rollercoasters together. 🎡",
    matchRating: "99% Match",
    duration: "1 Episode"
  },
  {
    id: "29",
    image: "/assets/images/image22.jpg",
    title: "loving you",
    date: "January 2025",
    description: "Riding over golden dunes and watching the sunset paint the desert sky.",
    secretNote: "The thrilling dune bashing, riding camels, and eating a traditional dinner under a starlit desert sky. Absolutely magical. 🏜️",
    matchRating: "98% Match",
    duration: "1 Episode"
  },
  {
    id: "30",
    image: "/assets/images/image23.jpg",
    title: "cafe day",
    date: "February 2025",
    description: "Building snowmen, drinking hot cocoa, and staying cozy by the fireplace.",
    secretNote: "Making a tiny snowman that looked like a penguin, throwing snowballs, and warming up together by the crackling fireplace. The perfect winter escape. ☃️",
    matchRating: "97% Match",
    duration: "1 Episode"
  },
];

// DEDICATED list for Video Diaries
export const videoMemories: Movie[] = [
  {
    id: "v1",
    image: "",
    videoUrl: "/assets/videos/vid1.mp4",
    title: "memories❤️❤️😍",
    date: "January 2024",
    description: "Our special video memory together.",
    matchRating: "100% Match",
    duration: "Video Clip"
  },
  {
    id: "v2",
    image: "",
    videoUrl: "/assets/videos/vid2.mp4",
    title: "The Story of Us",
    date: "Since Day One 💖",
    description: "A continuous look at our happy path.",
    matchRating: "100% Match",
    duration: "Video Clip"
  },
  {
    id: "v3",
    image: "",
    videoUrl: "/assets/videos/vid3.mp4",
    title: "Our outing",
    date: "January 2024",
    description: "Taking dynamic video records on our coffee walks.",
    matchRating: "99% Match",
    duration: "Video Clip"
  },
  {
    id: "v4",
    image: "",
    videoUrl: "/assets/videos/vid4.mp4",
    title: "the mirror of love",
    date: "May 2024",
    description: "Fun mirroring video clip of our relationship.",
    matchRating: "99% Match",
    duration: "Video Clip"
  },
  {
    id: "v5",
    image: "",
    videoUrl: "/assets/videos/vid5.mp4",
    title: "Peaceful nap",
    date: "June 2024",
    description: "Catching cute sleepy video records together.",
    matchRating: "96% Match",
    duration: "Video Clip"
  },
  {
    id: "v6",
    image: "",
    videoUrl: "/assets/videos/vid6.mp4",
    title: "i will always love you",
    date: "June 2024",
    description: "A landscape clip in paradise.",
    matchRating: "99% Match",
    duration: "Video Clip"
  },
  {
    id: "v7",
    image: "",
    videoUrl: "/assets/videos/vid7.mp4",
    title: "travling with you",
    date: "April 2024",
    description: "Forest exploration clip.",
    matchRating: "95% Match",
    duration: "Video Clip"
  },
  {
    id: "v8",
    image: "",
    videoUrl: "/assets/videos/vid8.mp4",
    title: "just you and me🥰",
    date: "May 2024",
    description: "Campfire moments video record.",
    matchRating: "97% Match",
    duration: "Video Clip"
  },
];
