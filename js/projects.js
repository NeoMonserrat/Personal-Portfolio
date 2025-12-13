// js/projects.js
// Renders project cards on projects.html

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const projects = window.PROJECTS || [];

  const academic = document.getElementById("academic-projects");
  const personal = document.getElementById("personal-projects");

  function createCard(project) {
    const card = document.createElement("article");
    card.className = "card project-card";

    const thumb =
      project.thumbnail ||
      project.media?.images?.[0]?.src ||
      "";

    if (thumb) {
      const wrap = document.createElement("div");
      wrap.className = "project-card-thumb";

      const img = document.createElement("img");
      img.src = thumb;
      img.alt = `${project.title} preview`;
      img.loading = "lazy";

      wrap.appendChild(img);
      card.appendChild(wrap);
    }

    card.innerHTML += `
      <div class="card-tag">${project.tag || ""}</div>
      <h3 class="card-title">${project.title || ""}</h3>
      <p class="project-meta">${project.meta || ""}</p>
      <p class="card-text">${project.summary || ""}</p>
      <div class="project-card-actions">
        <a class="project-card-button" href="project.html?id=${encodeURIComponent(project.id)}">
          View details
        </a>
      </div>
    `;

    return card;
  }

  projects.forEach((project) => {
    const container =
      project.category === "academic" ? academic : personal;
    if (container) container.appendChild(createCard(project));
  });
});
