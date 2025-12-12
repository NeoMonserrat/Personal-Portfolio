// about.js

let lightboxApi = null;

document.addEventListener("DOMContentLoaded", () => {
  // Update footer year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Setup lightbox overlay for images (if markup exists)
  lightboxApi = setupLightbox();

  // Initialize all carousels on the page
  document.querySelectorAll(".carousel").forEach((carousel) => {
    initCarousel(carousel);
  });
});

/* --------------------------------------------------
   LIGHTBOX (for images only)
-------------------------------------------------- */

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const imgEl = document.getElementById("lightbox-img");

  // If the page has no lightbox markup, just skip
  if (!lightbox || !imgEl) return null;

  const closeBtn = lightbox.querySelector(".lightbox-close");

  function open(src, altText = "") {
    imgEl.src = src;
    imgEl.alt = altText;
    lightbox.classList.remove("hidden");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function close() {
    imgEl.src = "";
    imgEl.alt = "";
    lightbox.classList.add("hidden");
    lightbox.setAttribute("aria-hidden", "true");
  }

  // Close on background click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      close();
    }
  });

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener("click", close);
  }

  // Close with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.classList.contains("hidden")) {
      close();
    }
  });

  return { open, close };
}

/* --------------------------------------------------
   CAROUSEL INITIALIZATION
-------------------------------------------------- */

/**
 * Initialize one carousel.
 *
 * Expected attributes:
 *   data-folder="music"  (optional for local media)
 *   data-prefix="music"  (optional, default "photo")
 *   data-youtube="idOrUrl1, idOrUrl2, ..." (optional)
 *
 * Local media files are probed as:
 *   /assets/images/{folder}/{prefix}{index}.{ext}
 * where ext ∈ ["jpg","jpeg","png","mp4","mov","webm"]
 */
async function initCarousel(carousel) {
  const folder = carousel.dataset.folder || "";
  const prefix = carousel.dataset.prefix || "photo";
  const youtubeAttr = carousel.dataset.youtube || "";

  // Track container
  const track = document.createElement("div");
  track.className = "carousel-track";
  carousel.appendChild(track);

  /* ---------- 1) Local images + videos ---------- */

  if (folder) {
    let index = 1;
    const exts = ["jpg", "jpeg", "png", "mp4", "mov", "webm"];

    while (true) {
      let foundForIndex = false;

      for (const ext of exts) {
        const url = `/assets/images/${folder}/${prefix}${index}.${ext}`;

        let exists = false;
        try {
          const res = await fetch(url, { method: "HEAD" });
          exists = res.ok;
        } catch {
          exists = false;
        }

        if (!exists) continue;

        foundForIndex = true;

        // Decide whether to create an image or video slide
        if (["mp4", "mov", "webm"].includes(ext)) {
          const video = document.createElement("video");
          video.src = url;
          video.className = "carousel-video";
          video.controls = true;

          // Optional: pause other videos when one starts
          video.addEventListener("play", () => {
            document
              .querySelectorAll(".carousel-video")
              .forEach((v) => v !== video && v.pause());
          });

          track.appendChild(video);
        } else {
          const img = new Image();
          img.src = url;
          img.alt = `${folder} ${index}`;
          img.classList.add("carousel-img");

          // Click to open in lightbox (if available)
          if (lightboxApi && typeof lightboxApi.open === "function") {
            img.addEventListener("click", () => {
              lightboxApi.open(img.src, img.alt);
            });
          }

          track.appendChild(img);
        }

        // once we successfully used one ext for this index, move to next index
        break;
      }

      if (!foundForIndex) break;
      index++;
    }
  }

  /* ---------- 2) YouTube slides (optional) ---------- */

  if (youtubeAttr.trim() !== "") {
    const entries = youtubeAttr
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    entries.forEach((raw) => {
      const slide = document.createElement("div");
      slide.className = "carousel-embed";

      const iframe = document.createElement("iframe");

      let embedUrl = raw;
      // Accept ID-only, watch URLs, or youtu.be URLs
      if (!embedUrl.startsWith("http")) {
        embedUrl = `https://www.youtube.com/embed/${embedUrl}`;
      } else if (embedUrl.includes("youtube.com/watch")) {
        const id = new URL(embedUrl).searchParams.get("v");
        if (id) embedUrl = `https://www.youtube.com/embed/${id}`;
      } else if (embedUrl.includes("youtu.be/")) {
        const id = embedUrl.split("youtu.be/")[1].split(/[?&]/)[0];
        embedUrl = `https://www.youtube.com/embed/${id}`;
      }

      iframe.src = embedUrl;
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;

      slide.appendChild(iframe);
      track.appendChild(slide);
    });
  }

  /* ---------- 3) If nothing was loaded, bail ---------- */

  if (track.children.length === 0) {
    carousel.classList.add("carousel-empty");
    return;
  }

  /* ---------- 4) Navigation buttons & sliding ---------- */

  const prev = document.createElement("button");
  prev.className = "carousel-btn prev";
  prev.textContent = "‹";
  prev.setAttribute("aria-label", "Previous media");

  const next = document.createElement("button");
  next.className = "carousel-btn next";
  next.textContent = "›";
  next.setAttribute("aria-label", "Next media");

  carousel.appendChild(prev);
  carousel.appendChild(next);

  // 3-items-at-a-time logic
  const visibleCount = 3;
  const totalSlides = track.children.length;
  const maxGroupIndex = Math.max(Math.ceil(totalSlides / visibleCount) - 1, 0);
  let groupIndex = 0;

  function updateSlide() {
    const offsetPercent = groupIndex * 100;
    track.style.transform = `translateX(-${offsetPercent}%)`;
  }

  next.addEventListener("click", () => {
    groupIndex = groupIndex >= maxGroupIndex ? 0 : groupIndex + 1;
    updateSlide();
  });

  prev.addEventListener("click", () => {
    groupIndex = groupIndex <= 0 ? maxGroupIndex : groupIndex - 1;
    updateSlide();
  });
}

