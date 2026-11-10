# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amazonele.spec.ts >> test
- Location: tests\amazonele.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Electronics' })

```

# Page snapshot

```yaml
- generic [ref=f2e2]:
  - generic [ref=f2e3]:
    - heading "Click the button below to continue shopping" [level=4] [ref=f2e9]
    - button "Continue shopping" [ref=f2e18] [cursor=pointer]
  - generic [ref=f2e21]:
    - link "Conditions of Use & Sale" [ref=f2e22] [cursor=pointer]:
      - /url: https://www.amazon.in/gp/help/customer/display.html/ref=footer_cou?ie=UTF8&nodeId=200545940
    - link "Privacy Notice" [ref=f2e23] [cursor=pointer]:
      - /url: https://www.amazon.in/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=200534380
  - generic [ref=f2e24]: © 1996-2025, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://www.amazon.in/');
> 5  |   await page.getByRole('link', { name: 'Electronics' }).click();
     |                                                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
  6  |   await page.getByRole('link', { name: 'Cameras & Photography' }).click();
  7  |   await page.getByRole('link', { name: 'Digitek DWM-116 Wireless' }).click();
  8  |   await expect(page.locator('#title')).toContainText('Digitek DWM-116 Wireless Microphone with Type-C & Lightning, 2.4GHz Mic with Noise Cancellation, 40m Range, 6H Battery, Magnetic Clip, Wireless Mic for YouTube, Vlogging & Recording');
  9  |   await page.getByRole('button', { name: 'Add all 3 to Cart, Digitek' }).click();
  10 | });
```