---
title: Get Loyalty Promotion List of a Customer (Connected Org)
excerpt: ''
api:
  file: v1.json
  operationId: connectedorgs-get-promotion-list-for-a-customer
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
A loyalty promotion is a strategy used to reward customers for their engagement and transactions with a brand.

This API retrieves promotion list for a specific customer who is part of a connected organisation. It provides detailed information about the promotions associated with the customer within a loyalty program. This includes the types of promotions, point and redemption restrictions, start and end dates, and activation status.

By default, types of promotions are not available for all organisations. This feature must be enabled separately. For more details on types of promotions, refer to [types of promotions](https://docs.capillarytech.com/docs/advanced-loyalty-promotions).

## Types of promotions

There are three different types of promotions:

- GENERIC (UI term - Available without issue)
- LOYALTY (UI term - Direct issue)
- LOYALTY_EARNING (UI term - Enroll & Issue)

The field `pointsOfferType `in the response provides information on the type of promotion.

# API endpoint example

`(https://eucrm.cc.capillarytech.com/v2.1/customers/lookup/promotionData?identifierName=mobile&identifierValue=917406400033&source=INSTORE`

# Prerequisites

-   Authentication: Basic or OAuth credentials
-   Access group resource: Read access to customer group resource

# Resource information

|                        |                                      |
| :--------------------- | :----------------------------------- |
| URI                    | /v2.1/customers/lookup/promotionData |
| HTTP Method            | GET                                  |
| Pagination             | Yes                                  |
| Batch support          | No                                   |
| Rate limit information | NA                                   |

# Headers

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Header</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>DATA-SCOPE-ORG</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>List of Organisation IDs</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>DATA-SCOPE</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organisation. Defining a scope ensures that the response contains only data from the respective organisation.  </p>
<p>Supported headers: <code>SELF</code>, <code>OTHER</code> and <code>ALL</code>.  </p>
<p>Refer to connected orgs <a href="https://docs.capillarytech.com/reference/connected-orgs-data-scopes">data scopes</a> for more information.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


<br />

# Query parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter Name</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Data Type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>identifierName*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier of the customer. Supported values <code>mobile </code>, <code>id</code>, <code>email </code>and <code>externalid</code></p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>identifierValue*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Value for the identifier. For example, the mobile number or customer ID.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>source*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Source in which the identifier is available. For example, <code>INSTORE</code>, <code>MARTJACK</code>, <code>WECHAT</code>, <code>FACEBOOK</code>, <code>WEB_ENGAGE</code>, <code>TMALL</code>, <code>TAOBAO</code>, <code>JD</code>, <code>ECOMMERCE</code>, <code>WEBSITE</code>, <code>LINE</code>, <code>ALL</code></p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>promotionStatusForCustomer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Provides information about customer enrollment and issuances in the promotion. Supported values are:-<br><code>AVAILABLE_TO_ENROL</code>:- Promotions of the &quot;Enrol &amp; Issue&quot; type that customers can still enroll in.<br><code>AVAILABLE_TO_EARN</code>:- Promotions the customer is eligible to earn, including &quot;Direct Issue&quot; promotions and &quot;Enrol &amp; Issue&quot; promotions where the customer is already enrolled.<br><code>AVAILABLE_TO_REDEEM</code>:- Active promotions that the customer can currently redeem (get benefits) across all types of promotionns including &quot;Enrol &amp; Issue&quot;, &quot;Direct Issue&quot; and &quot;Available to Issue&quot;<br><code>EXPIRED</code>:- Promotions that have expired, i.e. promotion&#39;s end date is in past.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>includeAlternateCurrencyUsage</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>With the parameter, the backend includes alternate currency usage in the same response fields used for points. By default, the value is false.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>limit</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of results that need to be displayed. The values from zero to a maximum of 100 are supported.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>offset</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Start index for data retrieval. This value should not be negative. </p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>pageDetails</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object containing pagination details.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- pageNumber</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Page number of the current result set.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- pageSize</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Number of entries per page.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- totalEntries</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total number of entries in the result set.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- pageCount</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Total number of pages in the result set.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>customerId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier of the customer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>promotions</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>An object containing details of promotions.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- promotionId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique identifier for the promotion issued to the customer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- promotionName</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Name of the promotion.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- programId</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier of the loyalty program associated with the promotion.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- startDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Start date of the promotion. ISO 8601 Date Format</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- endDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>End date of the promotion. ISO 8601 Date Format</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- identifier</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Universally Unique Identifier for the promotion.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- description</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Description of the promotion.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- active</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the promotion is active.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- eventName</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Event triggering the promotion.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- promotionMetadata</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array containing metadata for the promotion.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - key</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Key of the metadata.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - value</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Value of the metadata.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - brandDefined</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the metadata is brand-defined.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- limits</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object containing limits set for the promotion.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - maxPointsPerEvent</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum number of points offered per event.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - pointsPerCustomer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum points a customer can earn.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - numberOFTimesPerCustomer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The maximum number of activities per customer that can allocate points.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - totalPointsInPromotion</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The maximum points permitted across customers within the promotion duration.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- customerUsage</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object containing customer usage details.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - currentPointsPerCustomer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The current points accrued by the customer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - currentNumberOfTimesPerCustomer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The number of activities through which the customer has received the points.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - currentTotalPointsInPromotion</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The points received by all customers within the promotion duration.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- pointsOfferType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of promotion. The types of promotion are GENERIC, LOYALTY, and LOYALTY_EARNING.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- promotionRestriction</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object containing <a href="https://docs.capillarytech.com/docs/direct-issue-loyalty-promotion#defining-limits-for-issuing-promotions-and-redemption">promotion restriction </a>details.  </p>
<p>You can set limits on how many times a promotion can be issued and redeemed. Information in this field is replicated if Advanced loyalty Promotion is available for your organisation.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - issualRestrictions</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array containing issual restriction details.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - - kpi</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Key performance indicator for the restriction. The KPI values are MAX_NUMBER_OF_ISSUALS_PER_CUSTOMER and MAX_POINTS_PER_ISSUAL_PER_CUSTOMER.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - - maxLimit</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum times a customer can be enrolled in a promotion.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - - currentCustomerUsage</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The present count of a customer&#39;s enrolment in a promotion.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - - limitOn</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specifies what the limit applies to. The values are EVENT, CUSTOMER, or PROMOTION.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - earnRestrictions</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array containing earn restriction details.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - - kpi</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Key performance indicator for the restriction. The KPI values are MAX_NUMBER_OF_EARNS_PER_CUSTOMER and MAX_POINTS_PER_EARN_PER_CUSTOMER.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - - maxLimit</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum times a promotion can be issued to a customer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - - currentCustomerUsage</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The present number of instances a promotion is issued to the customer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - - limitOn</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specifies what the limit applies to. The values are EVENT, CUSTOMER, or PROMOTION.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - redemptionRestrictions</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array containing redemption restriction details.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - - kpi</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Key performance indicator for the restriction. The KPI values are:<br>MAX_ALLOWED_TIMES_PER_CART<br>MAX_ALLOWED_POINTS_PER_CART<br>MAX_ALLOWED_TIMES_PER_CUSTOMER<br>MAX_ALLOWED_EVENTS_PER_CUSTOMER<br>MAX_ALLOWED_POINTS_PER_CUSTOMER<br>MAX_ALLOWED_TIMES_PER_CUSTOMER<br>MAX_ALLOWED_EVENTS_PER_PROMOTION<br>MAX_ALLOWED_POINTS_PER_PROMOTION</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - - maxLimit</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Maximum number of times the points can be availed.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - - currentCustomerUsage</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The present number of points availed by the customer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - - limitOn</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specifies what the limit applies to. The values are EVENT, CUSTOMER, or PROMOTION.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - - type</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of restrictions. The values are NON_PERIOD_BASED or PERIOD_BASED.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>orgID</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID of the associated organisation.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>warnings</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>An array containing any warnings.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

# Sample Response

```json SELF
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 1,
        "pageCount": 1
    },
    "customerId": 347297848,
    "promotions": [
        {
            "promotionId": 1122938,
            "promotionName": "Award50",
            "programId": 1147,
            "startDate": "2024-08-30T00:00:00.000Z",
            "endDate": "2024-09-29T23:59:59.000Z",
            "identifier": "ed64e808-dc10-4784-a752-eb7d8d55c87e",
            "description": "Award 50",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "50.000",
                "currentNumberOfTimesPerCustomer": 1,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            },
            "orgId": 50405
        }
    ],
    "warnings": []
}
```
```json OTHER
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 1,
        "pageCount": 1
    },
    "customerId": 347297848,
    "promotions": [
        {
            "promotionId": 1122938,
            "promotionName": "Award50",
            "programId": 1147,
            "startDate": "2024-08-30T00:00:00.000Z",
            "endDate": "2024-09-29T23:59:59.000Z",
            "identifier": "ed64e808-dc10-4784-a752-eb7d8d55c87e",
            "description": "Award 50",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "50.000",
                "currentNumberOfTimesPerCustomer": 1,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            },
            "orgId": 50405
        }
    ],
    "warnings": []
}
```
```json ALL
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 1,
        "pageCount": 1
    },
    "customerId": 347297848,
    "promotions": [
        {
            "promotionId": 1122938,
            "promotionName": "Award50",
            "programId": 1147,
            "startDate": "2024-08-30T00:00:00.000Z",
            "endDate": "2024-09-29T23:59:59.000Z",
            "identifier": "ed64e808-dc10-4784-a752-eb7d8d55c87e",
            "description": "Award 50",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "50.000",
                "currentNumberOfTimesPerCustomer": 1,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            },
            "orgId": 50405
        },
        {
            "promotionId": 1122935,
            "promotionName": "Award 100 Points",
            "programId": 1148,
            "startDate": "2024-08-30T00:00:00.000Z",
            "endDate": "2024-09-29T23:59:59.000Z",
            "identifier": "26a1b64a-f61d-4a64-9dd0-f3fe5a25dcf5",
            "description": "Award 100 Points",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "100.000",
                "currentNumberOfTimesPerCustomer": 1,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            },
            "orgId": 50406
        }
    ],
    "warnings": []
}
```

# API specific error codes

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Error</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>8013</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier name missing or incorrect.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>8015</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier value missing or incorrect.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>8003</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Source is missing or incorrect.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>310144</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Connected Orgs not set properly in Headers.<br>Check whether the target organisation is a connected organisation.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>