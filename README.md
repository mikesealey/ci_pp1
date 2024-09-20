# Totally Baked Cake Co.
_A website dedicated to showing the finest baked goods in North Wales, as part of  a Level 5 Diploma in Web Application Development_ 

This project will borrow heavily from the real life bakery business by the name name, run by my sister, but will not seek to replace any existing business page, nor will it make any guarantees of factual accuracy with regards to ingredients, dietary requirements, or calarie content.

## Code Sources
### MDN CSS Documentation
#### Aspect Ratio and Object Fit
In order to make perfectly square images, but maintain the reactiveness of the site accross different screensizes, I've used a width property of 100% to fill the column, and then found an `aspect-ratio` rule that I can give a 1/1 ratio.
https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio

The next step was to make the images hold their proportions, and simply hide their irregular shapes and resolutions, using `object-fit: cover`

### Bootstap Documentation
#### Modals
I took the example Static Backdrop modal and stripped a few things out out - I think this was intended for user-prompts but I'll be using it for simply displaying more information about the clicked-image.