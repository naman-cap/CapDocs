---
title: Get Points Balance
excerpt: >-
  Retrieves points balance of a customer from a single program or all programs
  of the org. Points are aggregated for each Point Category - Main, delayed
  accrual, and external trigger based.


  **This is a light API**.
api:
  file: v2.json
  operationId: get_points_balance
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
http://eu.api.capillarytech.com/v2/customers/lookup/points/balance?source=INSTORE&identifierName=email,mobile&identifierValue=tomswayer@capillarytech1.com,915795008349
```

Here,

* `tomswayer@capillarytech1.com` is the email
* `915795008349` is the mobile number

### Important Note

| When                    | `fetchDataForAllPrograms` is true                                      | `fetchDataForAllPrograms` is false                                             |
| :---------------------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| programId is passed     | You will still see points balance of the customer across all programs. | You will still see points balance of the customer for that particular program. |
| programId is not passed | You will still see points balance of the customer across all programs. | You will still see points balance of the customer for the default program.     |

### Response Parameters

| Parameter                  | Datatype | Description                                                                      |
| -------------------------- | -------- | -------------------------------------------------------------------------------- |
| entityId                   | long     | Unique ID of the customer.                                                       |
| promisedPointsBreakup      | obj      | Break up details of promised points.                                             |
| mainPoints                 | int      | The current redeemable points                                                    |
| totalPoints                | int      | The sum of both current redeemable points and promised points.                   |
| delayedAccrualPoints       | int      | Promised points                                                                  |
| externalTriggerBasedPoints | int      | Promised points converted to regular points upon receipt of an external trigger. |

# Error Code

| Error Code | Description                                  | Reason                                                                                                                                                          |
| :--------- | :------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8015       | Customer not found for the given identifiers | The identifier provided is incorrect. When dual eligibility is enabled, if the primary identifier is missing from the input, the system returns the same error. |