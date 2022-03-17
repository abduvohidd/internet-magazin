const accordionItems = document.querySelectorAll(".accordion__item--summary");
const btnMenu = document.querySelectorAll(".btn-menu");
const texts = document.querySelectorAll(".qurilma-tasnif h4");

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const img = document.querySelector(".login-img");
const img1 = document.querySelector(".login-img-1");

accordionItems.forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.stopPropagation();
    item.parentNode.classList.toggle("accordion__item--active");
  });
});

const truess = document.querySelectorAll(".t").forEach(function (trues) {
  trues.addEventListener("click", () => {
    const link1 = document.querySelector(".one-link");
    const link2 = document.querySelector(".two-link");
    link1.style.display = "flex";
    link2.style.display = "none";
  });
});

const falsess = document.querySelectorAll(".f").forEach(function (falses) {
  falses.addEventListener("click", () => {
    const link1 = document.querySelector(".one-link");
    const link2 = document.querySelector(".two-link");
    link1.style.display = "none";
    link2.style.display = "flex";
  });
});
//////////////

let icons = document.querySelectorAll("ion-icon");
icons.forEach(function (icon) {
  icon.addEventListener("click", () => {
    icon.classList.toggle("active");
  });
});

function show(value) {
  document.querySelector(".text-box").value = value;
}

btnMenu.forEach((btns) => {
  btns.addEventListener("click", () => {
    btnMenu.forEach((btns) => {
      btns.classList.remove("selected");
    });
    btns.classList.add("selected");
  });
});

texts.forEach((text) => {
  text.addEventListener("click", () => {
    texts.forEach((text) => {
      text.classList.remove("selected");
    });
    text.classList.add("selected");
  });
});

////
let dropdown = document.querySelector(".katalog");
dropdown.onclick = function () {
  dropdown.classList.toggle("active");
  console.log(dropdown);
};

///
var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

////

signupBtn.addEventListener("click", () => {
  loginForm.style.marginLeft = "-50%";
  img.style.display = "none";
  img1.style.display = "flex";
});
loginBtn.addEventListener("click", () => {
  loginForm.style.marginLeft = "0%";
  img.style.display = "flex";
  img1.style.display = "none";
});
// signupLink.addEventListener("click", () => {
//   signupBtn.click();
//   // return false;
// });

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

  return direction;
}
