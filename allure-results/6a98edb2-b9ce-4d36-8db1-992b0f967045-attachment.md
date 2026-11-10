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
            - link "Enter Product Data 6" [ref=f1e47]:
              - /url: "#"
              - text: Enter Product Data
              - generic [ref=f1e48]: "6"
          - listitem [ref=f1e49]:
            - link "Select Price Option 1" [ref=f1e50] [cursor=pointer]:
              - /url: "#"
              - text: Select Price Option
              - generic [ref=f1e51]: "1"
          - listitem [ref=f1e52]:
            - link "Send Quote 4" [ref=f1e53] [cursor=pointer]:
              - /url: "#"
              - text: Send Quote
              - generic [ref=f1e54]: "4"
      - generic [ref=f1e56]:
        - text:  
        - generic [ref=f1e57]:
          - generic [ref=f1e58]:
            - generic [ref=f1e59]: Start Date
            - textbox "MM/DD/YYYY" [ref=f1e60]
            - button "" [ref=f1e61] [cursor=pointer]
            - generic [ref=f1e63] [cursor=pointer]
          - generic [ref=f1e64]:
            - generic [ref=f1e65]: Insurance Sum [$]
            - combobox [ref=f1e66] [cursor=pointer]:
              - option "– please select –" [selected]
              - option "3.000.000,00"
              - option "5.000.000,00"
              - option "7.000.000,00"
              - option "10.000.000,00"
              - option "15.000.000,00"
              - option "20.000.000,00"
              - option "25.000.000,00"
              - option "30.000.000,00"
              - option "35.000.000,00"
            - generic [ref=f1e67] [cursor=pointer]
          - generic [ref=f1e68]:
            - generic [ref=f1e69]: Merit Rating
            - combobox [ref=f1e70] [cursor=pointer]:
              - option "– please select –" [selected]
              - option "Super Bonus"
              - option "Bonus 1"
              - option "Bonus 2"
              - option "Bonus 3"
              - option "Bonus 4"
              - option "Bonus 5"
              - option "Bonus 6"
              - option "Bonus 7"
              - option "Bonus 8"
              - option "Bonus 9"
              - option "Malus 10"
              - option "Malus 11"
              - option "Malus 12"
              - option "Malus 13"
              - option "Malus 14"
              - option "Malus 15"
              - option "Malus 16"
              - option "Malus 17"
            - generic [ref=f1e71] [cursor=pointer]
          - generic [ref=f1e72]:
            - generic [ref=f1e73]: Damage Insurance
            - combobox [ref=f1e74] [cursor=pointer]:
              - option "– please select –" [selected]
              - option "No Coverage"
              - option "Partial Coverage"
              - option "Full Coverage"
            - generic [ref=f1e75] [cursor=pointer]
          - generic [ref=f1e76]:
            - generic [ref=f1e77]: Optional Products
            - paragraph [ref=f1e78]:
              - generic [ref=f1e79] [cursor=pointer]:
                - checkbox "Euro Protection" [ref=f1e80]
                - text: Euro Protection
              - generic [ref=f1e82] [cursor=pointer]:
                - checkbox "Legal Defense Insurance" [ref=f1e83]
                - text: Legal Defense Insurance
            - generic [ref=f1e85] [cursor=pointer]
          - generic [ref=f1e86]:
            - generic [ref=f1e87]: Courtesy Car
            - combobox [ref=f1e88] [cursor=pointer]:
              - option "– please select –" [selected]
              - option "No"
              - option "Yes"
            - generic [ref=f1e89] [cursor=pointer]
          - generic [ref=f1e90]:
            - button "« Prev" [ref=f1e92] [cursor=pointer]
            - button "Next »" [ref=f1e93] [cursor=pointer]
        - text:       
    - generic [ref=f1e96]:
      - navigation [ref=f1e97]:
        - link "About" [ref=f1e98] [cursor=pointer]:
          - /url: http://www.tricentis.com/about
        - link "Products" [ref=f1e99] [cursor=pointer]:
          - /url: http://www.tricentis.com/tricentis-tosca-testsuite
        - link "Events & Webinars" [ref=f1e100] [cursor=pointer]:
          - /url: http://www.tricentis.com/events-webinars
        - link "Resources" [ref=f1e101] [cursor=pointer]:
          - /url: http://www.tricentis.com/resources
        - link "Services" [ref=f1e102] [cursor=pointer]:
          - /url: http://www.tricentis.com/services
      - generic [ref=f1e103]:
        - link "" [ref=f1e104] [cursor=pointer]:
          - /url: https://www.facebook.com/TRICENTIS
        - link "" [ref=f1e106] [cursor=pointer]:
          - /url: https://twitter.com/Tricentis
        - link "" [ref=f1e108] [cursor=pointer]:
          - /url: https://plus.google.com/108151335013813449490/posts
      - generic [ref=f1e110]: Copyright 2021 by Tricentis GmbH. All rights reserved.
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
> 41  | await page.waitForTimeout(5000);
      |            ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
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
  52  |     await page.waitForTimeout(5000);
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