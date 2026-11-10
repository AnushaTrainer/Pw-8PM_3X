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
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
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
            - link "Select Price Option 1" [ref=f1e50]:
              - /url: "#"
              - text: Select Price Option
              - generic [ref=f1e51]: "1"
          - listitem [ref=f1e52]:
            - link "Send Quote 4" [ref=f1e53] [cursor=pointer]:
              - /url: "#"
              - text: Send Quote
              - generic [ref=f1e54]: "4"
      - generic [ref=f1e56]:
        - text:   
        - generic [ref=f1e57]:
          - generic:
            - generic [ref=f1e58]:
              - table [ref=f1e59]:
                - rowgroup [ref=f1e60]:
                  - row [ref=f1e61]:
                    - columnheader [ref=f1e62]
                    - columnheader "Silver" [ref=f1e63]
                    - columnheader "Gold" [ref=f1e64]
                    - columnheader "Platinum" [ref=f1e65]
                    - columnheader "Ultimate" [ref=f1e66]
                - rowgroup [ref=f1e67]:
                  - row [ref=f1e68]:
                    - cell "Price per Year ($)" [ref=f1e69]
                    - cell "128.00" [ref=f1e70]
                    - cell "378.00" [ref=f1e71]
                    - cell "742.00" [ref=f1e72]
                    - cell "1,415.00" [ref=f1e73]
                  - row [ref=f1e74]:
                    - cell "Online Claim" [ref=f1e75]
                    - cell "No" [ref=f1e76]
                    - cell "Submit" [ref=f1e77]
                    - cell "Submit" [ref=f1e78]
                    - cell "Submit" [ref=f1e79]
                  - row [ref=f1e80]:
                    - cell "Claims Discount (%)" [ref=f1e81]
                    - cell "No" [ref=f1e82]
                    - cell "2" [ref=f1e83]
                    - cell "5" [ref=f1e84]
                    - cell "10" [ref=f1e85]
                  - row [ref=f1e86]:
                    - cell "Worldwide Cover" [ref=f1e87]
                    - cell "No" [ref=f1e88]
                    - cell "Limited" [ref=f1e89]
                    - cell "Limited" [ref=f1e90]
                    - cell "Unlimited" [ref=f1e91]
                - rowgroup [ref=f1e92]:
                  - row [ref=f1e93]:
                    - columnheader "Select Option" [ref=f1e94]
                    - columnheader [ref=f1e95]:
                      - radio [ref=f1e97]
                      - radio [ref=f1e100]
                      - radio [ref=f1e103]
                      - radio [ref=f1e106]
              - generic [ref=f1e108] [cursor=pointer]
            - text:  
        - text:     
    - generic [ref=f1e111]:
      - navigation [ref=f1e112]:
        - link "About" [ref=f1e113] [cursor=pointer]:
          - /url: http://www.tricentis.com/about
        - link "Products" [ref=f1e114] [cursor=pointer]:
          - /url: http://www.tricentis.com/tricentis-tosca-testsuite
        - link "Events & Webinars" [ref=f1e115] [cursor=pointer]:
          - /url: http://www.tricentis.com/events-webinars
        - link "Resources" [ref=f1e116] [cursor=pointer]:
          - /url: http://www.tricentis.com/resources
        - link "Services" [ref=f1e117] [cursor=pointer]:
          - /url: http://www.tricentis.com/services
      - generic [ref=f1e118]:
        - link "" [ref=f1e119] [cursor=pointer]:
          - /url: https://www.facebook.com/TRICENTIS
        - link "" [ref=f1e121] [cursor=pointer]:
          - /url: https://twitter.com/Tricentis
        - link "" [ref=f1e123] [cursor=pointer]:
          - /url: https://plus.google.com/108151335013813449490/posts
      - generic [ref=f1e125]: Copyright 2021 by Tricentis GmbH. All rights reserved.
