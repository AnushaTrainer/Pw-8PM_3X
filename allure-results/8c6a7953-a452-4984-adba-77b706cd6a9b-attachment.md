# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Api.spec.ts >> New Coffee the Service Key
- Location: tests\Api.spec.ts:46:5

# Error details

```
SyntaxError: Unexpected token 'S', "System.Exc"... is not valid JSON
```

# Test source

```ts
  1  | // WSDL Data
  2  | 
  3  | import {test, expect} from '@playwright/test'
  4  | import process from 'node:process';
  5  | 
  6  | test("Get the Calculator", async({request})=>{
  7  | 
  8  |     const responce = await request.get('https://webservice.toscacloud.com/soap11/Calculator.svc?wsdl');
  9  | 
  10 |     // console.log(responce);
  11 |     console.log("********Status Code:", responce.status());
  12 | 
  13 |     // Responce header:
  14 |     console.log("****headers:", responce.headers());
  15 | 
  16 |     console.log("******ReponceBody ", responce.body());
  17 | 
  18 |     expect(responce.status()).toBe(200);
  19 | });
  20 | 
  21 | // REST Services
  22 | test("Post New Coffee to the Server", async({request})=>{
  23 |    const responce =  await request.post('https://webservice.toscacloud.com/api/v1/Coffees',
  24 |         {
  25 |             data:{
  26 |                   "description": "new Coffee Details in HYD",
  27 |                   "id": 1,
  28 |                   "name": "BlackCoffeee"
  29 |                 }
  30 |     });
  31 | 
  32 |     console.log('status', responce.status());
  33 | 
  34 |     // Validate Responce:
  35 |     expect(responce.ok()).toBeTruthy();    
  36 | 
  37 |     const responceBody = await responce.json();
  38 | 
  39 |     console.log("Responce Body", await responceBody);
  40 | 
  41 |     console.log("Description: ", await responceBody.description);
  42 |     console.log("Dynamic ID: ", await responceBody.id);
  43 |     console.log("name:", await responceBody.name);
  44 | });
  45 | 
  46 | test("New Coffee the Service Key", async({request})=>{
  47 |     const responce = await request.post('api/training/Coffees', {
  48 |         params: {
  49 |             "key": process.env.SERVICE_KEY!,
  50 |        
  51 |         },
  52 |          data:{
  53 |                   "description": "new Coffee Details in HYD",
  54 |                   "id": 1,
  55 |                   "name": "BlackCoffeee"
  56 |              }  
  57 | 
  58 |     });
  59 | 
  60 |     console.log(process.env.SERVICE_KEY!)
  61 |     console.log(responce.status());
  62 | 
> 63 |     const responceBody = await responce.json();
     |                          ^ SyntaxError: Unexpected token 'S', "System.Exc"... is not valid JSON
  64 | 
  65 |     console.log(responceBody);
  66 | 
  67 |     console.log(responceBody.description);
  68 |     console.log(responceBody.id);
  69 |     console.log(responceBody.name);
  70 | 
  71 | });
  72 | 
  73 | 
```