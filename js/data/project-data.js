// js/data/project-data.js
// Central source of truth for all project data.

(() => {
  const CLOUD_NAME = "dcnwpgvj5";

  const CDN_IMAGE_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
  const CDN_VIDEO_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload`;
  const CDN_RAW_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/raw/upload`;

  const cdnImg = (publicId, w = 1400) =>
    `${CDN_IMAGE_BASE}/q_auto,f_auto,c_limit,w_${w}/${publicId}`;

  const cdnVid = (publicId) =>
    `${CDN_VIDEO_BASE}/q_auto,f_auto/${publicId}`;

  const cdnRaw = (publicId) =>
    `${CDN_RAW_BASE}/${publicId}`;

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
            src: cdnImg("image1", 1600),
            title: "XR Guidance Interface",
            description:
              "3D piano-roll visual guide for timing and drum target alignment."
          },
          {
            src: cdnImg("image2", 1600),
            title: "Lesson Sequence View",
            description:
              "Structured learning flow with real-time feedback cues."
          },
          {
            src: cdnImg("image3", 1600),
            title: "Training Mode Snapshot",
            description:
              "Immersive practice environment on Meta Quest with interactive UI."
          }
        ],
        videos: [],
        audio: [],
        youtube: []
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
        images: [],
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
            src: cdnVid("APPPPK_-_Rarampa_Ang_Bandera"),
            title: "Rarampa Ang Bandera (Main Soundtrack)",
            description: "APPPKP Soundtrack 1"
          },
          {
            src: cdnVid("APPPPK_-_Anak_Ko"),
            title: "Anak Ko",
            description: "APPPKP Soundtrack 2"
          },
          {
            src: cdnVid("APPPPK_-_Mga_Suki"),
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
        videos: [],
        audio: [],
        youtube: [
          {
            src: "https://www.youtube.com/watch?v=L8tT8VuYJKI",
            title: "Drum Cover 1",
            description: "Into The Unknown - Frozen 2 OST"
          },
          {
            src: "https://www.youtube.com/watch?v=JCPj4mS5XQI",
            title: "Drum Cover 2",
            description: "Firepower - Bamboo"
          }
        ]
      }
    }
  ];
})();
