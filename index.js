   // Navbar scroll
      const navbar = document.getElementById("navbar");
      window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 30);
      });

      // Menú móvil
      function toggleMenu() {
        document.getElementById("navLinks").classList.toggle("open");
      }
      document.querySelectorAll(".nav-links a").forEach((a) => {
        a.addEventListener("click", () => {
          document.getElementById("navLinks").classList.remove("open");
        });
      });

      // Animaciones fade-up al hacer scroll
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              setTimeout(() => entry.target.classList.add("visible"), i * 80);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );

      document
        .querySelectorAll(".fade-up")
        .forEach((el) => observer.observe(el));