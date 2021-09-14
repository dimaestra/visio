let contentDiv = document.getElementById("content");
let routes = {
  "/": teks,
  "/objek": objek,
};

let queueCount = [];

const intervalQueue = (process) => {
  queueCount.push(setInterval(process, 3000));
};

const removeQueue = () => {
  queueCount.forEach(clearInterval);
};

const loadContent = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
  switch (window.location.pathname) {
    case "/":
      removeQueue();
      const langLoaded = langLoader() 
      const addedWorker = scheduler.addWorker(worker);
      if (langLoaded && addedWorker) {
        intervalQueue(doOCR);
        intervalQueue(wordsOutput);
      };
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
          objectDetector = ml5.objectDetector("yolo", modelLoaded);
        }
        const video = document.getElementById("vid");
        video.onload = objectDetector.detect(video, doDetect);
        intervalQueue(resultsOutput);
      };
      loadDetect();
      break;
  }
};

loadContent();

let onNavItemClick = (pathName) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  loadContent();
  initCamera();
};
