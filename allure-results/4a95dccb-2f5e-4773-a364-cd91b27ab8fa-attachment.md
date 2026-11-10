# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Api.spec.ts >> Post New Coffee to the Server
- Location: tests\Api.spec.ts:21:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: true
```

# Test source

```ts
  1  | // WSDL Data
  2  | 
  3  | import {test, expect} from '@playwright/test'
  4  | 
  5  | test("Get the Calculator", async({request})=>{
  6  | 
  7  |     const responce = await request.get('https://webservice.toscacloud.com/soap11/Calculator.svc?wsdl');
  8  | 
  9  |     // console.log(responce);
  10 |     console.log("********Status Code:", responce.status());
  11 | 
  12 |     // Responce header:
  13 |     console.log("****headers:", responce.headers());
  14 | 
  15 |     console.log("******ReponceBody ", responce.body());
  16 | 
  17 |     expect(responce.status()).toBe(200);
  18 | });
  19 | 
  20 | // REST Services
  21 | test("Post New Coffee to the Server", async({request})=>{
  22 |    const responce =  await request.post('https://webservice.toscacloud.com/api/v1/Coffees',
  23 |         {
  24 |             data:{
  25 |                   "description": "new Coffee Details in HYD",
  26 |                   "id": 1,
  27 |                   "name": "BlackCoffeee"
  28 |                 }
  29 |     });
  30 | 
  31 |     console.log('status', responce.status());
  32 | 
  33 |     // Validate Responce:
> 34 |     expect(responce.ok()).toBe(200);    
     |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  35 | 
  36 |     const responceBody = await responce.json();
  37 | 
  38 |     console.log("Responce Body", responceBody);
  39 | 
  40 |     console.log("Description", responceBody.description);
  41 |     console.log("Dynamic ID", responceBody.id);
  42 |     console.log("name", responceBody.name);
  43 | });
```