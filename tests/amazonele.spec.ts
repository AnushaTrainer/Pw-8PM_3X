import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Electronics' }).click();
  await page.getByRole('link', { name: 'Cameras & Photography' }).click();
  await page.getByRole('link', { name: 'Digitek DWM-116 Wireless' }).click();
  await expect(page.locator('#title')).toContainText('Digitek DWM-116 Wireless Microphone with Type-C & Lightning, 2.4GHz Mic with Noise Cancellation, 40m Range, 6H Battery, Magnetic Clip, Wireless Mic for YouTube, Vlogging & Recording');
  await page.getByRole('button', { name: 'Add all 3 to Cart, Digitek' }).click();
});