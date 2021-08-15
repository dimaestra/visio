let contentDiv = document.getElementById("content");

let routes = {
  "/": teks,
  "/objek": objek
};

contentDiv.innerHTML = routes[window.location.pathname];

let onNavItemClick = pathName => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  contentDiv.innerHTML = routes[pathName];
  initCamera();
};