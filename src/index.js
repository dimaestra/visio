let contentDiv = document.getElementById("content");
let routes = {
  "/": teks,
  "/objek": objek
};
let queueCount = [];
const queue = process => {
  queueCount.push(setInterval(process, 1000));
};
const removeQueue = () => {
  queueCount.forEach(clearInterval);
};
const loadContent = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
  switch (window.location.pathname) {
    case "/":
      removeQueue();
      (async () => await langLoader())();
      scheduler.addWorker(worker);
      requestAnimationFrame(step);
      queue(doOCR);
      break;
    case "/objek":
      removeQueue();
      (async () => await scheduler.terminate())();
      const loadDetect = async () => {
        const res = await loadScript(
          "https://unpkg.com/ml5@latest/dist/ml5.min.js"
        );

        if (res) {
          function modelLoaded() {
            console.log("Model Loaded!");
          }
          objectDetector = ml5.objectDetector("yolo", modelLoaded);
        }
        queue(doDetect);
      };
      loadDetect();
      break;
  }
};

loadContent();

let onNavItemClick = pathName => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  loadContent();
  initCamera();
};
