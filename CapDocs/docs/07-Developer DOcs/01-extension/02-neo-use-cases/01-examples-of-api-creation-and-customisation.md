---
title: Creating and Customising APIs
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
The Neo extension is a tool for creating and managing APIs with minimal coding effort. It allows you to perform necessary validations, transformations, and request creation using predefined blocks and executors.

This functionality enables easy creation of new APIs and customisation of existing ones, to meet brand-specific needs without requiring new API versions.

# Create new APIs

The Neo extension simplifies the process of creating new APIs with minimal coding. When creating an API, you perform validations, transform data, construct the API request, and validate the API response. The Neo extension uses predefined blocks or executors in Neo to simplify this process.\
Neo extension comes in handy when there is a brand-specific requirement to provide additional data over the existing information. You'll need to meet the requirement without affecting other brands using the existing APIs. Creating a new API version is not an option because the requirement is brand-specific.\
Neo extension allows you to create an API response using multiple existing APIs, ensuring the new requirements are met without disrupting others.

## Creating a GET API - accountSummary

Consider that there is a requirement to create a new GET API that fetches a detailed account summary of a customer using the card number. The procedure below guides you through creating the `accountSummary` API using the Neo extension.

1. **Create new dataflow**
   1. Navigate to the Neo extension UI and click **Create new dataflow**.
   2. Enter a name for the dataflow.
   3. (Optional) Create a tag.
   4. Click on the new dataflow and select the default version v1 to modify.
