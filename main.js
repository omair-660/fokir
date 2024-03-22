let hum = document.getElementById("hum");
let links = document.getElementById("links");

hum.onclick = function () {
  links.classList.toggle("open");
  hum.classList.toggle("active");
};

let nav = document.getElementById("nav");

window.onscroll = function() {
  if (scrollY >= 230) {
    nav.classList.add('bg');
  } else {
    nav.classList.remove('bg');
  }

  let nums = document.querySelectorAll(".nums .num");
  let section = document.querySelector(".three");
  let started = false;

  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = parseInt(el.dataset.goal);
  let count = setInterval(() => {
    let currentValue = parseInt(el.textContent);
    if (currentValue < goal) {
      el.textContent = currentValue + 1;
    } else {
      clearInterval(count);
    }
  }, 2600 / goal);
}
