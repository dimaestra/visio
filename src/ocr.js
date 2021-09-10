const { createWorker, createScheduler } = Tesseract;
const scheduler = createScheduler();
const worker = createWorker();

const doOCR = async () => {
  const c = document.createElement("canvas");
  const ctx = c.getContext("2d");
  const _video = document.getElementById("vid");
  const video = window.getComputedStyle(_video);
  const width = parseInt(video.getPropertyValue("width"));
  const height = parseInt(video.getPropertyValue("height"));
  c.width = width;
  c.height = height;
  c.style.filter = "grayscale(120%) contrast(120%);";

  ctx.drawImage(vid, 0, 0, c.width, c.height);
  const { data } = await scheduler.addJob("recognize", c);
  result(data, { width, height });
};
let wordsCount = [];
function result(res, dimension) {
  const overlay = document.getElementById("overlay");
  const ctx = overlay.getContext("2d");
  overlay.width = dimension.width;
  overlay.height = dimension.height;
  let wordsFilter = [];
  wordsFilter = res.words.filter((wordsFilter) => {
    return wordsFilter.confidence > 60 && 
           wordsFilter.text.match(/[a-zA-Z0-9]/g);
  });
  wordsFilter.forEach((w) => {
    wordsCount.push(w.text);
    let b = w.bbox;
    ctx.beginPath();
    ctx.strokeStyle = "#4d4dff";
    ctx.lineWidth = 3;
    ctx.strokeRect(b.x0, b.y0, b.x1 - b.x0, b.y1 - b.y0);
    ctx.stroke();
  });
}

const wordsOutput = () => {
  speech.text = wordsCount;
  speechSynthesis.speak(speech);
  wordsCount = [];
}

const langLoader = async () => {
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
};
