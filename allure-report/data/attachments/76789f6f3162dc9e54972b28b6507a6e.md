# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: automboileE2E.spec.ts >> click on automobile
- Location: tests\automboileE2E.spec.ts:18:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#password')
    - locator resolved to <input id="password" name="Password" type="password"/>
    - fill("Anush123AA")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - banner [ref=f1e3]:
    - generic [ref=f1e5]:
      - link [ref=f1e6] [cursor=pointer]:
        - /url: index.php
        - img "Tricentis Logo" [ref=f1e7]
        - generic [ref=f1e8]:
          - heading "Vehicle Insurance Application" [level=1] [ref=f1e9]
          - text: This is a sample application, Version 1.0.1
      - generic [ref=f1e11]:
        - link " Visit Support!" [ref=f1e12] [cursor=pointer]:
          - /url: https://support.tricentis.com
          - generic [ref=f1e13]: 
          - text: Visit Support!
        - textbox "Search Support..." [ref=f1e14]
        - button "" [ref=f1e15] [cursor=pointer]
    - generic [ref=f1e18]:
      - generic [ref=f1e19]:
        - text: 
        - list [ref=f1e20]:
          - listitem [ref=f1e21]:
            - link "Automobile" [ref=f1e22] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=f1e23]:
            - link "Truck" [ref=f1e24] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=f1e25]:
            - link "Motorcycle" [ref=f1e26] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=f1e27]:
            - link "Camper" [ref=f1e28] [cursor=pointer]:
              - /url: "#"
      - link "Request Demo" [ref=f1e30] [cursor=pointer]:
        - /url: http://www.tricentis.com/tricentis-tosca-testsuite/tosca-testsuite-trial/
  - main [ref=f1e31]:
    - generic [ref=f1e33]:
      - link "Home" [ref=f1e34] [cursor=pointer]:
        - /url: index.php
      - text: Automobile Insurance
  - generic [ref=f1e35]:
    - generic [ref=f1e38]:
      - navigation [ref=f1e39]:
        - list:
          - listitem [ref=f1e40]:
            - link "Enter Vehicle Data 0" [ref=f1e41] [cursor=pointer]:
              - /url: "#"
              - text: Enter Vehicle Data
              - generic [ref=f1e42]: "0"
          - listitem [ref=f1e43]:
            - link "Enter Insurant Data 0" [ref=f1e44] [cursor=pointer]:
              - /url: "#"
              - text: Enter Insurant Data
              - generic [ref=f1e45]: "0"
          - listitem [ref=f1e46]:
            - link "Enter Product Data 0" [ref=f1e47] [cursor=pointer]:
              - /url: "#"
              - text: Enter Product Data
              - generic [ref=f1e48]: "0"
          - listitem [ref=f1e49]:
            - link "Select Price Option 0" [ref=f1e50] [cursor=pointer]:
              - /url: "#"
              - text: Select Price Option
              - generic [ref=f1e51]: "0"
          - listitem [ref=f1e52]:
            - link "Send Quote 1" [ref=f1e53]:
              - /url: "#"
              - text: Send Quote
              - generic [ref=f1e54]: "1"
      - generic [ref=f1e56]:
        - text:     
        - generic [ref=f1e58]:
          - generic [ref=f1e59]:
            - generic [ref=f1e60]: E-Mail
            - textbox [ref=f1e61]: priya.sharma@example.com
          - generic [ref=f1e63]:
            - generic [ref=f1e64]: Phone
            - textbox [ref=f1e65]: "9988776655"
          - generic [ref=f1e67]:
            - generic [ref=f1e68]: Username
            - textbox [active] [ref=f1e69]: Anusha
          - generic [ref=f1e71]:
            - generic [ref=f1e72]: Password
            - textbox [ref=f1e73]: Anush123AA
          - generic [ref=f1e75]:
            - generic [ref=f1e76]: Confirm Password
            - textbox [ref=f1e77]
            - generic [ref=f1e78] [cursor=pointer]
          - generic [ref=f1e79]:
            - generic [ref=f1e80]: Comments
            - textbox [ref=f1e81]: Excel-driven test case
          - generic [ref=f1e83]:
            - button "« Prev" [ref=f1e85] [cursor=pointer]
            - button "« Send »" [ref=f1e86] [cursor=pointer]
          - generic [ref=f1e88]:
            - generic [ref=f1e90]:
              - link "" [ref=f1e92] [cursor=pointer]:
                - /url: index.php
              - generic [ref=f1e95]: Main page
            - generic [ref=f1e97]:
              - link "" [ref=f1e99] [cursor=pointer]:
                - /url: "#"
              - generic [ref=f1e102]: New Automobile Insurance
            - generic [ref=f1e104]:
              - link "" [ref=f1e106] [cursor=pointer]:
                - /url: "#"
              - generic [ref=f1e109]: New Truck Insurance
            - generic [ref=f1e111]:
              - link "" [ref=f1e113] [cursor=pointer]:
                - /url: "#"
              - generic [ref=f1e116]: New Motorcycle Insurance
            - generic [ref=f1e118]:
              - link "" [ref=f1e120] [cursor=pointer]:
                - /url: "#"
              - generic [ref=f1e123]: New Camper Insurance
    - generic [ref=f1e126]:
      - navigation [ref=f1e127]:
        - link "About" [ref=f1e128] [cursor=pointer]:
          - /url: http://www.tricentis.com/about
        - link "Products" [ref=f1e129] [cursor=pointer]:
          - /url: http://www.tricentis.com/tricentis-tosca-testsuite
        - link "Events & Webinars" [ref=f1e130] [cursor=pointer]:
          - /url: http://www.tricentis.com/events-webinars
        - link "Resources" [ref=f1e131] [cursor=pointer]:
          - /url: http://www.tricentis.com/resources
        - link "Services" [ref=f1e132] [cursor=pointer]:
          - /url: http://www.tricentis.com/services
      - generic [ref=f1e133]:
        - link "" [ref=f1e134] [cursor=pointer]:
          - /url: https://www.facebook.com/TRICENTIS
        - link "" [ref=f1e136] [cursor=pointer]:
          - /url: https://twitter.com/Tricentis
        - link "" [ref=f1e138] [cursor=pointer]:
          - /url: https://plus.google.com/108151335013813449490/posts
      - generic [ref=f1e140]: Copyright 2021 by Tricentis GmbH. All rights reserved.
