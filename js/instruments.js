<<<<<<< HEAD
// /js/instruments.js

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("instrument-grid");
  const data = window.instrumentsData || [];

  if (!grid || !Array.isArray(data)) return;

  // --------- Render cards ----------
  grid.innerHTML = "";

  data.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card desk-card";
    card.dataset.instrumentId = item.id;

    const firstSpec =
      item.specs && item.specs.length > 0 ? item.specs[0] : null;

    card.innerHTML = `
      <div class="card-tag">${item.tag}</div>
      <h2 class="desk-card-title">${item.title}</h2>
      <p class="desk-card-meta">${item.meta}</p>

      <ul class="desk-spec-list">
        ${
          firstSpec
            ? `<li>
                 <span class="desk-spec-label">${firstSpec.label}</span>
                 <span class="desk-spec-value">${firstSpec.value}</span>
               </li>`
            : ""
        }
      </ul>

      <div class="desk-card-photo">
        <img src="${item.image.src}" alt="${item.image.alt}" />
      </div>
    `;

    card.addEventListener("click", () => openInstrumentModal(item));
    grid.appendChild(card);
  });

  // --------- Modal logic ----------
  const modal = document.getElementById("instrument-modal");
  const closeBtn = modal.querySelector(".instrument-modal-close");
  // const modalTagEl = modal.querySelector("#instrument-modal-tag");
  const modalTitleEl = modal.querySelector("#instrument-modal-title");
  const modalMetaEl = modal.querySelector("#instrument-modal-meta");
  const modalImgEl = modal.querySelector("#instrument-modal-image");
  const modalDescEl = modal.querySelector("#instrument-modal-description");
  const modalSpecsEl = modal.querySelector("#instrument-modal-specs");

  function openInstrumentModal(item) {
    // Fill content
    // modalTagEl.textContent = item.tag || "";
    modalTitleEl.textContent = item.title || "";
    modalMetaEl.textContent = item.meta || "";

    if (item.image) {
      modalImgEl.src = item.image.src;
      modalImgEl.alt = item.image.alt || item.title || "";
    }

    modalDescEl.textContent = item.description || "";

    // Specs in modal (use detailSpecs if provided, else specs)
    const specs =
      (item.detailSpecs && item.detailSpecs.length > 0
        ? item.detailSpecs
        : item.specs) || [];

    modalSpecsEl.innerHTML = "";
    specs.forEach((spec) => {
      const li = document.createElement("li");
      li.className = "modal-spec-item";
      li.innerHTML = `
        <span class="modal-spec-label">${spec.label}</span>
        <span class="modal-spec-bar"></span>
        <span class="modal-spec-value">${spec.value}</span>
      `;
      modalSpecsEl.appendChild(li);
    });

    // Show modal
    modal.classList.add("is-visible");
    document.body.classList.add("no-scroll");
  }

  function closeInstrumentModal() {
    modal.classList.remove("is-visible");
    document.body.classList.remove("no-scroll");
  }

  // Close button
  closeBtn.addEventListener("click", closeInstrumentModal);

  // Click outside dialog to close
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeInstrumentModal();
    }
  });

  // Escape key to close
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-visible")) {
      closeInstrumentModal();
    }
  });
});
=======
// /js/instruments.js

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("instrument-grid");
  const data = window.instrumentsData || [];

  if (!grid || !Array.isArray(data)) return;

  // --------- Render cards ----------
  grid.innerHTML = "";

  data.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card desk-card";
    card.dataset.instrumentId = item.id;

    const firstSpec =
      item.specs && item.specs.length > 0 ? item.specs[0] : null;

    card.innerHTML = `
      <div class="card-tag">${item.tag}</div>
      <h2 class="desk-card-title">${item.title}</h2>
      <p class="desk-card-meta">${item.meta}</p>

      <ul class="desk-spec-list">
        ${
          firstSpec
            ? `<li>
                 <span class="desk-spec-label">${firstSpec.label}</span>
                 <span class="desk-spec-value">${firstSpec.value}</span>
               </li>`
            : ""
        }
      </ul>

      <div class="desk-card-photo">
        <img src="${item.image.src}" alt="${item.image.alt}" />
      </div>
    `;

    card.addEventListener("click", () => openInstrumentModal(item));
    grid.appendChild(card);
  });

  // --------- Modal logic ----------
  const modal = document.getElementById("instrument-modal");
  const closeBtn = modal.querySelector(".instrument-modal-close");
  // const modalTagEl = modal.querySelector("#instrument-modal-tag");
  const modalTitleEl = modal.querySelector("#instrument-modal-title");
  const modalMetaEl = modal.querySelector("#instrument-modal-meta");
  const modalImgEl = modal.querySelector("#instrument-modal-image");
  const modalDescEl = modal.querySelector("#instrument-modal-description");
  const modalSpecsEl = modal.querySelector("#instrument-modal-specs");

  function openInstrumentModal(item) {
    // Fill content
    // modalTagEl.textContent = item.tag || "";
    modalTitleEl.textContent = item.title || "";
    modalMetaEl.textContent = item.meta || "";

    if (item.image) {
      modalImgEl.src = item.image.src;
      modalImgEl.alt = item.image.alt || item.title || "";
    }

    modalDescEl.textContent = item.description || "";

    // Specs in modal (use detailSpecs if provided, else specs)
    const specs =
      (item.detailSpecs && item.detailSpecs.length > 0
        ? item.detailSpecs
        : item.specs) || [];

    modalSpecsEl.innerHTML = "";
    specs.forEach((spec) => {
      const li = document.createElement("li");
      li.className = "modal-spec-item";
      li.innerHTML = `
        <span class="modal-spec-label">${spec.label}</span>
        <span class="modal-spec-bar"></span>
        <span class="modal-spec-value">${spec.value}</span>
      `;
      modalSpecsEl.appendChild(li);
    });

    // Show modal
    modal.classList.add("is-visible");
    document.body.classList.add("no-scroll");
  }

  function closeInstrumentModal() {
    modal.classList.remove("is-visible");
    document.body.classList.remove("no-scroll");
  }

  // Close button
  closeBtn.addEventListener("click", closeInstrumentModal);

  // Click outside dialog to close
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeInstrumentModal();
    }
  });

  // Escape key to close
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-visible")) {
      closeInstrumentModal();
    }
  });
});
>>>>>>> e55c8a46eba6b5dd05ce18a1c74a21e1d1a222a4
