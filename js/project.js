document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");

  const project = (window.PROJECTS || []).find(p => p.id === projectId);

  if (!project) {
    document.getElementById("project-title").textContent = "Project not found";
    return;
  }

  // Fill header
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-tag").textContent = project.tag || "";
  document.getElementById("project-meta").textContent = project.meta || "";
  document.getElementById("project-summary").textContent = project.summary || "";

  // ⭐ Insert GitHub pill if available
  const linksContainer = document.getElementById("project-links");
  linksContainer.innerHTML = "";

  if (project.github) {
    const pill = document.createElement("a");
    pill.href = project.github;
    pill.target = "_blank";
    pill.className = "project-link-pill";
    pill.innerHTML = `
      <span>GitHub</span>
      <span class="arrow">↗</span>
    `;
    linksContainer.appendChild(pill);
  }

  /* ==========================================
     LOAD MEDIA (IMAGES, VIDEOS, AUDIO, YOUTUBE)
     ========================================== */

  const gallery = document.getElementById("project-gallery");
  gallery.innerHTML = "";

  // Load IMAGES
  if (project.media?.images?.length) {
    project.media.images.forEach(m => {
      const item = document.createElement("div");
      item.className = "media-item";

      const img = document.createElement("img");
      img.src = m.src;
      img.alt = m.title || project.title;

      item.appendChild(img);
      gallery.appendChild(item);
    });
  }

  // VIDEOS — now with title + description
  if (project.media?.videos?.length) {
    project.media.videos.forEach(m => {
      const item = document.createElement("div");
      item.className = "media-item";

      const video = document.createElement("video");
      video.src = m.src;
      video.controls = true;

      item.appendChild(video);

      if (m.title) {
        const title = document.createElement("p");
        title.className = "media-title";
        title.textContent = m.title;
        item.appendChild(title);
      }

      if (m.description) {
        const desc = document.createElement("p");
        desc.className = "media-description";
        desc.textContent = m.description;
        item.appendChild(desc);
      }

      gallery.appendChild(item);
    });
  }

  // Load AUDIO
  if (project.media?.audio?.length) {
    project.media.audio.forEach(m => {
      const item = document.createElement("div");
      item.className = "media-item";

      const audio = document.createElement("audio");
      audio.src = m.src;
      audio.controls = true;

      const title = document.createElement("p");
      title.className = "media-title";
      title.textContent = m.title || "Audio Track";

      const desc = document.createElement("p");
      desc.className = "media-description";
      desc.textContent = m.description || "";

      item.appendChild(audio);
      item.appendChild(title);
      item.appendChild(desc);

      gallery.appendChild(item);
    });
  }

  // Load YOUTUBE embeds
if (project.media?.youtube?.length) {
  project.media.youtube.forEach(m => {
    const item = document.createElement("div");
    item.className = "media-item";

    const wrap = document.createElement("div");
    wrap.className = "media-embed";

    const iframe = document.createElement("iframe");

    // 🔧 Convert watch / youtu.be URLs to embed URLs
    let embedUrl = m.src;
    embedUrl = embedUrl.replace(
      "https://www.youtube.com/watch?v=",
      "https://www.youtube.com/embed/"
    );
    embedUrl = embedUrl.replace(
      "https://youtu.be/",
      "https://www.youtube.com/embed/"
    );

    iframe.src = embedUrl;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    wrap.appendChild(iframe);
    item.appendChild(wrap);

    if (m.title) {
      const title = document.createElement("p");
      title.className = "media-title";
      title.textContent = m.title;
      item.appendChild(title);
    }

    if (m.description) {
      const desc = document.createElement("p");
      desc.className = "media-description";
      desc.textContent = m.description;
      item.appendChild(desc);
    }

    gallery.appendChild(item);
  });
}

});
