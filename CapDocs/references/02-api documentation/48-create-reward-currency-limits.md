---
title: Create Reward Currency Limits
excerpt: ''
api:
  file: v1.json
  operationId: create-reward-currency-limits
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---

> ❗️ **This API is currently under enhancement, so please don't use it. This page will be updated once the API is fully ready to be used.**

This API allows you define earning limits for reward currencies (points and alternate currencies). You can also use this API to create a target/milestone and define earning limits on them.

> 👍 Note
> 
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

-   Authentication: Basic/OAuth authentication 
-   Default access group
-   Unique identifier of the loyalty program (programId)

# Resource information

|               |                                                       |
| :------------ | :---------------------------------------------------- |
| URI           | /api_gateway/loyalty/v1/programs/`\{programId\}`/cappings |
| HTTP method   | POST                                                  |
| Pagination    | NA                                                    |
| Rate limit    | NA                                                    |
| Batch support | NA                                                    |

# API endpoint example

`http://eu.api.capillarytech.com/api_gateway/loyalty/v1/programs/973/cappings`

# Path Parameters

| Parameter | Data Type | Description                       |
| :-------- | :-------- | :-------------------------------- |
| programId | Integer   | Unique ID of the loyalty program. |

# Request body

```json
{
    "scope": "INDIVIDUAL_EVENT",
    "name": "Capping_NoTarget",
    "entity": "POINTS",
    "eventName": "TRANSACTION_ADD",
    "isActive": true,
    "cappingEntityType": "TRANSACTION_ADD",
    "propertyValues": "{\"limit\": \"10002\", \"additionalFilters\": null}",
    "createdBy": 1824412,
    "enrollmentType": "ENROLL_VIA_AUDIENCE",
    "cappingFilterMapping": [
        {
            "eventSubTypeId": 23,
            "filterEntityType": "EVENT",
            "filterEntityId": 56
        }
    ]
}
```

```json
{
    "scope": "INDIVIDUAL_EVENT",
    "name": "Capping_NoTarget",
    "entity": "ALTERNATE_CURRENCIES",
    "eventName": "TRANSACTION_ADD",
    "isActive": true,
    "cappingEntityType": "TRANSACTION_ADD",
    "propertyValues": "{\"limit\": \"10002\", \"additionalFilters\": null}",
    "createdBy": 1824412,
    "enrollmentType": "ENROLL_VIA_AUDIENCE",
     "entityIdentifier": "0nzyDx",
    "cappingFilterMapping": [
        {
            "eventSubTypeId": 23,
            "filterEntityType": "EVENT",
            "filterEntityId": 56
        }
    ]
}
```

```json
{
    "scope": "INDIVIDUAL_CUSTOMER",
    "name": "PointsCapping",
    "entity": "POINTS",
    "targetGroups": "{\"active\": true, \"name\": \"CappingTarget\", \"periods\": {\"refCode\": \"Cycle_1\", \"startDate\": \"2025-02-01\", \"endDate\": \"2025-04-28\"}, \"frequencyType\": \"CUSTOM\", \"trackingType\": \"CAPPING\", \"targetEvaluationType\": \"FIXED_CALENDAR_WINDOW\", \"preferredTillId\": -1, \"targets\": {\"active\": true, \"name\": \"CappingTarget\", \"targetEntity\": \"POINTS\", \"defaultValues\": [{\"defaultValue\": \"100\"}, \"enrolmentMethod\": \"TRANSACTION\", \"targetType\": \"REGULAR_POINTS\", \"filters\": []}]}",
    "eventName": "TRANSACTION_ADD",
    "isActive": true,
    "cappingEntityType": "TRANSACTION_ADD",
    "propertyValues": "{\"limit\": \"10002\", \"additionalFilters\": null}",
    "createdBy": 12345,
    "enrollmentType": "ENROLL_VIA_AUDIENCE",
    "cappingFilterMapping": [
        {
            "eventSubTypeId": 23,
            "filterEntityType": "EVENT",
            "filterEntityId": 56
        }
    ]
}
```

