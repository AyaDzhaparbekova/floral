//footer using DOM manipulation
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; ${thisYear} BP LLC. Bishkek, Kyrgyzstan`;
footer.appendChild(copyright);
