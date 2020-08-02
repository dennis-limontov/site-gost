import $ from "jquery";

export default function () {
  $(document).ready(function() {
    var RBStickyNav = $('.RBsticky-element').offset().top;
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
}
