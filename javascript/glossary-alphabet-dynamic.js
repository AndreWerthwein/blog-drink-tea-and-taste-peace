var glossaryAlphabet =  document.querySelectorAll('.glossary-alphabet');

for (var x = 0; x < glossaryAlphabet.length; x = x + 1) {
  var currentGlossaryAlphabet = glossaryAlphabet[x].dataset.glossary;
  console.log(currentGlossaryAlphabet);

  var glossaryAphabetEntries = document.querySelector('.glossary-entries[data-glossary="' + currentGlossaryAlphabet + '"]');
  console.log(glossaryAphabetEntries);

  if (glossaryAphabetEntries === null) {
    document.querySelector('.glossary-alphabet[data-glossary="' + currentGlossaryAlphabet + '"]').classList.add('hide');
  }
}
