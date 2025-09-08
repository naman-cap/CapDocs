---
title: Badges Standard Export Templates
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
There are 3 export templates for badges data.

# Badges Earn

This template is based on the **[Badges Earn](https://docs.capillarytech.com/docs/badges-fact-table#badges---earn-badges_earn)** fact table.

It lets you export data related to the badges earned by customers. This includes the badge ID, customer ID, earning date, expiry date, and whether the badge is active or revoked.

## Measures

| Measure Name                 | Description                                                                                                                                                                                                                |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Owner reference id           | Orchestrated ID assigned to the module responsible for awarding the badge, e.g., milestone id, journey id, campaign id, loyalty id, etc.                                                                                   |
| Is active                    | Indicates if the badge is currently active or not.                                                                                                                                                                         |
| Auto Update Time Badges Earn | Date and time when the badges\_earn table was last updated. It is in the Unix timestamp format. The update takes place only when the badge deactivation occurs.                                                            |
| Last updated by              | Identifier of the user who last updated the badge. It could be a brand representative, a Customer Success Manager (CSM), or someone similar.                                                                               |
| Earn id                      | Unique identifier assigned to each row of the earn badges facts table. It is the primary key of this table. It is useful in accessing information related to the customer, badge earn date, badge expiration details, etc. |

## Dimensions

| Dimension Name                                                                                               | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| [Latest Updated Date](https://docs.capillarytech.com/docs/dimension-tables#date)                             | Latest date when the data is updated.                                                                         |
| [Latest Updated Time](https://docs.capillarytech.com/docs/dimension-tables#time)                             | Latest time when the data is updated.                                                                         |
| [Badgemeta](https://docs.capillarytech.com/docs/dimension-tables#badges-meta-badgemeta)                      | Captures the metadata of the badge, such as the name of the badge, the group level details, expiry date, etc. |
| [Customer](https://docs.capillarytech.com/docs/dimension-tables#users-users)                                 | Identifier of the customer associated with the badge, set internally by Capillary.                            |
| [Badges Owner Type](https://docs.capillarytech.com/docs/dimension-tables#badge-owner-type-badges_owner_type) | Provides information about the module (name) that granted the customer a particular badge.                    |
| [Date](https://docs.capillarytech.com/docs/dimension-tables#date)                                            | Date attributes of the badge.                                                                                 |
| [Expireson](https://docs.capillarytech.com/docs/dimension-tables#time)                                       | Time when the badge expires.                                                                                  |
| [Createdon](https://docs.capillarytech.com/docs/dimension-tables#time)                                       | Time when the badge was issued to the customer.                                                               |
| [Createdon Date](https://docs.capillarytech.com/docs/dimension-tables#date)                                  | Date on which the badge was earned by the customer.                                                           |
| [Expireson Date](https://docs.capillarytech.com/docs/dimension-tables#date)                                  | Date on which the badge expires.                                                                              |
| [Time](https://docs.capillarytech.com/docs/dimension-tables#time)                                            | Time attributes.                                                                                              |
| [Badges Earn Active](https://docs.capillarytech.com/docs/dimension-tables#enabled)                           | Indicates if the badge is currently active or not.                                                            |

# Badges Issue

This template is based on the **[Badges Issue](https://docs.capillarytech.com/docs/badges-fact-table#badges---issue-badges_issue)** fact table.

It lets you export data of the event where the customer has enrolled in a badge before earning it. This includes the badge ID, customer ID, issuance date, expiry date, and whether the badge is active or revoked.

## Measures

| Measure Name                  | Description                                                                                                                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Request id                    | It is a request ID generated during the issue of a badge. This ID serves as a reference point for tracking and managing the issuance of badges.                                                                     |
| Owner Reference Id            | Orchestrated ID assigned to the module responsible for awarding the badge, e.g., milestone id, journey id, campaign id, loyalty id, etc.                                                                            |
| Is active                     | Indicates whether the badge is currently active or not.                                                                                                                                                             |
| Created by                    | Identifier of the user who issued the badge, such as a brand representative.                                                                                                                                        |
| Last Updated By               | Identifier of the user who last updated the badge. It could be a brand representative, a Customer Success Manager (CSM), or someone similar.                                                                        |
| Auto Update Time Badges Issue | Date and time when the badges\_issue table was last updated. It is in the Unix timestamp format. The update takes place only when the badge deactivation occurs.                                                    |
| Badges Issued Id              | It is a unique identifier for the 'badges issued' facts table. As a primary key, it uniquely identifies each record or entry within the table. It allows tracking and analysis of individual badge issuance events. |

## Dimensions

| Dimension Name                                                                                               | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| [Latest Updated Date](https://docs.capillarytech.com/docs/dimension-tables#date)                             | Latest date when the data is updated.                                                                         |
| [Latest Updated Time](https://docs.capillarytech.com/docs/dimension-tables#time)                             | Latest time when the data is updated.                                                                         |
| [Badgemeta](https://docs.capillarytech.com/docs/dimension-tables#badges-meta-badgemeta)                      | Captures the metadata of the badge, such as the name of the badge, the group level details, expiry date, etc. |
| [Customer](https://docs.capillarytech.com/docs/dimension-tables#users-users)                                 | Identifier of the customer associated with the badge, set internally by Capillary.                            |
| [Badges Owner Type](https://docs.capillarytech.com/docs/dimension-tables#badge-owner-type-badges_owner_type) | Provides information about the module (name) that granted the customer a particular badge.                    |
| [Date](https://docs.capillarytech.com/docs/dimension-tables#date)                                            | Date attributes of the badge.                                                                                 |
| [Expireson](https://docs.capillarytech.com/docs/dimension-tables#time)                                       | Time when the badge expires.                                                                                  |
| [Createdon](https://docs.capillarytech.com/docs/dimension-tables#time)                                       | Time when the badge was issued to the customer.                                                               |
| [Createdon Date](https://docs.capillarytech.com/docs/dimension-tables#date)                                  | Date on which the badge was earned by the customer.                                                           |
| [Expireson Date](https://docs.capillarytech.com/docs/dimension-tables#date)                                  | Date on which the badge expires.                                                                              |
| [Time](https://docs.capillarytech.com/docs/dimension-tables#time)                                            | Time attributes.                                                                                              |
| [Badges Earn Active](https://docs.capillarytech.com/docs/dimension-tables#enabled)                           | Indicates if the badge is currently active or not.                                                            |

# Badges Earned Benefits

This template is based on the **[Badges Earned Benefits](https://docs.capillarytech.com/docs/badges-standard-export-template#badges-earned-benefits)** fact table.

It lets you export data of the promotions or benefits earned by the customers, that are linked to the badge. This includes the benefit type, coupon code, points earned, and validity of the benefit that comes along.

## Measures

| Measure Name                          | Description                                                                                                                                                                           |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Earn id                               | Unique identifier for the badges\_earn table.                                                                                                                                         |
| Benefit Type                          | Type of benefit linked to the badge. The benefit types are: coupons and points.                                                                                                       |
| Coupon code                           | The coupon code associated with the benefit. It is generated by the coupons system.                                                                                                   |
| Description                           | Description of the coupon.                                                                                                                                                            |
| Discount Code                         | Discount code associated with the coupon series.                                                                                                                                      |
| Discount Type                         | Type of discount. Can be ABS - absolute discount type where the discount value is fixed, or percent discount or a fixed discount.                                                     |
| Points Earned                         | Points earned by the customer.                                                                                                                                                        |
| Program id                            | The Loyalty program ID is the identifier assigned to the loyalty program linked to the allocated points.                                                                              |
| Promotion id                          | Unique id assigned to a particular promotion.                                                                                                                                         |
| Allocation Strategy Id                | Denotes the strategy selected to allocate points for badges. In case of tier-based allocation, points are allocated according to predefined tiers or categories.                      |
| Expiration strategy id                | Denotes the strategy used for deciding how points expire for the customer, such as fixed expiry date, or no expiry, etc.                                                              |
| Status code                           | Status code for the action (used for internal purposes).                                                                                                                              |
| Notes                                 | Provides additional information or remarks related to badges.                                                                                                                         |
| Promo Identifier                      | Unique identifier assigned to a promotion.                                                                                                                                            |
| Promotion Name                        | Refers to the name of the promotion to which points were allocated, redeemed, or expired.                                                                                             |
| Auto Update Time Badges Benefits Earn | Date and time when the badges\_benefits\_earn table was last updated. It is in the Unix timestamp format. The update takes place only when the badge deactivation occurs.             |
| Unique id                             | Unique identifier for the table. As a primary key, it uniquely identifies each record or entry within the table. It allows tracking and analysis of individual badge benefits events. |

## Dimensions

| Dimension Name                                                                                    | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [Latest Updated Date](https://docs.capillarytech.com/docs/dimension-tables#date)                  | Latest date when the data is updated.                                                                         |
| [Latest Updated Time](https://docs.capillarytech.com/docs/dimension-tables#time)                  | Latest time when the data is updated.                                                                         |
| [Badgemeta](https://docs.capillarytech.com/docs/dimension-tables#badges-meta-badgemeta)           | Captures the metadata of the badge, such as the name of the badge, the group level details, expiry date, etc. |
| [Customer](https://docs.capillarytech.com/docs/dimension-tables#users-users)                      | Identifier of the customer associated with the badge, set internally by Capillary.                            |
| [Coupon Series](https://docs.capillarytech.com/docs/dimension-tables#coupon-series-coupon_series) | Coupon series of the coupon, associated with the benefit.                                                     |
| [Validtill](https://docs.capillarytech.com/docs/dimension-tables#date)                            | Denotes the coupon validity date.                                                                             |
| [Date](https://docs.capillarytech.com/docs/dimension-tables#date)                                 | Date attributes.                                                                                              |
| [Time](https://docs.capillarytech.com/docs/dimension-tables#time)                                 | Time attributes.                                                                                              |
