let contentDiv = document.getElementById("content"); 
let routes = {
  "/": teks,
  "/objek": objek
};

contentDiv.innerHTML = routes[window.location.pathname];
const functionSwitcher = pathName => {
  pathName = window.location.pathname;
  switch (pathName) {
    case '/':
      reader();
      break;
    default:
      stopInterval();
  }
}
functionSwitcher();

let onNavItemClick = pathName => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  contentDiv.innerHTML = routes[pathName];
  initCamera();
  functionSwitcher();
};