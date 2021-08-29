const { createWorker, createScheduler } = Tesseract;
const scheduler = createScheduler();
const worker = createWorker();
let timerOCR = null;



const doOCR = async () => {
  const c = document.createElement("canvas");
  const _video = document.getElementById("vid");
  const video = window.getComputedStyle(_video);
  const width = parseInt(video.getPropertyValue("width"));
  const height = parseInt(video.getPropertyValue("height"));
  c.width = width;
  c.height = height;
  c.getContext("2d").drawImage(vid, 0, 0, width, height);
  c.style.filter = "contrast(1)";
  const {
    data: { text }
  } = await scheduler.addJob("recognize", c);
  speech.text = sanitizeText(text);
  speechSynthesis.speak(speech);
  console.log(sanitizeText(text));
};

const langLoader = async () => {
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
};