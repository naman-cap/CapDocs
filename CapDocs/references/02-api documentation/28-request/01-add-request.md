---
title: Add Request
excerpt: >-
  Lets you submit requests for customer identifier changes. It could be either
  mobile number, email ID, or external ID.
api:
  file: customer-v11.json
  operationId: add-request
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Requests, when submitted, will be in pending status by default. Capillary back-end team verifies the request and could either approves or rejects it. The `request/add` API allows you to directly process a request by passing a query param client\_auto\_approve=true.

If client\_auto\_approve=true, the request will be created in pending status by default and then processed automatically.

However, requests can be approved automatically based on the following configs set on Member Care.

| Config                     | Description                                               |
| -------------------------- | --------------------------------------------------------- |
| CI\_EMAIL\_AUTO\_APPROVE   | Approves email id change requests automatically           |
| CI\_MOBILE\_AUTO\_APPROVE  | Approves mobile number change requests automatically      |
| CI\_EXTID\_AUTO\_APPROVE   | Approves external id change requests automatically        |
| CI\_ADDRESS\_AUTO\_APPROVE | Approves registered address change requests automatically |

<Note title="Note">
The param `client_auto_approve` overrides all the server side configurations mentioned in the table above. However, it is recommended not to use the param unless it is highly necessary.
</Note>

### Request Body Parameters (for Identifier change)

| Parameter                      | Datatype | Description                                                                                                            |
| ------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| mobile/email/external\_id/id\* | string   | Pass any of the identifiers of the customer with the identifier value.                                                 |
| reference\_id\*                | long     | Unique reference id for the request                                                                                    |
| type                           | enum     | Type of request. **Value**: `CHANGE_IDENTIFIER, TRANSACTION_UPDATE`                                                    |
| base\_type                     | enum     | Identifier that you want to update. **Value**: `MOBILE, EMAIL, EXTERNAL_ID`.<br />RETRO for transaction update. <br /> |
| old\_value                     | string   | The current value of the customer identifier.                                                                          |
| new\_value                     | string   | The new value of the customer identifier.                                                                              |

### Request Body Parameters (for retro transaction)

| Parameter       | Datatype | Description                                                                       |
| --------------- | -------- | --------------------------------------------------------------------------------- |
| type            | enum     | Type of request. **Value**: `TRANSACTION_UPDATE`                                  |
| base\_type      | enum     | Base transaction type. **Value**: `RETRO`                                         |
| old\_type       | enum     | Current transaction type. **Value**: `NOT_INTERESTED`                             |
| new\_type       | enum     | New transaction type. **Value**: `REGULAR`                                        |
| reason          | string   | Reason for issuing goodwill points/coupons. Applicable only for goodwill response |
| comments        | string   | Small description on why goodwill points/coupons issued                           |
| transaction\_id | string   | Transaction ID of the *not-interested* transaction that you want to update.       |
| misc\_info      | string   | Additional information regarding the current retro conversion.                    |

### Request Body Parameters (for mobile number reallocation)

| Parameter  | Datatype | Description                                                                                                                                                                                  |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type       | enum     | Type of request. **Value**: `GOODWILL`                                                                                                                                                       |
| base\_type | enum     | Sub-type of the request. **Value**: `POINTS` for goodwill points issual, `COUPONS` for goodwill coupon issual.                                                                               |
| series\_id | long     | Offer ID from which coupon has to be issued. Ensure that the offer is consumed by Member Care module (Goodwill Adjustment Settings > Coupon). Applicable only for *base\_type* as `COUPONS`. |
| points     | int      | Number of points to issue. Applicable only for *base\_type* as `POINTS`.                                                                                                                     |

### Request Body Parameters (for merge accounts)

| Parameter        | Datatype | Description                                                                               |
| ---------------- | -------- | ----------------------------------------------------------------------------------------- |
| target\_customer | object   | Details of the survivor account - the account that will continue to remain after merging. |
| type             | enum     | Pass `CHANGE_IDENTIFIER` for merge requests.                                              |
| base\_type       | enum     | Sub-type of the request. **Value**: `MERGE`                                               |

### Request Body Parameters (for goodwill requests)

| Parameter  | Datatype | Description                                  |
| ---------- | -------- | -------------------------------------------- |
| type       | enum     | Type of request. **Value**: `GOODWILL`       |
| base\_type | enum     | Sub-type of the request. **Value**: `POINTS` |

### Request Body Parameters (for group goodwill requests)

| Parameter             | Datatype | Description                                  |
| --------------------- | -------- | -------------------------------------------- |
| type                  | enum     | Type of request. **Value**: `GOODWILL`       |
| base\_type            | enum     | Sub-type of the request. **Value**: `POINTS` |
| earning\_entity\_type | enum     | USERGROUP2                                   |
| identifier\_value     | string   | Group ID                                     |

### Response Parameters

| Parameter     | Datatype | Description                                                              |
| ------------- | -------- | ------------------------------------------------------------------------ |
| reference\_id | string   | Unique reference ID of the request.                                      |
| id            | long     | Unique ID generated for the request.                                     |
| status        | enum     | Current status of the request. **Values**: `PENDING, APPROVED, REJECTED` |
| customer      | object   | Details of the customer details associated to the request.               |