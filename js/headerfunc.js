const links = document.querySelectorAll('.nav li a');
const checkbox = document.getElementById('sidebar-active');

links.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 775) {
      checkbox.checked = false;
    }
  });
});
