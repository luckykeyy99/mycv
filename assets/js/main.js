// Observe bars and images for animation
document.addEventListener("DOMContentLoaded", () => {
  // animate skill bars when visible
  const bars = document.querySelectorAll('.bar');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const el = entry.target;
        el.style.transform = 'scaleX(1)';
        // set transition for delay effect
        el.style.transition = 'transform 1s cubic-bezier(.2,.8,.2,1)';
        obs.unobserve(el);
      }
    });
  }, {threshold: 0.5});
  bars.forEach(b => obs.observe(b));

  // image fade zoom
  const fades = document.querySelectorAll('.fade-zoom');
  const obs2 = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); e.target.style.animationDelay = '0s'; e.target.classList.add('fade-zoom-visible'); } });
  }, {threshold: 0.2});
  fades.forEach(f=> obs2.observe(f));

  // simple smooth scroll for nav links
  document.querySelectorAll('.nav_links a').forEach(a=>{
    a.addEventListener('click', (ev)=>{
      ev.preventDefault();
      const href = a.getAttribute('href');
      if(href && href.startsWith('#')) document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});