let preloader = document.querySelector(".preloader");
let letters = document.querySelectorAll('.preloader__item');
let delay = 900;

const showLetter = (index) => {
    letters[index].style.cssText = 'opacity: 1; transform: translateY(50%);';
};

const changeColor = (index) => {
    letters[index].style.color = 'white';
};

const startAnimation = () => {
    letters.forEach((_, i) => {
        setTimeout(() => showLetter(i), i * delay);
        setTimeout(() => changeColor(i), (i + 1) * delay);
    });
};
startAnimation();

const hidePreloader = () => {
    preloader.style.display = "none";
    document.body.style.overflowY = "auto";
};
setTimeout(hidePreloader, 5000);