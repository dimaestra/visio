let teks = `
  <ul id="btmbar" class="uk-margin uk-switcher">
    <li>
      <video
        playsinline
        autoplay
        muted
        id="vid"
      ></video>
    </li>
    <li>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </li>
  </ul>
  <div class="uk-navbar-container uk-overlay uk-position-bottom uk-position-z-index uk-width-medium uk-height-small" uk-navbar>
    <div
      uk-switcher="connect: #btmbar; animation: uk-animation-fade; toggle: > *"
    >
      <button id="recognize" class="uk-button uk-button-primary uk-active">
        <img src="img/btmbar/deteksi.svg" uk-svg />
      </button>
      <button class="uk-button uk-button-secondary">
        <img src="img/btmbar/baca.svg" uk-svg />
      </button>
    </div>
  </div>
`;

const { createWorker, createScheduler } = Tesseract;
const scheduler = createScheduler();
let timerId = null;

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

const startOCR = async () => {
  const recognizer = document.getElementById("recognize");
  const worker = createWorker({
    // langPath: '.',
    gzip: false,
  });
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.loadLanguage('ind');
  await worker.initialize("eng");
  await worker.initialize('ind');
  scheduler.addWorker(worker);
  if (recognizer)
    recognizer.onclick = doOCR;
};

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
