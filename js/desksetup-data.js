// /js/desksetup-data.js

window.DESK_ITEMS = [
  {
    id: "laptop",
    tag: "Core Machine",
    title: "Laptop",
    meta: "My main system.",
    image: {
      src: "/assets/images/desksetup/laptop.png",
      alt: "Laptop",
    },
    specs: [
      { label: "Model", value: "Acer Predator Helios 16" },
      { label: "CPU", value: "Intel i9-13900HX" },
      { label: "GPU", value: "NVIDIA RTX 4070" },
      { label: "RAM", value: "32GB DDR5 (5600MHz)" },
    ],
  },
  {
    id: "primary-monitor",
    tag: "Display",
    title: "Primary Monitor",
    meta: "Main screen.",
    image: {
      src: "/assets/images/desksetup/monitor.png",
      alt: "Primary monitor",
    },
    specs: [
      { label: "Model", value: "ASUS TUF VG249Q1A" },
      { label: "Size", value: "23.8-inch" },
      { label: "Refresh Rate", value: "165HD" },
      { label: "Resolution", value: "FHD (1920x1080)" },
    ],
  },
  {
    id: "keyboard",
    tag: "Input",
    title: "Keyboard",
    meta: "Fast, responsive, and adjustable.",
    image: {
      src: "/assets/images/desksetup/keyboard.png",
      alt: "Keyboard",
    },
    specs: [
      { label: "Model", value: "Wooting 60HE+" },
      { label: "Polling Rate", value: "1000 hz" },
      { label: "Switches", value: "Lekker Hall Effect switches" },
    ],
  },
  {
    id: "mouse",
    tag: "Navigation",
    title: "Mouse",
    meta: "Lightweight and precise.",
    image: {
      src: "/assets/images/desksetup/mouse.png",
      alt: "Mouse",
    },
    specs: [
      { label: "Model", value: "Logitech G Pro X Superlight" },
      { label: "Polling Rate", value: "1000 hz" },
      { label: "Mouse Skates", value: "Corepad Mouse Skatez" },
    ],
  },
  {
    id: "mousepad",
    tag: "Navigation",
    title: "Mousepad",
    meta: "Surface tuned for control and consistency.",
    image: {
      src: "/assets/images/desksetup/mousepad.png",
      alt: "Mousepad",
    },
    specs: [
      { label: "Model", value: "Artisan Zero" },
      { label: "Type", value: "Soft" },
      { label: "Size", value: "XL" },
    ],
  },
  {
    id: "microphone",
    tag: "Audio",
    title: "Microphone",
    meta: "For clear calls and recordings.",
    image: {
      src: "/assets/images/desksetup/microphone.png",
      alt: "Microphone",
    },
    specs: [
      { label: "Model", value: "HyperX Solocast" },
      { label: "Type", value: "Electret condenser microphone" },
      {
        label: "Bit Depth & Sample Rate",
        value: "16-bit / 48 kHz recording",
      },
    ],
  },
  {
    id: "audio-interface",
    tag: "Audio",
    title: "Audio Interface",
    meta: "Central hub for instruments and monitoring.",
    image: {
      src: "/assets/images/desksetup/audiointerface.png",
      alt: "Audio Interface",
    },
    specs: [
      { label: "Model", value: "Focusrite Scarlett 2i2 (3rd Gen)" },
      { label: "Inputs", value: "2 Combo Inputs (XLR / ¼″ TRS)" },
      {
        label: "Outputs",
        value:
          "2 Line Outputs (¼″ TRS, L/R)<br>1 Headphone Output (¼″ TRS, stereo)",
        allowHtml: true,
      },
    ],
  },
  {
    id: "headphones",
    tag: "Audio",
    title: "Headphones",
    meta: "Closed-back for focused listening.",
    image: {
      src: "/assets/images/desksetup/headphones.png",
      alt: "Headphones",
    },
    specs: [
      { label: "Model", value: "Audio-Technica M50X" },
      { label: "Driver", value: "45 mm dynamic drivers" },
      { label: "Frequency Response", value: "15 Hz – 28,000 Hz" },
      { label: "Impendance", value: "38 Ω" },
    ],
  },
  {
    id: "inears",
    tag: "Audio",
    title: "In-ear Monitors",
    meta: "Portable option for practice and travel.",
    image: {
      src: "/assets/images/desksetup/in-ear.png",
      alt: "In-ear Monitors",
    },
    specs: [
      { label: "Model", value: "KZ ZSN Pro X" },
      {
        label: "Driver",
        value: "1× Dynamic Driver (10 mm) + 1× Balanced Armature",
      },
      { label: "Frequency Response", value: "7 Hz – 40,000 Hz" },
      { label: "Impendance", value: "25 Ω" },
    ],
  },
  {
    id: "webcam",
    tag: "Extras",
    title: "Webcam",
    meta: "For meetings, calls, and screen-share demos.",
    image: {
      src: "/assets/images/desksetup/webcam.png",
      alt: "Webcam",
    },
    specs: [
      { label: "Model", value: "Logitech Brio 100" },
      { label: "Resolution", value: "1080p (1920×1080) at 30 FPS" },
      { label: "Field of View", value: "58° FOV" },
    ],
  },
  {
    id: "monitor-light",
    tag: "Extras",
    title: "Monitor Light",
    meta: "Desk lighting for comfort and clarity.",
    image: {
      src: "/assets/images/desksetup/monitorlight.png",
      alt: "Monitor Light Bar",
    },
    specs: [{ label: "Model", value: "Baseus Iwok 3" }],
  },
  {
    id: "controller",
    tag: "Extras",
    title: "Controller",
    meta: "Used for selected games.",
    image: {
        src: "/assets/images/desksetup/controller.png", 
        alt: "Xbox Wireless Controller – Gold Shadow Special Edition",
    },
    specs: [
        { label: "Model", value: "Xbox Wireless Controller – Gold Shadow Special Edition" }
    ],
    },

];
