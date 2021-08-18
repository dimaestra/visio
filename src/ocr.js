const { createWorker, createScheduler } = Tesseract;
const scheduler = createScheduler();
const worker = createWorker();
// let timerId = null;

const sanitizeText = text => {
  return text.replace(/[^a-zA-Z0-9 ]/g, "");
};

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
  // const end = new Date()
  // speakText(text);
  console.log(sanitizeText(text));
  speech.text = sanitizeText(text);
  speechSynthesis.speak(speech);
};

const loader = async () => {
    await worker.load();
    await worker.loadLanguage("eng");
    // await worker.loadLanguage('ind');
    await worker.initialize("eng");
    // await worker.initialize('ind');
};

const reader = async () => {
    loader().then(() => {
    const recognizer = document.getElementById("recognize");
    scheduler.addWorker(worker);
    if (recognizer)
        recognizer.onclick = doOCR;
    });
};
reader();

// video.addEventListener('pause', () => {
//   clearInterval(timerId);
// });
// video.addEventListener('play', () => {
// });

// addMessage('Now you can play the video. :)');

// window.onload = () => {
//   document.getElementById("recognize")
//   Tesseract.recognize(vid)
//   .then(result => {
//     console.log(result.text);
//   });
// }

// window.onload = () => {
//   document.getElementById("recognize").onclick = () => {
//     Tesseract.recognize(vid).then(function (result) {
//       console.log(result.text);
//     });
//   };
// };
