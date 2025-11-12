// Simple scroll animation for skills bars
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar");
  const options = { threshold: 0.5 };
  
  const animateBars = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "scaleX(1)";
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(animateBars, options);
  bars.forEach(bar => observer.observe(bar));
});
