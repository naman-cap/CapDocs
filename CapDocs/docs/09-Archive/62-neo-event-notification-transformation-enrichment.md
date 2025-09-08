---
title: Event Notification Enrichment
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
# Requirement

A brand requires the current tier information when a customer is created. The customerAdded event is triggered when a customer signs up and includes details such as the customer's first name, last name, and customer ID. However, the brand also needs additional attributes, such as the customer tier, which are not included in the initial payload.

# Solution

To address this, create a Neo dataflow to enrich the customerAdded event as the input. The dataflow calls the [Get Customer Details](https://docs.capillarytech.com/reference/get-customer-details)API to retrieve the customer's tier information and incorporates it into the event schema payload, thereby enriching the customerAdded event.

## Step One: Create a Neo Dataflow to Enrich the Event

Create a Neo dataflow that, 

1. Uses the customerAdded event as the input. 
2. Retrieves the customer's tier information using the [Get Customer Details](https://docs.capillarytech.com/reference/get-customer-details) API.

Create a webhook from the [Event Notification UI](https://docs.capillarytech.com/docs/add-event-notification-account).

## Step Two: Create Webhook

## Step Three: Update the Webhook

<br />

<br />

<br />

<br />

You can create a Neo dataflow to modify event data before sending it to downstream applications. This allows you to:

* control which parts of the event notification payload are delivered, sending only the necessary data to the end user while avoiding redundant or unwanted information 
* send additional information along with the standard payload

# Event  Notification Transformation

You can use Neo to transform the event data to include only the required information from the standard event notification payload.

## Example Scenario:

Suppose you want to send only the `apiRequestId` and `eventName` from the "Customer Added" event, along with additional customer details retrieved using the *Get Customer Details* API. 

### Detailed Procedure

## 1. Create a webhook

Create a webhook and configure the Event notification in the Events Notification UI.\
Refer to the[ Webhook creation and Event notification](https://docs.capillarytech.com/docs/add-event-notification-account).

## 2. Create Neo Dataflow

You need to create a Neo dataflow that collects information from the "Customer Added" event, transforms the data to extract only the `apiRequestId` and `eventName` from the event payload, and includes the customer details retrieved from the *Get Customer Details* API.\
Follow the steps below to create the Neo dataflow in the Neo Extensions UI.

1. **Create new dataflow**
   1. Go to the Neo extension UI and click **Create new dataflow**.
   2. Enter a name for the dataflow.
   3. Enter the tag name as `connectplus`.\
      **Note**: Only the dataflows with the tag `connectplus` can be retrieved through GET v3/webHooks API.
   4. Click **Done**.
   5. In the  Neo extension UI, select the dataflow you created.
   6. On the dataflow page, click on version v1.\
      **Note**:  A new dataflow has only version v1.
2. **Define an API Trigger**
   1. Open the version of the dataflow you want to edit.
   2. Modify the **Trigger** block on the canvas to configure the API.
   3. Set the API method to `POST`.
   4. Enter **API url**.
   5. Click **Done**.
3. **Create a Java script block to set the headers and fetch the path parameter**\
   Use the Java Script block to set headers and retrieve the path parameter.

   1. Enter the block name in **Block name.**
   2. In the **Script** section, implement the `execute `method and set the headers using the `dao.getEffectiveHeaders()` function.
   3. Use the `dao.getBody`() function to extract the customer identifier and set it as the path parameter.
   4. In the **Combine inputs to this block using** section, select the radio button for `AND `operator as the block depends on the output of the previous block.
   5. Click **Done**.\
      The following is the code snippet illustrating the Java Script block.

      ```json Java Script block
      import dao from "neo/dao";
      import logger from "neo/logger";


      const {
        getBody,
        getEffectiveHeaders,
        getIn,
        getApiRequest,
        getOut
      } = dao;




      const script = {


        execute: () => {




          return {
            body:getBody(),
            headers: getEffectiveHeaders(),
            pathParams:{
                customerId:getBody().data.customerIdentifiers.customerId
            }
          };


        }
      }


      export {
        script as default
        }
      ```

      <br />
4. **Create API request**\
   After setting up the headers and parameters, use the API Request block to call the API. Configure the following details within the block:

   1. Enter the name in **Block name**.
   2. Set the following:\
      **Method**: GET\
      **URL** : https\://\{host}/v2/customers/\{customerId}
   3. Enter the **Query Parameters** in the key-value pairs.\
      source Key - source\
      source - INSTORE
   4. In the **Combine inputs to this block using** section, select the radio button for the AND operator as the block depends on the output of the previous block.
   5. Click **Done**.

      ![8a170653d0ec4fd6fa5eb772ced5306d463580fc0ad28e267507680942622d8e image3](https://files.readme.io/8a170653d0ec4fd6fa5eb772ced5306d463580fc0ad28e267507680942622d8e-image3.png)
5. **Create a Java script block to transform data**\
   Use the Java script block, create an `execute `block to fetch the output of the previous Java script block `Pipe `and the API request block `fetchCustomer `. Retrieve the data in the `body `of the `return `block.

   1. Enter the name in **Block name**.
   2. Modify the **Script** section to fetch output from the previous blocks and transform the data.\
      Following is the code snippet in the **Script** section.

      ```json
      import dao from "neo/dao";
      import logger from "neo/logger";
      //This are some dao methods already imported. Other methods on dao you can use by typing `dao.` and editor will suggest few available methods.
      const {
          getBody,
          getEffectiveHeaders,
          getIn,
          getApiRequest,
          getOut,
      } = dao;




      const script = {


          execute: () => {


              //Write your code here.


              //Inside return object, you can provide body, headers etc.
              let enrichedBody = getBody('pipe')
              let customerDetails = getBody('fetchCustomer')
              return {
                  body: {
                      apiRequestId:enrichedBody.apiRequestId,
                      eventName:enrichedBody.eventName,
                      customerDetails:customerDetails
                  }
              };


          }
      }


      export {
          script as default
      }

      ```

      <br />
   3. In the **Combine inputs to this block using** section, select the radio button for the `AND `operator as the block depends on the output of the previous block.
   4. (Optional) In the **Relations** section, you can use the DAO functions and set the code path for different error and success conditions.
   5. Click **Done**.
6. **Save the workflow**\
   To save the workflow, click **Save**.
7. **Test API**\
   To test the API, execute the API from an API platform and check the response.

![266e7489ad2b124e6451d26632271a03538cbf4909e3ee8d4f636a1a567a4c78 image1](https://files.readme.io/266e7489ad2b124e6451d26632271a03538cbf4909e3ee8d4f636a1a567a4c78-image1.png)

## 3. Update v3/webhook with Neo enrichment data

You need to update Neo enrichment data through APIs, as the UI currently doesn’t support event enrichment through the **[Event Notification](https://docs.capillarytech.com/docs/add-event-notification-account)** UI. The `v3/webHooks` API populates the enrichment data in the UI.

To update the API,

1. Open an API testing tool like Postman, or Talend.
2. To authenticate, fill in the credentials.
3. **Fetch Existing Webhook Data**\
   Perform a `GET` on `v3/webHooks` to retrieve all event-related information.\
   **API endpoint example**- https\://\{host\_name}/v3/webHooks
4. **Extract Event Information**\
   From the response payload, locate the array of the desired event.\
   Sample Response for `GET v3/webHooks` showing the event schema payload for the event - `customerAdded`

   ```json
   {
               "attribution": {
                   "createdOn": "2024-08-04T16:10:53.689+0530",
                   "lastUpdatedOn": "2024-09-20T11:45:47.702+0530",
                   "lastUpdatedBy": {
                       "id": 50032854,
                       "code": "till.01",
                       "description": "",
                       "name": "till.01",
                       "type": "TILL"
                   },
                   "createdBy": {
                       "id": 50685380,
                       "code": "abc@capillarytech.com",
                       "description": "",
                       "name": "A V",
                       "type": "ADMIN_USER"
                   }
               },
               "webHookId": "66af5ab51a173a0007c1a793",
               "name": "customerAdded",
               "eventNames": [
                   "customerAdded"
               ],
               "webHookUrl": "https://eotbuq9u95mdyki.m.pipedream.net",
               "webHookType": "HTTP",
               "methodType": "POST",
               "webHookHeaders": {
                   "test": "test"
               },
               "noOfRetryAttempts": 0,
               "maxAllowedConnections": 20,
               "active": true,
               "slaInSeconds": 30,
               "consumerGroupId": "183b83c4-6b94-4d3c-8a73-0da39a2f4c85",
               "tillDetailsEnrichmentEnabled": false,
               "storeDetailsEnrichmentEnabled": false,
               "customerIdentifiersToBeEnriched": [],
               "awardedReferenceEnrichmentEnabled": false,
               "availablePointsBalanceEnrichmentEnabled": false,
               "possibleValues": [
                   {
                       "label": "DIYtest",
                       "value": "http://neo-a.default:3000/api/v1/xto6x/execute/diycustomerAdd"
                   },
                   {
                       "label": "Automation_CONNECTPLUS",
                       "value": "http://neo-a.default:3000/api/v1/xto6x/execute/automation"
                   },
                   {
                       "label": "PipeDream_CONNECTPLUS",
                       "value": "http://neo-a.default:3000/api/v1/xto6x/execute/pipdream"
                   }
               ]
           }

   ```

   The `possibleValues `array shows the Neo dataflows created with the `connectplus `tag.
5. **Update the Neo Information**

   Use the `PUT v3/webHooks` API to update the `neoEnrichment `array for the `customerAdded `event. Select the appropriate Neo dataflow from the `possibleValues `array retrieved earlier.\
   The description of the parameters in the `neoEnrichment `array is as follows:\
   **label**- Name of the Neo dataflow\
   **Value** - Neo endpoint URL

   **API endpoint example** - https\://\{host\_name}/v3/webHooks/66af5ab51a173a0007c1a793

   Sample `neoEnrichment` array

   ```json
   neoEnrichment": {
                   "label": "PipeDream_CONNECTPLUS",
                   "value": "http://neo-a.default:3000/api/v1/xto6x/execute/pipdream"
               }

   ```

   Example input payload for `PUT v3/webHooks`

   ```json
   {
     "webHookId": "66af5ab51a173a0007c1a793",
     "name": "customerAddTest",
     "eventNames": [
       "customerAdded"
     ],
     "webHookUrl": "https://eotbuq9u95mdyki.m.pipedream.net",
     "webHookType": "HTTP",
     "methodType": "POST",
     "webHookHeaders": {
       "test": "test"
     },
     "noOfRetryAttempts": 0,
     "maxAllowedConnections": 20,
     "active": true,
     "slaInSeconds": 30,
     "consumerGroupId": "183b83c4-6b94-4d3c-8a73-0da39a2f4c85",
     "tillDetailsEnrichmentEnabled": false,
     "storeDetailsEnrichmentEnabled": false,
     "customerIdentifiersToBeEnriched": [
     ],
     "awardedReferenceEnrichmentEnabled": false,
     "availablePointsBalanceEnrichmentEnabled": false,
     "neoEnrichment": {
       "label": "PipeDream_CONNECTPLUS",
       "value": "http://neo-a.default:3000/api/v1/xto6x/execute/pipdream"
     }
   }

   ```

   Sample success response of `PUT v3/webHooks` on adding the `neoEnrichment `array.

   ```json
   {
       "data": {
           "attribution": {
               "createdOn": "2024-08-04T16:10:53.689+0530",
               "lastUpdatedOn": "2024-10-18T14:57:43.799+0530",
               "lastUpdatedBy": {
                   "id": 50032854,
                   "code": "till.01",
                   "description": "",
                   "name": "till.01",
                   "type": "TILL"
               },
               "createdBy": {
                   "id": 50685380,
                   "code": "ankit.verma@capillarytech.com",
                   "description": "",
                   "name": "Ankit Verma",
                   "type": "ADMIN_USER"
               }
           },
           "webHookId": "66af5ab51a173a0007c1a793",
           "name": "customerAddTest",
           "eventNames": [
                         "customerAdded",
               ],
           "webHookUrl": "http://intouch-api-v3.default",
           "webHookType": "HTTP",
           "methodType": "POST",
           "webHookHeaders": {
               "Authorization": "Basic Q2FwaWxsYXJ5OklVTmhjR2xzYkdGeWVVQTROekl5",
               "Content-Type": "application/json"
           },
           "noOfRetryAttempts": 0,
           "maxAllowedConnections": 10,
           "active": true,
           "slaInSeconds": 150,
           "consumerGroupId": "183b83c4-6b94-4d3c-8a73-0da39a2f4c85",
           "tillDetailsEnrichmentEnabled": false,
           "storeDetailsEnrichmentEnabled": false,
           "customerIdentifiersToBeEnriched": [],
           "awardedReferenceEnrichmentEnabled": false,
           "availablePointsBalanceEnrichmentEnabled": false,
           "neoEnrichment": {
               "label": "PipeDream_CONNECTPLUS",
               "value": "http://neo-a.default:3000/api/v1/xto6x/execute/pipdream"
           }
       },
       "errors": null,
       "warnings": null
   }

   ```

   The Neo dataflow for transforming the event notification is successfully configured. Whenever an event is triggered, this dataflow is automatically executed through the configured webhook, sending the modified payload to the webhook. From there, it is forwarded to downstream applications.

# Event Notification Enrichment

You can also use Neo to add extra information to the standard event notification payload as needed. This ensures that the event data is enriched with additional details before it is sent to downstream applications.

### Example Scenario:

Consider that you need to include the customer's current tier information in the standard event notification payload. With Neo's enrichment capabilities, you can add this missing tier information and send it as part of the event notification payload.

### How to Achieve This?

The process for enriching the event notification payload is similar to Event Notification Transformation. In the Neo dataflow, use the API [Get Customer Tier](https://docs.capillarytech.com/reference/get-customer-tier) to retrieve the customer's tier information and incorporate it into the event schema payload.

# Troubleshooting

| Error                                       | Description                                                                                        |
| :------------------------------------------ | :------------------------------------------------------------------------------------------------- |
| Invalid Credentials or Authorisation Issues | Check your credentials and ensure you have the necessary permissions to access or modify webhooks. |
| Missing or Incorrect WebHook ID             | Ensure the correct `webHookId `is used when updating the event.                                    |
| Neo Enrichment Data Not Updating            | Ensure the Neo dataflow URL and label from the `possibleValues `array are correct.                 |
| Network or Connection Failures              | Verify the webhook URL and check your network connectivity or firewall settings.                   |

# FAQs

1. What is Neo enrichment or transformation, and why do I need it?\
   Answer: Neo enrichment uses Neo dataflows to transform or enrich event data before the webhook processes it. This lets you add context or modify the data through customised workflows.
2. Can I use the UI to manage Neo enrichment?\
   Answer: No, the current UI does not support event enrichment through Neo. You must use the APIs to update the webhook enrichment data.
3. How do I retrieve available Neo dataflows for enrichment?\
   Answer: You can retrieve the available Neo dataflows by performing a GET request on the `v3/webHooks` API. The response will contain a `possibleValues` array, which lists all available Neo dataflows with their corresponding labels and URLs.
4. Does the GET request on the` v3/webHooks` API list all the Neo dataflow?\
   Answer: No, all the Neo dataflows are not listed. Only dataflows created with `connectplus` tag, having the method POST and in the Live state are listed.
5. How can I check if my webhook is functioning properly after making changes?\
   Answer: After updating the webhook using the PUT request, you can test its functionality by triggering the event and monitoring the webhook's response. Also, check for any errors or timeouts in the webhook's processing logs.
