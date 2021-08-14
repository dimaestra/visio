// const constraints = {
//   video: { width: 360, height: 640 }
// };
// navigator.mediaDevices.getUserMedia(constraints)
//   .then(function (stream) {
//     const video = document.querySelector("#player video");
//     video.srcObject = stream
//   })
//   .catch(function (err) {
//     console.log({ err })
//   });
const vid = document.getElementById("vid");

vid.setAttribute("playsinline", true);
navigator.mediaDevices.getUserMedia({ video: {
  facingMode: "environment",
  height: 640,
  width: 360
}
 })
  .then(stream => {
    vid.style.display = "block";
    vid.srcObject = stream;
// kuncinya kayanya di sini sih kak
// vid itu variabel di mana ya?
// aneh sih bisa jalan

    vid.play();
    webcamOn = true;
  })
  .catch(err => {
    console.log({ err })
  });