```json
{
    "scope": "INDIVIDUAL_CUSTOMER",
    "name": "AlternateCurrencyCapping",
    "entity": "ALTERNATE_CURRENCIES",
    "targetGroups": "{\"active\":true,\"name\":\"AlternateCurrencyCappingTG\",\"periods\":[{\"refCode\":\"Cycle_1\",\"startDate\":\"2025-02-01\",\"endDate\":\"2025-04-28\"}],\"frequencyType\":\"CUSTOM\",\"trackingType\":\"CAPPING\",\"targetEvaluationType\":\"FIXED_CALENDAR_WINDOW\",\"preferredTillId\":-1,\"targets\":[{\"active\":true,\"name\":\"AlternateCurrencyCappingTG\",\"targetEntity\":\"ALTERNATE_CURRENCIES\",\"defaultValues\":[{\"defaultValue\":\"100\"}],\"enrolmentMethod\":\"TRANSACTION\",\"targetType\":\"REGULAR\",\"filters\":[],\"extendedFieldInfo\":{\"alternateCurrencyIdentifier\":\"0nzyDx\",\"programId\":46}}]}",
    "eventName": "TRANSACTION_ADD",
    "isActive": true,
    "cappingEntityType": "TRANSACTION_ADD",
    "propertyValues": "{\"limit\": \"10002\", \"additionalFilters\": null}",
    "createdBy": 12345,
    "entityIdentifier": "0nzyDx",
    "enrollmentType": "ENROLL_VIA_AUDIENCE",
    "cappingFilterMapping": [
        {
            "eventSubTypeId": 23,
            "filterEntityType": "EVENT",
            "filterEntityId": 56
        }
    ]
}
```

# Request body parameters

