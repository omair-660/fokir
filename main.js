let hum = document.getElementById("hum");
let links = document.getElementById("links");
let scroll = document.getElementById("scroll");

hum.onclick = function () {
  links.classList.toggle("open");
  hum.classList.toggle("active");
};

let nav = document.getElementById("nav");

window.onscroll = function() {
  if (scrollY >= 230) {
    nav.classList.add('bg');
      scroll.classList.add("scr");
    scroll.classList.remove("scroll");
  } else {
    nav.classList.remove('bg');
      scroll.classList.remove("scr");
    scroll.classList.add("scroll");
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
  }, 5000 / goal);
}

let all = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");
let link4 = document.getElementById("link4");

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");

all.onclick = function () {

  img1.style.opacity = ("1") ;
  img1.style.transition = ("0.5s") ;
  img1.style.visibility = ("visible") ;
  img1.style.width = ("32%") ;
  img1.style.height = ("100%") ;

  img2.style.opacity = ("1") ;
  img2.style.transition = ("0.5s") ;
  img2.style.visibility = ("visible") ;
  img2.style.width = ("32%") ;
  img2.style.height = ("100%") ;

  img3.style.opacity = ("1") ;
  img3.style.transition = ("0.5s") ;
  img3.style.visibility = ("visible") ;
  img3.style.width = ("32%") ;
  img3.style.height = ("100%") ;

  img4.style.opacity = ("1") ;
  img4.style.transition = ("0.5s") ;
  img4.style.visibility = ("visible") ;
  img4.style.width = ("32%") ;
  img4.style.height = ("100%") ;

  img5.style.opacity = ("1") ;
  img5.style.transition = ("0.5s") ;
  img5.style.visibility = ("visible") ;
  img5.style.width = ("32%") ;
  img5.style.height = ("100%") ;

  img6.style.opacity = ("1") ;
  img6.style.transition = ("0.5s") ;
  img6.style.visibility = ("visible") ;
  img6.style.width = ("32%") ;
  img6.style.height = ("100%") ;

  all.style.color = ("#bb0e35");
  link2.style.color = ("#555");
  link3.style.color = ("#555");
  link4.style.color = ("#555");

  all.style.backgroundColor = ("#d7c9c917");
  link2.style.backgroundColor = ("transparent");
  link4.style.backgroundColor = ("transparent");
  link3.style.backgroundColor = ("transparent");

  all.style.borderColor = ("#55555529");
  link2.style.borderColor = ("transparent");
  link3.style.borderColor = ("transparent");
  link4.style.borderColor = ("transparent");

}

link2.onclick = function (){
link2.style.color = ("#bb0e35");
link3.style.color = ("#555");
link4.style.color = ("#555");
all.style.color = ("#555");

link2.style.backgroundColor = ("#d7c9c917");
link3.style.backgroundColor = ("transparent");
link4.style.backgroundColor = ("transparent");
all.style.backgroundColor = ("transparent");

link2.style.borderColor = ("#55555529");
link3.style.borderColor = ("transparent");
all.style.borderColor = ("transparent");
link4.style.borderColor = ("transparent");

  img2.style.opacity = ("0") ;
  img2.style.transition = ("0.5s") ;
  img2.style.visibility = ("hidden") ;
  img2.style.width = ("0") ;
  img2.style.height = ("0") ;

  img1.style.opacity = ("1") ;
  img1.style.transition = ("0.5s") ;
  img1.style.visibility = ("visible") ;
  img1.style.width = ("32%") ;
  img1.style.height = ("100%") ;

  img3.style.opacity = ("1") ;
  img3.style.transition = ("0.5s") ;
  img3.style.visibility = ("visible") ;
  img3.style.width = ("32%") ;
  img3.style.height = ("100%") ;

  img4.style.opacity = ("1") ;
  img4.style.transition = ("0.5s") ;
  img4.style.visibility = ("visible") ;
  img4.style.width = ("32%") ;
  img4.style.height = ("100%") ;

  img5.style.opacity = ("1") ;
  img5.style.transition = ("0.5s") ;
  img5.style.visibility = ("visible") ;
  img5.style.width = ("32%") ;
  img5.style.height = ("100%") ;

  img6.style.opacity = ("1") ;
  img6.style.transition = ("0.5s") ;
  img6.style.visibility = ("visible") ;
  img6.style.width = ("32%") ;
  img6.style.height = ("100%") ;

}

