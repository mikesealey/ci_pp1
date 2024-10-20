# Totally Baked Cake Co.
_A website dedicated to showing the finest baked goods in North Wales, as part of  a Level 5 Diploma in Web Application Development_ 

*Disclaimer: This project will borrow heavily from the real life bakery business by the same name, run by my sister, but will not seek to replace any existing business page, nor will it make any guarantees of factual accuracy with regards to ingredients, dietary requirements, or calorie content.*

This website, Totally Baked Cake Co, is an online presence for a family-run home-bakery based in Flintshire, North Wales. The aims of this website are to provide a landing point for sales leads and interest generated both online and in person. Having a mobile friendly design layout means that people could be directed to the website during an in-person meeting and left to explore more options.

## Contents
* [User Stories](#user-stories)
* [Design Considerations](#design-considerations)
  * [Creating a wireframe](#creating-a-wireframe)
* [Code Sources](#code-sources)
  * [Mozilla Developer Network](#mozilla-developer-network-css-documentation)
    * [Aspect Ratio and Object Fit](#aspect-ratio-and-object-fit)
  * [Bootstrap Documentation](#bootstap-documentation)
    * [Modals](#modals)
  * [Adding JavaScript](#adding-javascript)
* [Lighthouse Reports](#lighthouse-reports)
  * [Performance](#performance)
  * [Accessibility](#accessibility)
* [Responsive Design](#responseive-design)



## User Stories
### As a user...
* I want to understand the purpose of the page when it loads
* I want to browse a thumbnail gallery of cakes so that I can visually explore the type of products provided
* I want to be able to see larger versions of the thumbnails
* I want to be able to see a description of each of the cakes on offer
* I want to know about specific dietary concerns (Gluten/Wheat, Dairy, Egg, etc)
* I should be able to submit an enquiry
* I should be able to find out more information about the origins of the bakery
* I should be able to find out where the bakery is based

## Design Considerations
### Creating a wireframe

* Colours
  * The colours for this project are primarily <span style="background-color: rgb(152, 186, 185); color: black;"><strong>rgb(152, 186, 185)</strong></span> and <span style="background-color: rgb(215, 194, 213); color: black;"><strong>rgb(215, 194, 213)</strong></span>, combining with a simple white, often semi-transparrent in order to use some of the background image to add a little bit of texture to the background.

When Designing the website for Totally Baked Cake Co, I knew that the real heroes of the design would be the cakes themselves, so a gallery was the obvious way to go. I wanted to make sure that the gallery would display correctly accross a variety of devices, so when I was working on the wireframe I made sure to plan for desktop, tablet, and mobile views. 

The basic principle was that the images would have a 1:1 aspect ratio in order to more easily accomodate portrait and landscape source images. The images could then be displayed in a grid where the screen width determines how many images go on each row.

![alt text](<README assets/Wireframe.png>)

### Once building was underway
I initially had an idea of having the logo and navigation form a hero image, and using an onScroll property of the window to resize or transform that to taket he place of a more typical logo in a header similar to that which would typically be found in most modern web applications. This turned out to be far too unreliable, and was ultimately scrapped. (Read more in [Adding JavaScript](#adding-javascript))

## Code Sources
### Mozilla Developer Network Documentation
#### Aspect Ratio and Object Fit
In order to make perfectly square images, but maintain the reactiveness of the site accross different screensizes, I've used a width property of 100% to fill the column, and then found an `aspect-ratio` rule that I can give a 1/1 ratio.
https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio

The next step was to make the images hold their proportions, and simply hide their irregular shapes and resolutions, using `object-fit: cover`


### Bootstap Documentation
#### Modals
I took the example Static Backdrop modal and stripped a few things out out - I think this was intended for user-prompts but I'll be using it for simply displaying more information about the clicked-image.

I'd managed to get mixed up between versions of bootstrap - the attribute to dismiss a modal in certain versions Bootstrap is data-bs-dismiss="modal", but data-dismiss="modal" is the correct one for the version I'm using. That'll teach me to lift code out of the example in the documenation!

### Adding JavaScript
The desktop version of Totally Baked Cake Co features a landing page with an oversized logo and navigation menu, that I wanted to shrink to a more typical size into the top-left of the screen once the user has begun to scroll.

In order to do this I needed to first link `.js` file, and make use of the `document.getElementById()` function in JavaScript. I then need to add a class name to the element(s). 

Two good examples that helped:
* [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
* [W3Schools](https://www.w3schools.com/howto/howto_js_add_class.asp)

I also need to tie into the "scroll" event with an event listener found in this example in the MDN docs [window.scrollY](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY)

After trying my best to make this work for a long time, I decided in [this commit](https://github.com/mikesealey/ci_pp1/commit/d28be2d0ecbbe74212eb0097d7a4c6ed91451685) that the effort was not worth the reward. Although I had invisioned something more dynamic, two different approaches both returned unsacceptable results.

When adding in a form and confirmation page I did manage to use a little bit of JavaScript though - I noticed that all of the values submitted in contact.html were available as URL parameters in confirmation.html. [This post](https://sentry.io/answers/how-to-get-values-from-urls-in-javascript/) gave a very quick insight, and with some tinkering I was able to bring the parameters in, assign them to variables, and set them as the text in elements using document.getElementByID. 

<img src="README assets/Query Screenshot.png" style="max-width: 50%;">

## Lighthouse Reports & Validation

### Performance
The main attraction of this website is the cakes themselves, and so it makes sense to have lots of pictures of them. However, in an early iteration I realised that I had 20 JPEGs all averaging 4MB each, and so the opening performace was _terrible_. 

I fed all of my images through [tinyPNG.com](https://www.tinypng.com) and managed to significantly reduce the overall load-time and the filesizes that needed to be downloaded.

### Accessibility
I took some time to add Aria labels to footer links that otherwise only contain an icons, which improved the accessibility score greatly.

<img src="./README assets/Totally Baked Lighthouse Report.png" style="max-width: 50%">

I also found that my website title doesn't have adequate contrast using [https://wave.webaim.org/](https://wave.webaim.org/) 
 
<img src="./README assets/Contrast Validation.png" style="max-width: 350px">

A quick update later, and I can see that I now pass.

<img src="./README assets/Web Accessibility Checks.png" style="max-height: 450px">

### Code Validation
I passed each of my 5 HTML files through [w3.org](https://validator.w3.org/nu/)'s HTML validator, and tackled each of the issues raised. I then passed my JavaScript file through [https://jshint.com/](https://jshint.com/) in order to ensure that the code was inline with standards. The information returned was warning me that using `const` is only available with ES6, and will incompatible with older browsers like Internet Explorer.  [Read more here](https://www.w3schools.com/js/js_es6.asp#mark_const)

<figure style="border: 2px solid rgba(0,0,0,0.5); padding: 12px;">
  <div>
    <img src="./README assets/Index Validation.png" style="max-width: 50%;">
    <img src="./README assets/About validation.png" style="max-width: 49%;">
    
  </div>
  <div>
  <img src="./README assets/Contact Validation.png" style="max-width: 33%">
    <img src="./README assets/Confirmation Validation.png" style="max-width: 33%;">
    <img src="./README assets/404 Validation.png" style="max-width: 33%;">
  </div>
  <figcaption><em>Validation for Index, About, and Contact</em></figcaption>
</figure>

## Testing User Stories
* I want to understand the purpose of the page when it loads
  - `index.html` On page load I am greeted with an introductory paragraph welcoming the user, and inviting them to explore more of the website

* I want to browse a thumbnail gallery of cakes so that I can visually explore the type of products provided
  - `index.html` contains a gallery of 20 images that _Totally Baked_ have made.

* I want to be able to see larger versions of the thumbnails
* I want to be able to see a description of each of the cakes on offer
* I want to know about specific dietary concerns (Gluten/Wheat, Dairy, Egg, etc)
  - Each of the images in the gallery of `index.html` can be clicked to view in a modal, including a detailed description and dietary specifications.

* I should be able to submit an enquiry
  - `contact.html` contains a contact form that allows the user to get in touch with an enquiry. Completing the form navigates to `confirmation.html` that shows the user the enquiry they have just submitted for peace of mind and positive confirmation.

* I should be able to find out more information about the origins of the bakery
* I should be able to find out where the bakery is based
  - `about.html` 
