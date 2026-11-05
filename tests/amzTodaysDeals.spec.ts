import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await expect(page.getByRole('navigation', { name: 'Primary' }).getByRole('list')).toContainText('Today\'s Deals');
  await page.getByRole('link', { name: 'Today\'s Deals' }).click();
  await expect(page.locator('.a-icon.a-icon-radio').first()).toBeVisible();
  await page.locator('span:nth-child(4) > .a-checkbox > label > .a-icon').click();
  await page.getByRole('checkbox', { name: 'Wakefit' }).check();
  await page.goto('https://www.amazon.in/events/greatindianfestival?ref_=nav_cs_gb&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522brands%255C%2522%253A%255B%255C%2522129151%257CWakefit%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522');
  await page.getByRole('slider', { name: 'Maximum Price' }).fill('33');
});