const initCamera = () => {
  const vid = document.getElementById("vid");
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