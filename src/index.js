let contentDiv = document.getElementById('content');

let routes = {
  '/': teks,
  '/index.html': teks,
  '/objek': objek,
};

window.onpopstate = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
}

window.onload = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
}

let onNavItemClick = (pathName) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  contentDiv.innerHTML = routes[pathName];
}

