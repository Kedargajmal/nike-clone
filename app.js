// Custom Cursor
const cursor = document.createElement("div");
cursor.style.position = "fixed";
cursor.style.width = "20px";
cursor.style.height = "20px";
cursor.style.borderRadius = "50%";
cursor.style.mixBlendMode = "difference";
cursor.style.backgroundColor = "white";
cursor.style.pointerEvents = "none";
cursor.style.zIndex = "9999";
cursor.style.transform = "translate(-50%, -50%)";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Magnet Effect
document.querySelectorAll(".magnet").forEach((el) => {
  el.style.transition = "transform 0.2s ease";
  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = `translate(0, 0)`;
  });
});


    // Functions for toggles
    function toggleMobileMenu() {
      document.getElementById("mobileMenu").classList.toggle("hidden");
    }
    function toggleSearch() {
      document.querySelector(".search-bar").classList.toggle("active");
    }

// Feather icons
feather.replace();

// Simple scroll animation
const faders = document.querySelectorAll('.fade-up, .fade-right, .fade-left');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


// Feather icons
feather.replace();

// Toggle mobile menu
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('hidden');
}

// Toggle search bar
function toggleSearch() {
  const bar = document.querySelector('.search-bar');
  const input = bar.querySelector('input');
  bar.classList.toggle('active');
  if (bar.classList.contains('active')) {
    input.style.width = '160px';
    input.focus();
  } else {
    input.style.width = '0';
  }
}

// Scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-up, .fade-right').forEach(el => observer.observe(el));


