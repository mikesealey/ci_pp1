window.onscroll = function() {
    document.getElementById("nav").classList.add("nav-smaller")
    document.getElementById("nav-links").classList.add("nav-links-smaller")
    document.getElementById("page-content").classList.add("page-content-higher")
    if (window.scrollY === 0) {
        document.getElementById("nav").classList.remove("nav-smaller")
        document.getElementById("nav-links").classList.remove("nav-links-smaller")
        document.getElementById("page-content").classList.remove("page-content-higher")
    }
  };

addEventListener("load", (event) => {
    document.getElementById("nav").classList.remove("nav-smaller")
    document.getElementById("nav-links").classList.remove("nav-links-smaller")
    document.getElementById("page-content").classList.remove("page-content-higher")


})

