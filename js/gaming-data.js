// gaming-data.js
// Single source of truth for gaming genres, games, and IGNs

const GAMING_GENRES = [
  {
    id: "fps-tactical",
    label: "FPS · Tactical Shooters",
    games: [
      {
        id: "valorant",
        title: "Valorant",
        type: "Riot",
        notes: "One of my main competitive shooters.",
        url: "https://playvalorant.com/",
        imageSrc: "/assets/images/games/valorant.png",
        imageAlt: "Valorant",
      },
      {
        id: "cs2",
        title: "Counter-Strike 2",
        type: "Steam",
        notes: "Aim-heavy classic FPS.",
        url: "https://www.counter-strike.net/",
        imageSrc: "/assets/images/games/cs2.ico",
        imageAlt: "Counter-Strike 2",
      },
      {
        id: "overwatch",
        title: "Overwatch",
        type: "Steam",
        notes: "Team-based hero shooter.",
        url: "https://overwatch.blizzard.com/",
        imageSrc: "/assets/images/games/overwatch.ico",
        imageAlt: "Overwatch",
      },
      {
        id: "cod",
        title: "Call of Duty",
        type: "Steam",
        notes: "Fast-paced shooter for casual matches.",
        url: "https://www.callofduty.com/",
        imageSrc: "/assets/images/games/CallOfDuty.ico",
        imageAlt: "Call of Duty",
      },
    ],
  },

  {
    id: "fps-zombie",
    label: "FPS · Zombie Shooters",
    games: [
      {
        id: "left4dead",
        title: "Left 4 Dead",
        type: "Steam",
        notes: "Classic co-op zombie survival.",
        url: "https://store.steampowered.com/app/500/Left_4_Dead/",
        imageSrc: "/assets/images/games/L4D.jpg",
        imageAlt: "Left 4 Dead",
      },
      {
        id: "dying-light-1",
        title: "Dying Light 1",
        type: "Steam",
        notes: "Parkour-focused zombie game.",
        url: "https://dyinglightgame.com/",
        imageSrc: "/assets/images/games/DeadbyDaylight.ico",
        imageAlt: "Dying Light 1",
      },
      {
        id: "back4blood",
        title: "Back 4 Blood",
        type: "Steam",
        notes: "Modern L4D-style co-op FPS.",
        url: "https://back4blood.com/",
        imageSrc: "/assets/images/games/Back4Blood.ico",
        imageAlt: "Back 4 Blood",
      },
    ],
  },

  {
    id: "singleplayer-story",
    label: "Single-Player & Story-Driven",
    games: [
      {
        id: "gta-v",
        title: "GTA V",
        type: "Steam",
        notes: "Open-world classic.",
        url: "https://www.rockstargames.com/V/",
        imageSrc: "/assets/images/games/GTAV.ico",
        imageAlt: "GTA V",
      },
      {
        id: "once-human",
        title: "Once Human",
        type: "Steam",
        notes: "Post-apocalyptic exploration and crafting.",
        url: "https://www.oncehuman.game/",
        imageSrc: "/assets/images/games/OnceHuman.ico",
        imageAlt: "Once Human",
      },
    ],
  },

  {
    id: "sports-racing",
    label: "Sports & Racing",
    games: [
      {
        id: "ea-fc",
        title: "EA FC / FIFA Series",
        type: "Steam",
        notes: "Football games I play casually.",
        url: "https://www.ea.com/games/ea-sports-fc",
        imageSrc: "/assets/images/games/eafc.ico",
        imageAlt: "EA FC / FIFA Series",
      },
      {
        id: "efootball",
        title: "EFootball",
        type: "Steam",
        notes: "Another football title I enjoy.",
        url: "https://www.konami.com/efootball/",
        imageSrc: "/assets/images/games/efootball.jpeg",
        imageAlt: "EFootball",
      },
    ],
  },

  {
    id: "fighting",
    label: "Fighting",
    games: [
      {
        id: "tekken-8",
        title: "Tekken 8",
        type: "Steam",
        notes: "My go-to fighting title.",
        url: "https://tekken.com/",
        imageSrc: "/assets/images/games/Tekken8.ico",
        imageAlt: "Tekken 8",
      },
      {
        id: "naruto-uns4",
        title: "Naruto Ultimate Ninja Storm 4",
        type: "Steam",
        notes: "Anime fighting game I enjoy casually.",
        url: "https://store.steampowered.com/app/349040/NARUTO_SHIPPUDEN_Ultimate_Ninja_STORM_4/",
        imageSrc: "/assets/images/games/NarutoUNS4.ico",
        imageAlt: "Naruto Ultimate Ninja Storm 4",
      },
    ],
  },

  {
    id: "rhythm-music",
    label: "Rhythm & Music",
    games: [
      {
        id: "osu",
        title: "Osu",
        type: "Steam",
        notes: "A rhythm game I play for fun.",
        url: "https://osu.ppy.sh/",
        imageSrc: "/assets/images/games/osu.png",
        imageAlt: "Osu!",
      },
    ],
  },

  {
    id: "moba",
    label: "MOBA",
    games: [
      {
        id: "mobile-legends",
        title: "Mobile Legends",
        type: "Mobile",
        notes: "My main MOBA game.",
        url: "https://mobilelegends.com/",
        imageSrc: "/assets/images/games/ML.jpg",
        imageAlt: "Mobile Legends",
      },
    ],
  },
];

// Right column: IGNs
const GAMING_IGNS = [
  { platform: "Riot Games", name: "CallMeSenpai #1010" },
  { platform: "Steam", name: "CallMeSenpai" },
  { platform: "Epic Games", name: "Neo_Messi" },
  { platform: "Moonton", name: "." },
];
