const qurilmaCard1 = document.querySelector(".card-1");
const qurilmaCard2 = document.querySelector(".card-2");
const qurilmaCard3 = document.querySelector(".card-3");
const qurilmaCard4 = document.querySelector(".card-4");
const image1 = document.querySelector("#img-1");
const image2 = document.querySelector("#img-2");
const image3 = document.querySelector("#img-3");
const image4 = document.querySelector("#img-4");

const heart = document.querySelector("#hearts");

const live = document.querySelector(".sevimlilar");

heart.addEventListener("click", what);

function what() {
  const output = "";
  live.innerHTML =
    output +
    `
        <div class="card-notebook">
              <div class="img-card">
                <span class="img-coast-1">Yangi</span>
                <span class="img-coast-2">-20%</span>
                <img src="image/nootbook.svg" alt="" />
              </div>
              <div class="text-card">
                <h5>Lenovo IP 330-15IGM</h5>
                <h6><img src="image/logtip.svg" alt="" />Mohir Noutbuklar</h6>
                <h6>4 212 000so'm<span>4 852 000</span></h6>
              </div>
              <div class="btn-card">
                <button>Sotib olish</button>
                <span class="span-heart">
                  <ion-icon name="heart" class="heart">
                  <div class='red-bg'></div>
                  </ion-icon>
                </span>
                <span class="span-right"
                  ><i class="fas fa-arrow-right"></i
                ></span>
              </div>
            </div>
  `;
}

qurilmaCard1.addEventListener("click", () => {
  image1.style.display = "block";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "none";
});
qurilmaCard2.addEventListener("click", () => {
  image1.style.display = "none";
  image2.style.display = "block";
  image3.style.display = "none";
  image4.style.display = "none";
});
qurilmaCard3.addEventListener("click", () => {
  image2.style.display = "none";
  image1.style.display = "none";
  image3.style.display = "block";
  image4.style.display = "none";
});
qurilmaCard4.addEventListener("click", () => {
  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "block";
});

const addBtn = document.querySelector("#increment");
const subBtn = document.querySelector("#decrement");
const el = document.querySelector(".num");
let num = 0;

addBtn.addEventListener("click", () => {
  num += 1;
  el.innerHTML = num;
});

subBtn.addEventListener("click", () => {
  num -= 1;
  el.innerHTML = num;
});
