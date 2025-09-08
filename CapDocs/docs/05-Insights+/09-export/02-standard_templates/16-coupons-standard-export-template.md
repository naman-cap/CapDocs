---
title: Coupons Standard Export Template
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The coupons template is based on the **[Coupons](https://docs.capillarytech.com/docs/coupons-fact-table)** fact. 

The template lets you export details of:

* Coupons issued at customer level and transaction level;
* Transaction numbers along with coupon details, redeemed and expired coupons, and coupon level custom fields.

<Note title="Note">
* While using the coupons template, you need to select custom fields manually.
* Coupons that are issued or redeemed will be tagged to a transaction, only if both the transaction and coupon issual or redemption occurs within the span of  +/- 15 minutes.
</Note>

<br />

## Measures

| Measure Name             | Description                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------- |
| Bill Id                  | Identifier key for the bill against which the coupons have been issued or redeemed |
| Redemption Bill Amount   | Total transaction amount of the bill against which coupon has been redeemed        |
| Issual Coupon Id         | Unique Id assigned to the coupon which has been issued                             |
| Used Bill Number         | Bill\_number  used while the redeeming the coupon                                  |
| Auto Update Time Coupons | Date and time when the coupons table is recently updated (Unix timestamp)          |
| Coupon Code Src          | It is same as coupon code                                                          |
| Coupon Code              | A unique id generated for the coupons                                              |
| Event Id                 | A unique id generated for the coupon's event by capillary system                   |

## Dimensions

| Dimension Name                                                                                              | Description                                                                                                |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [coupon\_event\_type](https://docs.capillarytech.com/docs/dimension-tables#redeemed-status-redeemed_status) | Identifier for the coupons event type, such as issuance or redemption.                                     |
| [User](https://docs.capillarytech.com/docs/dimension-tables#users-users)                                    | Identifier of the user involved in the coupon event, set internally by Capillary.                          |
| [User Segments](https://docs.capillarytech.com/docs/dimension-tables#users-users)                           | Segment details of the customers involved in the coupon event, such as valued customer or lapsed customer. |
| [Date](https://docs.capillarytech.com/docs/dimension-tables#date)                                           | Date attributes of the coupon issuance or redemption.                                                      |
| [Time](https://docs.capillarytech.com/docs/dimension-tables#time)                                           | Time attributes of the coupon issuance or redemption.                                                      |
| [Store Hierarchy (zone till)](https://docs.capillarytech.com/docs/dimension-tables#zone-till)               | Identifier for the store, till id.                                                                         |
| [Concept Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)                         | Identifier for the concept associated with the coupon event.                                               |
| [OU Hierarchy](https://docs.capillarytech.com/docs/dimension-tables#zone-till)                              | Identifier for the organization unit where the coupon event occurred.                                      |
| [coupon\_series](https://docs.capillarytech.com/docs/dimension-tables#coupon-series-coupon_series)          | Coupon series against which the coupon has been issued or redeemed.                                        |
| [expiry\_date](https://docs.capillarytech.com/docs/dimension-tables#date)                                   | Date when the coupon is set to expire.                                                                     |
| [issual\_date](https://docs.capillarytech.com/docs/dimension-tables#date)                                   | Date when the coupon has been issued.                                                                      |
| [issual\_time](https://docs.capillarytech.com/docs/dimension-tables#time)                                   | Time when the coupon has been issued.                                                                      |
| [issual\_type](https://docs.capillarytech.com/docs/dimension-tables#coupon-issual-type-coupon_issual_type)  | Captures the issuance type, with possible values such as store or customer.                                |
| [campaign\_group](https://docs.capillarytech.com/docs/dimension-tables#campaign-group)                      | Identifier for the campaign group associated with the coupon issuance.                                     |
| [campaign](https://docs.capillarytech.com/docs/dimension-tables#campaigns)                                  | Identifier for the campaign under which the coupon is issued.                                              |
| [Issual Zone Till](https://docs.capillarytech.com/docs/dimension-tables#zone-till)                          | Captures the store till where the coupon has been issued.                                                  |
| [entry\_type](https://docs.capillarytech.com/docs/dimension-tables#entry-type-entry_type)                   | Captures whether the coupon entry is manual or through Intouch.                                            |
| [latest\_updated\_date](https://docs.capillarytech.com/docs/dimension-tables#date)                          | Latest date when the data is updated.                                                                      |
| [latest\_updated\_time](https://docs.capillarytech.com/docs/dimension-tables#time)                          | Latest time when the data is updated.                                                                      |
