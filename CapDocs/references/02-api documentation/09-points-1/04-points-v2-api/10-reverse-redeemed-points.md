---
title: Reverse Redeemed Points
excerpt: >-
  Lets you reverse a set of points that are redeemed in a transaction. For
  example, you can use this API to reverse points redeemed for a transaction if
  the transaction is returned.
api:
  file: v2.json
  operationId: reverse-redeemed-points
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
### Prerequisites:

The following configurations are required for points/reverse API

* Enable Allow\_points\_redemption\_reversal config on EMF settings. Only the back-end team has access to this page. Please raise a ticket to enable the config. For more information on this feature, click [here](https://docs.capillarytech.com/docs/actions#points-redemption-reversal).
* Enable V2 API as points reversal is supported only V2.0.

# Request Body Parameters

| Parameter            | Type   | Description                                                                              |
| -------------------- | ------ | ---------------------------------------------------------------------------------------- |
| `redemptionId`\*     | String | Unique identifier for the original redemption transaction.                               |
| `pointsToBeReversed` | Number | Number of points to be reversed. If not provided, all points may be reversed by default. |
| `identifier`\*       | Object | Object containing customer identification details.                                       |
| -`type`\*            | String | Type of customer identifier (e.g., `ID`, `PHONE`, `EMAIL`).                              |
| -`value`\*           | String | Unique value of the customer identifier.                                                 |

# Response Body Parameters

| Parameter               | Type   | Description                                                |
| ----------------------- | ------ | ---------------------------------------------------------- |
| `orgId`                 | Number | Unique identifier for the organization.                    |
| `identifier`            | Object | Object containing customer identification details.         |
| -`type`                 | String | Type of customer identifier.                               |
| -`value`                | String | Unique value of the customer identifier.                   |
| `customerId`            | Number | Unique internal identifier for the customer.               |
| `redemptionId`          | String | Unique identifier for the original redemption transaction. |
| `reversalId`            | String | Unique identifier for the reversal transaction.            |
| `pointsToBeReversed`    | Number | Number of points requested to be reversed.                 |
| `pointsReversed`        | Number | Number of points actually reversed.                        |
| `pointsReversedDetails` | Object | Breakdown of points reversed by type.                      |
| -`available`            | Number | Points reversed from the active or available balance.      |
| -`expired`              | Number | Points reversed from the expired balance.                  |
| `warnings`              | Array  | List of warnings, if any.                                  |
| `errors`                | Array  | List of errors, if any.                                    |

# API Specific Error Code

| Error Code | Description                                            | Reason                                                                                 |
| ---------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| 804        | Unable to process points reversal request              | General failure while processing the reversal request. Check parameters and try again. |
| 817        | Points reversal failed due to insufficient points      | The customer does not have enough points available for reversal.                       |
| 818        | Points reversal not allowed for this program           | Reversal is not permitted for the given program configuration.                         |
| 827        | Unable to reverse points; reversal is enabled          | Reversal conditions were not met despite being enabled for the organization.           |
| 878        | Points decimal precision not supported                 | Points value has more than 3 decimal places; maximum supported precision exceeded.     |
| 885        | Invalid program ID                                     | The specified program ID is invalid or not applicable for reversal.                    |
| 886        | Points reversal failed due to a temporary system error | Internal system issue. Retry the request later.                                        |
| 887        | Points reversal failed due to validation error         | Provided parameters are invalid or failed server-side validation checks.               |
| 888        | Invalid configuration detected                         | System configuration error; please report to Capillary Support.                        |
| 896        | Points reversal could not be processed                 | Temporary failure; retry after some time.                                              |
| 898        | Points reversal currently unavailable                  | The reversal service is temporarily unavailable; retry later.                          |
| 899        | Misconfigured program setup                            | Program setup issue; contact Capillary Support.                                        |
| 901        | Customer not eligible for points reversal              | Customer does not meet eligibility criteria for reversal.                              |
| 902        | Duplicate reversal request                             | A duplicate reversal request has been detected.                                        |
| 903        | Reversal limit exceeded                                | Customer has reached the allowed reversal limit.                                       |
| 904        | Points reversal locked for this customer               | Points reversal operations are temporarily locked for this customer account.           |