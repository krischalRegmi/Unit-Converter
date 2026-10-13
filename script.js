if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });
}

let deferredPrompt;

const popup = document.getElementById("installPopup");
const installBtn = document.getElementById("installBtn");
const closeBtn = document.getElementById("closeInstall");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  popup.hidden = false;
});

installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;

  deferredPrompt.prompt();
  await deferredPrompt.userChoice;

  deferredPrompt = null;
  popup.hidden = true;
});

closeBtn.addEventListener("click", () => {
  popup.hidden = true;
});