2. **Define API Trigger**

   Edit the **Trigger** block on the workflow canvas to define the API.\
   **API URL**: AccountSummary\
   **API Method**: GET

   ![c548b8a image7](https://files.readme.io/c548b8a-image7.png)
3. **Configure the validation rules and define code paths**

   For this API, the card number is a mandatory query parameter and the following validations are performed:

   * The query parameter field is not empty.
   * The query parameter is the card number.
   * The data type of cardNumber is a string.

   To define the validation,

   1. Click on the connector of the Trigger block and select the Schema block.

      ![cd47890 schema block getaccountdetails overview](https://files.readme.io/cd47890-schema_block_getaccountdetails_overview.png)
   2. In the **Block name** section, enter the name of the block.
   3. In the **Script** section, create a schema under the `spec `object to validate the request payload.

      ![3eb1a87 image4](https://files.readme.io/3eb1a87-image4.png)

      Complete **Script** section of the Schema block

      ```javascript
      const schema = {
        definitions: [

        ],
        spec: {
          "type": "object",
          "properties": {
            "queryParams": {
              "type": "object",
              "properties": {
                "card.number": {
                  "type": "string",
                  "isNotEmpty": true,
                  "errorMessage": {
                    isNotEmpty: "Invalid member or card search criteria provided."
                  }
                }
              },
              "required": "card.number"
            }
          },
          "required": "queryParams"
        }
      }


      export {
        schema as default
        }
      ```
   4. In the **Relations** section, use the JavaScript expressions and set the code flow path for successful and failure validation. 
      * !(getValidateError()?.length) to define the code flow path when the validation is successful and there are no errors.
      * (getValidateError()?.length) to define the code flow path when the validation is failed.

   If required, you can click **Add Path** and add more code flow paths.

   ![d51470a schema block getaccountdetails relations](https://files.readme.io/d51470a-schema_block_getaccountdetails_relations.png)

   <br />
4. **Create a Script block and execute the transformation and functions for the validation success and failure scenarios**

   * For a validation failure scenario, configure an error response for the API by adding a Script block and failure response with the status code in the **Script** section of the Script block.

     ![3721e61 image5](https://files.readme.io/3721e61-image5.png)

     Complete **Script** section for validation failure

     ```javascript
     import dao from "neo/dao";
     import logger from "neo/logger";

     const {
       getIn
     } = dao;

     const script = {

       execute: () => {

         return {
           body: {
             "isError": true,
             "data": null,
             "developerMessage": "No search values provided.",
             "userMessage": "Invalid member or card search criteria provided.",
             "moreInfo": null,
             "responseCode": 10507,
             "httpStatusCode": 400,
             "errors": null
           },
           status: 400
         };
       }
     }

     export {
       script as default
       }
     ```

     <br />
   * For a validation success scenario, use the Script block and add the code to fetch the headers and set parameters in the configuration section. This is required before configuring the API request block.

   1. In the `return` code block under the *execute* method, fetch the effective headers using the[ Data Access Object (DAO) function](https://docs.capillarytech.com/reference/neo-dao-functions), `getEffectiveHeaders`.
   2. Set the query parameters fetched from the request using the function, *getOut*().

   ![f4c6078 script block validation success script](https://files.readme.io/f4c6078-script_block_validation_success_script.png)

   Complete **Script** section to set the data for validation success scenario

   ```javascript
   import dao from "neo/dao";
   import logger from "neo/logger";

   const {
     getBody,
     getEffectiveHeaders,
     getIn,
     getOut
   } = dao;

   const script = {

     execute: () => {

       return {

         headers: getEffectiveHeaders(),
         queryParams: {
           "identifierName": "externalId",
           "identifierValue": getOut()?.queryParams["card.number"]
         }
       };

     }
   }

   export {
     script as default
     }
   ```
5. **Create API request and post API validation**

   After configuring the headers and parameters for a validation success scenario, use the API request block to create the API request. Specify the method, URL, query parameters, body, and path parameters within the API block.\
   To configure the API request, enter the parameters in key-value pair.\
   **Method** -` GET`\
   **URL**-` https\://{host}/v2/customers/lookup/custom`\
   **Query parameter** -

   * Source: `INSTORE`
   * Embed: `POINTS, CUSTOMERSTATUS`

   ![21705b9 apirequest block overview](https://files.readme.io/21705b9-apirequest_block_overview.png)

   If required, you can use expressions in the **Relations** section and further set the code path for different error and success conditions using script blocks. For instance, you can add error codes for the `getAccountSummary` API call: 401, 498, 8015.
6. **Save the workflow**\
   To save the workflow, click **Save**.
7. **Test API**\
   To test the API, execute the API from an API platform and check the response.

   Below is the screenshot showing the complete flow.

   ![94c5b53 getAccountSummary canvas](https://files.readme.io/94c5b53-getAccountSummary_canvas.png)

## Creating a POST API

Consider a requirement to insert data into the CMS collection in Mongo DB. This dataflow is triggered using the POST method. The procedure below guides you through creating the `addcontent` API using the Neo extension.

1. **Create dataflow**
   1. On the Neo extensions UI, click **Create new dataflow**.
   2. Enter **Name** and **Tags**(optional).
   3. Click **Done**.
2. **Define API Trigger**
   1. Open the version of the dataflow that needs editing.\
      **Note**: A new dataflow will have only v1 version.
   2. Edit the Trigger block present on the canvas to define the API.
   3. In the **API method** drop-down, select POST.
   4. Enter **API url** as `addcontent`.
3. **Create a Script block to extract data from the request and set the headers and body**

   1. In the **Scripts** section, write the `execute` method and extract the body from the API request using the [DAO function](https://docs.capillarytech.com/reference/neo-dao-functions) `getApiRequest`.
   2. Extract the `promotionId` and `metaData` from the request body.
   3. Construct a Mongo query based on the fields `promotionId` and `metaData`.
   4. Fetch the headers using the[ DAO function](https://docs.capillarytech.com/reference/neo-dao-functions) `getEffectiveHeaders`.

      ![c044d24 image11](https://files.readme.io/c044d24-image11.png)

      Complete **Script** section extract data from the request and set the headers and body

      ```javascript
      import dao from "neo/dao";
      import logger from "neo/logger";
      const {
        getBody,
        getEffectiveHeaders,
        getIn,
        getOut,
        getApiRequest
      } = dao;


      const script = {

        execute: () => {
           const requestBody = getApiRequest().body;
          const mongoQuery = {
            promotionId: requestBody.promotionId,
            metaData: requestBody.metaData
          };
           return {
            headers: getEffectiveHeaders(),
            status : 200,
            body: {
              "query" : JSON.stringify(mongoQuery),
            }
          };
           }
      }

      export {
        script as default
        }
      ```

      <br />
4. **Insert data into the Mongo DB using the Put Mongo block**\
   After configuring the headers and constructing the Mongo query, use the Put Mongo block to insert the data. Enter the following details in the fields:\
   **Mode**: Insert\
   **Query**: `${getBody().query}`\
   **Query Key**: \{}

![68c0ab1 put mongo POST step4](https://files.readme.io/68c0ab1-put_mongo_POST_step4.png)

5. **Save the workflow**\
   To save the workflow, click **Save**.
6. **Test API**\
   To test the API, execute the API from an API platform and check the response.\
   Below is the screenshot of the complete dataflow.

![281703a post complete datafow](https://files.readme.io/281703a-post_complete_datafow.png)

# Customise existing APIs

You can enhance existing APIs to add new functionalities using Neo extensions. These extensions allow you to modify or extend an API’s capabilities, enabling you to achieve new functions without building a new API from scratch.

## Customising API or wrapping multiple APIs

Consider that there is a requirement to add loyalty points to a customer. Two API calls are required to update the loyalty points. The first is a GET call on `/lookup/customerDetails` API to retrieve customer data; the second is a POST on `/addRequest` API.\
The procedure below guides you through creating the request using the Neo extension.

1. **Create dataflow**
   1. On the Neo extensions UI, click **Create new dataflow**.
   2. Enter a **Name** and **Tags**(optional).
   3. Click **Done**.
2. **Define API Trigger**
   1. Open the version of the dataflow that needs editing.
   2. Open the Trigger block present on the canvas to define the API.
   3. Enter **API method** as POST.
   4. Enter **API url** as `awardLoyaltyCurrency`.
3. **Configure the validation rules and define code paths**\
   For this API, the `card number` and `CurrencyAmount` are mandatory query parameters and the following validations are performed:

   * The query parameter fields are not empty.
   * The query parameters are `cardNumber` and `CurrencyAmount`.
   * The data type of `cardNumber` and `CurrencyAmount `is a *string*.\
     To define the validation,

   1. Click on the output of the Trigger block and select **Schema** in the popup window.
   2. Click on edit to open the Schema block.
   3. In the **Block name** section, enter the name of the block.
   4. In the **Script** section, create a schema to validate the request payload.

      ![af6d326 image10](https://files.readme.io/af6d326-image10.png)

      Complete **Script** section to create a schema to validate the request payload

      ```javascript
      {
        "definations": [],
        "spec": {
          "type": "object",
          "properties": {
            "queryParams": {
              "type": "object",
              "properties": {
                "card.number": {
                  "type": "string",
                  "isNotEmpty": true,
                  "errorMessage": {
                    "isNotEmpty": "cardNumber.IsEmpty"
                  }
                },
                "options.LoyaltyEvent": {
                  "type": "string"
                },
                "options.LoyaltyCurrency": {
                  "type": "string"
                },
                "options.CurrencyAmount": {
                  "type": "string",
                  "isNotEmpty": true,
                  "errorMessage": {
                    "isNotEmpty": "currencyAmount.IsEmpty"
                  }
                },
                "options.TransactionDate": {
                  "type": "Date"
                },
                "options.ExpirationDate": {
                  "type": "Date"
                },
                "options.ChangedBy": {
                  "type": "string"
                }
              },
              "required": ["card.number",
                "options.CurrencyAmount"],
              "errorMessage": {
                "minProperties": "param.minProperties"
              }
            }
          },
          "required": "queryParams"
        }

      }
      ```

      <br />
   5. In the **Relations** section, use JavaScript expressions and set the code flow path for the successful and failure validation.
      * !(getValidateError()?.length) to define the code flow path when the validation is successful and there are no errors.
      * (getValidateError()?.length) to define the code flow path when the validation is failed.\
        If required, you can click **Add Path** and add more code flow paths.
4. **Create a Script block and execute the transformation and functions for the validation success and failure scenarios**

   1. For a validation failure scenario, add a Script block and failure response with the status code in the Script section of the **Script** block.\
      Complete **Script** block for handling validation failure

      ```javascript
      import dao from "neo/dao";
      import logger from "neo/logger";

      const {
        getIn,
        getOut
      } = dao;

      const randString = () => {
        return `${genRand(8)}-${genRand(4)}-${genRand(4)}-${genRand(4)}-${genRand(4)}${genRand(4)}${genRand(4)}`
      };

      const genRand = (len) => {
        return Math.random().toString(36).substring(2, len + 2);
      };

      const failedResponse = (developerMessage, userMessage, responseCode, httpStatusCode, error, requestId) => {
        return {
          "isError": true,
          "data": null,
          "developerMessage": developerMessage,
          "userMessage": userMessage,
          "moreInfo": null,
          "responseCode": responseCode,
          "httpStatusCode": httpStatusCode,
          "errors": error,
          "requestId": requestId
        }
      };

      const script = {
        execute: () => {
          const resp = getIn();
          const message = resp?.error?.validate[0]?.message;

          let validation = {
            isError: false
          };

          if (message === "cardNumber.IsEmpty") {
            validation = failedResponse("No card id provided for member lookup.", "The application has encountered an error. Please try again later.", 10400, 400, null, randString())
          }

          if (message === "currencyAmount.IsEmpty") {
            validation = failedResponse("0 points were requested.  Loyalty currency cannot be 0", "0 points were requested.  Loyalty currency cannot be 0", 3313, 400, null, randString())
          }

          if (message === "param.minProperties") {
            validation = failedResponse("query param card number/ currency amount is required", "", 10400, 400, null, randString())
          }

          return {
            body: validation,
            status: 400
          }

        }

      }

      export {
        script as default
        }
      ```

      <br />
   2. For a validation success scenario, use the script block and add the code to fetch the headers and set parameters in the configuration section. This is required before configuring the API request block.

      1. In the **Scripts** section, write a `return `code block under the `execute `method, and fetch the effective headers using the [Data Access Object (DAO) function](https://docs.capillarytech.com/reference/neo-dao-functions), `getEffectiveHeaders`.
      2. Set the query parameters fetched from the request payload using the function, `getOut()`.
      3. Use the `iibCoupenReqRestucture()`for data restructuring.\
         Complete **Script** block for validation success scenario

         ```javascript
         import dao from "neo/dao";
         import logger from "neo/logger";

         const {
           getBody,
           getEffectiveHeaders,
           getIn,
           getOut
         } = dao;

         const script = {

           execute: () => {

             return {
               headers: getEffectiveHeaders(),
               queryParams: {
                 "identifierName": "externalId",
                 "identifierValue": getOut()?.queryParams["card.number"]
               }
             };

           }
         }

         export {
           script as default
           }
         ```
5. **Create API request and post API validation**\
   After configuring the headers and parameters for a validation success scenario, use the API request block to create the API request. Specify the method, URL, query, body, and path parameters within the API block.\
   To configure the API request, in the Script section, set the following:\
   **Method** - GET\
   **URL**- `https:/{host}/v2/customers/lookup/customerDetails`\
   **Query parameter** -
   * Source: INSTORE
   * Embed: POINTS, CUSTOMERSTATUS.

This API extracts the customer details. The fields from the API response are used to create the payload for the `addRequest` API.\
You can use the JavaScript and API Request block to make subsequent calls and handle errors.

In the **Relations** section, you can use expressions and set the code path for different error and success conditions using Script blocks. For instance, you can add error codes for the `getcustomerDetails` API call: 401, 498, 8015.

6. **Save the workflow**\
   To save the workflow, click **Save**.
7. **Test API**\
   To test the API, execute the API from an API platform and check the response.

The screenshot below shows the complete configuration of the API.

![36a5026 image12](https://files.readme.io/36a5026-image12.png)
