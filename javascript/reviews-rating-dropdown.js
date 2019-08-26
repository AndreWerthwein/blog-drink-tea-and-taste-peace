"use strict";

var ratingDropdown = document.querySelectorAll('.rating-dropdown');
var dropdownToggleRating = "";

function MinifyratingDropdown() {
  for (var x = 0; x < ratingDropdown.length; x = x + 1) {
    ratingDropdown[x].style.height = 37.4 + "px";
    ratingDropdown[x].querySelector('.material-icons').innerHTML = "add";
  }
}

for (var x = 0; x < ratingDropdown.length; x = x + 1) {
  ratingDropdown[x].addEventListener('click', function(e) {
    e.preventDefault();

    var ratingProperty = this.querySelectorAll('.rating-property');
    var ratingDropdownNewHeight = 37.4 + (parseInt(ratingProperty.length) + 1) * 25.6;

    var dropdownCurrentRating = this.dataset.rating;

    if (dropdownToggleRating === dropdownCurrentRating) {
      MinifyratingDropdown();
      dropdownToggleRating = "";
    } else {
      MinifyratingDropdown();
      this.style.height = ratingDropdownNewHeight + "px";

      this.querySelector('.material-icons').innerHTML = "remove";
      dropdownToggleRating = dropdownCurrentRating;
    }
  });
}
