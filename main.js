$(document).ready(function () {
  // dynamic calculat body podding depend navbar
  $("body").css("paddingTop", $(".navbar").innerHeight()+10);
  $(window).on("resize", function () {
    $("body").css("paddingTop", $(".navbar").innerHeight()+10);
  });

  // smooth scroll
  $(".navbar li a").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $(`#${$(this).data("scroll")}`).offset().top,
      },
      1000
    );
  });
});
