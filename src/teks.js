let teks = `
  <ul id="btmbar" class="uk-switcher uk-flex uk-flex-center"style="height: 100vh; align-items: center;">
    <li>
      <div style="position: relative">
        <video
        aria-label="Video"
        playsinline
        autoplay
        muted
        id="vid"
        ></video>
        <canvas id="overlay" style="position:absolute; top: 0; left: 0"
        ></canvas>
      </div>
    </li>
    <li>
      <div class="js-upload uk-placeholder uk-text-center">
        <span uk-icon="icon: cloud-upload"></span>
        <span class="uk-text-middle">Unggah dokumen Anda</span>
        <div uk-form-custom>
          <input type="file" multiple>
          <span aria-label="Di sini"class="uk-link">di sini</span>
        </div>
      </div>
      <progress id="js-progressbar" class="uk-progress" value="0" max="100" hidden></progress>
    </li>
  </ul>
  <div class="uk-navbar-container uk-flex-center uk-overlay uk-position-bottom uk-height-small"
  style="align-items: center;" 
  uk-navbar>
    <div
      uk-switcher="connect: #btmbar; animation: uk-animation-fade; toggle: > *"
    >
      <button aria-label="Deteksi"class="uk-button uk-button-primary uk-width-small uk-active"onclick="onNavItemClick('/');">
        <img src="img/btmbar/deteksi.svg" uk-svg />
      </button>
      <button aria-label="Pembaca Dokumen"class="uk-button uk-button-secondary uk-width-small"onclick="removeQueue();">
        <img src="img/btmbar/baca.svg" uk-svg />
      </button>
    </div>
  </div>
`;