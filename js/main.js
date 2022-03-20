
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerMenuClick() {
  let x = document.getElementById("hamburger-menu");
  x.classList.toggle('open');

  if (x.classList.contains('open')) {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
