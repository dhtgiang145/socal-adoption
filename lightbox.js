$(document).ready(function () {
  /*open the light box when click image*/
  $("li img").click(function () {
    $(".backdrop")
      .animate({ opacity: ".50" }, 300, "linear")
      .css("display", "block");
    $(".lightbox").fadeIn();

    //check if already have an image
    if ($(".lightbox").contents("img")) {
      $(".lightbox").contents().remove("img");
    }

    //get class content
    // var $liClass = $(this).attr("class");
    var img = $(this).clone();
    $(".lightbox").append(img);
  });

  /* Click to close lightbox */
  $(".close, .backdrop").click(function () {
    $(".backdrop").animate({ opacity: "0" }, 300, "linear", function () {
      $(".backdrop").css("display", "none");
    });
    $(".lightbox").fadeOut();
  });
});
