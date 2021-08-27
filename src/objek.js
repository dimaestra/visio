let objek = `
<ul id="btmbar" class="uk-switcher uk-flex"style="height: 100vh; align-items: center;">
    <li>
      <video 
        playsinline 
        autoplay 
        muted 
        id="vid"
      ></video>
    </li>
</ul>
<div class="uk-navbar-container uk-flex-center uk-overlay uk-position-bottom uk-height-small" 
uk-navbar>
      <div uk-switcher="connect: #btmbar; animation: uk-animation-fade; toggle: > *">
        <button class="uk-button uk-button-primary uk-active">
          <img src="img/btmbar/deteksi.svg" uk-svg>
        </button>    
      </div>
</div>
`;