const initCamera = () => {
  const vid = document.getElementById("vid");
  // const canvas = document.getElementById("canvas");

  // const ctx = canvas.getContext("2d");

  navigator.mediaDevices
  .getUserMedia({
    video: {
      facingMode: "environment",
      width: window.innerHeight,
      height: window.innerWidth
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
