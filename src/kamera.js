const initCamera = () => {
  const vid = document.getElementById("vid");
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");

  // const heightToWidthRatio
  vid.addEventListener("play", () => {
    function step() {
      ctx.drawImage(
        vid,
        0,
        0,
        (360 * vid.videoWidth) / canvas.width,
        canvas.height
      );
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });

  navigator.mediaDevices
    .getUserMedia({
      video: {
        facingMode: "environment",
        height: window.screen.height,
        width: window.screen.width
      }
    })
    .then(stream => {
      vid.style.display = "block";
      vid.srcObject = stream;
    })
    .catch(err => {
      console.log({ err });
    });
  console.log(window.screen.height);
  console.log(window.screen.width);
};
initCamera();
