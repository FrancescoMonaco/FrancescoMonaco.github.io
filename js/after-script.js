// Smooth scroll to top when clicking home
const homeLink = document.getElementById("homeLink");
if (homeLink) {
  homeLink.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}