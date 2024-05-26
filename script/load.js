// function logoLoading() {
//   document.querySelector('.logo-overlay').style.display = 'block';
//   var img = document.querySelector('.logo-overlay img');
//   img.src = '';
//   img.src = '../img/coffee_logo.gif';
//   setTimeout(function () {
//     document.querySelector('.logo-overlay').style.display = 'none';
//   }, 2500);
// }
// window.onload = logoLoading();

let logoOverlay=document.createElement('div');
logoOverlay.classList.add('logo-overlay')
let logoContainer=document.createElement('div');
logoContainer.classList.add('logo-container');
let logo=document.createElement('img')
logo.classList.add('custom-logo');
logo.src='../img/coffee_logo.gif';
logo.alt='Logo';
logoContainer.appendChild(logo);
logoOverlay.appendChild(logoContainer);
console.log(logoOverlay);
document.body.appendChild(logoOverlay);
setTimeout(function(){
  logoOverlay.remove();
},2500)