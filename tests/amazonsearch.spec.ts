import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  
  await expect(page.getByLabel('Select the department you')).toBeVisible();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await expect(page.getByLabel('Select the department you')).toContainText('All Categories Alexa Skills Amazon Devices Amazon Fashion Amazon Fresh Amazon Fresh Meat Amazon Pharmacy Appliances Apps & Games Audible Audiobooks Baby Beauty Books Car & Motorbike Clothing & Accessories Collectibles Computers & Accessories Deals Electronics Furniture Garden & Outdoors Gift Cards Grocery & Gourmet Foods Health & Personal Care Home & Kitchen Industrial & Scientific Jewellery Kindle Store Luggage & Bags Luxury Beauty Movies & TV Shows MP3 Music Music Musical Instruments Office Products Pet Supplies Prime Video Shoes & Handbags Software Sports, Fitness & Outdoors Subscribe & Save Tools & Home Improvement Toys & Games Under ₹500 Video Games Watches');
  await page.locator('html').click();
  await page.getByLabel('Select the department you').selectOption('search-alias=baby');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('dress');
  await page.getByRole('button', { name: 'new born baby dress' }).click();
  await page.getByRole('link', { name: 'Apply the filter Get It by' }).click();
  await page.getByRole('link', { name: '70% Off or more' }).click();
});