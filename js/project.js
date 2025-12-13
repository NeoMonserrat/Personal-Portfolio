// js/project.js
// Renders single project page (?id=)
// Supports images, captions, lazy loading
// Hides gallery if empty

document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");

  const project = (window.PROJECTS || []).find(
    (p) => p.id === projectId
  );

  if (!project) {
    document.getElementById("project-title").textContent =
      "Project not found";
    return;
  }

  /* ==============================
     Header content
  ============================== */
  document.getElementById("project-title").textContent =
    project.title || "";

  document.getElementById("project-tag").textContent =
    project.tag || "";

  document.getElementById("project-meta").textContent =
    project.meta || "";

  document.getElementById("project-summary").textContent =
    project.summary || "";

  // GitHub pill
  const linksContainer = document.getElementById("project-links");
  linksContainer.innerHTML = "";

  if (project.github) {
    const link = document.createElement("a");
    link.href = project.github;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.className = "project-link-pill";
    link.innerHTML = `<span>GitHub</span><span class="arrow">↗</span>`;
    linksContainer.appendChild(link);
  }

  /* ==============================
     Gallery
  ============================== */
  const gallery = document.getElementById("project-gallery");
  const galleryWrapper = document.getElementById("gallery-wrapper");

  gallery.innerHTML = "";

  const media = project.media || {};
  const hasMedia = ["images", "videos", "audio", "youtube"].some(
    (key) => Array.isArray(media[key]) && media[key].length
  );

  if (!hasMedia) {
    galleryWrapper.style.display = "none";
    return;
  }

  function addCaption(container, media) {
    if (media.title) {
      const title = document.createElement("p");
      title.className = "media-title";
      title.textContent = media.title;
      container.appendChild(title);
    }
    if (media.description) {
      const desc = document.createElement("p");
      desc.className = "media-description";
      desc.textContent = media.description;
      container.appendChild(desc);
    }
  }

  /* ---------- Images ---------- */
  if (media.images?.length) {
    media.images.forEach((m) => {
      const item = document.createElement("div");
      item.className = "media-item";

      const img = document.createElement("img");
      img.src = m.src;
      img.alt = m.title || project.title;
      img.loading = "lazy";
      img.decoding = "async";

      item.appendChild(img);
      addCaption(item, m);

      gallery.appendChild(item);
    });
  }

  /* ---------- Videos ---------- */
  if (media.videos?.length) {
    media.videos.forEach((m) => {
      const item = document.createElement("div");
      item.className = "media-item";

      const video = document.createElement("video");
      video.src = m.src;
      video.controls = true;
      video.preload = "metadata";

      item.appendChild(video);
      addCaption(item, m);

      gallery.appendChild(item);
    });
  }

  /* ---------- Audio ---------- */
  if (media.audio?.length) {
    media.audio.forEach((m) => {
      const item = document.createElement("div");
      item.className = "media-item";

      const audio = document.createElement("audio");
      audio.src = m.src;
      audio.controls = true;

      item.appendChild(audio);
      addCaption(item, m);

      gallery.appendChild(item);
    });
  }

  /* ---------- YouTube ---------- */
  if (media.youtube?.length) {
    media.youtube.forEach((m) => {
      const item = document.createElement("div");
      item.className = "media-item";

      const wrap = document.createElement("div");
      wrap.className = "media-embed";

      let embedUrl = m.src
        .replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/")
        .replace("https://youtu.be/", "https://www.youtube.com/embed/");

      const iframe = document.createElement("iframe");
      iframe.src = embedUrl;
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;

      wrap.appendChild(iframe);
      item.appendChild(wrap);
      addCaption(item, m);

      gallery.appendChild(item);
    });
  }
});
