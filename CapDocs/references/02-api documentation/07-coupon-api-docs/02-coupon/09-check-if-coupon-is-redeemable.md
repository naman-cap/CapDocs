---
title: Check if coupon is Redeemable
excerpt: Lets you check whether a set of coupons can be redeemed or not.
api:
  file: v2.json
  operationId: check-if-coupon-is-redeemable
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
<Callout icon="📘" theme="info">
  Note:\
  Any one customer identifier is mandatory.
</Callout>

# Query parameter

| Parameter                    | Datatype | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :--------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user                         | obj      | An object containing the identifiers for the customer. At least one identifier is required within this object.                                                                                                                                                                                                                                                                                                                                                                     |
| mobile/email/externalId/id\* | string   | The customer's unique identifier. You must provide at least one of these fields inside the user object.                                                                                                                                                                                                                                                                                                                                                                            |
| code\*                       | string   | The unique coupon code(s) to validate. To check multiple codes in a single request, provide them as a comma-separated string.                                                                                                                                                                                                                                                                                                                                                      |
| details                      | string   | A flag to control the level of detail in the response. If this parameter is omitted, a minimal response is returned. \<br>• \`true\`: (Full Details) Returns all actionable redemption information, including the specific discountValue, discountType, and validTillDate.  \<br>• \`extended\`: (Configuration Details) Returns high-level campaign configurations (like associated brands, products, or categories) but omits specific discount values and most coupon metadata. |

# Response parameter

| Parameter                             | Description                                                                                      |
| ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| accountId                             | Account ID associated with the profile.                                                          |
| autoUpdateTime                        | Date and time of when the profile was last automatically updated.                                |
| commChannels\[]                       | List of communication channels associated with the profile.                                      |
| fields                                | Any additional fields associated with the profile.                                               |
| firstName                             | First name of the customer in the profile.                                                       |
| type                                  | Type of the identifier (e.g., email, externalId, mobile).                                        |
| value                                 | Value of the identifier.                                                                         |
| lastName                              | Last name of the customer in the profile.                                                        |
| userId                                | User ID associated with the profile.                                                             |
| appendedErrorMessage                  | Error message appended during redemption.                                                        |
| code                                  | Code of the redemption.                                                                          |
| isAbsolute                            | Whether the redemption value is absolute.                                                        |
| isRedeemable                          | Whether the coupon is currently redeemable.                                                      |
| numberOfRedemptionsByUser             | Number of times the coupon has been redeemed by the user.                                        |
| redemptionsLeft                       | Number of redemptions left for the coupon.                                                       |
| warnings\[]                           | List of warnings related to the redemption.                                                      |
| message                               | Message related to the redemption status.                                                        |
| status                                | Overall status of the redemption.                                                                |
| discountType                          | Type of discount (e.g., percentage, flat). Displayed only when details=true or details=extended. |
| discountValue                         | Value of the discount. Displayed only when details=true or details=extended.                     |
| discountUpto                          | Maximum discount allowed. Displayed only when details=true or details=extended.                  |
| couponseries                          | Coupon series object and related metadata. Displayed only when details=true or details=extended. |
| description                           | Description of the coupon. Displayed only when details=true.                                     |
| discountCode                          | Discount code used. Displayed only when details=true.                                            |
| validTillDate                         | Expiration date of the coupon. Displayed only when details=true.                                 |
| validTilldateFormat                   | Format of the validTillDate. Displayed only when details=true.                                   |
| isValidWithDiscountedItem             | Whether the coupon can be used with discounted items. Displayed only when details=true.          |
| isUpdateProductData                   | Whether product data should be updated. Displayed only when details=true.                        |
| updateProductData                     | Update requirement for product data. Displayed only when details=true.                           |
| info                                  | Additional coupon information. Displayed only when details=true.                                 |
| maxRedemptionsInSeriesPerUser         | Maximum redemptions allowed per user in the coupon series. Displayed only when details=true.     |
| issueToLoyalty                        | Whether the coupon is issued to a loyalty program. Displayed only when details=true.             |
| discountOn                            | What the discount applies to (e.g., product, category). Displayed only when details=true.        |
| brands\[]                             | Applicable brand-level data. Displayed only when details=extended.                               |
| products\[]                           | Applicable product-level data. Displayed only when details=extended.                             |
| categories\[]                         | Applicable category-level data. Displayed only when details=extended.                            |
| entityLevelRedemptionConfigsValues\[] | Entity-specific redemption configuration values. Displayed only when details=extended.           |