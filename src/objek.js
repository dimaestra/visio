let objek = `
<ul id="btmbar" class="uk-switcher uk-flex"style="height: 100vh; align-items: center;">
    <li>
      <video 
        playsinline 
        autoplay 
        muted 
        id="vid"
      ></video>
    </li>
</ul>
<div class="uk-navbar-container uk-overlay uk-position-bottom" 
style="width: 100vw; height: 7vh;"
uk-navbar>
      <div uk-switcher="connect: #btmbar; animation: uk-animation-fade; toggle: > *">
        <button class="uk-button uk-button-primary uk-active">
          <img src="img/btmbar/deteksi.svg" uk-svg>
        </button>    
      </div>
</div>
`;

// Create a ObjectDetector method
const objectDetector = ml5.objectDetector("cocossd", {}, modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log("Model Loaded!");
}

// Detect objects in the video element
setTimeout(() => {
  const video = document.getElementById("vid");
  objectDetector.detect(video, (err, results) => {
    console.log(results); // Will output bounding boxes of detected objects
  });
}, 3000);