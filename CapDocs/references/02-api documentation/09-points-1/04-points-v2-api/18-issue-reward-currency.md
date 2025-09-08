---
title: Issue points or alternate currencies to customers
excerpt: >-
  This API allows you to manually issue reward currency to a customer or user
  group.
api:
  file: Manual Currency Allocation API.json
  operationId: bulkManualCurrencyAllocation
hidden: false
---
This API allows you to issue points or alternate currencies to a customer or user group. You can issue reward currency for up to 10 users in bulk.

This API is similar to the [issue goodwill points request API](https://docs.capillarytech.com/reference/issue-goodwill-points#/), but with more features and is recommended to use this API when issuing additional points to users.

| Feature                  | Goodwill Points                                      | Manual Issue API                                                                         |
| ------------------------ | ---------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Transaction Link**     | No direct link to a specific transaction.            | Directly linked to a specific transaction or target completion using an `eventSourceId`. |
| **Revocation on Return** | Points are not revoked when the bill is returned.    | Points are automatically revoked when the bill is returned.                              |
| **Reporting**            | Attribution against the transaction is not possible. | Allows for accurate report attribution against the specific transaction.                 |

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer to the documentation on [API Overview](https://docs.capillarytech.com/reference/apioverview) and a step-by-step guide in [Make Your First API Call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Example request

```json Issue regular points to a single customer
curl --location 'https://eu.api.capillarytech.com/v2/customers/bulk/manualCurrencyAllocate' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Basic ****************************' \
--data '[
  {
    "eventName": "TransactionAdd",
    "currencyType": "REGULAR",
    "sourceValueRoundingStrategy": "FLOOR",
    "pointsRoundingStrategy": "FLOOR",
    "lookupParams": {
      "identifierType": "id",
      "entityType": "CUSTOMER",
      "source": "INSTORE",
      "identifierValue": "{{customerId}}"
    },
    "orgId": 100737,
    "programId": 973,
    "awardStrategyId": 13167,
    "expiryStrategyId": 11833,
    "sourceValue": -1,
    "eventSourceId": "888812915"
  }
]'
```
```json Issue regular alternate currencies to a single customer
curl --location 'https://eu.api.capillarytech.com/v2/customers/bulk/manualCurrencyAllocate' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Basic ****************************' \
--data '[
  {
    "eventName": "TransactionAdd",
    "currencyType": "REGULAR",
    "sourceValueRoundingStrategy": "FLOOR",
    "pointsRoundingStrategy": "FLOOR",
    "lookupParams": {
      "identifierType": "id",
      "entityType": "CUSTOMER",
      "source": "INSTORE",
      "identifierValue": "{{customerId}}"
    },
    "orgId": 100737,
    "programId": 973,
    "awardStrategyId": 13167,
    "expiryStrategyId": 11833,
    "sourceValue": -1,
    "eventSourceId": "888812915",
    "alternateCurrencyIdentifier": "9DxGBP"
  }
]'
```
```json Issue promised points to a single customer
curl --location 'https://eu.api.capillarytech.com/v2/customers/bulk/manualCurrencyAllocate' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Basic ****************************' \
--data '[
  {
    "orgId": 100737,
    "programId": 973,
    "awardStrategyId": 12311,
    "expiryStrategyId": 11833,
    "sourceValue": -1,
    "eventName": "TransactionAdd",
    "eventSourceId": "888812915",
    "currencyType": "PROMISED",
    "lookupParams": {
      "identifierType": "id",
      "identifierValue": "{{customerId}}",
      "source": "INSTORE",
      "entityType": "CUSTOMER"
    }
  }
]'
```
```json Issue promised alternate currencies to a single customer
curl --location 'https://eu.api.capillarytech.com/v2/customers/bulk/manualCurrencyAllocate' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Basic ****************************' \
--data '[
  {
    "eventName": "TransactionAdd",
    "currencyType": "PROMISED",
    "sourceValueRoundingStrategy": "FLOOR",
    "pointsRoundingStrategy": "FLOOR",
    "lookupParams": {
      "identifierType": "id",
      "entityType": "CUSTOMER",
      "source": "INSTORE",
      "identifierValue": "{{customerId}}"
    },
    "orgId": 100737,
    "programId": 973,
    "awardStrategyId": 12311,
    "expiryStrategyId": 11833,
    "sourceValue": -1,
    "eventSourceId": "888812915",
    "alternateCurrencyIdentifier": "9DxGBP"
  }
]'
```
```json Issue points or alternate currency in bulk
curl --location 'https://eu.api.capillarytech.com/v2/customers/bulk/manualCurrencyAllocate' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Basic ****************************' \
--data '[
  {
    "eventName": "TransactionAdd",
    "currencyType": "REGULAR",
    "sourceValueRoundingStrategy": "FLOOR",
    "pointsRoundingStrategy": "FLOOR",
    "lookupParams": {
      "identifierType": "id",
      "entityType": "CUSTOMER",
      "source": "INSTORE",
      "identifierValue": "{{customerId}}"
    },
    "orgId": 100737,
    "programId": 973,
    "awardStrategyId": 11879,
    "expiryStrategyId": 11833,
    "sourceValue": 100,
    "eventSourceId": "888812915",
    "alternateCurrencyIdentifier": "9DxGBP"
  },
  {
    "orgId": 100737,
    "programId": 973,
    "awardStrategyId": 11879,
    "expiryStrategyId": 11833,
    "sourceValue": 100,
    "eventName": "TransactionAdd",
    "eventSourceId": "888853513",
    "currencyType": "REGULAR",
    "alternateCurrencyIdentifier": "9DxGBP",
    "lookupParams": {
      "identifierType": "id",
      "identifierValue": "564671435",
      "source": "INSTORE",
      "entityType": "CUSTOMER"
    }
  }
]'
```
```json Issue points or alternate currency to a usergroup
curl --location 'https://eu.api.capillarytech.com/v2/customers/bulk/manualCurrencyAllocate' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Basic ****************************' \
--data '[
    {
        "orgId": 51186,
        "programId": 2649,
        "awardStrategyId": 111523,
        "expiryStrategyId": 111581,
        "promotionId": -1,
        "sourceValue": 5000,
        "eventName": "TransactionAdd",
        "eventSourceId": "2152312071",
        "currencyType": "REGULAR",
        "lookupParams": {  
            "identifierType": "mobile",
            "identifierValue": "919300000019",
            "entityType":"USERGROUP2",
            "groupId":61450
        }
    }
]'
```

# Prerequisites

Make sure you have the right authentication and appropriate access control configured.

* **Access group resource:** Write access to the points group resource. For more information on access control, see the [access group documentation](https://docs.capillarytech.com/docs/access-group).
* **Authentication:** Basic authentication details. For more information on authentication, see the [Authentication documentation](https://docs.capillarytech.com/docs/api-client).

# Rate limit

* **Demo and Testing Clusters:** 1,000 requests per minute per API key
* **Other Organisations:** The rate limit is brand-specific.

To modify the limit, create a ticket with the Capillary Product support team.

# Header information

You can define certain attributes in the API header section.

| **Header Name**                   | **Description**  |
| --------------------------------- | ---------------- |
| Authentication/Authorisation Type | Basic Auth       |
| Request / Content Type            | application/json |
| Response Type                     | application/json |

# Body parameters

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>

      <th>
        Required
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        orgId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier of the organisation. To retrieve the orgId, use the

        [Get Org Details](https://docs.capillarytech.com/reference/get-org-details)

        API.
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        lookupParams
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the identifier details of the user.
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        . entityType
      </td>

      <td>
        String
      </td>

      <td>
        Type of entity to issue the reward currency. Supported values: `CUSTOMER`, `USERGROUP2`.
      </td>

      <td>
        Optional
      </td>
    </tr>

    <tr>
      <td>
        . identifierType
      </td>

      <td>
        String
      </td>

      <td>
        Type of identifier for the customer. Required if `entityType` is "CUSTOMER". Supported values: `mobile`, `email`, `id`, `externalId`
      </td>

      <td>
        Optional
      </td>
    </tr>

    <tr>
      <td>
        . source
      </td>

      <td>
        String
      </td>

      <td>
        Source of the user's account. Supported values: `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `INSTORE`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `MOBILE_APP`, `ALL`, `MAPP_SDK`
      </td>

      <td>
        Optional
      </td>
    </tr>

    <tr>
      <td>
        . accountId
      </td>

      <td>
        String
      </td>

      <td>
        ID of source. Provide this ID if the source is not `INSTORE`
      </td>

      <td>
        Optional
      </td>
    </tr>

    <tr>
      <td>
        . groupId
      </td>

      <td>
        String
      </td>

      <td>
        Unique ID of the user group, required if `entityType` is `USERGROUP2`.
      </td>

      <td>
        Optional
      </td>
    </tr>

    <tr>
      <td>
        . identifierValue
      </td>

      <td>
        String
      </td>

      <td>
        Value of the customer identifier. Required if `entityType` is `CUSTOMER`.
      </td>

      <td>
        Optional
      </td>
    </tr>

    <tr>
      <td>
        programId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier of the program for which points are issued.
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        awardStrategyId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier of the award strategy to be used, which defines how the issued reward currency is calculated. To get the `awardStrategyId`, also known as earn code, refer to the

        [Viewing conditions configured for points](https://docs.capillarytech.com/docs/points#/viewing-conditions-configured-for-points)

        section in the Points documentation.
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        expiryStrategyId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier of the expiry strategy to be used, which defines when the issued reward currency expires. To get the `expiryStrategyId`, also known as expire code, refer to the

        [Viewing conditions configured for points](https://docs.capillarytech.com/docs/points#/viewing-conditions-configured-for-points)

        section in the Points documentation.
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        sourceValue
      </td>

      <td>
        Double
      </td>

      <td>
        Transaction amount on which points are calculated. Provide the value as `-1` if a fixed number of points is issued.
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        eventName
      </td>

      <td>
        String
      </td>

      <td>
        Type of event triggering the issual. Supported values: `TransactionAdd`, `TargetCompleted` `GenericEvent` (provide the specific event name instead of "GenericEvent")
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        promotionId
      </td>

      <td>
        Long
      </td>

      <td>
        Unique ID of a loyalty promotion. To associate the reward currency issual with a promotion, provide the `promotionId`, To retrieve the `promotionId`, use the

        [Get Details of All Promotions](https://docs.capillarytech.com/reference/get-promotion-details)

        API.
      </td>

      <td>
        Optional
      </td>
    </tr>

    <tr>
      <td>
        currencyType
      </td>

      <td>
        String
      </td>

      <td>
        Type of currency to be issued. Supported values: `REGULAR`, `PROMISED`.
      </td>

      <td>
        Optional
      </td>
    </tr>

    <tr>
      <td>
        alternateCurrencyIdentifier
      </td>

      <td>
        String
      </td>

      <td>
        Unique ID of the alternate currency that is generated when created.
      </td>

      <td>
        Optional
      </td>
    </tr>

    <tr>
      <td>
        eventSourceId
      </td>

      <td>
        String
      </td>

      <td>
        Identifier for the event source. Provide the identifier based on the `eventName` value:
        For `TransactionAdd`, this is the bill ID.

        For `TargetCompleted`, this can be a streak, a target, or a unified target achieved ID.
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        billLineItemId
      </td>

      <td>
        Long
      </td>

      <td>
        Identifier for the specific bill line item, if applicable. Provide this value when `eventName` is `TransactionAdd`.
      </td>

      <td>
        Optional
      </td>
    </tr>

    <tr>
      <td>
        sourceValueRoundingStrategy
      </td>

      <td>
        String
      </td>

      <td>
        Strategy for rounding the source value. Supported values: `FLOOR`, `ACTUAL`, `ROUND`
      </td>

      <td>
        Optional
      </td>
    </tr>

    <tr>
      <td>
        pointsRoundingStrategy
      </td>

      <td>
        String
      </td>

      <td>
        Strategy for rounding the calculated points. Supported values: `FLOOR`, `ACTUAL`, `ROUND`
      </td>

      <td>
        Optional
      </td>
    </tr>
  </tbody>
</Table>

## Example response

```json Points issued to customer
{
    "total": 1,
    "success": 1,
    "failures": 0,
    "data": [
        {
            "status": "SUCCESS",
            "entityId": 387979573,
            "sideEffects": [
                {
                    "entityType": "USER",
                    "rawAwardedPoints": 500.000,
                    "awardedPoints": 500,
                    "type": "points"
                }
            ]
        }
    ],
    "warnings": []
}
```
```json Alternate currency issued to customer
{
    "total": 1,
    "success": 1,
    "failures": 0,
    "data": [
        {
            "status": "SUCCESS",
            "eventLogId": 634634563,
            "entityId": 566135941,
            "sideEffects": [
                {
                    "entityType": "USER",
                    "rawAwardedValue": 200.000,
                    "alternateCurrencyIdentifier": "9DxGBP",
                    "alternateCurrencyName": "DocCoin",
                    "awardedValue": 200,
                    "type": "alternate_currency"
                }
            ]
        }
    ],
    "warnings": []
}
```

## Response  parameters

| Parameter                      | Type    | Description                                                                     |
| :----------------------------- | :------ | :------------------------------------------------------------------------------ |
| total                          | Integer | Total number of requests processed in the batch.                                |
| success                        | Integer | Number of successfully processed requests.                                      |
| failures                       | Integer | Number of failed requests.                                                      |
| data                           | Object  | An object containing detailed results for each processed request.               |
| .status                        | String  | Status of the individual request. Possible values: `SUCCESS` or `FAILED`.       |
| .entityId                      | Integer | ID of the customer/entity for which points were allocated.                      |
| . sideEffects                  | Object  | Details of the currency issual.                                                 |
| .. entityType                  | String  | Type of entity the points are issued.                                           |
| .. rawAwardedPoints            | Double  | Points awarded before rounding.                                                 |
| .. awardedPoints               | Integer | Final points awarded after rounding is applied.                                 |
| .. rawAwardedValue             | Double  | Points awarded before rounding is applied.                                      |
| .. awardedValue                | Integer | Alternate currency awarded after rounding is applied.                           |
| .. alternateCurrencyIdentifier | String  | Unique identifier of the alternate currency.                                    |
| .. alternateCurrencyName       | String  | Unique name of the alternate currency.                                          |
| .. type                        | String  | Type of reward currency issued. Possible values: `points`, `alternate_currency` |
| warnings                       | Object  | Warnings encountered when processing, if any.                                   |

## Error codes

| Code | Description                                                                                                                    | Reason                                            |
| :--- | :----------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------ |
| 8136 | Program with id not found                                                                                                      | `programId`  provided is invalid                  |
| 8136 | Award Strategy not found with id : \<id number>                                                                                | `awardStrategyId` provided is invalid             |
| 8136 | Expiry strategy not found with id :  : \<id number>                                                                            | `expiryStrategyId` provided is invalid            |
| 8136 | Event not supported for Manual currency allocation, Supported events are TransactionAdd, TargetCompleted, Behavioural events | `eventName` provided is invalid or unsupported.   |
| 8139 | Bill not found with id \<id number>                                                                                            | `eventSourceId` provided is invalid.              |
| 8136 | Alternate currency not found with provided identifier : \<alternate currency id>                                               | `alternateCurrencyIdentifier` provided is invalid |
