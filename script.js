document.querySelector('#icon-menu').addEventListener('click', function () {
  document.querySelector('#background').style.display = 'block';
  document.querySelector('#mobile-menu nav').style.transform = 'translateX(0em)';
});

document.querySelector('#menu-close').addEventListener('click', function () {
  document.querySelector('#mobile-menu nav').style.transform = 'translateX(16em)';
  setTimeout(() => {
    document.querySelector('#background').style.display = 'none';
  }, '500');
});
