let contentDiv = document.getElementById("content");
let routes = {
  "/": teks,
  "/objek": objek,
  "/cari": cari
};

const loadContent = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
  switch (window.location.pathname) {
    case "/":
      reader();
      break;
    case "/objek":
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
        setInterval(doDetect, 3000);
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
