---
title: Add Request
excerpt: Add a transaction or customer merge request
api:
  file: v2.json
  operationId: add-request-transaction-customer-merge
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 👍
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Make sure that PII deletion configuration is enabled. Refer [Enable PII deletion](https://docs.capillarytech.com/docs/pii-configuration#configuring-pii-deletion) documentation for more information.
*   Make sure that you have appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# Request

Request curl: `https://<host>/v2/requests`

# Body parameters

| Parameter       | Type   | Description                                                                 |
| --------------- | ------ | --------------------------------------------------------------------------- |
| type            | string | Type of the data. At present, only CUSTOMER is supported.                   |
| baseType        | string | Type of the operation. In this context, DELETE is the operation type.       |
| comments        | string | Comments or description. The maximum number of supported characters is 255. |
| source          | string | Source of customer data                                                     |
| identifierType  | string | Type of identifier                                                          |
| identifierValue | string | Value of the identifier                                                     |

# Response

| Parameter | Description             |
| :-------- | :---------------------- |
| createdId | The request-id created. |
| warnings  | Warnings, if any.       |