---
title: Get Loyalty Promotions List for a Customer
excerpt: Retrieve promotion data of a specific customer.
api:
  file: v2.json
  operationId: get-promotion-data-list-for-a-customer
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API retrieves the promotion list of a specified customer. It provides detailed information on the various promotions the customer is associated with within a loyalty program. This includes the types of promotions, point and redemption restriction details, start and end dates,  and activation status.

By default, the types of promotions are not available for all the orgs. This needs to be enabled separately. For more details on the types of promotions, refer [Types of promotions](https://docs.capillarytech.com/docs/advanced-loyalty-promotions).

## Types of promotions

There are three different types of promotions:

- GENERIC (UI term - Available without issue)
- LOYALTY (UI term - Direct issue)
- LOYALTY_EARNING (UI term - Enrol & Issue)

The field `pointsOfferType `in the response provides information on the type of promotion.

## Limits and restrictions

If the [Types of promotions](https://docs.capillarytech.com/docs/advanced-loyalty-promotions) are enabled for your organisation, then the information regarding the limits and restrictions on issual, earning, or redemption is available in the object  _promotionRestriction_. This information is also replicated in the  _limits_ and  _customerUsage_ objects.

 If your organisation does not have the [Types of promotions](https://docs.capillarytech.com/docs/advanced-loyalty-promotions) enabled, the details on the limits and restrictions are available only in the  _limits_ and _customerUsage_ objects.

# API endpoint example

`(https://eucrm.cc.capillarytech.com/v2/customers/lookup/promotionData?identifierName=externalId&identifierValue=000003873354&source=INSTORE&limit=10&offset=0)`

# Prerequisites

-   Authentication: Basic or OAuth credentials
-   Access group resource: Read access to customer group resource

# Resource information

|                        |                                    |
| :--------------------- | :--------------------------------- |
| URI                    | /v2/customers/lookup/promotionData |
| HTTP Method            | GET                                |
| Pagination             | Yes                                |
| Batch support          | No                                 |
| Rate limit information | NA                                 |

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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Identifier type to identify the customer. Supported Values: mobile, email, externalId, id,cuid</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>identifierValue*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Value for the identifier.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>source*</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Source from which you want to fetch the customer details. Supported Values:- FACEBOOK, WEB_ENGAGE, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, ALL.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>promotionStatusForCustomer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Provides information about customer enrollment and issuances in the promotion. Supported values are:-<br>AVAILABLE_TO_ENROL:- Promotions of the &quot;Enrol &amp; Issue&quot; type that customers can still enroll in.<br>AVAILABLE_TO_EARN:- Promotions the customer is eligible to enrol to promotion, including &quot;Direct Issue&quot; promotions and &quot;Enrol &amp; Issue&quot; promotions where the customer is already enrolled.<br>AVAILABLE_TO_REDEEM:- Active promotions that the customer can currently redeem (get benefits) across all types of promotionns including &quot;Enrol &amp; Issue&quot;, &quot;Direct Issue&quot; and &quot;Available to Issue&quot;<br>EXPIRED:- Promotions that have expired, i.e. promotion&#39;s end date is in past.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>fetchAllUsage</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Set to true to fetch details of all <a href="https://docs.capillarytech.com/docs/direct-issue-loyalty-promotion#defining-limits-for-issuing-promotions-and-redemption">redemption restrictions</a> , including both enabled and disabled.<br>If a restriction is not enabled and <code>fetchAllUsage</code>=true, the <code>maxLimit</code> value is displayed as -1, which indicates that there are no restrictions.</p>
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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Start index for data retrieval. This value should not be negative.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>promotionType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String (ENUM)</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specify the type of the promotions<br>Supported values: GENERIC, DIRECT_ISSUE, ENROL_AND_ISSUE</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>sourceType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ENUM</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Pass any one values among UI, API, CAMPAIGN , if want to filter promotion data based on its source type</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>programs</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Comma separated list of program ids</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


```curl Sample Request
https://eu.api.capillarytech.com/v2/customers/lookup/promotionData?identifierName=externalId&identifierValue=000003873354&source=INSTORE&limit=10&offset=0
```
```curl For getting promotion identifier and description
https://eu.api.capillarytech.com/v2/customers/lookup/promotionData?identifierName=mobile&source=INSTORE&identifierValue=919456430850&promotionType=GENERIC
```

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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Start date of the promotion. Supported format: YYYY-MM-DDTHH:MM:SS.000Z. The system uses the server&#39;s cluster time for determining the badge expiry. For example, if a badge expires at 7 PM IST in an Asia-based cluster, it will expire at that exact time, regardless of the user&#39;s local time zone.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- endDate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>End date of the promotion. Supported format: YYYY-MM-DDTHH:MM:SS.000Z. The system uses the server&#39;s cluster time for determining the badge expiry. For example, if a badge expires at 7 PM IST in an Asia-based cluster, it will expire at that exact time, regardless of the user&#39;s local time zone.</p>
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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array containing metadata for the promotion. It allows you to provide additional information for the promotion.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - key</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Key of the additional information.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - value</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Value of the additional information.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - brandDefined</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Boolean</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Indicates if the additional information about promotion is assigned to some brands or not. Values: TRUE or FALSE</p>
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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object containing promotion restriction details. Information in this field is replicated if Advanced loyalty Promotion is available in your org.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - issualRestrictions</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array containing issual restriction details. This restriction can configured using API and UI both.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - - kpi</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Key performance indicator for the restriction. The KPI values are NUMBER_OF_ISSUALS: Number of promotion issual done<br>NUMBER_OF_TIMES: Number of times the issual was done.<br>NUMBER_OF_POINTS: Points issued to a customer.</p>
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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array containing earn restriction details. This restriction can configured using API and UI both.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>- - - kpi</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Key performance indicator for the restriction. The KPI values are NUMBER_OF_EARNS: Number of enrol done<br>NUMBER_OF_TIMES: Number of times the promotion got enrolled to customer.<br>NUMBER_OF_POINTS: Points issued to a customer.</p>
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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Key performance indicator for the restriction. The KPI values are NUMBER_OF_EARNS: Number of promotion enrolling done<br>NUMBER_OF_ISSUALS: Number of promotion issual done<br>NUMBER_OF_TIMES: Number of times the issual and enrolling was done.<br>NUMBER_OF_POINTS: Points issued to a customer.</p>
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

<br />

```json
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 2,
        "totalEntries": 169,
        "pageCount": 85
    },
    "customerId": 555380204,
    "promotions": [
        {
            "promotionId": 67248,
            "promotionName": "100 Points for 3+ Transactions5",
            "programId": 469,
            "startDate": "2024-10-31T18:30:00.000Z",
            "endDate": "2025-01-31T18:30:00.000Z",
            "identifier": "billslayer5",
            "description": "Earn 100 points for completing more than 3 transactions",
            "active": true,
            "eventName": "TargetCompleted",
            "limits": {
                "maxPointsPerEvent": "100",
                "pointsPerCustomer": "100",
                "numberOFTimesPerCustomer": 1,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "100",
                        "limitOn": "EVENT",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "100",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "100",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            }
        },
        {
            "promotionId": 67247,
            "promotionName": "duplicate_test_5",
            "programId": 469,
            "startDate": "2023-12-30T18:30:00.000Z",
            "endDate": "2024-12-30T18:30:00.000Z",
            "identifier": "e823c904-34bf-4b8a-8124-16085183177f",
            "description": "Welcome offer for first-time customers with specific conditions",
            "active": true,
            "eventName": "TransactionAdd",
            "promotionMetadata": [
                {
                    "key": "preferred language",
                    "value": "en",
                    "brandDefined": true
                },
                {
                    "key": "testt",
                    "value": "vall",
                    "brandDefined": true
                }
            ],
            "limits": {
                "maxPointsPerEvent": "150",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "150",
                        "limitOn": "EVENT",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "20",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "PERIOD_BASED",
                        "periodType": "MOVING_WINDOW",
                        "periodUnit": "MONTHLY"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "200",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "PERIOD_BASED",
                        "periodType": "MOVING_WINDOW",
                        "periodUnit": "DAILY"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "1000",
                        "currentCustomerUsage": "0",
                        "limitOn": "PROMOTION",
                        "type": "PERIOD_BASED",
                        "periodType": "MOVING_WINDOW",
                        "periodUnit": "WEEKLY"
                    },
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "100",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            }
        }
    ],
    "warnings": []
}
```
```json Restriction details for pointsOfferType=GENERIC
"pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "100",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
```
```json Restriction details for pointsOfferType=LOYALTY
"pointsOfferType": "LOYALTY",
            "promotionRestriction": {
                "issualRestrictions": [
                    {
                        "kpi": "NUMBER_OF_ISSUALS",
                        "maxLimit": "100",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "10",
                        "limitOn": "EVENT",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "100",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "100",
                        "currentCustomerUsage": "10.000",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "1000",
                        "currentCustomerUsage": "0",
                        "limitOn": "PROMOTION",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "1000",
                        "currentCustomerUsage": "0",
                        "limitOn": "PROMOTION",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "100",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
```
```json Restriction details for pointsOfferType=LOYALTY_EARNING

            "pointsOfferType": "LOYALTY_EARNING",
            "promotionRestriction": {
                "issualRestrictions": [
                    {
                        "kpi": "NUMBER_OF_ISSUALS",
                        "maxLimit": "10",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "earnRestrictions": [
                    {
                        "kpi": "NUMBER_OF_EARNS",
                        "maxLimit": "10",
                        "currentCustomerUsage": "2",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "10",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
```
```json promotionStatusForCustomer=AVAILABLE_TO_ENROL
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 1,
        "pageCount": 1
    },
    "customerId": 345853998,
    "promotions": [
        {
            "promotionId": 1119990,
            "promotionName": "Enrol & issue | LOYALTY EARNING PROMO",
            "programId": 1085,
            "startDate": "2024-05-01T00:00:00.000Z",
            "endDate": "2024-06-30T23:59:59.000Z",
            "identifier": "7ff82c46-dd7e-45d7-b09a-eb58aed3d714",
            "description": "Enrol and Issue",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "LOYALTY_EARNING",
            "promotionRestriction": {
                "issualRestrictions": [
                    {
                        "kpi": "NUMBER_OF_ISSUALS",
                        "maxLimit": "10",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "earnRestrictions": [
                    {
                        "kpi": "NUMBER_OF_EARNS",
                        "maxLimit": "7",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "10",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            },
            "customerPromotionTimelines": []
        }
    ],
    "warnings": []
}
```
```json promotionStatusForCustomer=AVAILABLE_TO_EARN
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 1,
        "pageCount": 1
    },
    "customerId": 345854019,
    "promotions": [
        {
            "promotionId": 1119990,
            "promotionName": "Enrol & issue | LOYALTY EARNING PROMO",
            "programId": 1085,
            "startDate": "2024-05-01T00:00:00.000Z",
            "endDate": "2024-06-30T23:59:59.000Z",
            "identifier": "7ff82c46-dd7e-45d7-b09a-eb58aed3d714",
            "description": "Enrol and Issue",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "LOYALTY_EARNING",
            "promotionRestriction": {
                "issualRestrictions": [
                    {
                        "kpi": "NUMBER_OF_ISSUALS",
                        "maxLimit": "10",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "earnRestrictions": [
                    {
                        "kpi": "NUMBER_OF_EARNS",
                        "maxLimit": "7",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "10",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            },
            "customerPromotionTimelines": [
                {
                    "enrollmentDate": "2024-06-25T12:41:55.000Z",
                    "enrollmentExpiryDate": "2024-06-30T12:41:55.000Z",
                    "enrollmentId": 1580,
                    "enrollEventLogId": 12413589,
                    "issuedDetails": []
                }
            ]
        }
    ],
    "warnings": []
}
```
```json promotionStatusForCustomer=AVAILABLE_TO_REDEEM
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 6,
        "pageCount": 1
    },
    "customerId": 345854019,
    "promotions": [
        {
            "promotionId": 1119990,
            "promotionName": "Enrol & issue | LOYALTY EARNING PROMO",
            "programId": 1085,
            "startDate": "2024-05-01T00:00:00.000Z",
            "endDate": "2024-06-30T23:59:59.000Z",
            "identifier": "7ff82c46-dd7e-45d7-b09a-eb58aed3d714",
            "description": "Enrol and Issue",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "LOYALTY_EARNING",
            "promotionRestriction": {
                "issualRestrictions": [
                    {
                        "kpi": "NUMBER_OF_ISSUALS",
                        "maxLimit": "10",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "earnRestrictions": [
                    {
                        "kpi": "NUMBER_OF_EARNS",
                        "maxLimit": "7",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "10",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            },
            "customerPromotionTimelines": [
                {
                    "enrollmentDate": "2024-06-25T12:41:55.000Z",
                    "enrollmentExpiryDate": "2024-06-30T12:41:55.000Z",
                    "enrollmentId": 1580,
                    "enrollEventLogId": 12413589,
                    "issuedDetails": [
                        {
                            "issualId": 1583,
                            "issualDate": "2024-06-25T12:44:13.000Z",
                            "issualExpiryDate": "2024-06-30T12:41:55.000Z",
                            "issualEventLogId": 12413647,
                            "redeemedCount": 0
                        }
                    ]
                }
            ]
        },
        {
            "promotionId": 1119509,
            "promotionName": "Direct issue | LOYALTY PROMO",
            "programId": 1085,
            "startDate": "2024-05-01T00:00:00.000Z",
            "endDate": "2024-07-31T23:59:59.000Z",
            "identifier": "d1a3a7ec-b4c6-46f2-ba1f-adbe2e01e31d",
            "description": "include \"L+DIRECT_PROMO\" in Txn notes to earn this",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "LOYALTY",
            "promotionRestriction": {
                "issualRestrictions": [
                    {
                        "kpi": "NUMBER_OF_ISSUALS",
                        "maxLimit": "100",
                        "currentCustomerUsage": "1",
                        "limitOn": "CUSTOMER"
                    }
                ],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "3",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            },
            "customerPromotionTimelines": [
                {
                    "enrollmentDate": "2024-06-25T12:44:13.000Z",
                    "enrollmentExpiryDate": "2024-07-31T23:59:59.000Z",
                    "enrollmentId": 1581,
                    "enrollEventLogId": 12413647,
                    "issuedDetails": [
                        {
                            "issualId": 1582,
                            "issualDate": "2024-06-25T12:44:13.000Z",
                            "issualExpiryDate": "2024-07-31T23:59:59.000Z",
                            "issualEventLogId": 12413647,
                            "redeemedCount": 0
                        }
                    ]
                }
            ]
        },
        {
            "promotionId": 1119508,
            "promotionName": "Available Aise Hi | GENERIC PROMO",
            "programId": 1085,
            "startDate": "2024-05-01T00:00:00.000Z",
            "endDate": "2024-07-31T23:59:59.000Z",
            "identifier": "358f87c6-877b-4181-aea7-23037a0990e4",
            "description": "include \"GENERIC\" in Txn notes to earn this",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "100",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            }
        },
        {
            "promotionId": 1119105,
            "promotionName": "Target Completed Promo",
            "programId": 1085,
            "startDate": "2024-04-30T00:00:00.000Z",
            "endDate": "2024-06-30T23:59:59.000Z",
            "identifier": "079bd606-9a39-4308-9fb0-0c4b24fd909b",
            "description": "",
            "active": true,
            "eventName": "TargetCompleted",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            }
        },
        {
            "promotionId": 1119103,
            "promotionName": "Item Viewed Behavioural Promo",
            "programId": 1085,
            "startDate": "2024-04-30T00:00:00.000Z",
            "endDate": "2027-05-31T23:59:59.000Z",
            "identifier": "ff0fc9a6-e3ef-4ad1-b9c5-e31645487c50",
            "description": "curl -L 'https://1j67rz51x7.execute-api.us-east-1.amazonaws.com/crm-staging-new/webhooks/7e0883bce52f9455c73460f89fe747bd' -d'{\n    \"customerId\": \"mobileNum\",\n    \"event_name\": \"Item Viewed\",\n    \"itemCode\": \"sku_1\",\n    \"items_in_product_set\": 14}",
            "active": true,
            "eventName": "GenericEvent",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            }
        },
        {
            "promotionId": 1115386,
            "promotionName": "17 POINTS LYT PROMO ",
            "programId": 1085,
            "startDate": "2023-11-06T00:00:00.000Z",
            "endDate": "2023-12-31T23:59:59.000Z",
            "identifier": "ddafcfc2-781c-43d6-92e3-5263760aeb76",
            "description": "lyt promo: awards 17 points",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            }
        }
    ],
    "warnings": []
}
```
```json fetchAllUsage=true
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 3,
        "pageCount": 1
    },
    "customerId": 564332013,
    "promotions": [
        {
            "promotionId": 79877,
            "promotionName": "Promotion Points",
            "programId": 973,
            "startDate": "2025-01-01T00:00:00.000Z",
            "endDate": "2025-02-13T23:59:59.000Z",
            "identifier": "4b0478e1-d2fd-4ffc-9032-a45547b64665",
            "description": "Promotion Points",
            "active": true,
            "eventName": "PointsRedemption",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "-1",
                "numberOFTimesPerCustomer": -1,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            }
        },
        {
            "promotionId": 79874,
            "promotionName": "Points Promo",
            "programId": 973,
            "startDate": "2025-01-22T00:00:00.000Z",
            "endDate": "2025-04-17T23:59:59.000Z",
            "identifier": "5fe57e1c-ca55-4b6d-a88c-72eff058e8c2",
            "description": "Points Promo",
            "active": true,
            "eventName": "PointsRedemption",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "-1",
                "numberOFTimesPerCustomer": -1,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            }
        },
        {
            "promotionId": 79555,
            "promotionName": "2X Points",
            "programId": 973,
            "startDate": "2025-01-20T00:00:00.000Z",
            "endDate": "2025-02-28T23:59:59.000Z",
            "identifier": "33c82f8f-f6b3-4264-9b72-3ecb969a03bf",
            "description": "2X Points",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "-1",
                "numberOFTimesPerCustomer": -1,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "4990.000",
                "currentNumberOfTimesPerCustomer": 4,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": [
                    {
                        "kpi": "NUMBER_OF_TIMES",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "4",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_POINTS",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "4990.000",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    },
                    {
                        "kpi": "NUMBER_OF_REDEMPTIONS_PER_EARN",
                        "maxLimit": "-1",
                        "currentCustomerUsage": "0",
                        "limitOn": "CUSTOMER",
                        "type": "NON_PERIOD_BASED"
                    }
                ]
            }
        }
    ],
    "warnings": []
}
```
```json promotionStatusForCustomer=EXPIRED
{
    "pageDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 1,
        "pageCount": 1
    },
    "customerId": 345854019,
    "promotions": [
        {
            "promotionId": 1115386,
            "promotionName": "17 POINTS LYT PROMO ",
            "programId": 1085,
            "startDate": "2023-11-06T00:00:00.000Z",
            "endDate": "2023-12-31T23:59:59.000Z",
            "identifier": "ddafcfc2-781c-43d6-92e3-5263760aeb76",
            "description": "lyt promo: awards 17 points",
            "active": true,
            "eventName": "TransactionAdd",
            "limits": {
                "maxPointsPerEvent": "0",
                "pointsPerCustomer": "0",
                "numberOFTimesPerCustomer": 0,
                "totalPointsInPromotion": "0"
            },
            "customerUsage": {
                "currentPointsPerCustomer": "0",
                "currentNumberOfTimesPerCustomer": 0,
                "currentTotalPointsInPromotion": "0"
            },
            "pointsOfferType": "GENERIC",
            "promotionRestriction": {
                "issualRestrictions": [],
                "earnRestrictions": [],
                "redemptionRestrictions": []
            }
        }
    ],
    "warnings": []
}
```
```json Failure- Invalid Identifier
{
    "errors": [
        {
            "status": false,
            "code": 8015,
            "message": "Customer not found for the given identifiers"
        }
    ]
}
```
```json Failure- Invalid Source
{
    "errors": [
        {
            "status": false,
            "message": "Invalid source",
            "code": 8003
        }
    ]
}
```

# API specific error codes

| Error | Description                            |
| :---- | :------------------------------------- |
| 8013  | Identifier name missing or incorrect.  |
| 8015  | Identifier value missing or incorrect. |
| 8003  | Source is missing or incorrect.        |