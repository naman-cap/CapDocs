---
title: Get Customer Details (copy)
excerpt: >-
  Retrieves all the details of a customer. Use `embed`  and other parameters to
  get a specific information as per needed.
api:
  file: v2.json
  operationId: get-customer-detailscopy
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The `Lookup` API is useful for in situations where you don't have the `customerId`. Instead, you can retrieve customer details using other identifiers such as phone numbers or email addresses. The API provides more detailed information, including details about loyalty programs like slab numbers.

This API can fetch the following information -

* profile information – first name, last name, registered date, registered at TILL
* recent profile updated – details of the recent update in profile information
* registered identifiers, communication channels
* loyalty information – loyalty status, registered date, purchases, etc.
* Multiple Loyalty Program Details: Program wise details if the org has multiple loyalty programs support
* Card level details
* Alternate currency details with associated program ID and its name.

To fetch customer details from a specific account of a source (source with multiple accounts), you need to provide the respective account id.

## Using Multiple Identifiers

When [dual eligibility](https://docs.capillarytech.com/docs/customer_entity#dual-eligibility) is enabled in your organisation, the API allows you to send multiple identifiers while fetching details, and the system automatically identifies which one is the primary identifier and retrieves the details accordingly. This removes the need for you to know or specify only the primary identifier, which is beneficial in a dual eligibility-enabled scenario, as the feature allows you to register multiple users with the same secondary identifiers.\
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
<https://eu.api.capillarytech.com/v2/customers/lookup/customerDetails?source=INSTORE&&identifierName=email,mobile,externalID&identifierValue=tomswayer@capillarytech1.com,915795008395,MPQSP100>
```

Here,

* `tomswayer@capillarytech1.com` is the email
* `915795008395` is the mobile number
* `MPQSP100` is the external ID

<Note title="Note">
Use [V1 Get Customer Details API](https://docs.capillarytech.com/reference/get-customer-details-v1api) to retrieve:

-Customer's loyalty tier change history.\
-Details of the store where the customer was registered.
-Details of the POS (Point of Sale) machine of the store where the customer was registered.
-National Do Not Call Registry (NDNC) status of the customer’s registered mobile number.
-Services (SMS/email) that the customer has opted in or out of.
-Criteria set for membership or tier retention.
-Coupon history in a specified order.
-Coupon details in ascending or descending order.
-Recently used coupon information.
-Desired set of coupons in the issuing order.
-Details of active coupons.
</Note>

# API endpoint example

`<https://eu.api.capillarytech.com/v2/customers/lookup/customerDetails>`

# Prerequisites

*   Authentication - Basic or OAuth authentication details
*   Access group resource - NA

# Resource information

|                       |                                      |
| :-------------------- | :----------------------------------- |
| URI                   | /v2/customers/lookup/customerDetails |
| HTTP method           | GET                                  |
| Pagination supported? | No                                   |
| Rate limit            | NA                                   |
| Batch support         | NA                                   |
|                       |                                      |

# Request query parameters

<br />

| Field Name                         | Data Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                           | Mandatory                                       |
| ---------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------- |
| `source`                           | Enum             | Source on which the customer identifier is available. <br />Example: `INSTORE`, `MARTJACK`, `WECHAT`, `ALL`, `MAPP_SDK`                                                                                                                                                                                                                                                                                                               | Yes                                             |
| `accountId`                        | String           | Account ID for sources with multiple accounts.                                                                                                                                                                                                                                                                                                                                                                                        | Mandatory for all the sources except `Instore`. |
| `embed`                            | Array of Strings | Details to be included in the response. <br />Values: `points`, `subscriptions`, `mlp`, `promotionalPoints`, `expirySchedules`, `expiredPoints`, `segments`, `userGroup`, `customerImage`, `cardLoyaltyDetails`, `fleetParentDetails`, `ignoreCardDetails`, `customerStatus`, `alternateCurrencies`. <br /><br />**Note:** Embed parameter `gapDetails` is deprecated.                                                                | No                                              |
| `identifierName`                   | Enum             | Identifier type used to get the customer details. <br />Supported values: `cardnumber`, `mobile`, `email`, `externalId`, `wechat`                                                                                                                                                                                                                                                                                                     | Yes                                             |
| `identifierValue`                  | String           | Value of the specified identifier.                                                                                                                                                                                                                                                                                                                                                                                                    | Yes                                             |
| `includedFraudDetails`             | Boolean          | Pass `true` to fetch fraud details of the customer if available.                                                                                                                                                                                                                                                                                                                                                                      | No                                              |
| `includedUserGroup2LoyaltyDetails` | Boolean          | Pass `true` to include group loyalty details in the response.                                                                                                                                                                                                                                                                                                                                                                         | No                                              |
| `userGroup2Id`                     | Long             | Unique ID of the user group to fetch customer details of that specific group.                                                                                                                                                                                                                                                                                                                                                         | No                                              |
| `includedAllUserGroup2`            | Boolean          | Pass `true` to fetch customer details across all the groups of the customer.                                                                                                                                                                                                                                                                                                                                                          | No                                              |
| `gapToUpgrade`                     | Integer          | **Prerequisite:** Set `embed=MLP` to retrieve the details. <br />This retrieves the additional purchases, points, visits, or tracker value required for a customer to upgrade to the next tier. It calculates this based on a specified number of days from the current date. <br /><br />Supported values: <br />`0`: For current day <br />`1`: For next day <br />`30`: For 30 days ahead <br />Negative values are not supported. | No                                              |
| `gapToRenew`                       | Integer          | **Prerequisite:** Set `embed=mlp` to retrieve the details. <br />Retrieves the renewal value (purchases, points, visits, or tracker) required after a specified number of days. <br /><br />Supported values: <br />`0`: For current day <br />`1`: For next day <br />`30`: For 30 days ahead <br /><br />**Note:** Not shown if the customer is in the base slab.                                                                   | No                                              |

# Response parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Data Type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>id</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>profiles</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Profiles associated with the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>loyaltyInfo</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Information related to the customer&#39;s loyalty program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- loyaltyType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of loyalty program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- attributionV2</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Details about loyalty program attribution</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- createDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date and time when the loyalty program attribution was created</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- createdBy</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Details of the user who created the loyalty program attribution</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- modifiedBy</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Details of the user who modified the loyalty program attribution</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- modifiedDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date and time when the loyalty program attribution was modified</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- createdFromSource</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Source from which the loyalty program attribution was created</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- lifetimePurchases</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total lifetime purchases made by the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>segments</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Segments associated with the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>associatedWith</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier of the entity associated with the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>extendedFields</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Additional fields associated with the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>loyaltyProgramDetails</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Details of the loyalty program associated with the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- redeemed</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total points redeemed by the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- expired</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total points expired for the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- returned</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total points returned to the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- adjusted</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total points adjusted for the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- lifetimePoints</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total lifetime points earned by the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- loyaltyPoints</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total loyalty points earned by the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- cumulativePurchases</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Cumulative purchases made by the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- loyaltyId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for the loyalty program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- currentSlab</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Current tier or slab in the loyalty program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- nextSlab</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Next tier or slab in the loyalty program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- nextSlabSerialNumber</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Serial number of the next tier or slab</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- nextSlabDescription</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Description of the next tier or slab</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- slabSNo</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Serial number of the current tier or slab</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- slabExpiryDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Expiry date of the current tier or slab</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- programId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for the loyalty program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- delayedPoints</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Points that are delayed for the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- delayedReturnedPoints</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Returned points that are delayed for the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- delayedExpiredPoints</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Expired points that are delayed for the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- totalAvailablePoints</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total available points for the customer.  available points are the points earned through promotions and base points</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- totalReturnedPoints</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total points that have been returned from the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- linkedPartnerPrograms</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Partner programs that are linked to the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- programTitle</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Title of the loyalty program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- programDescription</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Description of the loyalty program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- programPointsToCurrencyRatio</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Ratio of loyalty points to currency for the program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>groupLoyaltyProgramDetails</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Details of group loyalty programs associated with the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- groupProgramId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for the group loyalty program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- title</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Title of the group loyalty program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- description</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Description of the group loyalty program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- programsList</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>List of programs associated with the group loyalty program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- id</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for the program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- name</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Name of the program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- description</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Description of the program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- lifetimePoints</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total lifetime points earned for the group loyalty program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- loyaltyPoints</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total loyalty points earned for the group loyalty program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- promisedPoints</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total promised points for the group loyalty program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- pointsToCurrencyRatio</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Ratio of points to currency for the group loyalty program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>cardDetails</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Details of the card associated with the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- cardId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for the card</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- issuedDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date and time when the card was issued</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- createdDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date when the card was created</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- expiryDays</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of days until the card expires</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- seriesName</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Name of the card series</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- customerId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- maxActiveCards</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum number of active cards allowed for the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- customFields</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Custom fields associated with the card</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- type</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of the card</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- cardNumber</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique number assigned to the card</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- seriesId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for the card series</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- seriesCode</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Code of the card series</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- orgId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for the organization</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- entityId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for the entity associated with the card</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- statusInfo</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Information about the status of the card</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- reason</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Reason for the card status</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- createdBy</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier of the user who created the card</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- actions</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Actions associated with the card status</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- autoUpdateTime</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date and time of the last automatic update to the card status</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- createdOn</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date and time when the card status was created</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- entityId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier of the entity associated with the card status</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- id</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for the card status</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- isActive</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates whether the card status is active</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- labelId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for the label associated with the card status</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- label</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Label associated with the card status</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- status</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Current status of the card</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- transactionNotAllowed</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates whether transaction are allowed with the card</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- expiryDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date and time when the card expires</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- activeAndDigital</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates whether the card is active and digital</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>alternateCurrencyDetails</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Includes the details on alternate currency awarded</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-programId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier of the loyalty program in which the customer is associated with</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-programName</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Name of the loyalty program</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-alternateCurrencyData</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object containing alternate currency details</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--name</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Name of the alternate currency</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--earned</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of alternate currencies available for redemption</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--lifetimeEarned</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of alternate currencies earned by the customer in their lifetime, including redeemed and returned alternate currencies</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--redeemed</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of alternate currencies redeemed by the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--expired</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of expired redeemable alternative currencies</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--returned</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of redeemable alternative currencies returned by the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--delayedEarned</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of available alternate currencies in the promised state</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--delayedLifetimeEarned</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of alternate currencies earned by the customer in their lifetime, including redeemed, returned, and redeemable alternate currencies</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--delayedReturned</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of promised alternative currencies returned by the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--delayedExpired</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of expired promised alternative currencies</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--totalAvailable</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of available alternate currencies, including redeemable and promised alternate currencies</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--totalRedeemed</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of alternate currencies redeemed by the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--totalReturned</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of redeemable and promised alternative currencies returned by the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--totalExpired</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>float</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of expired redeemable and promised alternative currencies</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>warnings</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Warnings associated with the response</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- status</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates the status of the warning</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- code</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Code associated with the warning</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- message</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Message describing the warning</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>upgradeStrategies</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Provides the set of rules or conditions that defines how a customer progresses to a higher tier in a loyalty program.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-upgrade_based_on</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Parameter using which the upgrade condition is determined. <strong>Example:</strong> <code>CUMULATIVE_PURCHASES</code>; <code>TRACKER_VALUE_BASED</code>, <code>CURRENT_POINTS</code></p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-upgradeThreshold</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>double</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Threshold value required for an upgrade. <strong>Example:</strong> <code>50.0</code> <code>CUMULATIVE_PURCHASES</code>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-customerUpgradeEntityValues</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Current values related to the customer’s upgrade.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--currentValue</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>double</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Current value attained by the customer. <strong>Example:</strong> <code>0.0</code> <code>CUMULATIVE_PURCHASES</code>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--gapToUpgrade</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>double</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Additional value required for the upgrade. <strong>Example:</strong> <code>50.0</code> <code>CUMULATIVE_PURCHASES</code> (threshold value - current value)</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--valueValidUpto</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Date untill which the value is valid, in YYYY-MM-DD format. <strong>Example:</strong> <code>2025-05-06</code>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>gapToRenewSummary</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Set of rules or conditions required for tier renewal for the customer in a loyalty program.<br><strong>Note:</strong> If the customer is in the base slab, this block will not be displayed.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-tierExpiryDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Expiry date of the current tier, in YYYY-MM-DD format. <strong>Example:</strong> 2024-12-31.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-renewConfirmed</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the tier renewal is confirmed. <strong>Values:</strong> <code>true</code> or <code>false</code>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-renewStrategies</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array containing details of the rules or conditions for tier renewal.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--renewBasedOn</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>string</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specifies the <a href="https://docs.capillarytech.com/docs/tier-downgrade-renewal">renewal strategy</a>. <strong>Example:</strong> <code>VISITS</code>, <code>PURCHASE</code>, <code>POINTS</code>, or <code>TRACKER</code>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--renewThreshold</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>double</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Threshold value required by the customer to renew the tier. <strong>Example:</strong> 5.0 for store visits, 10.0 for purchases.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--customerRenewEntityValue</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>double</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Current value reached by the customer. **Example: **1.0 store visit or 123.0 points</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--customerGapToRenewValue</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>double</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Additional value required for the tier renewal. <strong>Example:</strong> 4.0 store visits, 10.0 purchases or 1877.0 points.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

# Error Code

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Error Code
      </th>

      <th>
        Description
      </th>

      <th>
        Reason
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        8015
      </td>

      <td>
        Customer not found for the given identifiers
      </td>

      <td>
        * The identifier provided is not correct.
        * When dual eligibility is enabled, if the primary identifier is missing from the input, the system returns the same error.
        * Account ID is not defined. Applicable for sources other than Instore.
      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
  </tbody>
</Table>

<HTMLBlock>{`
<style>
.InputGroupe2EvBGz2cnqy {
    display: flex;
    gap: 2px;
    position: relative;
}

.Button.APIRequest-example-button1DGMsfaOTVNW {
    /* Core working text behavior - don't change these */
    position: relative;
    width: 140px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 6px 12px;
    text-align: left;
    transition: width 0.2s ease-out;
    z-index: 1;
    display: block;
    direction: ltr;
    unicode-bidi: embed;
    padding-right: 20px;
    
    /* Only minimal visual updates */
    background: #1e2329;
    border: none;
    border-radius: 6px;
    color: #94a3b8;
    font-size: 13px;
}

/* Keep original text handling */
.Button.APIRequest-example-button1DGMsfaOTVNW span,
.Button.APIRequest-example-button1DGMsfaOTVNW div {
    text-align: left;
    direction: ltr;
}

/* Keep original hover behavior */
.Button.APIRequest-example-button1DGMsfaOTVNW:hover {
    width: auto;
    z-index: 10;
    background: #262b33;
}

/* Simple active state */
.Button.APIRequest-example-button1DGMsfaOTVNW.APIRequest-example-button_activeXJeukHyaHZXB {
    z-index: 20;
    background: #2c333d;
    color: #ffffff;
}
</style>
`}</HTMLBlock>