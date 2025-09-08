---
title: Update Customer Status
excerpt: Lets you update a customer's status label.
api:
  file: v2.json
  operationId: update-customer-status
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to change a customer’s status label. You can update it to any label you have created under [Customer Status](https://docs.capillarytech.com/docs/customer_entity#/managing-customer-lifecycle-with-customer-status).

For example, If the customer’s status is Active with the label High Value, and you change it to the label Suspicious (which belongs to the Suspended status), the customer’s status changes to Suspended – Suspicious.

## API specific Error Code

| Error Code | Description                                  | Reason                                 |
| :--------- | :------------------------------------------- | :------------------------------------- |
| 8003       | Invalid source                               | Source value is missing or incorrect.  |
| 8013       | Lookup, Invalid identifier passed            | Identifier is missing or invalid.      |
| 8015       | Customer not found for the given identifiers | Valid customer identifiers not passed. |
