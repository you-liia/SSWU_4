let cards = document.querySelector('.latest-news__cards'); 
let card = document.querySelectorAll('.latest-news__card');

const checkIsInViewport = (element) => {
    let rect = element.getBoundingClientRect();
    let windowHeight = window.innerHeight || document.documentElement.clientHeight;
    let visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    let threshold = rect.height * 0.5;
    return visibleHeight >= threshold;
}

const toggleCardVisibility = (index, isVisible) => {
    card[index].classList.toggle('latest-news__card_visible', isVisible);
};

const updateCardVisibility = () => {
    let isInViewport = checkIsInViewport(cards);
    card.forEach((_, i) => setTimeout(() => toggleCardVisibility(i, isInViewport), i * 900));
};

updateCardVisibility();
window.addEventListener('scroll', updateCardVisibility);