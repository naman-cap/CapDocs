---
title: Update Customer Details
excerpt: Lets you update existing customer details.
api:
  file: v2.json
  operationId: update-customer-details
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
You can update profile information, extended field values, communication details, custom field values, extended field values, and loyalty status (only non loyalty to loyalty) on any source such as `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `INSTORE`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, and `WEBSITE`. If the [Dual Eligibility](https://docs.capillarytech.com/docs/customer_entity#dual-eligibility) feature is enabled, you can update the communication channels available in the Instore profile

Limitations of the customer update API - 

- Cannot update identifiers with this API
- Cannot modify source type
- Cannot change a loyalty customer to non-loyalty but can change a non-loyalty customer to a loyalty

# Prerequisites

The following are the prerequisites for updating customer details - 

- Unique customer id of the respective customer
- Source in which you want to modify the details
- Account id of the specific source in which you want to modify the customer details 

# Header information

You can define certain attributes in the API header section and define the user context details. For more information, refer to the user context section in the [Audit Details documentation](https://docs.capillarytech.com/reference/get-entity-audit-logs#adding-user-context-details).

# Resource information

|                       |                        |
| :-------------------- | :--------------------- |
| URI                   | /v2/promotion/customer |
| HTTP method           | PUT                    |
| Pagination supported? | NA                     |
| Rate limit            | NA                     |
| Batch support         | NA                     |

# API endpoint example

`<https://eu.api.capillarytech.com/v2/customers/{userId}?{query_parameters}>`

# Request path parameters

| Parameter | Type   | Description                                                 |
| :-------- | :----- | :---------------------------------------------------------- |
| userId\*  | string | Unique ID of the customer whose details need to be updated. |

# Request query parameters

| Parameter | Type    | Description                                                                                                                                                                                                       |
| :-------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| source\*  | enum    | Specify the source in which you want to update the customer details - FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, MOBILE_APP. For sources with multiple account |
| accountId | string  | Account in which you want to update the customer details. (Required only for sources with multiple accounts).                                                                                                     |
| use_async | boolean | Pass `true` to run loyalty activities in the background. Hence, sideEffects are not returned in the response.  Pass `false` to wait for loyalty activities to complete and return the side effects.               |

# Request body parameters

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
  <td style="border: 1px solid #ddd; padding: 8px;"><p>profiles</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Meta information of the customer</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>firstName</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>First Name of the customer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>lastName</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Last Name of the customer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>fields</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Associated custom fields.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- gender</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Gender of the customer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- city</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Customer&#39;s city of residence. </p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>commChannels</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Communication channels of the customer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- type</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of the communication channel.<br>Value: <code>mobile</code>, <code>email</code>, <code>wechat</code>, <code>ios</code>, <code>android</code>, <code>line</code>, <code>mobilePush</code>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- value</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Based on the channel <code>type</code> enter the channel value. For example, mobile number is the value for mobile. <strong>Note:</strong> For mobile numbers, add the mobile number with the country code.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- primary</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Whether the current identifier of the customer (primary identifier as per the org&#39;s configuration).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- verified</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Whether the current identifier is the primary identifier or not. For example, through OTP.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- meta</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Additional details of the identifier.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>loyaltyInfo</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object containing the loyalty information of the customer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>loyaltyType</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Loyalty status of the customer.<br>Value: <code>loyalty</code>, <code>non_loyalty</code>.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>extendedFields</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Extended field details of the customer in key:value pairs. You can only pass extended fields that are enabled for your org with the respective datatypes value.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>gender</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Gender of the customer.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>city</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Customer&#39;s city of residence.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>loyaltyProgramEnrollments</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Lets you enroll customers into loyalty programs.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>programId</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Unique ID of the loyalty program in which you want to enrol. You cannot update if the customer is already enrolled in the loyalty program.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>tierNumber</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Sequence number of the tier that you want to allocate to the customer. For example, <code>1</code> for the lower tier, and <code>2</code> for the next tier, and so on.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>loyaltyPoints</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Integer</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Loyalty points to credit in customer&#39;s account.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>tierExpiryDate</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Expiry date and time of the specified tier. Supported format:<br>YYYY-MM-DDTHH:MM:SS +/- (timezone).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><ul>
<li>pointsExpiryDate</li>
</ul>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Expiry date and time of the points issued. Supported format:<br>YYYY-MM-DDTHH:MM:SS +/- (timezone).</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>


<br />

```json Example request
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/customers/171891944?source=INSTORE&use_async=false' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic dGVzdiNmY2OWZmZmRkYg==' \
--data-raw '{
    "profiles": [
        {
            "firstName": "Tom",
            "lastName": "Sawyer",
            "fields": {
                "gender": "Male",
                "city": "Bangalore"
            },
            "commChannels": [
            {
                "type": "mobile",
                "value": "9999000000",
                "primary": "true",
                "verified": "true",
                "meta": {
            "residence": "true"
          }
        },
        {
          "type": "email",
          "value": "tomsawyer@gmail.com",
          "primary": "true",
          "verified": "true",
          "meta": {
            "residence": "true"
          }
        }
      ]
        }
    ],
    
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "extendedFields": {
        "gender": "MALE",
        "city": "Bangalore"
    },
    "loyaltyProgramEnrollments": [
    {
      "programId": 699,
      "tierNumber": 1,
      "loyaltyPoints": 0,
      "tierExpiryDate": "2024-07-11T16:36:17+05:30",
      "pointsExpiryDate": "2024-07-11T16:36:17+05:30"
    }
  ]
}'
```

# Response parameters

| Parameter          | Datatype | Description                                          |
| ------------------ | -------- | ---------------------------------------------------- |
| createdId          | String   | Unique ID of the customer whose details are updated. |
| warnings           | Object   | Object containing the warning details, if any.       |
| sideEffects        | Object   | Object containing the information on results.        |
| - entityType       | String   | Entity affected by the API. Example: USER            |
| - rawAwardedPoints | Number   | The raw number of points awarded                     |
| - awardedPoints    | Number   | The awarded points after adjustments                 |
| - type             | String   | Effect of running the API. Example: points           |

## API specific error code 

| Error Code | Description                                                          | Reason                                           |
| :--------- | :------------------------------------------------------------------- | :----------------------------------------------- |
| 8015       | Customer not found for the given identifiers                         | Invalid Customer identifiers                     |
| 3217       | Org source addition failed, Invalid source account identifier passed | Source account identifier invalid or unsupported |