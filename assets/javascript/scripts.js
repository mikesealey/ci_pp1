let myFunction = () => {
    console.log("function called!")
}

const navigation = document.getElementById("nav");
const navigationLogo = document.getElementById("nav-logo")

window.onscroll = function() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Calculate the new width based on scroll position
    const newWidth = Math.max(120, 600 - 0.6 * scrollY); // Ensures the width doesn't go below 120px

    // Apply the new width to both the nav and the logo
    navigation.style.width = newWidth + "px";
    navigationLogo.style.width = newWidth + "px";
};


