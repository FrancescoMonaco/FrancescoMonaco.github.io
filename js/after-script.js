// Smooth scroll to top when clicking home
document.addEventListener("DOMContentLoaded", function() {
  const homeLink = document.getElementById("homeLink");
  if (homeLink) {
    console.log("Home link found!");
    homeLink.addEventListener("click", function() {
      console.log("Home link clicked!");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});