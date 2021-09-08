const speech = new SpeechSynthesisUtterance();
speech.lang = "id";
speech.volume = 1;
speech.pitch = 0.5;
speech.rate = 0.5;

// const speech = new SpeechSynthesisUtterance();
// const defaultConfig = {
//   lang: "id",
//   volume: 1,
//   pitch: 0.5,
//   rate: 0.5
// };

// // ini aku ngga yakin bisa gini, harus dicek lagi
// Object.assign(speech, defaultConfig);

// const speakText = text => {
//   // Set Speech Language
//   speech.text = text;

//   speechSynthesis.speak(speech);
// };
