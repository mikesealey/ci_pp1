# Totally Baked Cake Co.
_A website dedicated to showing the finest baked goods in North Wales, as part of  a Level 5 Diploma in Web Application Development_ 

This project will borrow heavily from the real life bakery business by the same name, run by my sister, but will not seek to replace any existing business page, nor will it make any guarantees of factual accuracy with regards to ingredients, dietary requirements, or calorie content.

## User Stories
* As a user, I want to browse a thumbnail gallery of cakes so that I can visually explore the type of products provided
* As a user, I want to be able to see larger versions of the thumbnails
* As a user, I want to be able to see a description of each of the cakes on offer
* As a user, I want to know about specific dietary concerns (Gluten/Wheat, Dairy, Egg, etc)
* As a user, I should be able to find contact details
* As a user, I should be able to find out more information about the origins of the bakery
* As a user, I should be able to find out where the bakery is
 a user, I should be able to submit an enquiry

## Code Sources
### MDN CSS Documentation
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

![URL Parameters in action](<README assets/Screenshot 2024-10-16 215748.png>)

## Design Considerations
### Creating a wireframe

### Once building was underway