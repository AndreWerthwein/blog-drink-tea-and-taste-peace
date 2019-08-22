"use strict";

var searchInputField = document.querySelector('input[name="search"]');
var glossaryEntries = document.querySelectorAll('.glossary-entries');

function fadeOutBlogEntries() {
  for (var x = 0; x < glossaryEntries.length; x = x + 1) {
    if (glossaryEntries[x].classList.contains('fade-out') === false) {
      glossaryEntries[x].classList.add('fade-out');
      glossaryEntries[x].style.maxHeight = 45.4 + "px";
    }
  }
}

var glossaryEntriesContent = document.querySelectorAll('.glossary-entry');
var glossarySearchContent = new Array();

for (var x = 0; x < glossaryEntriesContent.length; x = x + 1) {
  glossarySearchContent[x] = glossaryEntriesContent[x].innerText.toLowerCase();
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
    for (var x = 0; x < glossaryEntries.length; x = x + 1) {
      if (glossarySearchContent[x].indexOf(searchItem) > -1) {
        glossaryEntries[x].classList.remove('fade-out');
        glossaryEntries[x].style.maxHeight = 1000 + 'px';
      } else {
        glossaryEntries[x].classList.add('fade-out');
        glossaryEntries[x].style.maxHeight = 45.4 + "px";
      }
    }
  } else {
    for (var x = 0; x < glossaryEntries.length; x = x + 1) {
      glossaryEntries[x].classList.remove('fade-out');
      glossaryEntries[x].style.maxHeight = 45.4 + "px";
    }
  }
});

searchInputField.addEventListener('change', function(e) {
  e.preventDefault();

  fadeOutBlogEntries();

  var searchItem = this.value.toLowerCase();

  for (var x = 0; x < glossaryEntries.length; x = x + 1) {
    if (glossarySearchContent[x].indexOf(searchItem) > -1) {
      glossaryEntries[x].classList.remove('fade-out');
    } else {
      glossaryEntries[x].classList.add('fade-out');
    }
  }
});
