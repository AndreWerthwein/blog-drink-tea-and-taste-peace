var GlossaryEntries = document.querySelectorAll('.glossary-entry');
var DropdownToggle = "";

function PageLoad() {
  for (var x = 0; x < GlossaryEntries.length; x = x + 1) {
    GlossaryEntries[x].style.maxHeight = 45.4 + "px";
  }
}

// Herstellung des Seitenaufbaus
PageLoad();

for (var x = 0; x < GlossaryEntries.length; x = x + 1) {
  GlossaryEntries[x].addEventListener('click', function(e) {
    e.preventDefault();

    var DropdownCurrent = this.dataset.entry;

    if (DropdownToggle === DropdownCurrent) {
      PageLoad();
      DropdownToggle = "";
    } else {
      PageLoad();
      this.style.maxHeight = 1000 + "px";
      DropdownToggle = DropdownCurrent;
    }
  });
}
