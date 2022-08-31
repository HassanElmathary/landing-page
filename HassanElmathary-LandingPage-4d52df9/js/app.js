/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let theNav = document.querySelector("nav");
let sect = document.querySelectorAll("section");
let uList = document.getElementById("navbar__list");
let NavItems = function () {
  sect.forEach(function (el) {
    const liContent = `<li><a href="#${el.id}" data-nav="${el.id}" class="menu__link">${el.dataset.nav}</a></li>`;
    theNav.insertAdjacentHTML("beforeend", liContent);
  });
};
NavItems();

theNav.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (ev.target.dataset.nav) {
    document
      .getElementById(`${ev.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
  }
});
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// for (let j = 0; j < mainSections.length; j++) {
//   uList.appendChild(newLi(...idNames));
// }

// build the nav
function theNavi() {
  theNav.style.backgroundColor = "white";
  theNav.style.height = "auto";
  theNav.style.display = "flex";
  theNav.style.flexWrap = "wrap";
  theNav.style.justifyContent = "right";
  theNav.style.alignItems = "center";
  theNav.style.paddingRight = "20px";
}
theNavi();
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
