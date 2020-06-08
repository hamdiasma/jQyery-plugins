$(document).ready(function () {
  // dynamic calculat body podding depend navbar
  $("body").css("paddingTop", $(".navbar").innerHeight());
  $(window).on("resize", function () {
    $("body").css("paddingTop", $(".navbar").innerHeight());
  });

  // smooth scroll
  $(".navbar li a").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $(`#${$(this).data("scroll")}`).offset().top+1,
      },
      1000
    );
  });
  // add and remove class active to links and remove all from siblings
  $(".navbar li a").click(function () {
    // $(this)
    //   .addClass("active")
    //   .parents()
    //   .siblings()
    //   .find("a")
    //   .removeClass("active");
    $(".navbar li a").removeClass("active");
    $(this).addClass("active");
  });

  // think navbar with sections
  $(window).scroll(function () {
    // $(".div").each(function () {
    //   if ($(window).scrollTop() > $(this).offset().top) {
    //     console.log($(this).attr("id"));
    //     var divId = $(this).attr("id");
    //     $(".navbar li a").removeClass("active");
    //     $(`.navbar li a[data-scroll=${divId}]`).addClass("active");
    //   }
    // });

    $(".div").each(function () {
      if ($(window).scrollTop() > $(this).offset().top) {
        // console.log($(this).attr("id"));
        var div = $(this).attr("id");
        $(".navbar li a").removeClass("active");
        $(".navbar li a[data-scroll='" + div + "']").addClass("active");
      }
    });
  });
});
