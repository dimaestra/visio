const { createWorker, createScheduler } = Tesseract;
const scheduler = createScheduler();
const worker = createWorker();

function step() {
  const c = document.createElement("canvas");
  const ctx = c.getContext("2d");
  const _video = document.getElementById("vid");
  const video = window.getComputedStyle(_video);
  const width = parseInt(video.getPropertyValue("width"));
  const height = parseInt(video.getPropertyValue("height"));
  c.width = width;
  c.height = height;
  ctx.drawImage(vid, 0, 0, c.width, c.height);
  requestAnimationFrame(step);
}

const doOCR = async () => {
  const c = document.createElement("canvas");
  const ctx = c.getContext("2d");
  const _video = document.getElementById("vid");
  const video = window.getComputedStyle(_video);
  const width = parseInt(video.getPropertyValue("width"));
  const height = parseInt(video.getPropertyValue("height"));
  c.width = width;
  c.height = height;
  ctx.drawImage(vid, 0, 0, c.width, c.height);
  const { data } = await scheduler.addJob("recognize", c);
  result(data, { width, height });

  // console.log(data)
  // speech.text = sanitizeText(text);
  // speechSynthesis.speak(speech);
  // console.log(sanitizeText(text));
};

function result(res, dimension) {
  // octx.clearRect(0, 0, output.width, output.height)
  // octx.textAlign = 'left'
  const overlay = document.getElementById("overlay");
  const ctx = overlay.getContext("2d");
  overlay.width = dimension.width;
  overlay.height = dimension.height;
  let wordsFilter = [];
  wordsFilter = res.words.filter((wordsFilter) => {
    return wordsFilter.confidence > 60;
  });
  wordsFilter.forEach((w) => {
    console.log(w.text);
    let b = w.bbox;
    ctx.strokeWidth = 2;
    ctx.strokeStyle = "green";
    ctx.lineWidth = 4;
    ctx.strokeRect(b.x0, b.y0, b.x1 - b.x0, b.y1 - b.y0);
    ctx.beginPath();
    ctx.moveTo(w.baseline.x0, w.baseline.y0);
    ctx.lineTo(w.baseline.x1, w.baseline.y1);
    ctx.stroke();
  });
}

const langLoader = async () => {
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
};
