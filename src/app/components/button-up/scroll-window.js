document.addEventListener("DOMContentLoaded", () => {
  document.onscroll = function() {
    const buttonUp = document.getElementById("button-up");

    if (buttonUp) {
      if (window.scrollY > 500) {
        buttonUp.style.display = "initial";
      } else {
        buttonUp.style.display = "none";
      }
    }
  }
});
