---
title: Get Customer Redemptions
excerpt: >-
  This API allows you to retrieve points and coupons redemption history of a
  customer. You can filter the results by type, duration, coupon ids start with,
  and coupon ids end with. Besides filters you can also sort the results by
  ascending or descending order by redemption id/time and limit number of
  results to retrieve.
api:
  file: customer-v11.json
  operationId: get-customer-redemptions
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

| Parameter                        | Datatype  | Description                                                                              |
| -------------------------------- | --------- | ---------------------------------------------------------------------------------------- |
| coupons\_count                   | int       | Number of coupon redemptions retrieved.                                                  |
| points\_count                    | int       | Number of points redemptions received.                                                   |
| coupons                          | obj       | Details of coupon redemptions.                                                           |
| points                           | obj       | Details of points redemption.                                                            |
| code                             | string    | Unique code of the coupon.                                                               |
| series\_id                       | long      | Coupon series ID associated to the coupon.                                               |
| description                      | string    | Description of the coupon.                                                               |
| discount\_code                   | string    | Coupon code used to avail discount.                                                      |
| discount\_type                   | enum      | Type of discount. `PERC` for discount in percentage, `FLAT` for flat amount discount.    |
| id                               | long      | Redemption ID of that points or coupon.                                                  |
| transaction\_number              | string    | Transaction number associated to the points or coupon redemption.                        |
| bill\_id                         | long      | A numerical identifier for the bill.                                                     |
| redeemed\_time                   | date-time | Date and time of points or coupon redemption.                                            |
| redeemed\_at                     | string    | Store or TILL code associated to points or coupon redemption.                            |
| program\_id                      | long      | Unique ID of the loyalty program in which points is redeemed.                            |
| points\_redeemed                 | int       | Number of points redeemed.                                                               |
| transaction\_number              | string    | Transaction number associated to the points or coupon redemption.                        |
| redeemed\_time                   | date-time | Date and time of points or coupon redemption.                                            |
| redeemed\_at                     | string    | Store or TILL code associated to points or coupon redemption.                            |
| redemption\_breakup\_by\_program | obj       | Breakup of points redeemed with respect to the program.                                  |
| reversals                        | obj       | Details of points reversed if the transaction for which points are redeemed is returned. |
| reversal\_id                     | long      | Unique ID generated for the reversal of a specific set of redeemed points.               |
| points\_reversed                 | int       | number of points reversed.                                                               |
| reversal\_time                   | date-time | Date and time of points reversal in `YYYY-MM-DD HH:MM:SS` format.                        |
| reversed\_on\_till\_id           | long      | Till ID associated to the points reversal.                                               |
| reversal\_breakup\_by\_program   | obj       | Breakup of points reversed and associated loyalty program.                               |