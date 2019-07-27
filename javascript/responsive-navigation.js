var ResponsiveNavigationHeader = document.querySelector('#responsive-navigation-header');
var ResponsiveNavigationContent = document.querySelector('#responsive-navigation-content');

ResponsiveNavigationHeader.addEventListener('click', function(e) {
  e.preventDefault();

   ResponsiveNavigationContent.classList.toggle('responsive-navigation-show');
});
