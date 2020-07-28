    // MENU //
const menu = document.getElementById('mobile-menu');
const head = document.querySelector('header');
const menuText = document.getElementById('menu');

menu.addEventListener('click', function(){
    head.classList.toggle('open-menu');
    if (menuText.textContent === 'Menu') { // Text toggle //
        menuText.textContent = 'Close';
    } else {
        menuText.textContent = 'Menu';
    }
});
    // SEARCH //
const searchArea = document.getElementById('search-area');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', function(){
    searchArea.classList.toggle('show-search');
});



