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

var reviewEntries = document.querySelectorAll('.review-entry > header');
var dropdownToggleReview = "";

function minifyReviewDropdown() {
  for (var x = 0; x < reviewEntries.length; x = x + 1) {
    reviewEntries[x].closest('.review-entry').style.maxHeight = 41.4 + "px";
  }
}

// Herstellung des Seitenaufbaus
minifyReviewDropdown();

for (var x = 0; x < reviewEntries.length; x = x + 1) {
  reviewEntries[x].addEventListener('click', function(e) {
    e.preventDefault();

    var dropdownCurrentReview = this.dataset.review;

    if (dropdownToggleReview === dropdownCurrentReview) {
      minifyReviewDropdown();
      dropdownToggleReview = "";
    } else {
      minifyReviewDropdown();
      MinifyratingDropdown();
      this.closest('.review-entry').style.maxHeight = 2000 + "px";
      dropdownToggleReview = dropdownCurrentReview;
    }
  });
}
