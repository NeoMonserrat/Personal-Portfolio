// travel.js

document.addEventListener("DOMContentLoaded", () => {
  if (!Array.isArray(travelData)) {
    console.warn("travelData is missing or not an array.");
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get("country");

  // Find entry or fallback to first
  let entry = travelData.find((t) => t.id === requestedId);
  if (!entry && travelData.length > 0) {
    entry = travelData[0];
  }
  if (!entry) return;

  // Update <title>
  document.title = `Travel – ${entry.name} – Neo Monserrat`;

  // Grab elements
  const pageTitle = document.getElementById("travel-page-title");
  const subtitle = document.getElementById("travel-page-subtitle");
  const regionPill = document.getElementById("travel-region-pill");
  const descEl = document.getElementById("travel-destination-description");
  const bannerEl = document.getElementById("travel-banner");
  const carouselEl = document.getElementById("travel-carousel");
  const tripYearEl = document.getElementById("travel-year"); // NEW
  const footerYearEl = document.getElementById("year");

  // Header text
  if (pageTitle) pageTitle.textContent = entry.name;
  if (subtitle) {
    subtitle.textContent =
      entry.hero ||
      `Highlights and memories from my trip to ${entry.name}.`;
  }
  if (regionPill) {
    regionPill.textContent = entry.region || "Travel";
  }

  // Trip year meta
  if (tripYearEl) {
    if (entry.year) {
      tripYearEl.textContent = `Year visited: ${entry.year}`;
    } else {
      tripYearEl.style.display = "none";
    }
  }

  // Summary text
  if (descEl) {
    descEl.textContent = entry.description || "";
  }

  // Banner (flag)
  if (bannerEl && entry.flag) {
    bannerEl.style.backgroundImage = `url('/assets/images/flags/${entry.flag}')`;
  }

  // Gallery dataset for carousel
  if (carouselEl) {
    const folder = entry.folder || `travel/${entry.id}`;
    const prefix = entry.prefix || "photo";
    carouselEl.dataset.folder = folder;
    carouselEl.dataset.prefix = prefix;
  }

  // Footer year (current year)
  if (footerYearEl) {
    footerYearEl.textContent = new Date().getFullYear();
  }
});
