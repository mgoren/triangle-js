var triangle = function(side1, side2, side3) {
  if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
    debugger;
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
    $("#result").hide();

    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    var triangleType = triangle(side1, side2, side3);

    if (isNaN(side1) || isNaN(side2) || isNaN(side3) || triangleType == "not a triangle") {
      $("#error").show();
    } else {
      $("#result p").text(triangleType);
      $("#result").show();      
    }

    event.preventDefault();
  });

});