/* --------------------------------------------------
   TRAVEL REGIONS – Apple-style List
-------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("travel-regions-root");

  // Only run on pages that actually have this container
  if (!root) return;

  if (typeof travelData === "undefined" || !Array.isArray(travelData)) {
    console.warn("travelData is missing or not an array; cannot render travel regions.");
    return;
  }

  // Group destinations by region
  const regionsMap = new Map();
  travelData.forEach((item) => {
    const regionName = item.region || "Other";
    if (!regionsMap.has(regionName)) {
      regionsMap.set(regionName, []);
    }
    regionsMap.get(regionName).push(item);
  });

  // Sort regions alphabetically for consistent layout
  const sortedRegions = Array.from(regionsMap.keys()).sort();

  sortedRegions.forEach((regionName) => {
    const destinations = regionsMap.get(regionName);
    if (!destinations || destinations.length === 0) return;

    // Region container
    const groupEl = document.createElement("div");
    groupEl.className = "travel-region-group";

    const titleEl = document.createElement("h4");
    titleEl.className = "travel-region-title";
    titleEl.textContent = regionName;

    const listEl = document.createElement("div");
    listEl.className = "travel-country-select";

    destinations.forEach((dest) => {
      const row = document.createElement("a");
      row.className = "travel-select-row";
      row.href = `/public/travel.html?country=${encodeURIComponent(dest.id)}`;

      // left side: flag icon + name
      const left = document.createElement("div");
      left.className = "travel-select-left";

      const flag = document.createElement("div");
      flag.className = "travel-flag-icon";
      if (dest.flag) {
        flag.style.setProperty(
          "--flag",
          `url('/assets/images/flags/${dest.flag}')`
        );
      }

      const nameSpan = document.createElement("span");
      nameSpan.className = "travel-name";
      nameSpan.textContent = dest.name;

      left.appendChild(flag);
      left.appendChild(nameSpan);

      // right side: chevron
      const chevron = document.createElement("span");
      chevron.className = "travel-chevron";
      chevron.textContent = "›";

      row.appendChild(left);
      row.appendChild(chevron);

      listEl.appendChild(row);
    });

    groupEl.appendChild(titleEl);
    groupEl.appendChild(listEl);
    root.appendChild(groupEl);
  });
});
