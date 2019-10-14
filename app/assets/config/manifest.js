/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}




//= link_tree ../images
//= link_directory ../stylesheets .css
document.querySelector('#toggle-button').addEventListener('click', function() {
  document.querySelector('.section.collapsible').classList.toggle('collapsed');
});