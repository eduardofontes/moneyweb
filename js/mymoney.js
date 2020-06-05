/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function abrirMenu(el) {
  // Close menu
  var uls = $(".show");
  var ul;
  var i;
  for (i = 0; i < uls.length; i++) {
    ul = uls[i];
    // Only close if it's another menu, otherwise it will toggle
    if (ul != $(el).next()[0] && ul != $(el).closest("ul")[0]) {
      $(ul).toggleClass("show");
    }
  }

  // Toggle menu
  if (el.tagName == "A") {
    ul = $(el).next();
    ul.toggleClass("show");
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  this.abrirMenu(event.target);
}