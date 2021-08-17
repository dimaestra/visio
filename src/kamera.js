const initCamera = () => {
  const vid = document.getElementById("vid");
  navigator.mediaDevices
    .getUserMedia({
      video: {
        facingMode: "environment",
        height: 640,
        width: 360
      }
    })
    .then(stream => {
      vid.style.display = "block";
      vid.srcObject = stream;
    })
    .catch(err => {
      console.log({ err });
    });
};
initCamera();