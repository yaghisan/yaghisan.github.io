let currentPanel = 'home';
let isPortfolioOpen = false;

function showHome() {
  if (currentPanel === 'home') {
    currentPanel = 'altHome';
    document.getElementById('left-panel').innerHTML = `
      <div class="alt-home-container">
        <div class="image-group">
          <img src="assets/images/titlescreen.png" alt="タイトル" class="secondpage-image">
          <img src="assets/images/chosa.png" alt="ロゴ" class="secondpage-image">
        </div>
        <div class="text-group">
          <p class="alt-home-text">「ワンナイト人狼や花札、スゴロクなどのゲームを<br><b>制限なく自由</b>に、そして<b>豊富な追加要素</b>とともに楽しめるようにしたい。」<br>──そんな思いから、このアプリの開発を始めました。</p><br><br>
          <p class="alt-home-text">アプリのロゴは、やぎの子が見ている夢の世界が<br>広がっていく様子をイメージしてデザインしています。</p>
        </div>
      </div>
    `;
  } else {
    currentPanel = 'home';
    document.getElementById('left-panel').innerHTML = `
      <div class="logo">
        <img src="assets/images/logo.png" alt="ロゴ" class="logo-image">
        <h1>UNREAL</h1>
        <p>UNREALは、複数のゲームを提供する<br>Flutterベースのモバイルアプリケーションです。</p>
      </div>
    `;
  }
}


function showPortfolio() {
  isPortfolioOpen = !isPortfolioOpen;

  const subPanel = document.getElementById('sub-panel');
  if (isPortfolioOpen) {
    subPanel.classList.remove('slide-out');
    subPanel.classList.add('slide-in');
  } else {
    subPanel.classList.remove('slide-in');
    subPanel.classList.add('slide-out');
  }
}

function goToProfile() {
  // 別ページに飛ばす
  window.location.href = "docs/profile.html";
}

function loadContent(type) {
  let content = '';
  switch (type) {
    case 'tech':
      window.location.href = "docs/tech.html";
      break;
    case 'architecture':
      window.location.href = "docs/architecture.html";
      break;
    case 'feature':
      window.location.href = "docs/feature.html";
      break;
    case 'overview':
      window.location.href = "docs/overview.html";
      break;
  }
  document.getElementById('left-panel').innerHTML = content;
}
