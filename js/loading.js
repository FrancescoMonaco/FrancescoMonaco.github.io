window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");
    const bottomBanner = document.getElementById("bottom-banner");
  
    const MIN_LOADING_TIME = 1000; // Minimum loading time in milliseconds
    const startTime = performance.now(); // Record the time when the script starts
  
    const elapsedTime = performance.now() - startTime; // Calculate elapsed time
    const remainingTime = Math.max(MIN_LOADING_TIME - elapsedTime, 0);
  
    setTimeout(() => {
      // Fade out the loading screen
      if (loadingScreen) {
        loadingScreen.style.transition = "opacity 0.5s";
        loadingScreen.style.opacity = "0";
      }
  
      setTimeout(() => {
        // Hide the loading screen and show main content
        if (loadingScreen) loadingScreen.style.display = "none";
        if (mainContent) mainContent.style.display = "block";
  
        // Show the bottom banner
        if (bottomBanner) {
          bottomBanner.style.visibility = "visible";
          bottomBanner.style.opacity = "1"; // Smooth fade-in
        } else {
          console.error("Footer element (#bottom-banner) not found in DOM.");
        }
      }, 500); // Match the transition duration
    }, remainingTime);
  });
  