```

# Test source

```ts
  1  | import {Page, Locator} from '@playwright/test'
  2  | import { VehicleData } from '../utils/VehicleDatamapper';
  3  | 
  4  | 
  5  | export class SendQuoteClass{
  6  |     // properties:
  7  |     readonly page:Page;
  8  |     readonly EMail:Locator;
  9  |     readonly Phone:Locator;
  10 |     readonly Username:Locator;
  11 |     readonly Password:Locator;
  12 |     readonly ConfirmPassword:Locator;
  13 |     readonly Comments:Locator;
  14 |     readonly Send:Locator;
  15 | 
  16 |     constructor(page: Page){
  17 |         this.page = page;
  18 |         this.EMail = page.locator('#email');
  19 |         this.Phone = page.locator('#phone')
  20 |         this.Username = page.locator('#username')
  21 |         this.Password = page.locator('#password');
  22 |         this.ConfirmPassword = page.locator('#password');
  23 |         this.Comments = page.locator('#Comments');
  24 |         this.Send = page.locator('#sendemail');
  25 |     }
  26 | 
  27 | 
  28 | 
  29 | async SendQuote(data:VehicleData){
  30 |     await this.EMail.fill(data.email);
  31 |     await this.Phone.fill(data.phone);
  32 |     await this.Username.fill(process.env.QUOTE_USERNAME!);
> 33 |     await this.Password.fill(process.env.QUOTE_PASSWORD!);
     |                         ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  34 |     await this.ConfirmPassword.fill(process.env.QUOTE_PASSWORD!);
  35 |     await this.Comments.fill(data.comments);
  36 | }
  37 | 
  38 | 
  39 | 
  40 | async SendQuotebtn(){
  41 |     await this.Send.click();
  42 | }
  43 | 
  44 | }
  45 | 
  46 | 
  47 | 
```