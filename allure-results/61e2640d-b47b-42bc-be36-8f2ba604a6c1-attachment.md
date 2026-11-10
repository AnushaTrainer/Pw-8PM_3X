# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amazonsearch.spec.ts >> test
- Location: tests\amazonsearch.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByLabel('Select the department you')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByLabel('Select the department you') with timeout 5000ms
  - waiting for getByLabel('Select the department you')

```

```yaml
- heading "Click the button below to continue shopping" [level=4]
- button "Continue shopping"
- link "Conditions of Use & Sale":
  - /url: https://www.amazon.in/gp/help/customer/display.html/ref=footer_cou?ie=UTF8&nodeId=200545940
- link "Privacy Notice":
  - /url: https://www.amazon.in/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=200534380
- text: © 1996-2025, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://www.amazon.in/');
  5  |   
> 6  |   await expect(page.getByLabel('Select the department you')).toBeVisible();
     |                                                              ^ Error: expect(locator).toBeVisible() failed
  7  |   await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  8  |   await page.getByRole('button', { name: 'Go', exact: true }).click();
  9  |   await expect(page.getByLabel('Select the department you')).toContainText('All Categories Alexa Skills Amazon Devices Amazon Fashion Amazon Fresh Amazon Fresh Meat Amazon Pharmacy Appliances Apps & Games Audible Audiobooks Baby Beauty Books Car & Motorbike Clothing & Accessories Collectibles Computers & Accessories Deals Electronics Furniture Garden & Outdoors Gift Cards Grocery & Gourmet Foods Health & Personal Care Home & Kitchen Industrial & Scientific Jewellery Kindle Store Luggage & Bags Luxury Beauty Movies & TV Shows MP3 Music Music Musical Instruments Office Products Pet Supplies Prime Video Shoes & Handbags Software Sports, Fitness & Outdoors Subscribe & Save Tools & Home Improvement Toys & Games Under ₹500 Video Games Watches');
  10 |   await page.locator('html').click();
  11 |   await page.getByLabel('Select the department you').selectOption('search-alias=baby');
  12 |   await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('dress');
  13 |   await page.getByRole('button', { name: 'new born baby dress' }).click();
  14 |   await page.getByRole('link', { name: 'Apply the filter Get It by' }).click();
  15 |   await page.getByRole('link', { name: '70% Off or more' }).click();
  16 | });
```