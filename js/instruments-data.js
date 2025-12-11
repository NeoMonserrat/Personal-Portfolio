// /js/instruments-data.js

window.instrumentsData = [
  {
    id: "acoustic-kit",
    tag: "Drums",
    title: "Acoustic Kit",
    meta: "My main drum kit for live playing and natural sound.",
    image: {
      src: "/assets/images/instruments/drums.png",
      alt: "Acoustic Drums",
    },
    // First spec = what appears on the card
    specs: [
      { label: "Model", value: "Pearl Export EXX" },
    ],
    // All specs = what appears in the modal
    detailSpecs: [
      { label: "Model", value: "Pearl Export" },
      { label: "Cymbals", value: "Zildjian ZBT" },
      { label: "Pedal", value: "Pearl P930 Demonator" },
    ],
    description:
      "This acoustic kit is what I use for live playing and natural drum tone—great for dynamic practice and performances.",
  },

  {
    id: "edrums",
    tag: "Drums",
    title: "Electronic Drum Kit",
    meta: "Quiet practice and MIDI recording for XR/improv.",
    image: {
      src: "/assets/images/instruments/edrums.png",
      alt: "Electronic Drum Kit",
    },
    specs: [
      { label: "Model", value: "Alesis Nitro Mesh" },
    ],
    detailSpecs: [
      { label: "Model", value: "Alesis Nitro Mesh" },
    ],
    description:
      "My go-to kit for silent practice and experiments with XR drum improvisation, MIDI recording, and prototyping ideas.",
  },

  {
    id: "keyboard",
    tag: "Keys",
    title: "Keyboard / Piano",
    meta: "Used for composing, chord practice, and songwriting.",
    image: {
      src: "/assets/images/instruments/piano.png",
      alt: "Keyboard",
    },
    specs: [
      { label: "Model", value: "Casio WK-110" },
    ],
    detailSpecs: [
      { label: "Model", value: "Casio WK-110" },
      { label: "Keys", value: "76 keys" },
    ],
    description:
      "This keyboard covers everything from basic practice to sketching out chord progressions, melodies, and song ideas.",
  },

  {
    id: "guitar",
    tag: "Guitar",
    title: "Electric Guitar",
    meta: "My main instrument for riffs, practice, and recording.",
    image: {
      src: "/assets/images/instruments/guitar.png",
      alt: "Electric Guitar",
    },
    specs: [
      { label: "Brand", value: "Yamaha Pacifica 012" },
    ],
    detailSpecs: [
      { label: "Brand", value: "Yamaha Pacifica 012" },
      { label: "Pickups", value: "Single Coil / Humbucker" },
      { label: "Strings", value: "Elixir 10–46 Nanoweb Coating" },
    ],
    description:
      "My main guitar for riffs and practice—comfortable to play, versatile pickups, and paired with coated strings for feel and durability.",
  },

  {
    id: "amp",
    tag: "Amplifier",
    title: "Guitar Amp",
    meta: "My amplifier for tone shaping and live play.",
    image: {
      src: "/assets/images/instruments/amplifier.png",
      alt: "Guitar Amplifier",
    },
    specs: [
      { label: "Brand", value: "Laney AH-FREESTYLE" },
    ],
    detailSpecs: [
      { label: "Brand", value: "Laney AH-FREESTYLE" },
      { label: "Power", value: "5W" },
    ],
    description:
      "A portable amp that I use for practice, small jams, and dialing in tones that match what I hear in my head.",
  },
];
