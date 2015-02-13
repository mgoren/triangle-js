var triangle = function(side1, side2, side3) {
  if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2)
    return "not a triangle";
  else if (side1 == side2 && side2 == side3)
    return "equilateral";
  else if (side1 != side2 && side3 != side1 && side2 != side3)
    return "scalene";
  else
    return "isosceles";
  end
};

// ------------------------------------------------------------------

$(document).ready(function() {
  $("form#triangle-sides").submit(function(event) {
    
    $("#order-result").text("");
    $("#result").hide();
    $("#error").hide();

    var phrase = $("input#phrase").val();
    var words = orderify(phrase);

    $("#order-result").append("<ul>");
    words.forEach(function(word) {
      $("#order-result").append("<li>" + word + "</li>");
    });
    $("#order-result").append("</ul>");

    if (phrase) {
      $("#result").show();
    } else {
      $("#error").show();
    }

    event.preventDefault();

  });
});
