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