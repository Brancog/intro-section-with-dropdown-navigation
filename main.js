const navBtnOpen = document.querySelector(".navbar__menu-open");
const navBtnClose = document.querySelector(".navbar__menu-close");
const pageOverlay = document.querySelector(".page-overlay");
const mobileNavMenu = document.querySelector(".nav-menu__mobile");
const featuresSubmenuArrow = document.querySelector(
  ".arrow-down--mobile--features"
);
const desktopFeaturesSubmenuToggle = document.querySelector(
  ".navbar--desktop__item--features"
);
const desktopCompanySubmenuToggle = document.querySelector(
  ".navbar--desktop__item--company"
);
const desktopFeaturesSubmenu = document.querySelector(
  ".navbar--desktop__submenu--features"
);
const desktopCompanySubmenu = document.querySelector(
  ".navbar--desktop__submenu--company"
);
const desktopFeaturesSubmenuArrow = document.querySelector(
  ".arrow-down--desktop--features"
);
const desktopCompanySubmenuArrow = document.querySelector(
  ".arrow-down--desktop--company"
);
const mainHeader = document.querySelector(".header__main-heading");
const companySubmenuArrow = document.querySelector(
  ".arrow-down--mobile--company"
);
const mobileFeaturesSubmenu = document.querySelector(
  ".nav-menu__mobile--features-submenu"
);
const mobileFeaturesSubmenuToggle = document.querySelector(
  ".nav-menu__mobile--features-menu-toggle"
);
const mobileCompanySubmenuToggle = document.querySelector(
  ".nav-menu__mobile--company-menu-toggle"
);
const mobileCompanySubmenu = document.querySelector(
  ".nav-menu__mobile--company-submenu"
);
const body = document.querySelector("body");
let mobileNavOpen = false;

// DETECT MOBILE BTN CLICKS
navBtnOpen.addEventListener("click", (event) => {
  navBtnOpen.classList.toggle("hidden");
  navBtnClose.classList.toggle("hidden");
  mobileNavMenu.classList.toggle("visible");
  body.classList.toggle("overflow-hidden");
  pageOverlay.classList.toggle("visible-overlay");

  mobileNavOpen = true;
});

navBtnClose.addEventListener("click", (event) => {
  navBtnClose.classList.toggle("hidden");
  navBtnOpen.classList.toggle("hidden");
  pageOverlay.classList.toggle("visible-overlay");
  body.classList.toggle("overflow-hidden");
  mobileNavMenu.classList.toggle("visible");
  mobileNavOpen = false;
});

// ANIMATE MOBILE DROPDOWN SUBMENU

// FEATURES SUBMENU
mobileFeaturesSubmenuToggle.addEventListener("click", (event) => {
  mobileFeaturesSubmenu.classList.toggle("submenu-closed");
  mobileFeaturesSubmenu.classList.toggle("submenu-open");
  featuresSubmenuArrow.classList.toggle("rotate-180deg");
});

// COMPANY SUBMENU
mobileCompanySubmenuToggle.addEventListener("click", (event) => {
  mobileCompanySubmenu.classList.toggle("submenu-closed");
  mobileCompanySubmenu.classList.toggle("submenu-open");
  companySubmenuArrow.classList.toggle("rotate-180deg");
});

// ANIMATE DESKTOP DROPDOWN SUBMENU

// FEATURES SUBMENU
desktopFeaturesSubmenuToggle.addEventListener("click", (event) => {
  desktopFeaturesSubmenu.classList.toggle("submenu-closed");
  desktopFeaturesSubmenu.classList.toggle("desktop-submenu-open");
  desktopFeaturesSubmenuArrow.classList.toggle("rotate-180deg");
});

// COMPANY SUBMENU
desktopCompanySubmenuToggle.addEventListener("click", (event) => {
  desktopCompanySubmenu.classList.toggle("submenu-closed");
  desktopCompanySubmenu.classList.toggle("desktop-submenu-open");
  desktopCompanySubmenuArrow.classList.toggle("rotate-180deg");
});
