---
title: Trigger Block
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The **Trigger Block** is the starting point of the dataflow, where you can configure the dataflow with the API method type (e.g., POST, GET) and a custom API endpoint.

Once configured, the API cURL is created based on the configuration here. You can use either the API cURL or the endpoint to invoke the dataflow. The trigger block appears automatically after you create the dataflow.

## Configuring the Trigger Block

To configure the block,

1. From the dataflow canvas, hover on the Trigger Block and click on the edit icon.
2. In the **API Method** field, select the HTTP method (GET, POST, or PUT).
3. In the **API URL** field, enter the unique endpoint for the dataflow.
4. *(optional)* To include a path parameter in the URL, prefix the variable name with a colon (`:`). For example, to include `customerId` as a path parameter, write it as `:customerId` in the URL. Use path parameters when you work with APIs that support dynamic values in the URL. This is helpful when making multiple API calls that have different values, such as different customer IDs. Instead of creating a separate cURL command for each value, you can reuse the same endpoint by replacing the path parameter.
5. Click **Done.**

   ![d2517d21e9db693b6fff924188c6c78bbdb02dbd80e536210597197b295bd637 Screen Recording Jul 1 2025 from ezgif](https://files.readme.io/d2517d21e9db693b6fff924188c6c78bbdb02dbd80e536210597197b295bd637-Screen_Recording_Jul_1_2025_from_ezgif.gif)

For example, the below API cURL is created based on the configuration provided in the above image (API method-  `POST`, path parameter - `:customerId` and the API url - `tierForceUpgrade)`.

```json Trigger cURL

        curl --location --request POST 'https://eu.api.capillarytech.com/x/neo/:customerId/tierUpgrade' \
        --header 'Content-Type: application/json' \
        --header 'x-cap-api-oauth-token: {token}' \
        --header 'x-cap-neo-test-variant-id: b48ddaab-a9d1-4419-b6cf-0a98d2596315' \
        --header 'x-cap-neo-dag-scope: org' 
--data-raw '{
      "data": "add your json object here"
      }'
```