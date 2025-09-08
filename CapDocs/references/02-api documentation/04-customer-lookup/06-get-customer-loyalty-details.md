---
title: Get Customer Loyalty Details
excerpt: >-
  Retrieves the loyalty information of a customer across all loyalty programs of
  the org . You can also fetch details of a specific loyalty program.
api:
  file: v2.json
  operationId: get-customer-loyalty-details
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Using Multiple Identifiers

When [dual eligibility](https://docs.capillarytech.com/docs/customer_entity#dual-eligibility) is enabled in your organisation, the API allows you to send multiple identifiers while fetching details. The system automatically identifies which one is the primary identifier and retrieves the details accordingly. This removes the need for you to know or specify only the primary identifier. This is beneficial in a dual eligibility–enabled scenario, as the feature allows you to register multiple users with the same secondary identifiers.\
When you submit multiple identifiers in a lookup request:

* The service checks that dual eligibility is active.
* It parses all submitted identifiers, for example `email`,`mobile`,`externalId`
* It determines which identifier is configured as the primary key.
* If one of the provided values matches the primary key, the API uses it for the lookup.
* The API returns the single customer profile associated with the primary identifier.

You can enter multiple identifiers as comma-separated values using the `identifierName` and `identifierValue` query parameters. Ensure the order of the `identifierName` matches the `identifierValue`.

**Note:** If you provide only one identifier that is not the primary identifier, the system will return an error, `8015 - Customer not found for given identifiers`.

### Endpoint Example

```json Endpoint Example
<https://eu.api.capillarytech.com/v2/customers/lookup/loyaltyDetails?source=INSTORE&&identifierName=email,mobile,externalID&identifierValue=tomswayer@capillarytech1.com,915795008395,MPQSP100>
```

Here,

* `tomswayer@capillarytech1.com` is the email
* `915795008395` is the mobile number
* `MPQSP100` is the external ID

# Error Code

| Error Code | Description                                  | Reasomn                                                                                                                                                         |
| :--------- | :------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8015       | Customer not found for the given identifiers | The identifier provided is incorrect. When dual eligibility is enabled, if the primary identifier is missing from the input, the system returns the same error. |