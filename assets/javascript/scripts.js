window.onscroll = function() {
    document.getElementById("nav").classList.add("nav-smaller")

    if (window.scrollY === 0) {
        document.getElementById("nav").classList.remove("nav-smaller")
    }
  };

addEventListener("load", (event) => {
    document.getElementById("nav").classList.remove("nav-smaller")
})

