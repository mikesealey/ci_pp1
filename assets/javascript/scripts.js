let myFunction = () => {
    console.log("function called!")
}

window.addEventListener("scroll", () => {
    console.log("Scrolled!");
    let nav = document.getElementById("nav")

    nav.classList.contains("smaller") ? "" : nav.classList.add("smaller")
});

// When scrolling, if the nav does not currently contain the class "smaller", add the class "smaller"
