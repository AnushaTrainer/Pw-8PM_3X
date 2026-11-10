// WSDL Data

import {test, expect} from '@playwright/test'
import process from 'node:process';

test("Get the Calculator", async({request})=>{

    const responce = await request.get('https://webservice.toscacloud.com/soap11/Calculator.svc?wsdl');

    // console.log(responce);
    console.log("********Status Code:", responce.status());

    // Responce header:
    console.log("****headers:", responce.headers());

    console.log("******ReponceBody ", responce.body());

    expect(responce.status()).toBe(200);
});

// REST Services
test("Post New Coffee to the Server", async({request})=>{
   const responce =  await request.post('https://webservice.toscacloud.com/api/v1/Coffees',
        {
            data:{
                  "description": "new Coffee Details in HYD",
                  "id": 1,
                  "name": "BlackCoffeee"
                }
    });

    console.log('status', responce.status());

    // Validate Responce:
    expect(responce.ok()).toBeTruthy();    

    const responceBody = await responce.json();

    console.log("Responce Body", await responceBody);

    console.log("Description: ", await responceBody.description);
    console.log("Dynamic ID: ", await responceBody.id);
    console.log("name:", await responceBody.name);
});

test("New Coffee the Service Key", async({request})=>{
    const responce = await request.post('api/training/Coffees', {
        params: {
            "key": process.env.SERVICE_KEY!,
       
        },
         data:{
                  "description": "new Coffee Details in HYD",
                  "id": 1,
                  "name": "BlackCoffeee"
             }  

    });

    console.log(process.env.SERVICE_KEY!)
    console.log(responce.status());

    const responceBody = await responce.json();

    console.log(responceBody);

    console.log(responceBody.description);
    console.log(responceBody.id);
    console.log(responceBody.name);

});

