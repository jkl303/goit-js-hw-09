!function(){var t,n={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};function e(){n.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}n.stopBtn.disabled=!0,n.startBtn.addEventListener("click",(function(){t=setInterval(e,1e3),n.startBtn.disabled=!0,n.stopBtn.disabled=!1})),n.stopBtn.addEventListener("click",(function(){clearInterval(t),n.startBtn.disabled=!1,n.stopBtn.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.7283ef75.js.map