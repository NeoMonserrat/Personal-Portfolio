// travel-data.js
// Single source of truth for all travel destinations.
//
// NOTE: Photos are discovered automatically using:
//   /assets/images/{folder}/{prefix}{index}.{ext}
// where:
//   folder -> this object's `folder` field (e.g., "travel/japan")
//   prefix -> this object's `prefix` field (e.g., "photo")
//   index  -> 1, 2, 3, ...
//   ext    -> jpg, jpeg, png, mp4, mov, webm
//
// Example: for Japan (folder: "travel/japan", prefix: "photo")
//   /assets/images/travel/japan/photo1.jpg
//   /assets/images/travel/japan/photo2.jpg
//   /assets/images/travel/japan/photo3.png
// will automatically appear in the gallery.
//
// You can update the `year` field for each destination
// to match when you visited (e.g., "2019", "2018 & 2022", etc.).

const travelData = [
  // ---------- SOUTHEAST ASIA ----------
  {
    id: "singapore",
    name: "Singapore",
    region: "Southeast Asia",
    year: "2018", // <-- edit as needed
    flag: "singapore.png",
    hero: "City views, night lights, and clean streets that feel futuristic.",
    description:
      "A compact but dense city with stunning skylines, efficient public transport, and a mix of cultures. From Marina Bay to hawker centers, Singapore is one of my favorite examples of a city done right.",
    folder: "travel/singapore",
    prefix: "photo"
  },
  {
    id: "thailand",
    name: "Thailand",
    region: "Southeast Asia",
    year: "2017",
    flag: "thailand.png",
    hero: "Street food, temples, and warm, welcoming locals.",
    description:
      "Thailand is a mix of busy city life and calm temples. Markets, food, and culture are everywhere — it’s a place where the energy of the streets really stands out.",
    folder: "travel/thailand",
    prefix: "photo"
  },
  {
    id: "indonesia",
    name: "Indonesia",
    region: "Southeast Asia",
    year: "2016",
    flag: "indonesia.png",
    hero: "Islands, beaches, and sunsets that feel like wallpapers.",
    description:
      "Indonesia is full of natural scenery — from beaches to island views. It’s a great reminder of how beautiful Southeast Asia can be.",
    folder: "travel/indonesia",
    prefix: "photo"
  },
  {
    id: "malaysia",
    name: "Malaysia",
    region: "Southeast Asia",
    year: "2019",
    flag: "malaysia.png",
    hero: "A blend of cultures, food, and cityscapes.",
    description:
      "Malaysia combines modern city life with cultural neighborhoods and amazing food. It feels both familiar and new at the same time.",
    folder: "travel/malaysia",
    prefix: "photo"
  },
  {
    id: "philippines",
    name: "Philippines",
    region: "Southeast Asia",
    year: "Many years", // home country – feel free to customize
    flag: "philippines.png",
    hero: "My home country.",
    description: "...",
    folder: "travel/philippines",
    prefix: "photo"
  },

  // ---------- EAST ASIA ----------
  {
    id: "hongkong-macau",
    name: "Hong Kong / Macau",
    region: "East Asia",
    year: "2015",
    flag: "hongkong.png",
    hero: "Skyline, harbor views, and a mix of East-meets-West.",
    description:
      "Hong Kong and Macau bring together dense city energy, iconic skylines, and a unique blend of cultures. Night views and cityscapes really stand out here.",
    folder: "travel/hongkong-macau",
    prefix: "photo"
  },
  {
    id: "japan",
    name: "Japan",
    region: "East Asia",
    year: "2023",
    flag: "japan.png",
    hero: "Anime, trains, food, and a culture that balances calm and chaos.",
    description:
      "Japan is one of those places where almost every corner feels intentional — from trains and streets to small shops. It’s a place I’d love to keep revisiting.",
    folder: "travel/japan",
    prefix: "photo"
  },
  {
    id: "south-korea",
    name: "South Korea",
    region: "East Asia",
    year: "2022",
    flag: "southkorea.png",
    hero: "Cafés, night streets, food, and pop culture everywhere.",
    description:
      "South Korea has a very modern vibe — from food streets and cafés to nightlife and culture. It’s fun to just walk and explore.",
    folder: "travel/south-korea",
    prefix: "photo"
  },

  // ---------- MIDDLE EAST ----------
  {
    id: "uae",
    name: "United Arab Emirates",
    region: "Middle East",
    year: "2014",
    flag: "uae.png",
    hero: "Skyscrapers in the desert and massive malls.",
    description:
      "The UAE, especially Dubai, feels like a city built to impress. Tall buildings, huge malls, and desert activities create a very memorable contrast.",
    folder: "travel/uae",
    prefix: "photo"
  },

  // ---------- EUROPE ----------
  {
    id: "italy",
    name: "Italy",
    region: "Europe",
    year: "2019",
    flag: "italy.png",
    hero: "History, architecture, and food — everywhere.",
    description:
      "Italy is full of historic streets, old buildings, and great food. Walking around feels like moving through a movie set, especially in cities like Rome and Florence.",
    folder: "travel/italy",
    prefix: "photo"
  },
  {
    id: "belgium",
    name: "Belgium",
    region: "Europe",
    year: "2019",
    flag: "belgium.png",
    hero: "Calm streets, classic architecture, and chill city vibes.",
    description:
      "Belgium feels cozy and calm, with beautiful older buildings and relaxed city spaces. It’s great for slow walks and quiet exploration.",
    folder: "travel/belgium",
    prefix: "photo"
  },
  {
    id: "france",
    name: "France",
    region: "Europe",
    year: "2019",
    flag: "france.png",
    hero: "Iconic landmarks and streets that feel cinematic.",
    description:
      "France has that iconic European atmosphere — especially in places like Paris. From landmarks to small cafés, it’s a place that’s easy to remember.",
    folder: "travel/france",
    prefix: "photo"
  },
  {
    id: "switzerland",
    name: "Switzerland",
    region: "Europe",
    year: "2019",
    flag: "switzerland.png",
    hero: "Mountains, lakes, and views that don’t look real.",
    description:
      "Switzerland feels like a postcard in real life. Scenic trains, calm lakes, and snow-capped mountains make the whole place feel very peaceful.",
    folder: "travel/switzerland",
    prefix: "photo"
  },
  {
    id: "vatican-city",
    name: "Vatican City",
    region: "Europe",
    year: "2019",
    flag: "vaticancity.png",
    hero: "Small in size, massive in detail and history.",
    description:
      "Vatican City is tiny but packed with details — art, architecture, and history. It’s one of those places where you just look up a lot.",
    folder: "travel/vatican-city",
    prefix: "photo"
  },

  // ---------- NORTH AMERICA ----------
  {
    id: "usa",
    name: "United States",
    region: "North America",
    year: "2020",
    flag: "usa.png",
    hero: "Big roads, big spaces, and very varied cities.",
    description:
      "The US has a lot of variety depending on the state and city — from suburbs and highways to city centers and local spots.",
    folder: "travel/usa",
    prefix: "photo"
  }
];
