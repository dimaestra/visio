let objek = `
<ul id="btmbar" class="uk-switcher uk-flex uk-flex-center"style="height: 100vh; align-items: center;">
    <li>
      <div style="position: relative">
        <video 
          playsinline 
          autoplay 
          muted 
          id="vid"
        ></video>
        <canvas id="overlay" style="position:absolute; top: 0; left: 0"
        ></canvas>
        </div>
    </li>
</ul>
<div class="uk-navbar-container uk-flex-center uk-overlay uk-position-bottom uk-height-small"
style="align-items: center;" 
uk-navbar>
      <div uk-switcher="connect: #btmbar; animation: uk-animation-fade; toggle: > *">
        <button class="uk-button uk-button-primary uk-active">
          <img src="img/btmbar/deteksi.svg" uk-svg>
        </button>    
      </div>
</div>
`;
