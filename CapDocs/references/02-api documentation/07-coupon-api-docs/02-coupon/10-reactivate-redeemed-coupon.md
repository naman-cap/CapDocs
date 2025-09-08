---
title: Reactivate redeemed coupon
excerpt: Reactivates a redeemed coupon. You can pass multiple coupon IDs to reactivate.
api:
  file: v2.json
  operationId: reactivate-redeemed-coupon
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Body parameter

| Parameter       | Datatype | Description                                                                                                                                    |
| --------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| redemptionIds\* | array    | Pass the redemption id to reactivate. To reactivate multiple redeemed coupons, pass each value in a separate line with comma separated values. |

# Response parameter

| Parameter | Description                                            |
| --------- | ------------------------------------------------------ |
| warnings  | List of any warnings from the response.                |
| errors    | List of any errors from the response.                  |
| success   | Boolean indicating the success status of the response. |