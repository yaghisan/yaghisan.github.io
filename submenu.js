let isPortfolioHovered = false;
let isPortfolioFixed = false;

function togglePortfolioFixed(event) {
  event.preventDefault();
  isPortfolioFixed = !isPortfolioFixed;
  if (isPortfolioFixed) {
    showSubmenu();
  } else if (!isPortfolioHovered) {
    hideSubmenu();
  }
}

function showSubmenu() {
  const submenu = document.getElementById('portfolio-submenu');
  submenu.classList.add('show');
  if (isPortfolioFixed) {
    submenu.classList.add('fixed');
  }
}

function hideSubmenu() {
  const submenu = document.getElementById('portfolio-submenu');
  submenu.classList.remove('show');
  submenu.classList.remove('fixed');
}

// クリックした場所がサブメニュー外の場合、固定表示を解除
document.addEventListener('click', function(event) {
  const portfolioDropdown = document.querySelector('.portfolio-dropdown');
  if (!portfolioDropdown.contains(event.target)) {
    isPortfolioFixed = false;
    if (!isPortfolioHovered) {
      hideSubmenu();
    }
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // 5%単位で更新
    const roundedPercent = Math.floor(scrollPercent / 5) * 5;
    header.style.setProperty('--progress-width', `${roundedPercent}%`);
  }

  window.addEventListener('scroll', updateProgress);
  updateProgress(); // 初期表示時にも実行
});

// 詳細を表示・非表示
function toggleDetails() {
  const details = document.getElementById('details');
  const btn = document.querySelector('.toggle-btn');
  const isCollapsed = details.classList.toggle('collapsed');

  btn.textContent = isCollapsed ? '▼ 詳細を表示' : '▲ 詳細を非表示';
}

