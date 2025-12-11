// projects.js
// Renders project cards on projects.html using window.PROJECTS.

document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const projects = window.PROJECTS || [];

  // Containers for academic vs personal
  const academicContainer = document.getElementById("academic-projects");
  const personalContainer = document.getElementById("personal-projects");

  // Helper to create a single project card
  function createProjectCard(project) {
    const card = document.createElement("article");
    card.className = "card project-card";

    // Determine thumbnail: explicit thumbnail, or first image in media.images
    const thumbSrc =
      project.thumbnail ||
      (project.media &&
        Array.isArray(project.media.images) &&
        project.media.images.length > 0 &&
        project.media.images[0].src) ||
      "";

    if (thumbSrc) {
      const thumbWrap = document.createElement("div");
      thumbWrap.className = "project-card-thumb";

      const img = document.createElement("img");
      img.src = thumbSrc;
      img.alt = `${project.title} preview`;
      img.loading = "lazy";

      thumbWrap.appendChild(img);
      card.appendChild(thumbWrap);
    }

    const tagEl = document.createElement("div");
    tagEl.className = "card-tag";
    tagEl.textContent = project.tag;

    const titleEl = document.createElement("h3");
    titleEl.className = "card-title";
    titleEl.textContent = project.title;

    const metaEl = document.createElement("p");
    metaEl.className = "project-meta";
    metaEl.textContent = project.meta;

    const textEl = document.createElement("p");
    textEl.className = "card-text";
    textEl.textContent = project.summary;

    const actionsEl = document.createElement("div");
    actionsEl.className = "project-card-actions";

    const buttonEl = document.createElement("a");
    buttonEl.className = "project-card-button";
    buttonEl.href = `project.html?id=${encodeURIComponent(project.id)}`;
    buttonEl.dataset.projectId = project.id;
    buttonEl.textContent = "View details";

    actionsEl.appendChild(buttonEl);

    card.appendChild(tagEl);
    card.appendChild(titleEl);
    card.appendChild(metaEl);
    card.appendChild(textEl);
    card.appendChild(actionsEl);

    return card;
  }

  // Render cards
  projects.forEach((project) => {
    const targetContainer =
      project.category === "academic" ? academicContainer : personalContainer;
    if (!targetContainer) return;

    const card = createProjectCard(project);
    targetContainer.appendChild(card);
  });
});
