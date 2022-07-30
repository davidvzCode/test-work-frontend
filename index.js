import MyEngine from "./assets/MyEngine.js";

const canvas = null || document.getElementById("canvas");
const btn = null || document.getElementById("btn");
const btn2 = null || document.getElementById("btn2");
const btn3 = null || document.getElementById("btn3");

function HelloWord() {
  console.log("HelloWord");
}

const myEngine = new MyEngine({
  el: canvas,
});

let gfx = {
  color: "#ffbe0b",
  x: "20px",
  y: "50px",
  width: "80px",
  height: "80px",
  text: "Da",
};
let gfx1 = {
  color: "#fb5607",
  x: "23px",
  y: "50px",
  width: "75px",
  height: "40px",
  text: "id",
};
let gfx2 = {
  color: "#ff006e",
  x: "28px",
  y: "50px",
  width: "135px",
  height: "90px",
  text: "vz",
};
let gfx3 = {
  color: "#8338ec",
  x: "32px",
  y: "50px",
  width: "20px",
  height: "50px",
  text: ".",
};
let gfx4 = {
  color: "#3a86ff",
  x: "45px",
  y: "50px",
  width: "30px",
  height: "100px",
  text: "Code",
};

btn.addEventListener("click", () => {
  myEngine.pause();
});
btn2.addEventListener("click", () => {
  myEngine.resume();
});
btn3.addEventListener("click", () => {
  myEngine.onUpdate(HelloWord);
});
let cont = 0;
btn4.addEventListener("click", () => {
  if (cont == 0) {
    myEngine.onRender(gfx);
  }
  if (cont == 1) {
    myEngine.onRender(gfx1);
  }
  if (cont == 2) {
    myEngine.onRender(gfx2);
  }
  if (cont == 3) {
    myEngine.onRender(gfx3);
  }
  if (cont == 4) {
    myEngine.onRender(gfx4);
  }
  cont++;
});

(async () => {
  try {
    myEngine.init();
  } catch (err) {
    console.log(err);
  }
})();
