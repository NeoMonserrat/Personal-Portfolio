(() => {
  const init = () => {
    const root = document.documentElement;
    const burger = document.querySelector(".topbar-burger");
    const closeBtns = document.querySelectorAll("[data-nav-close]");
    const links = document.querySelectorAll(".mobile-link");

    if (!burger) return false; // header not injected yet

    const openNav = () => {
      root.classList.add("nav-open");
      burger.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    };

    const closeNav = () => {
      root.classList.remove("nav-open");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };

    burger.addEventListener("click", () => {
      root.classList.contains("nav-open") ? closeNav() : openNav();
    });

    closeBtns.forEach((b) => b.addEventListener("click", closeNav));
    links.forEach((a) => a.addEventListener("click", closeNav));

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });

    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 721px)").matches) closeNav();
    });

    return true;
  };

  // keep trying until the header partial exists
  let tries = 0;
  const tick = () => {
    if (init()) return;
    if (++tries < 180) requestAnimationFrame(tick);
  };

  document.addEventListener("DOMContentLoaded", () => requestAnimationFrame(tick));
})();
