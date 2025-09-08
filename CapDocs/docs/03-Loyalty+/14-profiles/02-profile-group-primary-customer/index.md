---
title: 'Profile : Group Primary Customer (groupPrimaryCustomer)'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
User Group Loyalty - User group loyalty allows an org to incentivize not only its customers but also incentivize other business entities or individuals that contribute to their profits. It is a customer retention solution with custom group structures and includes generic loyalty mechanics which helps an org to establish brand loyalty.  
In user group loyalty, an individual’s (member of a group) action will lead to other group members being rewarded.

## Attributes - Customer Identity

_The below grouping of attributes is based on Primary customer identity information._

| Attributes        | Definition                                                                | Link             |
| :---------------- | :------------------------------------------------------------------------ | :--------------- |
| name              | Primary customer’s Full Name.                                             | Learn More |
| firstname         | Lets you evaluate conditions on the first name of the primary customer.   |                  |
| lastname          | Primary customer’s Last Name.                                             |                  |
| email             | Primary customer's Email ID.                                              |                  |
| externalId        | Primary customer's External ID.                                           |                  |
| mobile            | Primary customer's Mobile number.                                         |                  |
| hasInstoreProfile | Checks if the primary customer is registered and has an in-store Profile. |                  |
| hasWeChatProfile  | Returns True, if the Primary customer has a WeChat Profile.               |                  |

## Attributes - Custom Field

_The below grouping of attributes is based on custom fields created at the Group Primary customer level._

| Attributes               | Definition                                                                      | Link |
| :----------------------- | :------------------------------------------------------------------------------ | :--- |
| customFieldValueIncludes | Check if the group primary customer has some custom field present with a value. |      |
| customFieldValueExcludes | Check If the group's primary customer has some custom field present.            |      |
| customFieldValueExists   | checks If the group's primary customer data has some custom field present.      |      |

## Attributes - KPI based on Points

_The below grouping of attributes is based on the points allocated or earned by the Group's primary customer's points._

| Attributes                   | Definition                                                                                                      | Link |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------- | :--- |
| currentPoints                | Lets you evaluate conditions on the active points of the primary customer.                                      |      |
| initialCurrentPoints         | For Primary customer of a group, current redeemable points before the current event or Active                   |      |
| currentAllPoints             | The sum of all Points, redeemable as well as Promised Points of gtoup's primary customer.                       |      |
| lifetimePoints               | Total points earned by a Primary customer of a group from the date of registration.                             |      |
| lifetimeNonRedeemablePoints. | lifetime non-redeemable points = overall non-redeemable points earned - overall non-redeemable returned points. |      |
| initialLifetimePoints        | Primary customer of a group's lifetime redeemable points before the current event.                              |      |

## Attributes - KPI based on transaction data

_The below grouping is done based on the Key Performance Indicators on the primary customer's transaction data._

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Attributes</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Definition</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Link</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>avgBasketSize</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Lets you evaluate conditions on the average basket size of the primary customer.  </p>
<p>(The ratio of the total quantities of line items purchased to the total number of transactions made).</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"></td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>avgSpendPerVisit</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Lets you evaluate conditions on the average spend per visit by the primary customer.  </p>
<p>(Total purchases amount)/ (Total number of transactions made).</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"></td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>numberOfTxns</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Lets you evaluate conditions on the total number of transactions by a primary customer.</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"></td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>numberOfTxnsToday</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Lets you evaluate conditions on the number of transactions made by the primary customer on the current day.</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"></td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>numberOfVisits</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Lets you evaluate conditions on the number of visits primary customers.</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"></td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>lifetimePurchase</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Lets you evaluate conditions on lifetime points of the primary customer.</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"></td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>InitialLifetimePurchase</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Lets you evaluate conditions on lifetime purchases of the primary customer.</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

## Attributes - Date

| Attribute | Definition                                                                           | Link |
| :-------- | :----------------------------------------------------------------------------------- | :--- |
| joinDate  | Lets you evaluate conditions based on the registration date of the primary customer. |      |

## Attributes - Slab Information

_This grouping of attributes is done on the basis of Tier/Slab Information associated with the group's primary customer's loyalty._

| Attributes        | Definition                                                                                                | Link |
| :---------------- | :-------------------------------------------------------------------------------------------------------- | :--- |
| initialSlabName   | Initial slab name of the Primary Customer of group before evaluating an event, let's say gold,silver etc. |      |
| initialSlabNumber | Initial slab number of the Primary Customer of group before evaluating an event, let's say 10, 1, 3 etc   |      |
| slabName          | Lets you evaluate conditions on the tier name of a primary customer.                                      |      |
| slabNumber        | Lets you evaluate conditions on the tier number of the primary customer.                                  |      |