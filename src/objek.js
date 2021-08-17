let objek = `
<ul id="btmbar" class="uk-margin uk-switcher">
    <li>
      <video playsinline autoplay muted class="uk-position-absolute" id="vid"></video>
    </li>
</ul>
<div class="uk-navbar-container uk-overlay uk-position-bottom uk-position-z-index uk-width-medium uk-height-small" uk-navbar>
      <div uk-switcher="connect: #btmbar; animation: uk-animation-fade; toggle: > *">
        <button class="uk-button uk-button-primary uk-active">
          <img src="img/btmbar/deteksi.svg" uk-svg>
        </button>    
      </div>
</div>
`;
