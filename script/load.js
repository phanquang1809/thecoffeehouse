function showLoadingSpinner() {
    document.querySelector('.spinner-overlay').style.display = 'block';
    setTimeout(function () {
      document.querySelector('.spinner-overlay').style.display = 'none';
    }, 1000);
  }
  window.onload =showLoadingSpinner();