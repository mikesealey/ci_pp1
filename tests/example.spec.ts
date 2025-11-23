import { test, expect } from '@playwright/test';

const URLs = [
  "http://127.0.0.1:5500/index.html",
  "http://127.0.0.1:5500/about.html",
  "http://127.0.0.1:5500/contact.html",
  "http://127.0.0.1:5500/confirmation.html",
  "http://127.0.0.1:5500/404.html"
]


URLs.forEach((url) => {
  test(`Tests ${url} for Title, H1, Nav`, async ({ page }) => {
      await page.goto(url);
      // Check for title
      await expect(page).toHaveTitle("Totally Baked Cake Co");
      // Check Nav exists
      const nav = page.locator("nav");
      await expect(nav).toBeVisible();
      // Check Nav contains correct elements
      const navLinks = nav.locator("a")
      await expect(navLinks).toContainText(["Home", "About", "Contact"])
  });
})


// Fetch the right things from the URL params
test("Tests URL parameters are passed into confirmation screen", async ({page}) => {
  const testObject = {
    "customer-name": "Mike",
    "enquiry-type": "general",
    "enquiry-details": "enquiry details go here",
    "email": "mikesealey@hotmail.com"
  }

  // Expected to need to URI encode the enquiry details, but it wasn't necessary
  await page.goto(`http://127.0.0.1:5500/confirmation.html?customer-name=${testObject['customer-name']}&enquiry-type=${testObject['enquiry-type']}&enquiry-details=${testObject['enquiry-details']}&email=${testObject.email}`)
})
  
// Should also try navigating to the Contact page, writing something in, submitting it, and checking that the next page has it.



