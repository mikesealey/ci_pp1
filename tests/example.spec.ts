import { test, expect } from '@playwright/test';

const URLsObject = {
  "home": "/index.html",
  "about": "/about.html",
  "contact": "/contact.html",
  "confirmation": "/confirmation.html",
  "404": "/404.html"
}

const testObject = {
  "customer-name": "William Shakespear",
  "enquiry-type": "purchasing",
  "enquiry-details": "Infinite monkeys and infinite typewriters",
  "email": "william.shakespear1564@theglobetheare.co.uk"
}

const URLs = Object.values(URLsObject)

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
  
// Submit enquiry on Contact - check the correct values are submitted and displayed on confirmation
test("Pass values into Contact form and check they surface on Confirmation", async ({page}) => {
  await page.goto(URLsObject.contact)
  // Input values into form
  await page.getByTestId('customer-name').fill(testObject['customer-name'])
  await page.getByTestId('enquiry-type').selectOption(testObject['enquiry-type'])
  await page.getByTestId('enquiry-details').fill(testObject['enquiry-details'])
  await page.getByTestId('email').fill(testObject.email)

  // Submit Form
  await Promise.all([
    page.getByTestId('submit-contact-form').click()
  ]);

  // Check we've navigated to confirmation page
  const urlParams = new URLSearchParams(testObject)
  await expect(page).toHaveURL(`${URLsObject.confirmation}?${urlParams}`)

  // Check values in Confirmation page
  await expect(page.getByTestId("customer-name")).toHaveText(testObject['customer-name']);
  await expect(page.getByTestId("enquiry-type")).toHaveText(testObject['enquiry-type']);
  await expect(page.getByTestId("enquiry-details")).toHaveText(testObject['enquiry-details']);
  await expect(page.getByTestId("email")).toHaveText(testObject.email);
})