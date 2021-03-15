document.addEventListener("DOMContentLoaded", () => {
    document.onscroll = function() {
      if (window.scrollY > 500) {
        document.getElementById("button-up").style.display = "initial";
      } else {
        document.getElementById("button-up").style.display = "none";
      }
    }
});
