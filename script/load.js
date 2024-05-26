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
document.body.appendChild(logoOverlay);
setTimeout(function(){
  logoOverlay.remove();
},2500)