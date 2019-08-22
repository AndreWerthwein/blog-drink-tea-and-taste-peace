"use strict";

var responsiveNavigationHeader = document.querySelector('#responsive-navigation-header');
var responsiveNavigationContent = document.querySelector('#responsive-navigation-content');

responsiveNavigationHeader.addEventListener('click', function(e) {
  e.preventDefault();

   responsiveNavigationContent.classList.toggle('responsive-navigation-show');
});
