document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector('.btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
  });
});
