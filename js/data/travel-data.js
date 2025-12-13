// travel-data.js
// Single source of truth for all travel destinations.
//
// NOTE: Photos are now CDN-powered (Cloudinary).
// Flags are local and live under: assets/icons/flags/

(() => {
  const CLOUD_NAME = "dcnwpgvj5";
  const CDN_IMAGE_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

  const cdnImg = (publicId, w = 1600) =>
    `${CDN_IMAGE_BASE}/q_auto,f_auto,c_limit,w_${w}/${publicId}`;

  const travelData = [
    // ---------- SOUTHEAST ASIA ----------
    {
      id: "singapore",
      name: "Singapore",
      region: "Southeast Asia",
      year: "2018",
      flag: "singapore.png",
      hero: "City views, night lights, and clean streets that feel futuristic.",
      description:
        "A compact but dense city with stunning skylines, efficient public transport, and a mix of cultures. From Marina Bay to hawker centers, Singapore is one of my favorite examples of a city done right.",
      folder: "travel/singapore",
      prefix: "photo",
      images: [
        cdnImg("travel_singapore_1"),
        cdnImg("travel_singapore_2"),
        cdnImg("travel_singapore_3")
      ]
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
      prefix: "photo",
      images: [
        cdnImg("travel_thailand_1"),
        cdnImg("travel_thailand_2"),
        cdnImg("travel_thailand_3")
      ]
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
      prefix: "photo",
      images: [
        cdnImg("travel_indonesia_1"),
        cdnImg("travel_indonesia_2"),
        cdnImg("travel_indonesia_3")
      ]
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
      prefix: "photo",
      images: [
        cdnImg("travel_malaysia_1"),
        cdnImg("travel_malaysia_2"),
        cdnImg("travel_malaysia_3")
      ]
    },
    {
      id: "philippines",
      name: "Philippines",
      region: "Southeast Asia",
      year: "Many years",
      flag: "philippines.png",
      hero: "My home country.",
      description: "...",
      folder: "travel/philippines",
      prefix: "photo",
      images: [
        cdnImg("travel_philippines_1"),
        cdnImg("travel_philippines_2"),
        cdnImg("travel_philippines_3")
      ]
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
      prefix: "photo",
      images: [
        cdnImg("travel_hongkong_macau_1"),
        cdnImg("travel_hongkong_macau_2"),
        cdnImg("travel_hongkong_macau_3")
      ]
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
      prefix: "photo",
      images: [
        cdnImg("travel_japan_1"),
        cdnImg("travel_japan_2"),
        cdnImg("travel_japan_3")
      ]
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
      prefix: "photo",
      images: [
        cdnImg("travel_southkorea_1"),
        cdnImg("travel_southkorea_2"),
        cdnImg("travel_southkorea_3")
      ]
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
      prefix: "photo",
      images: [
        cdnImg("travel_uae_1"),
        cdnImg("travel_uae_2"),
        cdnImg("travel_uae_3")
      ]
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
      prefix: "photo",
      images: [
        cdnImg("travel_usa_1"),
        cdnImg("travel_usa_2"),
        cdnImg("travel_usa_3")
      ]
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
      prefix: "photo",
      images: [
        cdnImg("travel_italy_1"),
        cdnImg("travel_italy_2"),
        cdnImg("travel_italy_3")
      ]
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
      prefix: "photo",
      images: [
        cdnImg("travel_belgium_1"),
        cdnImg("travel_belgium_2"),
        cdnImg("travel_belgium_3")
      ]
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
      prefix: "photo",
      images: [
        cdnImg("travel_france_1"),
        cdnImg("travel_france_2"),
        cdnImg("travel_france_3")
      ]
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
      prefix: "photo",
      images: [
        cdnImg("travel_switzerland_1"),
        cdnImg("travel_switzerland_2"),
        cdnImg("travel_switzerland_3")
      ]
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
      prefix: "photo",
      images: [
        cdnImg("travel_vaticancity_1"),
        cdnImg("travel_vaticancity_2"),
        cdnImg("travel_vaticancity_3")
      ]
    }
  ];

  window.travelData = travelData;
})();
