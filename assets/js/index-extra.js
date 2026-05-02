const scrollButton = document.getElementById("scroll-to-button");

scrollButton.addEventListener("click", function() {

const targetElement = document.getElementById("target-section");

const offset = 110; // Add a slight offset from the top to avoid overlapping content

const scrollPosition = targetElement ? targetElement.offsetTop - offset : document.documentElement.scrollTop;

// Smooth scroll animation
window.scroll({
    top: scrollPosition,
    behavior: "smooth"
    });
});

const homescrollButton = document.getElementById("homescroll-to-button");

homescrollButton.addEventListener("click", function() {
    document.getElementById("firstimg").scrollIntoView({ behavior: "smooth" });
});

const authorscrollButton = document.getElementById("authorscroll-to-button");

authorscrollButton.addEventListener("click", function() {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
});

const referencesscrollButton = document.getElementById("referencesscroll-to-button");

referencesscrollButton.addEventListener("click", function() {
    document.getElementById("references").scrollIntoView({ behavior: "smooth" });
});



