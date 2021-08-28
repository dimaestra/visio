// Create a ObjectDetector method
let detect = null;
// const objectDetector = ml5.objectDetector("yolo", {}, modelLoaded);
const classifier = ml5.imageClassifier("MobileNet", modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log("Model Loaded!");
}

// Detect objects in the video element
const doDetect = () => {
  const video = document.getElementById("vid");
  classifier.classify(video, 1, (error, result) => console.log({ result }));
  // objectDetector.detect(video, (err, results) => {
  //   console.log(results[0].label);
  //   speech.text = results[0].label;
  //   speechSynthesis.speak(speech); // Will output bounding boxes of detected objects
  // });
};
