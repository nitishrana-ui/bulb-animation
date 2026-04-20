let btn = document.querySelector(".btn");
let audio = document.getElementById("click");

function toggleLight() {
  document.body.classList.toggle("on");
  btn.classList.toggle("active");

  audio.currentTime = 0;
  audio.play();
}
