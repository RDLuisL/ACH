$(document).ready(function () {
  var content = $(".content");
  var currentItem = content.filter(".actived");
  var cardStack = $(".card-stack");

  $(".button").click(function () {
    var nextItem = currentItem.next(".content");
    var lastItem = content.last();
    var contentFirst = content.first();

    currentItem.removeClass("actived");

    if (currentItem.is(lastItem)) {
      currentItem = contentFirst.addClass("actived");
      $(".step").animate({ width: "20%" });

      // Reiniciar las tarjetas apiladas
      cardStack.each(function (index) {
        $(this).css("opacity", "1");
        var translateY = -10 * (4 - index) + "px";
        $(this).css("transform", "translateY(" + translateY + ")");
      });
    } else {
      currentItem = nextItem.addClass("actived");
      var stepWidth = (content.index(currentItem) + 1) * 20 + "%";
      $(".step").animate({ width: stepWidth });

      // Ocultar una tarjeta apilada
      var currentStep = content.index(currentItem);
      cardStack.eq(4 - currentStep).css("opacity", "0");
    }

    currentItem = $(".content.actived");
  });
});
