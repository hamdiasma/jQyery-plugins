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
        // console.log($(this).attr("id"));
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
    $(this).fadeIn("fast").delay(1000);
    $(this).animate(
      {
        width: $(this).data("value"),
      },
      1000
    );
  });
  //fixed menue
  var fixedMenue = $(".fixed-menue");
  $("i.fa-gear").click(function () {
    $(this).toggleClass("fa-spin");
    fixedMenue.toggleClass("visible");
    if (fixedMenue.hasClass("visible")) {
      fixedMenue.animate(
        {
          left: 0,
        },
        600
      );
      $("body").animate(
        {
          marginLeft: "200px",
        },
        600
      );
    } else {
      fixedMenue.animate(
        {
          left: "-200px",
        },
        600
      );
      $("body").animate(
        {
          marginLeft: 0,
        },
        600
      );
    }
  });
  // change colors
  $(".change-color li").click(function () {
    $("body").attr("data-default-color", $(this).data("color"));
  });

  // gallery selceted
  var numbImage = $(".gallery .thumbnails").children().length;
  var marginimg = 0.5;
  var totalmargin = (numbImage - 1) * marginimg;
  var imgWidth = (100 - totalmargin) / numbImage;
  $(".gallery .thumbnails img").css({
    width: imgWidth + "%",
    marginRight: marginimg + "%",
  });
  console.log(imgWidth);
  function chek() {
    if ($(".thumbnails .active").is(":first-child")) {
      //   $(".gallery .masert-image .fa-chevron-left").hide();
      // } else {
      //   $(".gallery .masert-image .fa-chevron-left").show();
      // }
      // if ($(".thumbnails .active").is(":last-child")) {
      //   $(".gallery .masert-image .fa-chevron-right").hide();
      // } else {
      //   $(".gallery .masert-image .fa-chevron-right").show();
    }
  }
  $(".gallery .thumbnails img").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".masert-image img").hide().attr("src", $(this).attr("src")).fadeIn(500);
    // chek();
  });

  $(".gallery .masert-image .fa-chevron-right").click(function () {
    if ($(".thumbnails .active").is(":last-child")) {
      $(".thumbnails img:first").click();
    } else {
      $(".thumbnails .active").next().click();
    }
    // chek();
  });
  $(".gallery .masert-image .fa-chevron-left").click(function () {
    if ($(".thumbnails .active").is(":first-child")) {
      $(".thumbnails img").last().click();
    } else {
      $(".thumbnails .active").prev().click();
    }
    // chek();
  });
  // chek();

  // toggle product discription
  $(".product i ,.grwids .grwid i").click(function () {
    $(this).toggleClass("fa-plus fa-minus").next("p").slideToggle();
  });

  // listview/gridvie
  $(".gid-list i").click(function () {
    // if ($(this).hasClass("fa-th")) {
    //   // console.log();
    //   $(".grwids").removeClass("list-view").addClass("grid-view");
    // } else {
    //   if ($(this).hasClass("fa-list-ul")) {
    //     $(".grwids").removeClass("grid-view").addClass("list-view");
    //   }
    // }
    $(this).addClass("active").siblings().removeClass("active");
    $(".grwids")
      .removeClass("list-view grid-view")
      .addClass($(this).data("class"));
  });

  // message erors
  $(".error-message")
    .fadeIn()
    .animate(
      {
        width: "300px",
        display: "block",
      },
      500,
      function () {
        $(this).delay(3000).fadeOut();
      }
    );
  // form focus blur
  var stocplat = "";
  $("[placeholder]")
    .focus(function () {
      stocplat= $(this).attr("placeholder")
      $(this).attr("placeholder", "");
    })
    .blur(function () {
      $(this).attr("placeholder", stocplat);
    });
    // show message filed is empty
    $(".our-form input,.our-form textarea").not(".our-form input[type='sybmit']").blur(function(){
      {
        $(this).val()==""?$(this).next("span").css("color","red").fadeIn().delay(2000).fadeOut(): false
      }
    })
});
