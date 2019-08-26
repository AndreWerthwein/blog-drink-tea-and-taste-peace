"use strict";

var searchInputField = document.querySelector('input[name="search"]');
var reviewsEntry = document.querySelectorAll('.reviews-entry');

function fadeOutBlogEntries() {
  for (var x = 0; x < reviewsEntry.length; x = x + 1) {
    if (reviewsEntry[x].classList.contains('fade-out') === false) {
      reviewsEntry[x].classList.add('fade-out');
      reviewsEntry[x].style.maxHeight = 41.4 + "px";
    }
  }
}

var reviewsEntryContent = document.querySelectorAll('.reviews-entry');
var reviewsSearchContent = new Array();

for (var x = 0; x < reviewsEntryContent.length; x = x + 1) {
  reviewsSearchContent[x] = reviewsEntryContent[x].innerText.toLowerCase();
}

searchInputField.addEventListener('focus', function(e) {
  e.preventDefault();

  fadeOutBlogEntries();
});

searchInputField.addEventListener('input', function(e) {
  e.preventDefault();

  fadeOutBlogEntries();

  var searchItem = this.value.toLowerCase();

  if (searchItem != '') {
    for (var x = 0; x < reviewsEntry.length; x = x + 1) {
      if (reviewsSearchContent[x].indexOf(searchItem) > -1) {
        reviewsEntry[x].classList.remove('fade-out');
        reviewsEntry[x].style.maxHeight = 1000 + 'px';
      } else {
        reviewsEntry[x].classList.add('fade-out');
        reviewsEntry[x].style.maxHeight = 41.4 + "px";
      }
    }
  } else {
    for (var x = 0; x < reviewsEntry.length; x = x + 1) {
      reviewsEntry[x].classList.remove('fade-out');
      reviewsEntry[x].style.maxHeight = 41.4 + "px";
    }
  }
});

searchInputField.addEventListener('change', function(e) {
  e.preventDefault();

  fadeOutBlogEntries();

  var searchItem = this.value.toLowerCase();

  for (var x = 0; x < reviewsEntry.length; x = x + 1) {
    if (reviewsSearchContent[x].indexOf(searchItem) > -1) {
      reviewsEntry[x].classList.remove('fade-out');
    } else {
      reviewsEntry[x].classList.add('fade-out');
    }
  }
});
