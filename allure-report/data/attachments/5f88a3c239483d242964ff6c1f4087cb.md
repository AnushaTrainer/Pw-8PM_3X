# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amzTodaysDeals.spec.ts >> test
- Location: tests\amzTodaysDeals.spec.ts:3:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('navigation', { name: 'Primary' }).getByRole('list')
Expected substring: "Today's Deals"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" getByRole('navigation', { name: 'Primary' }).getByRole('list') with timeout 5000ms
  - waiting for getByRole('navigation', { name: 'Primary' }).getByRole('list')

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
> 5  |   await expect(page.getByRole('navigation', { name: 'Primary' }).getByRole('list')).toContainText('Today\'s Deals');
     |                                                                                     ^ Error: expect(locator).toContainText(expected) failed
  6  |   await page.getByRole('link', { name: 'Today\'s Deals' }).click();
  7  |   await expect(page.locator('.a-icon.a-icon-radio').first()).toBeVisible();
  8  |   await page.locator('span:nth-child(4) > .a-checkbox > label > .a-icon').click();
  9  |   await page.getByRole('checkbox', { name: 'Wakefit' }).check();
  10 |   await page.goto('https://www.amazon.in/events/greatindianfestival?ref_=nav_cs_gb&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522brands%255C%2522%253A%255B%255C%2522129151%257CWakefit%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522');
  11 |   await page.getByRole('slider', { name: 'Maximum Price' }).fill('33');
  12 | });
```