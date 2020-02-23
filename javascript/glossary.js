"use strict";

var glossaryEntries = document.querySelectorAll('.glossary-entry');
var dropdownToggle = "";

function minifyGlossaryEntries() {
  for (var x = 0; x < glossaryEntries.length; x = x + 1) {
    glossaryEntries[x].style.maxHeight = 45.4 + "px";
  }
}

for (var x = 0; x < glossaryEntries.length; x = x + 1) {
  glossaryEntries[x].addEventListener('click', function(e) {
    e.preventDefault();

    var dropdownCurrent = this.dataset.entry;

    if (dropdownToggle === dropdownCurrent) {
      minifyGlossaryEntries();
      dropdownToggle = "";
    } else {
      minifyGlossaryEntries();
      this.style.maxHeight = 1000 + "px";
      dropdownToggle = dropdownCurrent;
    }
  });
}
