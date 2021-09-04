const { createWorker, createScheduler } = Tesseract;
const scheduler = createScheduler();
const worker = createWorker();

function step() {
  const c = document.createElement("canvas");
  const _video = document.getElementById("vid");
  const video = window.getComputedStyle(_video);
  const width = parseInt(video.getPropertyValue("width"));
  const height = parseInt(video.getPropertyValue("height"));
  const ctx = c.getContext("2d");
  c.width = width;
  c.height = height;
  c.style.filter = "grayscale(120%)";
  ctx.drawImage(vid, 0, 0, c.width, c.height);
  doOCR(c, { width, height });
  requestAnimationFrame(step);
}

const doOCR = async (c, dimension) => {
  const { data } = await scheduler.addJob("recognize", c);
  result(data, dimension);
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
  const wordsFilter = res.words.filter((wordsFilter) => {
    wordsFilter.confidence > 0
  });
  console.log(wordsFilter);
  wordsFilter.forEach((w) => {
    var b = w.bbox;

    ctx.strokeWidth = 2;

    ctx.strokeStyle = "green";
    ctx.lineWidth = 4;
    ctx.strokeRect(b.x0, b.y0, b.x1 - b.x0, b.y1 - b.y0);
    ctx.beginPath();
    ctx.moveTo(w.baseline.x0, w.baseline.y0);
    ctx.lineTo(w.baseline.x1, w.baseline.y1);
    ctx.stroke();

  //   // octx.font = '20px Times';
  //   // octx.font = 20 * (b.x1 - b.x0) / octx.measureText(w.text).width + "px Times";
  //   // octx.fillText(w.text, b.x0, w.baseline.y0);
  });
}

const langLoader = async () => {
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
};
