import $ from "jquery";

export default function ({ locale }) {
  $(document).ready(function() {
    var RBStickyNav = $('.RBsticky-element').offset().top;
    //console.log(RBStickyNav);
    var stickyNav = function() {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > RBStickyNav) {
        $('.RBsticky-element').addClass('RBSticky');
      } else {
        $('.RBsticky-element').removeClass('RBSticky');
      }
    };
    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
  });

  document.getElementById(`locale-${locale}`).classList.add("active");
}
