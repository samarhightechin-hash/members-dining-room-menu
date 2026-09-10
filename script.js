document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const loader = document.getElementById("loader");
  const site = document.getElementById("site");

  // Intro animation
  setTimeout(() => {
    if (intro) {
      intro.classList.add("hide");
    }

    // Pizza loading animation
    if (loader) {
      loader.classList.add("show");
    }

    setTimeout(() => {
      if (loader) {
        loader.classList.remove("show");
      }

      if (site) {
        site.classList.add("ready");
      }
    }, 900);

  }, 1700);

  // Smooth navigation
  document.querySelectorAll(".nav a, .explore").forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Add a subtle reveal effect to menu items
  const dishes = document.querySelectorAll(".dish");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  dishes.forEach(dish => observer.observe(dish));
});
