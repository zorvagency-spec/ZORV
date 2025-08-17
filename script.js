// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); }
  });
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Smooth scroll for About in navbar (if same-page link)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    // leave default; CSS handles scroll-behavior
  });
});