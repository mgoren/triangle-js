var triangle = function(side1, side2, side3) {
  if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
    return "not a triangle";
  }
  else if (side1 == side2 && side2 == side3) {
    return "equilateral";
  }
  else if (side1 != side2 && side3 != side1 && side2 != side3) {
    return "scalene";
  }
  else {
    return "isosceles";
  }
};

// ------------------------------------------------------------------

$(document).ready(function() {
  $("form#triangle-sides").submit(function(event) {
    
    $("#error").hide();

    var side1 = $("input#side1").val();
    var side2 = $("input#side2").val();
    var side3 = $("input#side3").val();

    var triangleType = triangle(side1, side2, side3));

    $("#order p").text();

    if (phrase) {
      $("#result").show();
    } else {
      $("#error").show();
    }

    event.preventDefault();

  });
});
