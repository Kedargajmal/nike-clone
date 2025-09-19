// Custom Cursor
const cursor = document.createElement("div");
cursor.style.position = "fixed";  //makes it stay relative to the screen.
cursor.style.width = "20px";  
cursor.style.height = "20px";
cursor.style.borderRadius = "50%";
cursor.style.mixBlendMode = "difference";
cursor.style.backgroundColor = "white";
cursor.style.pointerEvents = "none";  //so it doesn’t block clicks on the page.
cursor.style.zIndex = "9999";
cursor.style.transform = "translate(-50%, -50%)";  //centers the cursor exactly where the mouse pointer is.
document.body.appendChild(cursor);  //Add the cursor element into the HTML body so it becomes visible.

// Cursor follows mouse
document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;  //give the current mouse position
  cursor.style.left = `${e.clientX}px`;  //give the current mouse position
});

// Toggle Functions calls mobileMenu from navbar.html
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

// Feather Icons (social icons)
feather.replace();


// Scroll Animations
const elements = document.querySelectorAll(".fade-up, .fade-right, .fade-left");    // Select all elements you want to animate

// Function to check if element is in viewport
function checkPosition() {
  const windowBottom = window.innerHeight; //gives the height of the visible browser window
  
  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    
    if (elementTop < windowBottom - 50) { // 50px before visible
      el.classList.add("appear"); // Add animation class
    }
  });
}

// Listen for scroll
window.addEventListener("scroll", checkPosition);

// Run once in case elements are already in view
checkPosition();
