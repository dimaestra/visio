let detect = null;

// When the model is loaded

/**
 * Loads a JavaScript file and returns a Promise for when it is loaded
 */

const loadedScripts = [];

const loadScript = src => {
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

const translate = text =>
  fetch("/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ originalText: text })
  });

let classifier;

// Detect objects in the video element
const doDetect = async () => {
  const video = document.getElementById("vid");
  classifier.classify(video, 1, async (err, result) => {
    const response = await translate(result[0].label);
    const { translation } = await response.json();
    console.log({ translation });
    // tinggal konekin ke speech synthesis
  });
};
// const objectDetector = ml5.objectDetector("yolo", {}, modelLoaded);
// objectDetector.detect(video, (err, results) => {
//   console.log(results[0].label);
//   speech.text = results[0].label;
//   speechSynthesis.speak(speech); // Will output bounding boxes of detected objects
// });
