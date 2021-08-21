const { createWorker, createScheduler } = Tesseract;
const scheduler = createScheduler();
const worker = createWorker();
let timerId = null;

const sanitizeText = text => {
  return text.replace(/[^a-zA-Z0-9 ]/g, "");
};

const doOCR = async () => {
  const c = document.getElementById("canvas");

  const {
    data: { text }
  } = await scheduler.addJob("recognize", c);
  // const end = new Date()
  // speakText(text);
  speech.text = sanitizeText(text);
  speechSynthesis.speak(speech);
  console.log(sanitizeText(text));
};

const loader = async () => {
  await worker.load();
  await worker.loadLanguage("eng");
  // await worker.loadLanguage('ind');
  await worker.initialize("eng");
  // await worker.initialize('ind');
};

const reader = async () => {
  await loader();
  scheduler.addWorker(worker);
  timerId = setInterval(doOCR, 3000);
};

const stopInterval = () => {
  clearInterval(timerId);
};
