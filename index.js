const menuButton = document.querySelector('.menu-btn');
const mobileOverlay = document.querySelector('.mobile-overlay');
const mobileTabs = document.querySelector('.mobile-tabs');
const closeButton = document.querySelector('.close-btn');

menuButton.addEventListener('click', () => {
    mobileTabs.classList.add('show');
    mobileOverlay.classList.add('show');
    menuButton.classList.add('hide');
})

closeButton.addEventListener('click', () => {
    mobileTabs.classList.remove('show');
    mobileOverlay.classList.remove('show');
    menuButton.classList.remove('hide');
})