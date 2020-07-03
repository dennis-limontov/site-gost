import $ from "jquery";
import "jquery.auto-text-rotating";

export default function () {
  $(".text-1").atrotating({
    animation: "scale",
    animationSpeed: 450,
    delay: 10000,
    delayStart: 10000,
    delayGroup: 10000,
  });

  $(".text-2").atrotating({
    animation: "fade",
    animationSpeed: 600,
    delay: 10000,
    delayStart: 10000,
    delayGroup: 10000,
  });
}
