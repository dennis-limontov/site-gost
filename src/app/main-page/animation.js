import $ from "jquery";
import anime from "animejs/lib/anime.es.js";

export default function() {
  const $win = $(window);
  const limit = 300;
  let isHidden = true;
  let isAnimating = false;

  $win.on("scroll", () => {
    const top = $win.scrollTop();
    
    if (top <= limit && !isHidden) {
      if (!isAnimating) {
        isHidden = !isHidden;
        isAnimating = true;

        const promise1 = anime({
          targets: "div.caption",
          translateY: [0, -25],
          opacity: [1, 0],
          duration: 444,
          easing: "easeInOutQuad"
        }).finished;

        const promise2 = anime({
          targets: "div.undercaption",
          translateY: [0, 50],
          opacity: [1, 0],
          duration: 444,
          easing: "easeInOutQuad"
        }).finished;

        Promise.all([promise1, promise2]).then(() => {
          isAnimating = false;
        });
      }
    } else if (top > limit && isHidden) {
      if (!isAnimating) {
        isHidden = !isHidden;
        isAnimating = true;

        const promise1 = anime({
          targets: "div.caption",
          translateY: [-25, 0],
          opacity: [0, 1],
          duration: 444,
          easing: "easeInOutQuad"
        }).finished;

        const promise2 = anime({
          targets: "div.undercaption",
          translateY: [50, 0],
          opacity: [0, 1],
          duration: 444,
          easing: "easeInOutQuad"
        }).finished;

        Promise.all([promise1, promise2]).then(() => {
          isAnimating = false;
        });
      }
    }
  });
}
