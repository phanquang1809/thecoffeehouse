function logoLoading() {
  document.querySelector('.logo-overlay').style.display = 'block';
  var img = document.querySelector('.logo-overlay img');
  setTimeout(function () {
    document.querySelector('.logo-overlay').style.display = 'none';
  }, 2500);
  img.src = '';
  img.src = '../img/coffee_logo.gif';
}
window.onload = logoLoading();

