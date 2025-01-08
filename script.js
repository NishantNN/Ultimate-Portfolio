//scroll to top btn
window.onscroll = function () { scrollFunction() };
let navBar = document.querySelector("#navBar")
function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.classList.remove("hide");
    scrollToTopBtn.classList.add("show");
    navBar.classList.add("away-prop");
    navBar.classList.remove("in-prop");

  } else {
    scrollToTopBtn.classList.remove("show");
    scrollToTopBtn.classList.add("hide");
    navBar.classList.remove("away-prop");
    navBar.classList.add("in-prop");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// hamburger menu
document.getElementById('menu-toggle').addEventListener('change', function () {
  var menu = document.querySelector('.menu');
  if (this.checked) {
    menu.classList.add('open');
  } else {
    menu.classList.remove('open');
  }
});

var menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(function (item) {
  item.addEventListener('click', function () {
    var menu = document.querySelector('.menu');
    menu.classList.remove('open');
    document.getElementById('menu-toggle').checked = false; // Uncheck the checkbox
  });
});

document.addEventListener('click', function (event) {
  var menu = document.querySelector('.menu');
  var menuIcon = document.querySelector('.menu-icon');
  var isClickInsideMenu = menu.contains(event.target);
  var isClickInsideMenuIcon = menuIcon.contains(event.target);
  var isMenuOpen = menu.classList.contains('open');
  if (!isClickInsideMenu && !isClickInsideMenuIcon && isMenuOpen) {
    menu.classList.remove('open');
    document.getElementById('menu-toggle').checked = false; // Uncheck the checkbox
  }
});

//   stars  footer
document.addEventListener('DOMContentLoaded', function () {
  const starsContainer = document.querySelector('.stars-container');
  const numStars = 100;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animation = `shootingStar ${Math.random() * 3 + 2}s linear infinite`;
    starsContainer.appendChild(star);
  }
});

// project popup logic

let popupWindow = document.querySelector(".project-popup");
let backBtn = document.querySelector(".back-btn");
let projectTitle = document.querySelector(".popup-project-title");
let projectContent = document.querySelector(".popup-project-content");
let category = document.querySelector(".categories");
let gameTile = document.querySelector(".project-games");
let toolTile = document.querySelector(".project-tools");
let websiteTile = document.querySelector(".project-webpages");
let bodyPage = document.querySelector(".bodyPage");
let scrollToTopBtn = document.querySelector("#scrollToTopBtn");
backBtn.addEventListener('click',()=>{
  popupWindow.classList.add('hide');
  bodyPage.style.overflow = 'auto';
  scrollToTopBtn.classList.remove('hide');
})

gameTile.addEventListener('click',()=>{
  popupWindow.classList.remove('hide');
  bodyPage.style.overflow = 'hidden';
  scrollToTopBtn.classList.add('hide');
  projectContent.innerHTML = `<a href="/games/tic-tac-toe/index.html" target="_blank" class="categories ttt">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="70" height="70"
      color="#908c83" fill="none">
      <path d="M12 2V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
      <path d="M22 12L2 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
      <path
          d="M8 18.5C8 19.8807 6.88071 21 5.5 21C4.11929 21 3 19.8807 3 18.5C3 17.1193 4.11929 16 5.5 16C6.88071 16 8 17.1193 8 18.5Z"
          stroke="currentColor" stroke-width="1.5" />
      <path d="M16 3L21 8M21 3L16 8" stroke="currentColor" stroke-width="1.5"
          stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <div>Tic Tac Toe</div>
</a>
<a href="/games/rock-paper-scissors/index.html" target="_blank" class="categories rps">
  <img src="/images//rps.png" alt="Scissors Papers Rock">
  <div>Scissors Papers Rock</div>
</a>`;
  projectTitle.innerText=`Games`;
})

toolTile.addEventListener('click',()=>{
  popupWindow.classList.remove('hide');
  bodyPage.style.overflow = 'hidden';
  scrollToTopBtn.classList.add('hide');
  projectContent.innerHTML=`<a href="/tools/currency-converter/index.html" target="_blank" class="categories converter">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="70" height="70" color="#908c83" fill="none">
      <path d="M16.125 20.5L16.125 14.5M18 14.5V13M18 22V20.5M16.125 17.5H19.875M19.875 17.5C20.4963 17.5 21 18.0037 21 18.625V19.375C21 19.9963 20.4963 20.5 19.875 20.5H15M19.875 17.5C20.4963 17.5 21 16.9963 21 16.375V15.625C21 15.0037 20.4963 14.5 19.875 14.5H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M11 5C13.8284 5 16.2426 5 17.1213 5.7988C18 6.5976 18 7.4287 18 10L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 20C9.17157 20 6.75736 20 5.87868 19.2012C5 18.4024 5 17.5713 5 15L7 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M5.5 3.25C4.11929 3.25 3 4.08947 3 5.125C3 6.16053 4.11929 7 5.5 7C6.88071 7 8 7.83947 8 8.875C8 9.91053 6.88071 10.75 5.5 10.75M5.5 3.25C6.58852 3.25 7.51455 3.77175 7.85775 4.5M5.5 3.25V2M5.5 10.75C4.41148 10.75 3.48545 10.2282 3.14225 9.5M5.5 10.75V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
  </svg>
  <div>Currency Converter</div>
</a>`;
projectTitle.innerText=`Tools`;
})

websiteTile.addEventListener('click',()=>{
  popupWindow.classList.remove('hide');
  bodyPage.style.overflow = 'hidden';
  scrollToTopBtn.classList.add('hide');
  projectContent.innerHTML=`  <a href="https://anukulelectronics.com" target="_blank" class="categories anukul">
  <img src="/images//anukul.png" alt="Scissors Papers Rock">
  <div>Anukul</div>
</a>
<a href="https://nishantnn.github.io/N-K-s/" target="_blank" class="categories niks">
  <img src="/images//niks.png" alt="Scissors Papers Rock">
  <div>Niks</div>
</a>`;
projectTitle.innerText=`Websites`;
})
// get current year
document.getElementById('current-year').textContent = `| ${new Date().getFullYear()} |`;
