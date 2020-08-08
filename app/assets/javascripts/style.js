$(document).on('turbolinks:load', function() {
  if ($(".single-post-card").length) {
    if (mode == 1) {
      $(".single-post-card").each(function() {
        $(this).addClass("solid-color-mode");
        $(this).css('background-color', randomColor();
      });
    }
    else {
      $(".single-post-card").each(function() {
        $(this).addClass("solid-color-mode");
        $(this).css('border', '5px solid' + randomColor());
      });
    }
  }



  $('#feed').on('mouseenter', 'single-post-list', function() {
    $(this).css('border-color', randomColor());
  });

  $('#feed').on('mouseleave', 'single-post-list', function() {
    $(this).css('border-color', 'rgba(0,0,0,0.05)');
  });
});

var colorSet = randomColorSet();
var mode = Math.floor(Math.random() * 2);

function randomColorSet() {
  var colorSet1 = ['#35CCFF', '#49E83E', '#FFD432', '#E84B30', '#B243FF'];
  var colorSet2 = ['#FF6138', '#FFFF9D', '#BEEB9F', '#79BD8F', '#79BD8F'];
  var colorSet3 = ['#FCFF5', '#D1DBBD', '#91AA9D', '#3E606F', '#193441'];
  var colorSet4 = ['#004358', '#1F8A70', '#BEDB39', '#FFE11A', '#FD7400'];
  var colorSet5 = ['#105B63', '#FFFAD5', '#FFD34E', '#DB9E36', '#BD4932'];
  var colorSet6 = ['#04BFBF', '#CAFCD8', '#F7E967', '#A9CF54', '#588F27'];
  var colorSet7 = ['#405952', '#9C9B7A', '#FFD393', '#FF974F', '#F54F29'];
  return randomSet[Math.floor(Math.random() * randomSet.length )];
}

function randomColor(){
  var color = colorSet[Math.floor(Math.random() * colorSet.length)];
  return color;
}