```

# Test source

```ts
  1   | import {test} from '../src/fixtures/VIFixture';
  2   | import path from 'path';
  3   | import {HomePage} from '../src/pages/Homepage';
  4   | import { ExcelReader } from '../src/readers/ExcelReader';
  5   | import {EnterVehicleDataPage} from '../src/pages/EnterVehicleDataPage';
  6   | import {EnterInsurantDataPage} from '../src/pages/EnterInsurantData';
  7   | import { EnterProductData } from '../src/pages/EnterProductData';
  8   | import { SelectPrice } from '../src/pages/SelectPrice';
  9   | import { SendQuoteClass } from '../src/pages/SendQuote';
  10  | 
  11  | // Read the Excel Data:
  12  | const XLFilePath = path.join(__dirname, '../src/test-data/automobile.xlsx');
  13  | const data: ExcelReader[] = ExcelReader.readExcel(XLFilePath, 'TestData');
  14  | for(let i in data){
  15  |     console.log(data[i]);
  16  | }
  17  | 
  18  | test("click on automobile",async({page, homepage})=>{
  19  |     // create object for homepage
  20  |     const home = new HomePage(page);
  21  |     await home.navigateToApplication();
  22  |     await home.clickAutomobile();
  23  | 
  24  |     // Read ExcelData: Enter Vehicle Data
  25  |     const EVData = new EnterVehicleDataPage(page);
  26  |     // XL Data Stored in Array 
  27  |     for(let i in data){
  28  |     console.log(data[i]);
  29  |     await EVData.enterVehicleData(data[i]);
  30  |     }
  31  |     await EVData.clickNext();
  32  | 
  33  | 
  34  |     // Enter Insurant Data: (Xl Data, Interface, PAGE, Xl Reader)
  35  |     const EIdata = new EnterInsurantDataPage(page);
  36  |     for(let i in data){
  37  |     console.log(data[i]);
  38  |     await EIdata.enterInsurantData(data[i]);
  39  |     }
  40  |     await EIdata.clickNext();
  41  | await page.waitForTimeout(5000);
  42  | 
  43  |     // Enter Product  Data: (Xl Data, Interface, PAGE, Xl Reader)
  44  |     const EPdata = new EnterProductData(page);
  45  |     for(let i in data){
  46  |     console.log(data[i]);
  47  |     await EPdata.EnterProductDataAuto(data[i]);
  48  |     await EPdata.MeritCurt(data[i]);
  49  |     }
  50  |     await EPdata.clickProductData();
  51  | 
> 52  |     await page.waitForTimeout(5000);
      |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  53  | 
  54  |     // Select Price Option
  55  |     const SPdata = new SelectPrice(page);
  56  |     for(let i in data){
  57  |     console.log(data[i]);
  58  |     await SPdata.SelectPrice(data[i]);
  59  |     }
  60  |     await SPdata.clickSendQuote();
  61  |     
  62  |     await page.waitForTimeout(5000);
  63  | 
  64  |         // Send Quotes
  65  |     const SQdata = new SendQuoteClass(page);
  66  |     for(let i in data){
  67  |     console.log(data[i]);
  68  |     await SQdata.SendQuote(data[i]);
  69  |     }
  70  |     await SQdata.SendQuotebtn();
  71  |     
  72  |     await page.waitForTimeout(5000);
  73  | 
  74  | });
  75  | 
  76  | test("E2E Flow Truck Insurance",async({page, homepage, VechileDataPage,
  77  |                 InsurantDataPage,
  78  |                 ProductPage,
  79  |                 pricepage,
  80  |                 QuotePage,})=>{
  81  | 
  82  |         // Step1: Home Page - click on Truck
  83  |         await homepage.navigateToApplication();
  84  |         await homepage.clickTruck();
  85  | 
  86  |         // Step 2: Enter Vehicle Data
  87  |         await VechileDataPage.enterVehicleData(data[0]);
  88  |         await VechileDataPage.trucfields(data[0]);
  89  |         await VechileDataPage.clickNext();
  90  | 
  91  |         // Step3: Enter Insurant Data
  92  |         await InsurantDataPage.enterInsurantData(data[0]);
  93  |         await InsurantDataPage.clickNext();
  94  |         
  95  | 
  96  |         // step4: Enter Product Data
  97  |         await ProductPage.EnterProductDataAuto(data[0]);
  98  |         await ProductPage.clickProductData();
  99  | 
  100 |         // Step 5: Select Price
  101 |         await pricepage.SelectPrice(data[0]);
  102 |         await pricepage.clickSendQuote();
  103 | 
  104 |         // Step:5 Send Quote:
  105 |         const username = process.env.QUOTE_USERNAME;
  106 |         const password = process.env.QUOTE_PASSWORD;
  107 | 
  108 |         await QuotePage.SendQuote(data[0]);
  109 |         await QuotePage.SendQuotebtn();
  110 | 
  111 |         await page.waitForTimeout(5000);
  112 |     
  113 | });
```