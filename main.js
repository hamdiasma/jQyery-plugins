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
        scrollTop: $(`#${$(this).data("scroll")}`).offset().top + 1,
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

  $(window).scroll(function () {
    // think navbar with sections
    $(".div").each(function () {
      if ($(window).scrollTop() > $(this).offset().top) {
        console.log($(this).attr("id"));
        var divId = $(this).attr("id");
        $(".navbar li a").removeClass("active");
        $(`.navbar li a[data-scroll=${divId}]`).addClass("active");
      }
    });
    // button up scroll top
    var scrollUp = $(".up");
    if ($(window).scrollTop() > 500) {
      if (scrollUp.is(":hidden")) {
        scrollUp.fadeIn(500);
      }
    } else {
      scrollUp.fadeOut(500);
    }
    $(".up").click(function () {
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });
  });
  // show Popup
  var pop = $(".popup");
  $(".showPopup").click(function () {
    pop.fadeIn(500);
    pop.click(function () {
      pop.fadeOut(500);
    });
    $(".inner").click(function (e) {
      e.stopPropagation();
    });
    $(".close").click(function (e) {
      e.preventDefault();
      pop.fadeOut(500);
    });
  });
});
