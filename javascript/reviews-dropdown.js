"use strict";

var reviewsEntryHeader = document.querySelectorAll('.reviews-entry > header');
var dropdownToggleReview = "";

function minifyReviewDropdown() {
  for (var x = 0; x < reviewsEntryHeader.length; x = x + 1) {
    reviewsEntryHeader[x].closest('.reviews-entry').style.maxHeight = 41.4 + "px";
  }
}

// Herstellung des Seitenaufbaus
minifyReviewDropdown();

for (var x = 0; x < reviewsEntryHeader.length; x = x + 1) {
  reviewsEntryHeader[x].addEventListener('click', function(e) {
    e.preventDefault();

    var dropdownCurrentReview = this.dataset.review;

    if (dropdownToggleReview === dropdownCurrentReview) {
      minifyReviewDropdown();
      dropdownToggleReview = "";
    } else {
      minifyReviewDropdown();
      MinifyratingDropdown();
      this.closest('.reviews-entry').style.maxHeight = 2000 + "px";
      dropdownToggleReview = dropdownCurrentReview;
    }
  });
}
