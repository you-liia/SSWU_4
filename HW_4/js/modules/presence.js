let presence = document.querySelector('.presence');
let presenceButton = document.querySelector('.presence__btn');
let idleTime = 60000;
let answerTime = 5000;
let closeWindowTimeout;

let idleTimeout = setTimeout(showPresenceCheckWindow, idleTime);

function closeWindow() {
    // window.close();
    alert("The window is closed.\nBut don't forget to ventilate =)");
    location.reload(); 
}

function resetTimeout() {
    clearTimeout(idleTimeout);
    idleTimeout = setTimeout(showPresenceCheckWindow, idleTime);
}

function closePresenceCheckWindow() {
    clearTimeout(closeWindowTimeout);
    presence.style.display = "none"; 
    resetTimeout();
}

function showPresenceCheckWindow() {
    presence.style.display = "block";
    presenceButton.addEventListener("click", closePresenceCheckWindow);
    closeWindowTimeout = setTimeout(closeWindow, answerTime); 
}

['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart', 'touchmove'].forEach(eventType => {
    window.addEventListener(eventType, resetTimeout);
});
  