
// Minimal JS: smooth scroll & basic form prevention
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href');
      if(id.length>1){
        document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
  const form = document.querySelector('.contact_form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks — message sent (demo).');
      form.reset();
    });
  }
});
