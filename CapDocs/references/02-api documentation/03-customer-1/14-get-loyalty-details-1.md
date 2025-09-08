---
title: Get Loyalty Details
excerpt: >-
  Retrieves the loyalty information of a customer across all loyalty programs of
  the org . You can also fetch details of a specific loyalty program.
api:
  file: v2.json
  operationId: get-loyalty-details-1
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Response Parameters

| Parameter             | Type    | Description                                                                    |
| :-------------------- | :------ | :----------------------------------------------------------------------------- |
| data                  | Array   | Contains loyalty program information for each program the user is enrolled in. |
| redeemed              | Float   | Points redeemed by the user in the program.                                    |
| expired               | Float   | Points expired in the program.                                                 |
| returned              | Float   | Points returned (e.g., due to refunds) in the program.                         |
| adjusted              | Float   | Points adjusted (manually or system-corrected) in the program.                 |
| lifetimePoints        | Float   | Total points earned by the user in the program over their lifetime.            |
| loyaltyPoints         | Float   | Current available points in the program.                                       |
| cumulativePurchases   | Float   | Total cumulative purchases made by the user in the program.                    |
| loyaltyId             | Integer | Unique identifier for the user in the loyalty program. (`-1` if not enrolled)  |
| currentSlab           | String  | Current tier/slab of the user in the program (e.g., "Bronze", "Topaz").        |
| nextSlab              | String  | Next achievable tier/slab in the program.                                      |
| nextSlabSerialNumber  | Integer | Serial number of the next tier/slab.                                           |
| nextSlabDescription   | String  | Description of the next tier/slab (e.g., "Tier 2").                            |
| slabSNo               | Integer | Serial number of the current tier/slab.                                        |
| slabExpiryDate        | String  | Expiry date of the current tier/slab (ISO 8601 format).                        |
| programId             | Integer | Unique identifier for the loyalty program.                                     |
| delayedPoints         | Float   | Points pending to be credited (delayed points).                                |
| delayedReturnedPoints | Float   | Points pending to be debited (delayed returns).                                |
| totalAvailablePoints  | Float   | Sum of available points (`loyaltyPoints` \+ `delayedPoints`).                  |
| totalReturnedPoints   | Float   | Sum of returned points (`returned` \+ `delayedReturnedPoints`).                |

```
{
    "data": [
        {
            "redeemed": 0.0,
            "expired": 0.0,
            "returned": 0.0,
            "adjusted": 0.0,
            "lifetimePoints": 8500.0,
            "loyaltyPoints": 8500.0,
            "cumulativePurchases": 0.0,
            "loyaltyId": 649583788,
            "currentSlab": "Bronze",
            "nextSlab": "Silver",
            "nextSlabSerialNumber": 2,
            "nextSlabDescription": "Tier 2",
            "slabSNo": 1,
            "slabExpiryDate": "2125-02-28T23:59:59Z",
            "programId": 973,
            "delayedPoints": 0.0,
            "delayedReturnedPoints": 0.0,
            "totalAvailablePoints": 8500.0,
            "totalReturnedPoints": 0.0
        },
        {
            "redeemed": 0.0,
            "expired": 0.0,
            "returned": 0.0,
            "adjusted": 0.0,
            "lifetimePoints": 0.0,
            "loyaltyPoints": 0.0,
            "cumulativePurchases": 0.0,
            "loyaltyId": -1,
            "currentSlab": "Topaz",
            "nextSlab": "Coral",
            "nextSlabSerialNumber": 2,
            "nextSlabDescription": "Tier 2",
            "slabSNo": 1,
            "slabExpiryDate": "2125-02-28T23:59:59Z",
            "programId": 983,
            "delayedPoints": 0.0,
            "delayedReturnedPoints": 0.0,
            "totalAvailablePoints": 0.0,
            "totalReturnedPoints": 0.0
        }
    ],
    "warnings": [],
    "errors": []
}
```

## API specific Error codes

| Error Code | Description                                     | Reason                                                           |
| :--------- | :---------------------------------------------- | :--------------------------------------------------------------- |
| 1620       | user `customerid`does not belong to group xxx   | Invalid or unsupported `fleetgroupId`for the customer id passed. |
| 8089       | Customer not registered for the Loyalty Program | Invalid or unsupported `programId`passed                         |
| 8015       | Customer not found for the given identifiers    | Invalid or unsupported `customerid` passed                       |