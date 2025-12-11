// projects-data.js
// Central source of truth for all project data.

window.PROJECTS = [
  {
    id: "drumxroll",
    category: "academic",
    tag: "Thesis · 2024–2025",
    title: "DrumXRoll: Exploring XR Piano Roll in Teaching Drum Improvisation",
    meta: "Unity · C# · XR Interaction Toolkit · Meta Quest SDK",
    github: "https://github.com/NeoMonserrat/DrumXRoll",
    summary:
      "An XR-based interactive drumming system with a 3D piano-roll guide, real-time visual feedback, and immersive improvisation training sequences.",
    thumbnail: "/assets/images/thumbnails/DrumXRoll.png",
    media: {
      images: [
        {
          src: "/assets/media/drumxroll/image1.jpg"
        },
        {
          src: "/assets/media/drumxroll/image2.png"
        },
        {
          src: "/assets/media/drumxroll/image3.png"
        }
      ],
      videos: [
        // { src: "/assets/media/drumxroll/demo1.mp4", title: "Prototype Walkthrough", description: "Short demo showcasing the core interaction loop in DrumXRoll." }
      ],
      audio: [
        // { src: "/assets/media/drumxroll/theme1.mp3", title: "Session Backing Track", description: "Loop used as a backing track during improvisation exercises." }
      ],
      youtube: [
        // { src: "https://youtu.be/XXXXXXXXXXX", title: "DrumXRoll Demo", description: "Overview video showing the XR interface and learning flow." }
      ]
    }
  },
  {
    id: "beneficiary-system",
    category: "academic",
    tag: "Course Project · 2023–2024",
    title: "Beneficiary Record Management for Las Piñas PWD Federation Inc.",
    meta: "HTML · CSS · JavaScript",
    github: "https://github.com/NeoMonserrat/LPPWDFI",
    summary:
      "A responsive web-based record management system with CRUD operations, authentication, and streamlined data handling to improve organizational workflow.",
    thumbnail: "/assets/images/thumbnails/LPPWDFI.png",
    media: {
      images: [
        // { src: "/assets/media/beneficiary-system/dashboard.png", title: "Dashboard View", description: "Main dashboard summarizing key beneficiary statistics." }
      ],
      videos: [],
      audio: [],
      youtube: []
    }
  },
  {
    id: "band-remote-projects",
    category: "personal",
    tag: "Music · Band",
    title: "Band Remote Covers",
    meta: "Song Covers · Improvisation · Mixing",
    summary:
      "A collection of remote band covers and collaborations, combining individually recorded parts into full arrangements and mixes for online release.",
    thumbnail: "/assets/images/thumbnails/RemoteBandCovers.png",
    media: {
      images: [],
      videos: [],
      audio: [],
      youtube: [
        {
          src: "https://www.youtube.com/watch?v=El7Ew_5KKzI",
          title: "Remote Band Cover #1",
          description: "Hindi Tayo Pwede by The Juans"
        },
        {
          src: "https://www.youtube.com/watch?v=wqFDA6GvvbY",
          title: "Remote Band Cover #2",
          description: "You'll Be Safe Here by Rivermaya"
        },
        {
          src: "https://www.youtube.com/watch?v=mqi3S0zsnsI",
          title: "Remote Band Cover #3",
          description: "I Will Survive by Scary Pockets"
        },
        {
          src: "https://www.youtube.com/watch?v=Xzxwj8EuNh8",
          title: "Remote Band Cover #4",
          description: "Sampaguita by Juan Karlos"
        },
        {
          src: "https://www.youtube.com/watch?v=F5JDuyj0oKs",
          title: "Remote Band Cover #5",
          description: "Multo by Cup of Joe"
        }
      ]
    }
  },
  {
    id: "music-production",
    category: "personal",
    tag: "Music Production",
    title: "Music Production for APPPKP",
    meta: "Music Production · Freelance · Short Film",
    summary:
      "Handled end-to-end music production for an APPPKP short film project—composing, arranging, and mixing soundtrack cues that support mood, pacing, and narrative impact, while collaborating with directors and editors for final delivery.",
    thumbnail: "/assets/images/thumbnails/APPPKP.png",
    media: {
      images: [],
      videos: [],
      audio: [
        {
          src: "/assets/media/music-production/APPPPK - Rarampa Ang Bandera.wav",
          title: "Rarampa Ang Bandera (Main Soundtrack)",
          description: "APPPKP Soundtrack 1"
        },
        {
          src: "/assets/media/music-production/APPPPK - Anak Ko.wav",
          title: "Anak Ko",
          description: "APPPKP Soundtrack 2"
        },
        {
          src: "/assets/media/music-production/APPPPK - Mga Suki.wav",
          title: "Mga Suki",
          description: "APPPKP Soundtrack 3"
        }
      ],
      youtube: []
    }
  },
  {
    id: "drum-cover",
    category: "personal",
    tag: "Music · Drumming",
    title: "Drum Covers",
    meta: "Drum Covers · Improvisation · Mixing",
    summary:
      "A growing collection of drum covers highlighting my groove versatility, timing precision, and improvisational style. Each cover is recorded and mixed with attention to tone, clarity, and musical expression.",
    thumbnail: "/assets/images/thumbnails/DrumCovers.png",
    media: {
      images: [],
      videos: [
        {
          src: "/assets/media/drum-cover/Video1.mov",
          title: "Drum Cover 1",
          description: "Into The Unknown - Frozen 2 OST"
        },
        {
          src: "/assets/media/drum-cover/Video2.mp4",
          title: "Drum Cover 2",
          description: "Firepower - Bamboo"
        }
      ],
      audio: [],
      youtube: [
        // { src: "https://youtu.be/XXXXX", title: "Drum Cover – Track Title", description: "Example drum cover showcasing ghost notes and groove variations." }
      ]
    }
  }
];
