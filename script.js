Draggable.create("#dragme", {
  type: "x",
  bounds: ".container",
});

function checkOverlap() {
  let circle = document.querySelector(".circle");
  let drag = document.querySelector("#dragme");
  let video = document.querySelector("#video1");
  // get position of the .circle and #dragme

  let rect1 = circle.getBoundingClientRect();
  let rect2 = drag.getBoundingClientRect();

  if (rect1.left < rect2.right) {
    video.style.opacity = 0;
  } else {
    video.style.opacity = 1;
  }
}

window.addEventListener("mousemove", checkOverlap);
