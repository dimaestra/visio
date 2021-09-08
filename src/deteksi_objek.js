let detect = null;

// When the model is loaded

/**
 * Loads a JavaScript file and returns a Promise for when it is loaded
 */

const loadedScripts = [];

const loadScript = (src) => {
  if (loadedScripts.includes(src)) {
    return Promise.reject;
  }

  loadedScripts.push(src);

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = resolve;
    script.onerror = reject;
    script.src = src;
    document.body.append(script);
  });
};

const translate = (text) =>
  fetch("/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ originalText: text }),
  });

let objectDetector;

// Detect objects in the video element
const doDetect = (err, results) => {
  const video = document.getElementById("vid");
  res(results);
  objectDetector.detect(video, doDetect);
  // const response = await translate(result[0].label);
  // const { translation } = await response.json();
  // speech.text = translation;
  // speechSynthesis.speak(speech);
  // tinggal konekin ke speech synthesis
};

function res(results) {
  const overlay = document.getElementById("overlay");
  const ctx = overlay.getContext("2d");
  const _video = document.getElementById("vid");
  const video = window.getComputedStyle(_video);
  const width = parseInt(video.getPropertyValue("width"));
  const height = parseInt(video.getPropertyValue("height"));
  overlay.width = width;
  overlay.height = height;

  results.forEach((o) => {
    console.log(o.label);
    ctx.beginPath();
    ctx.strokeStyle = "#2b2bff";
    ctx.strokeRect(o.x, o.y, o.width, o.height);
    ctx.stroke();
  });
};
// const objectDetector = ml5.objectDetector("yolo", {}, modelLoaded);
// objectDetector.detect(video, (err, results) => {
//   console.log(results[0].label);
//   speech.text = results[0].label;
//   speechSynthesis.speak(speech); // Will output bounding boxes of detected objects
// });