link3.onclick = function (){

  link3.style.color = ("#bb0e35");
  link2.style.color = ("#555");
  link4.style.color = ("#555");
  all.style.color = ("#555");

  link3.style.backgroundColor = ("#d7c9c917");
  link2.style.backgroundColor = ("transparent");
  link4.style.backgroundColor = ("transparent");
  all.style.backgroundColor = ("transparent");

  link3.style.borderColor = ("#55555529");
  link2.style.borderColor = ("transparent");
  all.style.borderColor = ("transparent");
  link4.style.borderColor = ("transparent");

  img2.style.opacity = ("0") ;
  img2.style.transition = ("0.5s") ;
  img2.style.visibility = ("hidden") ;
  img2.style.width = ("0") ;
  img2.style.height = ("0") ;

  img3.style.opacity = ("0") ;
  img3.style.transition = ("0.5s") ;
  img3.style.visibility = ("hidden") ;
  img3.style.width = ("0") ;
  img3.style.height = ("0") ;

  img6.style.opacity = ("0") ;
  img6.style.transition = ("0.5s") ;
  img6.style.visibility = ("hidden") ;
  img6.style.width = ("0") ;
  img6.style.height = ("0") ;

  img1.style.opacity = ("1") ;
  img1.style.transition = ("0.5s") ;
  img1.style.visibility = ("visible") ;
  img1.style.width = ("32%") ;
  img1.style.height = ("100%") ;

  img4.style.opacity = ("1") ;
  img4.style.transition = ("0.5s") ;
  img4.style.visibility = ("visible") ;
  img4.style.width = ("32%") ;
  img4.style.height = ("100%") ;

  img5.style.opacity = ("1") ;
  img5.style.transition = ("0.5s") ;
  img5.style.visibility = ("visible") ;
  img5.style.width = ("32%") ;
  img5.style.height = ("100%") ;
}

link4.onclick = function () {
  link4.style.color = ("#bb0e35");
  link2.style.color = ("#555");
  link3.style.color = ("#555");
  link1.style.color = ("#555");

  link4.style.backgroundColor = ("#d7c9c917");
  link2.style.backgroundColor = ("transparent");
  link3.style.backgroundColor = ("transparent");
  all.style.backgroundColor = ("transparent");

  link4.style.borderColor = ("#55555529");
  link2.style.borderColor = ("transparent");
  link3.style.borderColor = ("transparent");
  link1.style.borderColor = ("transparent");

  img6.style.opacity = ("1") ;
  img6.style.transition = ("0.5s") ;
  img6.style.visibility = ("visible") ;
  img6.style.width = ("32%") ;
  img6.style.height = ("100%") ;

  img2.style.opacity = ("1") ;
  img2.style.transition = ("0.5s") ;
  img2.style.visibility = ("visible") ;
  img2.style.width = ("32%") ;
  img2.style.height = ("100%") ;

  img3.style.opacity = ("0") ;
  img3.style.transition = ("0.5s") ;
  img3.style.visibility = ("hidden") ;
  img3.style.width = ("0") ;
  img3.style.height = ("0") ;

  img4.style.opacity = ("0") ;
  img4.style.transition = ("0.5s") ;
  img4.style.visibility = ("hidden") ;
  img4.style.width = ("0") ;
  img4.style.height = ("0") ;

  img5.style.opacity = ("0") ;
  img5.style.transition = ("0.5s") ;
  img5.style.visibility = ("hidden") ;
  img5.style.width = ("0") ;
  img5.style.height = ("0") ;

  img1.style.opacity = ("0") ;
  img1.style.transition = ("0.5s") ;
  img1.style.visibility = ("hidden") ;
  img1.style.width = ("0") ;
  img1.style.height = ("0") ;
}

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

input1.oninput = function() {
    if (input1.value === "") {
        input1.style.border = "1px solid red";
    } else {
        input1.style.border = "1px solid blue";
    }
};

input2.oninput = function() {
    if (input2.value === "") {
        input2.style.border = "1px solid red";
    } else {
        input2.style.border = "1px solid blue";
    }
};
