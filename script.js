
// navbar
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


function getFormattedTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; 

  function pad(n) {
    return n < 10 ? "0" + n : n;
  }

  document.getElementById("time").textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
}

setInterval(getFormattedTime, 1000)

console.log(getFormattedTime())