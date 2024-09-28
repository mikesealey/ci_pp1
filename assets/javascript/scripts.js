let myFunction = () => {
    console.log("function called!")
}

const navigation = document.getElementById("nav");

window.onscroll = function() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Math.max takes arguments and returns whichever is the highest 
    // This prevents the size% going lower than 15%
    const newWidthPercentage = Math.max(15, 100 - (85 * scrollY / 700)); // Shrinks from 100% to 15%

    navigation.style.width = Math.round(newWidthPercentage) + "%";
    console.log(newWidthPercentage, scrollY)
  };

addEventListener("load", (event) => {
    console.log("Page loaded!")
})

