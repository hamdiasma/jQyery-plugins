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
    if ($(this).scrollTop() > 500) {
      // if (scrollUp.is(":hidden")) {
      //   scrollUp.fadeIn(500);
      // }
      scrollUp.fadeIn(500);
    } else {
      scrollUp.fadeOut(500);
    }
  });
  $(".up").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  // show Popup

  $(".showPopup").click(function () {
    $(`.${$(this).data("pop")}`).fadeIn(500);
    $(".popup").click(function () {
      $(".popup").fadeOut(500);
    });
    $(".inner").click(function (e) {
      e.stopPropagation();
    });
    $(".close").click(function (e) {
      e.preventDefault();
      $(this).parentsUntil(".popup").parent().fadeOut(500);
    });
  });

  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $(".popup").fadeOut(500);
    }
  });
  // buttons effects
  $("button.btn-effects").each(function () {
    $(this).prepend("<span></span>");
  });

  $("button.from-left").hover(
    function () {
      $(this).find("span").eq(0).animate(
        {
          width: "100%",
        },
        100
      );
    },
    function () {
      $(this).find("span").eq(0).animate(
        {
          width: 0,
        },
        100
      );
    }
  );
  $("button.from-top").hover(
    function () {
      $(this).find("span").eq(0).animate(
        {
          height: "100%",
        },
        100
      );
    },
    function () {
      $(this).find("span").eq(0).animate(
        {
          height: 0,
        },
        100
      );
    }
  );
  //progess
  $(".progress-bar span").each(function () {
    $(this).fadeIn("fast").delay(1000)
    $(this).animate(
      {
        width: $(this).data("value"),
      },
      1000
    );
  });
});
