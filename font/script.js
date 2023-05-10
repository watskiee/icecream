var nav = document.querySelector('nav');
var button = document.createElement('button');
button.innerHTML = 'Меню';
button.addEventListener('click', function() {
  nav.classList.toggle('active');
});
header.appendChild(button);