const navLinks = document.querySelectorAll('.nav-item:not(.dropdown)'); 
const menuToggle = document.getElementById('navmenu'); 
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false}); 
navLinks.forEach( function(l) { l.addEventListener('click', function() { if (menuToggle.classList.contains('show')) { bsCollapse.toggle(); } }); });
