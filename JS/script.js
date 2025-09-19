document.getElementById("btn-donar").addEventListener("click", () => {
  alert("Gracias por tu interés en apoyar a EcoVida 🌱. Próximamente habilitaremos esta opción.");
});

const form = document.getElementById("contact-form");
const mensajeEstado = document.getElementById("mensaje-estado");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  mensajeEstado.textContent = "¡Gracias por tu mensaje! Nos pondremos en contacto pronto.";
  form.reset();
});

const navbar = document.querySelector(".navbar");
document.querySelectorAll("a.nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navbar.classList.add("hide-navbar");
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = navbar.offsetHeight;
      const elementPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });

      setTimeout(() => {
        navbar.classList.remove("hide-navbar");
      }, 800);
    }
  });
});