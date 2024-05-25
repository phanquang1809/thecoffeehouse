function logoLoading() {
  document.querySelector('.logo-overlay').style.display = 'block';
  var img = document.querySelector('.logo-overlay img');
  var src = img.src;
  img.src = '';
  img.src = src;
  setTimeout(function () {
      document.querySelector('.logo-overlay').style.display = 'none';
  }, 2500);
}
window.onload = logoLoading();