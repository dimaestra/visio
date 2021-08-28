// Create a ObjectDetector method
let detect = null;
// const objectDetector = ml5.objectDetector("yolo", {}, modelLoaded);
const classifier = ml5.imageClassifier("MobileNet", modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log("Model Loaded!");
}

const translate = text =>
  fetch("/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ originalText: text })
  });

// Detect objects in the video element
const doDetect = async () => {
  const video = document.getElementById("vid");
  classifier.classify(video, 1, async (error, result) => {
    const response = await translate(result[0].label);
    const translated = await response.json().translation;

    // tinggal konekin ke speech synthesis
  });
  // objectDetector.detect(video, (err, results) => {
  //   console.log(results[0].label);
  //   speech.text = results[0].label;
  //   speechSynthesis.speak(speech); // Will output bounding boxes of detected objects
  // });
};
