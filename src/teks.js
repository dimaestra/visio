let teks = `
<ul id="btmbar" class="uk-margin uk-switcher">
        <li>
          <video playsinline autoplay muted class="uk-position-absolute" id="vid"></video>
        </li>
        <li>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </li>
</ul>
<div class="uk-navbar-container" uk-navbar>
      <div uk-switcher="connect: #btmbar; animation: uk-animation-fade; toggle: > *">
        <button class="uk-button uk-button-primary uk-active">
          <img src="img/btmbar/deteksi.svg" uk-svg>
        </button>    
        <button class="uk-button uk-button-secondary">
          <img src="img/btmbar/baca.svg" uk-svg>
        </button>
      </div>
</div>
`;
const { createWorker, createScheduler } = Tesseract;
const scheduler = createScheduler();
let timerId = null;

const doOCR = async () => {
  const c = document.createElement('canvas');
  c.width = 360;
  c.height = 640;
  c.getContext('2d').drawImage(vid, 0, 0, 360, 640);
  // const start = new Date();
  const { data: { text } } = await scheduler.addJob('recognize', c);
  // const end = new Date()
  text.split('\n').forEach((line) => {
    console.log(line);
  });
};

window.onload = (async () => {
  const worker = createWorker();
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  scheduler.addWorker(worker);
  
  timerId = setInterval(doOCR, 1000);
});



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