| Parameter Name  
(Parameters marked with \* are mandatory) | Data Type | Description |
| --- | --- | --- |
| scope\* | Enum | Level at which limits is applied. Supported values:<br/><br/>`INDIVIDUAL_EVENT`: Limits reward currencies (points or alternate currencies) for a single transaction or behavioural event.<br/>`INDIVIDUAL_CUSTOMER`: Limits reward currencies (points or alternate currencies ) across multiple transactions or behavioural events. |
| name\* | String | Unique name for the limits criteria. Maximum character limit: 200 characters, special characters are supported. |
| entity\* | Enum | Specifies which reward currency is being limited. Supported values:<br/><br/>`POINTS`: Limit the number of points a customer can earn.<br/>`ALTERNATE_CURRENCIES`: Limit the number of alternate currencies a customer can earn. |
| targetGroups | String (JSON) | Serialised JSON string defining the target group details. This is required when `scope`=`INDIVIDUAL_CUSTOMER`. Refer to the documentation for more information on creating [points target](https://docs.capillarytech.com/reference/create-target-groups) and [alternate currency targets](https://docs.capillarytech.com/reference/create-target-based-on-alternate-currencies). |
| eventName\* | Enum | Define the event that triggers the limits. Supported values:<br/><br/>`TRANSACTION_ADD` |
| isActive | Boolean | Indicate if limiting reward currencies is active or inactive. Supported values:<br/><br/>`true`: Capping is active.<br/>`false`: Capping is inactive. |
| cappingEntityType\* | Enum | Specifies where the limits are applied to. Supported values:<br/><br/>`ALL_EVENTS`: Limits reward currencies earned from all events, transactional and behavioural.<br/>`PROMOTION`: Limits reward currencies earned from loyalty promotions.<br/>`TRANSACTION_ADD`: Limits reward currencies earned from transactions. |
| propertyValues\* | String (JSON) | Serialised JSON string containing the limits configurations such as reward currency limits and additional filtering rules. The `limit` field defines the reward currency limit. |
| createdBy\* | Long | Unique customer identifier of the user who created the limit rules. |
| entityIdentifier | String | Unique identifier of the alternate currency that is generated when creating an alternate currency. |
| enrollmentType | Enum | Specifies how the customer is enrolled into the target group. Supported values:<br/><br/>`UPLOAD`: Customer details are uploaded and enrolled manually.<br/>`ENROLL_VIA_AUDIENCE`: Customer are enrolled through audience groups. Use this if `scope`=`INDIVIDUAL_CUSTOMER`. |
| enrollmentTypeBody | String (JSON) | JSON string containing enrollment configuration details. |
| cappingFilterMapping\* | Object | Object containing details of filter configurations that determine when the limits rule applies. |
| - filterEntityType\* | Enum | Specifies what the filter applies to. Supported values: `EVENT` and `PROMOTION` |
| - eventSubTypeId\* | Long | ID of a specific event subtype that the capping applies to. This field is used to track specific variations or subtypes of events like TransactionAdd, PointsRedemption, etc.<br/><br/>Refer to the section on [event subtype IDs](https://docs.capillarytech.com/reference/create-capping#event-subtype-ids) for more information. |
| - filterEntityId\* | Integer | ID of the event or promotion being filtered.<br/><br/>When `filterEntityType` is `EVENT`, the `filterEntityId` will correspond to a specific event ID.<br/>When `filterEntityType` is `PROMOTION`, the `filterEntityId` will correspond to a specific promotion ID. |

# Event Subtype IDs

<HTMLBlock>{`
<table border="1" cellpadding="6" cellspacing="0">
  <thead>
    <tr>
      <th>Category</th>
      <th>Event ID</th>
      <th>Event Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="9">Core Transaction Events</td>
      <td>1</td>
      <td>NewBill</td>
    </tr>
    <tr><td>3</td><td>PointsRedemption</td></tr>
    <tr><td>4</td><td>VoucherRedemption</td></tr>
    <tr><td>5</td><td>ReturnBill</td></tr>
    <tr><td>9</td><td>TransactionFinished</td></tr>
    <tr><td>11</td><td>TransactionUpdate</td></tr>
    <tr><td>16</td><td>DelayedAccrual</td></tr>
    <tr><td>19</td><td>GroupTransactionUpdate</td></tr>
    <tr><td>20</td><td>GroupReturnBill</td></tr>

    <tr>
      <td rowspan="5">Customer Related Events</td>
      <td>22</td>
      <td>GroupMemberJoin</td>
    </tr>
    <tr><td>23</td><td>GroupMemberLeave</td></tr>
    <tr><td>25</td><td>PointsTransfer</td></tr>
    <tr><td>28</td><td>TargetCompleted</td></tr>
    <tr><td>29</td><td>PointsRedemptionReversal</td></tr>

    <tr>
      <td rowspan="5">Communication Events</td>
      <td>6</td>
      <td>TrackerConditionSuccess</td>
    </tr>
    <tr><td>10</td><td>ReferralPostProcessing</td></tr>
    <tr><td>13</td><td>EmailOpen</td></tr>
    <tr><td>14</td><td>EmailClick</td></tr>
    <tr><td>17</td><td>Scan</td></tr>

    <tr>
      <td rowspan="8">Generic/System Events</td>
      <td rowspan="8">-1</td>
      <td>CampaignRefereeRedeem</td>
    </tr>
    <tr><td>CampaignReferralReferrer</td></tr>
    <tr><td>IncomingSms</td></tr>
    <tr><td>PartnerProgramTierUpdate</td></tr>
    <tr><td>PartnerProgramDeLinking</td></tr>
    <tr><td>SlabUpgrade</td></tr>
    <tr><td>SocialConnectUpdate</td></tr>
    <tr><td>VoucherPreRedemption</td></tr>
  </tbody>
</table>
`}</HTMLBlock>

# Response body

```json
{
    "code": null,
    "message": "Capping created successfully"
}
```

# Response parameters

| Field   | Data Type | Description                                        |
| ------- | --------- | -------------------------------------------------- |
| code    | Integer   | Error code of the response, if any.                |
| message | String    | Success or error message for the response, if any. |

# API error codes

| Code | Description                                                 | Reason                                                                                                                                          |
| :--- | :---------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| -    | Scope must not be null                                      | `scope` is not provided in the request.                                                                                                         |
| -    | Name must not be null                                       | `name` is not provided in the request.                                                                                                          |
| -    | Entity must not be null                                     | `entity` is not provided in the request.                                                                                                        |
| -    | EventName must not be null                                  | `eventName` is not provided in the request.                                                                                                     |
| -    | CappingEntityType must not be null                          | `cappingEntityType` is not provided in the request.                                                                                             |
| -    | PropertyValues must not be null                             | `propertyValues` is not provided in the request.                                                                                                |
| -    | CreatedBy must not be null                                  | `createdBy` is not provided in the request.                                                                                                     |
| -    | CappingFilterMapping must not be null                       | `cappingFilterMapping` object is not provided in the request.                                                                                   |
| -    | CappingFilterMapping must not be empty                      | Parameters under `cappingFilterMapping` are not provided in the request.                                                                        |
| -    | TargetGroups must not be null for `INDIVIDUAL_CUSTOMER`     | `targetGroups` is not provided in the request. This is required when `scope`=`INDIVIDUAL_CUSTOMER`                                              |
| -    | `enrollmentTypeBody` must not be null for `AUDIENCE_FILTER` | If `scope`=`INDIVIDUAL_CUSTOMER` and `targetGroup` has the `AUDIENCE_FILTER` parameter, the `enrollmentTypeBody` JSON string must not be empty. |
|      | max limit for cart and customer based capping is 50 each    | The maximum limit for the number of cappings for cart and customer has exceeded.                                                                |