function updateProgressBar() {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = (scroll / height) * 100;
    document.querySelector('.header__progress-bar').style.width = progress + "%";
}
window.onscroll = function() {updateProgressBar()};