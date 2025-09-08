---
title: Postman Collections
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Getting Started

Postman is one of the most popular testing tools used for API testing. You can use the tool to create, test, and run APIs.  

We have created the Postman collections with our APIs. You can go through all the API entities, and import the collections into your own workspace. 

Run and test the APIs to see how to use them effectively according to your use case.

## Import Collections and Run APIs

The following steps guide you how to import Collections and run APIs on Postman.

1. Click on the "Run in Postman" button below. It will redirect you to postman's website.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.postman.co/run-collection/c746973fee3e44602111?action=collection%2Fimport)

2. Choose whether to use the Postman web application or the installed application (Postman for Windows) 

![21222f0 postman 1](https://files.readme.io/21222f0-postman_1.jpg)

3. Now, import the Capillary API Collection to a separate workspace on postman. Name the workspace. 

![c51ddac postman 2](https://files.readme.io/c51ddac-postman_2.jpg)

4. Once the collection is imported into your workspace, you will see the 4 major entities i.e "**Customer**,  **Transaction**, **Points**, and **Coupon**". Each of these entities has some endpoints. 

<Image title="postman 3.jpg" alt={1366} border={true} src="https://files.readme.io/6d60b86-postman_3.jpg">
  This is what your workspace would look like once the collections are imported.
</Image>

5. Now to test and use these endpoints, first, you will have to authorize them with the help of the access token.\
      To generate an access token, go to the **OAuth** endpoint, it opens in a new tab. In **Body** enter your key and secret. and click on **Send** .\
   The `accessToken`is generated if a valid key and secret are entered.

![a2ec5df postman 4](https://files.readme.io/a2ec5df-postman_4.jpg)

6. To authorize any other API endpoint, click on that endpoint > Go to **Headers** > Enter the `accessToken` generated in front of the `X-CAP-API-OAUTH-TOKEN`.

![b14044e postman 5](https://files.readme.io/b14044e-postman_5.jpg)

## List of APIs included in Collection

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Collections
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Customer API collection
      </td>
    </tr>

    <tr>
      <td>
        Transaction API collection
      </td>
    </tr>

    <tr>
      <td>
        Points API collection
      </td>
    </tr>

    <tr>
      <td>
        Coupon API collection
      </td>
    </tr>
  </tbody>
</Table>
