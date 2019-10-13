//= link_tree ../images
//= link_directory ../stylesheets .css
document.querySelector('#toggle-button').addEventListener('click', function() {
  document.querySelector('.section.collapsible').classList.toggle('collapsed');
});