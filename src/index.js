let contentDiv = document.getElementById("content");
let routes = {
  "/": teks,
  "/objek": objek,
  "/cari": cari
};
let queueCount = [];
const intervalQueue = process => {
  queueCount.push(setInterval(process, 3000));
}
const removeQueue = () => {
  queueCount.forEach(clearInterval);
}
const loadContent = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
  switch (window.location.pathname) {
    case "/":
      removeQueue();
      langLoader();
      scheduler.addWorker(worker);
      intervalQueue(doOCR);
      break;
    case "/objek":
      removeQueue();
      const loadDetect = async () => {
        const res = await loadScript(
          "https://unpkg.com/ml5@latest/dist/ml5.min.js"
        );

        if (res) {
          function modelLoaded() {
            console.log("Model Loaded!");
          }
          classifier = ml5.imageClassifier("MobileNet", modelLoaded);
        }

        // nanti janglup diganti trigger button ya ini
        intervalQueue(doDetect);
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
