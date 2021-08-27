let contentDiv = document.getElementById("content"); 
let routes = {
  "/": teks,
  "/objek": objek,
  "/cari": cari
};

contentDiv.innerHTML = routes[window.location.pathname];
switch (window.location.pathname) {
  case '/':
    reader();
    break;
  case '/objek':
    setInterval(doDetect, 3000);
    break;
}

let onNavItemClick = pathName => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  contentDiv.innerHTML = routes[pathName];
  initCamera();
};