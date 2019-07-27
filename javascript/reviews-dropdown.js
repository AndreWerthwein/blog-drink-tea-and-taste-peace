var RatingDropdown = document.querySelectorAll('.rating-dropdown');
var DropdownToggleRating = "";

function MinifyRatingDropdown() {
  for (var x = 0; x < RatingDropdown.length; x = x + 1) {
    RatingDropdown[x].style.height = 37.4 + "px";
    RatingDropdown[x].querySelector('.material-icons').innerHTML = "add";
  }
}

for (var x = 0; x < RatingDropdown.length; x = x + 1) {
  RatingDropdown[x].addEventListener('click', function(e) {
    e.preventDefault();

    var RatingProperty = this.querySelectorAll('.rating-property');
    var RatingDropdownNewHeight = 37.4 + (parseInt(RatingProperty.length) + 1) * 25.6;

    var DropdownCurrentRating = this.dataset.rating;

    if (DropdownToggleRating === DropdownCurrentRating) {
      MinifyRatingDropdown();
      DropdownToggleRating = "";
    } else {
      MinifyRatingDropdown();
      this.style.height = RatingDropdownNewHeight + "px";

      this.querySelector('.material-icons').innerHTML = "remove";
      DropdownToggleRating = DropdownCurrentRating;
    }
  });
}

var ReviewEntries = document.querySelectorAll('.review-entry > header');
var DropdownToggleReview = "";

function MinifyReviewDropdown() {
  for (var x = 0; x < ReviewEntries.length; x = x + 1) {
    ReviewEntries[x].closest('.review-entry').style.maxHeight = 41.4 + "px";
  }
}

// Herstellung des Seitenaufbaus
MinifyReviewDropdown();

for (var x = 0; x < ReviewEntries.length; x = x + 1) {
  ReviewEntries[x].addEventListener('click', function(e) {
    e.preventDefault();

    var DropdownCurrentReview = this.dataset.review;

    if (DropdownToggleReview === DropdownCurrentReview) {
      MinifyReviewDropdown();
      DropdownToggleReview = "";
    } else {
      MinifyReviewDropdown();
      MinifyRatingDropdown();
      this.closest('.review-entry').style.maxHeight = 2000 + "px";
      DropdownToggleReview = DropdownCurrentReview;
    }
  });
}
