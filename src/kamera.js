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
// terus aku nemu lagi yang aneh kak, jadi kalo var video ini kuhapus, kodenya ttp bisa jalan
// padahal dia fungsinya buat select element :/
// coba run deh, iya boleh
// coba kutunjukkin lagi ya kak
// tapi kalo
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