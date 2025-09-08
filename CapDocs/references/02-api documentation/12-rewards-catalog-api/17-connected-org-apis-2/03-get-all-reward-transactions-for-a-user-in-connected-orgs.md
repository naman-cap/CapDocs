---
title: Get all reward transactions for a user in connected orgs
excerpt: This API is used to retrieve reward transactions for a user using filters.
api:
  file: v1.json
  operationId: get-all-reward-transactions-for-a-user-in-connected-orgs
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API is used to get details of all the issue reward transactions for a user.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

> 🚧 **Warning**
>
> Use this API exclusively for connected orgs. For other orgs, use this [API](https://docs.capillarytech.com/reference/get-all-reward-transactions-for-a-user) instead.

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                                                 |
| :--------------------- | :------------------------------------------------------------------------------ |
| URL                    | /api\_gateway/rewards/core/v1.1/reward-transactions?customerId=`\{customerId\}` |
| HTTP Method            | GET                                                                             |
| Pagination             | Yes                                                                             |
| Batch support          | No                                                                              |
| Rate limit information | None                                                                            |

# API endpoint example

\<https\://eu.api.capillarytech.com/api\_gateway/rewards/core/v1.1/reward-transactions?customerId=564488660\&redemptionType=INTOUCH\_REWARD%2C%20PHYSICAL\_REWARD>

# Headers

<Table>
  <thead>
    <tr>
      <th>
        Header
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        DATA-SCOPE-ORG
      </td>

      <td>
        List of Organization IDs
      </td>
    </tr>

    <tr>
      <td>
        DATA-SCOPE
      </td>

      <td>
        Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organization. Defining a scope ensures that the response contains only data from the respective organization.
        Supported headers: `SELF`, `OTHER` and `ALL`.
        Refer to connected orgs [data scopes](https://docs.capillarytech.com/reference/connected-orgs-data-scopes)   for more information.
      </td>
    </tr>
  </tbody>
</Table>

# Request query parameters

| Parameters       | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :--------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`           | Integer   | Retrieve information for a specific page. Set the page value to `0` to disable pagination. **Example**: `page=2&size=10` retrieves 10 results from page 2.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `size`           | Long      | Number of results to display per page. Default value is `10`. Maximum supported value is `50`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `status`         | Boolean   | Filter the reward transactions based on the status of the issued reward. Set `status=true` to view successful transactions and `status=false` to view failed transactions. Successful transactions are those where the reward was issued, while failed transactions are those where the reward was not issued. If this parameter is not applied, the response by default includes both successful and failed transactions.                                                                                                                                                                                                                                                                                           |
| `redemptionType` | Enum      | Retrieves rewards based on their redemption type. Reward redemption is when a customer uses their points or cash to redeem a reward. **Supported values**: `GAMES`, `AUCTION`, `CART_PROMOTION`, `CASH_WALLET`, `VENDOR_ONLY_REWARD`, `VOUCHER`, `CASH_BACK`, `INTOUCH_REWARD`, `PHYSICAL_REWARD`, `CHARITY`, `MILES`, `GIFT_CARD`, `SWEEPSTAKES`, `VENDOR_INTOUCH_REWARD`, `CARD_DISC`. Use comma-separated values to retrieve reward details for multiple redemption types. **Example**: `INTOUCH_REWARD, MILES`. The values are case-sensitive. This parameter fetches both failed and successful reward issue transactions. To filter successful transactions for a specific redemption type, set `status=true`. |
| `ownerType`      | Enum      | The module for which the reward was created. **Supported values**: `Loyalty program`, `Milestones`, `Campaigns`, `Journeys`, `Goodwill`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `ownerId`        | String    | The unique identifier of the owner.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `groupName`      | String    | Retrieves rewards associated with a specific group name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `rewardId`       | Integer   | Use the `rewardId` parameter to filter and return specific reward details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

<br />

```curl
curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1.1/reward-transactions?customerId=564488660&redemptionType=INTOUCH_REWARD%2C%20PHYSICAL_REWARD' \
--header 'Authorization: Basic cHJhYzOGEwMTQ3ZjRlMg==' \
--header 'DATA-SCOPE: ALL' \
--header 'Cookie: _cfuvid=pmSuDaHvCdKa7QSC237W8OuowKHVWkxCo-1737524754414-0.0.1.1-604800000'
```
```Text With rewardId
curl --location 'https://devenv-crm.cc.capillarytech.com/api_gateway/rewards/core/v1.1/reward-transactions?customerId=423789294&size=10&page=0&rewardId=38774' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'DATA-SCOPE: ALL' \
--header 'Authorization: Basic YXV0b3N0b3JlMS50aWxsMS0xNjgwMTY5MjIxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw' \
--data ''
```

# Response parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter Name
      </th>

      <th>
        Data Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `status`
      </td>

      <td>
        Object
      </td>

      <td>
        Contains the details of the operation.
      </td>
    </tr>

    <tr>
      <td>
        `- success`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the operation was successful.
      </td>
    </tr>

    <tr>
      <td>
        `- code`
      </td>

      <td>
        Integer
      </td>

      <td>
        HTTP status code of the operation.
      </td>
    </tr>

    <tr>
      <td>
        `- message`
      </td>

      <td>
        String
      </td>

      <td>
        Message about the operation's outcome.
      </td>
    </tr>

    <tr>
      <td>
        `rewardIssueTransactions`
      </td>

      <td>
        Object
      </td>

      <td>
        Contains the details of the issue reward transactions.
      </td>
    </tr>

    <tr>
      <td>
        `- rewardTransactionId`
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the reward transaction.
      </td>
    </tr>

    <tr>
      <td>
        `- rewardIssueRefId`
      </td>

      <td>
        String
      </td>

      <td>
        Reference ID for the reward issuance.
      </td>
    </tr>

    <tr>
      <td>
        `- rewardTransactionDate`
      </td>

      <td>
        Long
      </td>

      <td>
        Date and time of the reward transaction in milliseconds since epoch.
      </td>
    </tr>

    <tr>
      <td>
        `- status`
      </td>

      <td>
        Object
      </td>

      <td>
        Contains the status of the reward issue.
      </td>
    </tr>

    <tr>
      <td>
        `-- success`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the reward was issued successfully, true for successful reward issuance and false for failed reward issuance.
      </td>
    </tr>

    <tr>
      <td>
        `-- code`
      </td>

      <td>
        Integer
      </td>

      <td>
        Status code for the reward issue transaction.
      </td>
    </tr>

    <tr>
      <td>
        `-- message`
      </td>

      <td>
        String
      </td>

      <td>
        Status message for the reward issue transaction, indicating if the reward issuance was successful.
      </td>
    </tr>

    <tr>
      <td>
        `- rewardDetails`
      </td>

      <td>
        Object
      </td>

      <td>
        Contains details of the issued reward.
      </td>
    </tr>

    <tr>
      <td>
        `-- rewardId`
      </td>

      <td>
        Long
      </td>

      <td>
        Unique identifier of the reward.
      </td>
    </tr>

    <tr>
      <td>
        `-- languageCode`
      </td>

      <td>
        String
      </td>

      <td>
        Language code of the reward details. Example: en for English.
      </td>
    </tr>

    <tr>
      <td>
        `-- name`
      </td>

      <td>
        String
      </td>

      <td>
        Name of the reward.
      </td>
    </tr>

    <tr>
      <td>
        `-- description`
      </td>

      <td>
        String
      </td>

      <td>
        Description of the reward.
      </td>
    </tr>

    <tr>
      <td>
        `-- termNConditionsId`
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the terms and conditions of the reward.
      </td>
    </tr>

    <tr>
      <td>
        `-- termNConditionsUrl`
      </td>

      <td>
        String
      </td>

      <td>
        URL to the terms and conditions of the reward.
      </td>
    </tr>

    <tr>
      <td>
        `-- imageId`
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the image associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        `-- imageUrl`
      </td>

      <td>
        String
      </td>

      <td>
        URL to the image associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        `-- thumbnailId`
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the thumbnail image associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        `-- thumbnailUrl`
      </td>

      <td>
        String
      </td>

      <td>
        URL to the thumbnail image associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        `-- enabled`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the reward is enabled.
      </td>
    </tr>

    <tr>
      <td>
        `-- groups`
      </td>

      <td>
        Set
      </td>

      <td>
        Specifies the group associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        `-- rewardRank`
      </td>

      <td>
        Integer
      </td>

      <td>
        Rank or position of the reward within its category or list.
      </td>
    </tr>

    <tr>
      <td>
        `- ownerType`
      </td>

      <td>
        String
      </td>

      <td>
        Module for which the reward was created. Supported values: Loyalty program, Milestones, Campaigns, Journeys, Goodwill.
      </td>
    </tr>

    <tr>
      <td>
        `- ownerId`
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier of the owner. Example: 123.
      </td>
    </tr>

    <tr>
      <td>
        `- pointsRedemptionRefIds`
      </td>

      <td>
        List
      </td>

      <td>
        Unique identifier generated each time rewards are issued. This field stores a list of these identifiers, allowing you to track multiple points redemption transactions. You have to pass the pointsRefId as a query param to populate the data of Points Redemption Reference IDs.
      </td>
    </tr>

    <tr>
      <td>
        `- fulfillmentStatus`
      </td>

      <td>
        String
      </td>

      <td>
        Gives the fulfillment status of the reward. Example: SHIPPED, ON THE WAY, DELIVERED.
      </td>
    </tr>

    <tr>
      <td>
        `- orgId`
      </td>

      <td>
        Long
      </td>

      <td>
        Unique identifier of the org.
      </td>
    </tr>

    <tr>
      <td>
        `- redemptionType`
      </td>

      <td>
        String
      </td>

      <td>
        Gives the redemption type of the reward. Example: INTOUCH\_REWARD.
      </td>
    </tr>

    <tr>
      <td>
        `pagingDto`
      </td>

      <td>
        Object
      </td>

      <td>
        Contains the paging details.
      </td>
    </tr>

    <tr>
      <td>
        `- last`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the current page is the last page.
      </td>
    </tr>

    <tr>
      <td>
        `- totalElements`
      </td>

      <td>
        Long
      </td>

      <td>
        Total number of elements across all pages.
      </td>
    </tr>

    <tr>
      <td>
        `- totalPages`
      </td>

      <td>
        Integer
      </td>

      <td>
        Total number of pages.
      </td>
    </tr>

    <tr>
      <td>
        `- numberOfElements`
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of elements in the current page.
      </td>
    </tr>

    <tr>
      <td>
        `- first`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the current page is the first page.
      </td>
    </tr>

    <tr>
      <td>
        `- size`
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of elements per page.
      </td>
    </tr>

    <tr>
      <td>
        `- number`
      </td>

      <td>
        Integer
      </td>

      <td>
        The current page number.
      </td>
    </tr>

    <tr>
      <td>
        `vendorId`
      </td>

      <td>
        Long
      </td>

      <td>
        Retrieves the rewards associated with a specific vendor.
      </td>
    </tr>

    <tr>
      <td>
        `redemptionType`
      </td>

      <td>
        String
      </td>

      <td>
        Retrieves rewards based on their redemption type.
        **Possible values:** `GAMES, AUCTION, CART_PROMOTION, CASH_WALLET, VENDOR_ONLY_REWARD, VOUCHER, CASH_BACK, INTOUCH_REWARD, PHYSICAL_REWARD, CHARITY, MILES, GIFT_CARD, SWEEPSTAKES, VENDOR_INTOUCH_REWARD, CARD_DISC`. Multiple `redemptionType` values can be filtered using a comma (,).
      </td>
    </tr>
  </tbody>
</Table>

<br />

```json Sample response with redemptionType filter
{"status":{"success":true,"code":200,"message":"Reward issue transactions fetched successfully"},"rewardIssueTransactions":[{"rewardTransactionId":"321583","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736755804000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  points are not redeemable"},"rewardDetails":{"rewardId":299166,"languageCode":"en","name":"PointsRewardTest","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321532","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736750647000,"status":{"success":true,"code":200,"message":"Reward issued successfully"},"rewardDetails":{"rewardId":297001,"languageCode":"en","name":" INTOUCH Enabled","description":"Description","termNConditionsId":"EXDR12987R","termNConditionsUrl":null,"imageId":"EXDR12987U","imageUrl":null,"thumbnailId":"EXDR12987T","thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"PHYSICAL_REWARD"},{"rewardTransactionId":"321531","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736750220000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321530","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736750106000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321529","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736750105000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321528","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736750084000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321527","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736750040000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321526","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736749995000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321524","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736748983000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"}],"pagingDto":{"last":true,"totalElements":9,"totalPages":1,"numberOfElements":9,"first":true,"size":10,"number":0}}
```
```json With rewardId
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issue transactions fetched successfully"
    },
    "rewardIssueTransactions": [
        {
            "rewardTransactionId": "93926",
            "rewardIssueRefId": "1743490093",
            "rewardTransactionDate": 1743490093000,
            "status": {
                "success": false,
                "code": 1010,
                "message": "redemption id passed doesn't exist"
            },
            "rewardDetails": {
                "rewardId": 38774,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": null,
                "imageId": "EXDR12987U",
                "imageUrl": null,
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "orgId": 4000036,
            "redemptionType": "CART_PROMOTION",
            "eventDateTime": "2025-04-01T06:48:13Z",
            "issueDateTime": "2025-04-01T06:48:13Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "93925",
            "rewardIssueRefId": "1743490092",
            "rewardTransactionDate": 1743490093000,
            "status": {
                "success": false,
                "code": 1010,
                "message": "redemption id passed doesn't exist"
            },
            "rewardDetails": {
                "rewardId": 38774,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": null,
                "imageId": "EXDR12987U",
                "imageUrl": null,
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "orgId": 4000036,
            "redemptionType": "CART_PROMOTION",
            "eventDateTime": "2025-04-01T06:48:13Z",
            "issueDateTime": "2025-04-01T06:48:13Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "93924",
            "rewardIssueRefId": "Transaction-1743490091000",
            "rewardTransactionDate": 1743490092000,
            "status": {
                "success": false,
                "code": 12005,
                "message": "Reward constraint evaluation failed. Request failed. Max limit for the DAYS is reached. Allowed limit is 2 For Level CUSTOMER"
            },
            "rewardDetails": {
                "rewardId": 38774,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": null,
                "imageId": "EXDR12987U",
                "imageUrl": null,
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "orgId": 4000036,
            "redemptionType": "CART_PROMOTION",
            "eventDateTime": "2025-04-01T06:48:12Z",
            "issueDateTime": "2025-04-01T06:48:12Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "93923",
            "rewardIssueRefId": "1743490091",
            "rewardTransactionDate": 1743490091000,
            "status": {
                "success": false,
                "code": 1010,
                "message": "redemption id passed doesn't exist"
            },
            "rewardDetails": {
                "rewardId": 38774,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": null,
                "imageId": "EXDR12987U",
                "imageUrl": null,
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "orgId": 4000036,
            "redemptionType": "CART_PROMOTION",
            "eventDateTime": "2025-04-01T06:48:11Z",
            "issueDateTime": "2025-04-01T06:48:11Z",
            "vendorId": null
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 4,
        "totalPages": 1,
        "numberOfElements": 4,
        "first": true,
        "size": 10,
        "number": 0
    }
}
```
```Text Generic
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issue transactions fetched successfully"
    },
    "rewardIssueTransactions": [
        {
            "rewardTransactionId": "397137",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746714525000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 367568,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "VOUCHER",
            "eventDateTime": "2025-03-27T13:38:11Z",
            "issueDateTime": "2025-05-08T14:28:45Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395932",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746586678000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 367238,
                "languageCode": "en",
                "name": "BETA-EN TRUE",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "VOUCHER",
            "eventDateTime": "2025-05-07T02:57:58Z",
            "issueDateTime": "2025-05-07T02:57:58Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395931",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746586667000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 367237,
                "languageCode": "en",
                "name": "BETA-FR FALSE &EN TRUE",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "VOUCHER",
            "eventDateTime": "2025-05-07T02:57:47Z",
            "issueDateTime": "2025-05-07T02:57:47Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395930",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746586654000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 367236,
                "languageCode": "en",
                "name": "EN-BETA-FR&EN TRUE",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "VOUCHER",
            "eventDateTime": "2025-05-07T02:57:34Z",
            "issueDateTime": "2025-05-07T02:57:34Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395901",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746583087000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 367207,
                "languageCode": "en",
                "name": "alpha",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "VOUCHER",
            "eventDateTime": "2025-05-07T01:58:07Z",
            "issueDateTime": "2025-05-07T01:58:07Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395900",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746582784000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 367204,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "VOUCHER",
            "eventDateTime": "2025-05-07T01:53:04Z",
            "issueDateTime": "2025-05-07T01:53:04Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395899",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746581898000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 367204,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "VOUCHER",
            "eventDateTime": "2025-05-07T01:38:18Z",
            "issueDateTime": "2025-05-07T01:38:18Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395898",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746581885000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 367203,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "VOUCHER",
            "eventDateTime": "2025-05-07T01:38:05Z",
            "issueDateTime": "2025-05-07T01:38:05Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395897",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746581871000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 367202,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "VOUCHER",
            "eventDateTime": "2025-05-07T01:37:51Z",
            "issueDateTime": "2025-05-07T01:37:51Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395896",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746581051000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 367195,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "VOUCHER",
            "eventDateTime": "2025-05-07T01:24:11Z",
            "issueDateTime": "2025-05-07T01:24:11Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395895",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746580940000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  Coupon Series ID is invalid"
            },
            "rewardDetails": {
                "rewardId": 367194,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-07T01:22:20Z",
            "issueDateTime": "2025-05-07T01:22:20Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395894",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746580939000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  Coupon Series ID is invalid"
            },
            "rewardDetails": {
                "rewardId": 367194,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-07T01:22:19Z",
            "issueDateTime": "2025-05-07T01:22:19Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395893",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746580937000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  Coupon Series ID is invalid"
            },
            "rewardDetails": {
                "rewardId": 367194,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-07T01:22:17Z",
            "issueDateTime": "2025-05-07T01:22:17Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395892",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746580779000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  Coupon Series ID is invalid"
            },
            "rewardDetails": {
                "rewardId": 367193,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-07T01:19:39Z",
            "issueDateTime": "2025-05-07T01:19:39Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395868",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746579695000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  Coupon Series ID is invalid"
            },
            "rewardDetails": {
                "rewardId": 367162,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-07T01:01:35Z",
            "issueDateTime": "2025-05-07T01:01:35Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395866",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746579681000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 367162,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-07T01:01:21Z",
            "issueDateTime": "2025-05-07T01:01:21Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395863",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746579662000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  Coupon Series ID is invalid"
            },
            "rewardDetails": {
                "rewardId": 367162,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-07T01:01:02Z",
            "issueDateTime": "2025-05-07T01:01:02Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395860",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746579138000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  Coupon Series ID is invalid"
            },
            "rewardDetails": {
                "rewardId": 367161,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-07T00:52:18Z",
            "issueDateTime": "2025-05-07T00:52:18Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395444",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1746526278000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 366796,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "VOUCHER",
            "eventDateTime": "2025-05-06T10:11:18Z",
            "issueDateTime": "2025-05-06T10:11:18Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395442",
            "rewardIssueRefId": "bil1234",
            "rewardTransactionDate": 1746526069000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366796,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "VOUCHER",
            "eventDateTime": "2025-05-06T10:07:49Z",
            "issueDateTime": "2025-05-06T10:07:49Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395440",
            "rewardIssueRefId": "bil1234",
            "rewardTransactionDate": 1746526017000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366796,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "VOUCHER",
            "eventDateTime": "2025-05-06T10:06:57Z",
            "issueDateTime": "2025-05-06T10:06:57Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395433",
            "rewardIssueRefId": "bil1234",
            "rewardTransactionDate": 1746525900000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T10:05:00Z",
            "issueDateTime": "2025-05-06T10:05:00Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395432",
            "rewardIssueRefId": "bil1234",
            "rewardTransactionDate": 1746525899000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T10:04:59Z",
            "issueDateTime": "2025-05-06T10:04:59Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395429",
            "rewardIssueRefId": "bil1234",
            "rewardTransactionDate": 1746525881000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T10:04:41Z",
            "issueDateTime": "2025-05-06T10:04:41Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395428",
            "rewardIssueRefId": "bil1234",
            "rewardTransactionDate": 1746525879000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T10:04:39Z",
            "issueDateTime": "2025-05-06T10:04:39Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395421",
            "rewardIssueRefId": "bil1234",
            "rewardTransactionDate": 1746525791000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T10:03:11Z",
            "issueDateTime": "2025-05-06T10:03:11Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395420",
            "rewardIssueRefId": "bil1234",
            "rewardTransactionDate": 1746525790000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T10:03:10Z",
            "issueDateTime": "2025-05-06T10:03:10Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395419",
            "rewardIssueRefId": "bil1234",
            "rewardTransactionDate": 1746525789000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T10:03:09Z",
            "issueDateTime": "2025-05-06T10:03:09Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395416",
            "rewardIssueRefId": "bil1234",
            "rewardTransactionDate": 1746525767000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T10:02:47Z",
            "issueDateTime": "2025-05-06T10:02:47Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395415",
            "rewardIssueRefId": "bil1234",
            "rewardTransactionDate": 1746525761000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T10:02:41Z",
            "issueDateTime": "2025-05-06T10:02:41Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395414",
            "rewardIssueRefId": "bil1234",
            "rewardTransactionDate": 1746525759000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T10:02:39Z",
            "issueDateTime": "2025-05-06T10:02:39Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395413",
            "rewardIssueRefId": "bil1234",
            "rewardTransactionDate": 1746525752000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T10:02:32Z",
            "issueDateTime": "2025-05-06T10:02:32Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395410",
            "rewardIssueRefId": "bil1234",
            "rewardTransactionDate": 1746525734000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T10:02:14Z",
            "issueDateTime": "2025-05-06T10:02:14Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395409",
            "rewardIssueRefId": "bil1234",
            "rewardTransactionDate": 1746525732000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T10:02:12Z",
            "issueDateTime": "2025-05-06T10:02:12Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395405",
            "rewardIssueRefId": "bil1234",
            "rewardTransactionDate": 1746525713000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T10:01:53Z",
            "issueDateTime": "2025-05-06T10:01:53Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395397",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1746525574000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T09:59:34Z",
            "issueDateTime": "2025-05-06T09:59:34Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395396",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1746525572000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T09:59:32Z",
            "issueDateTime": "2025-05-06T09:59:32Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395395",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1746525379000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T09:56:19Z",
            "issueDateTime": "2025-05-06T09:56:19Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395394",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1746525378000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T09:56:18Z",
            "issueDateTime": "2025-05-06T09:56:18Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395393",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1746525315000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T09:55:15Z",
            "issueDateTime": "2025-05-06T09:55:15Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395392",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1746525313000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366768,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T09:55:13Z",
            "issueDateTime": "2025-05-06T09:55:13Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "395391",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1746525224000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 366766,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-06T09:53:44Z",
            "issueDateTime": "2025-05-06T09:53:44Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "392841",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1746182889000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 364416,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-02T10:48:09Z",
            "issueDateTime": "2025-05-02T10:48:09Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "392840",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1746182887000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 364416,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-02T10:48:07Z",
            "issueDateTime": "2025-05-02T10:48:07Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "392839",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1746182871000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 364416,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-02T10:47:50Z",
            "issueDateTime": "2025-05-02T10:47:51Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "392838",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1746182855000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 364416,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-02T10:47:35Z",
            "issueDateTime": "2025-05-02T10:47:35Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "392837",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1746182846000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 364416,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-02T10:47:26Z",
            "issueDateTime": "2025-05-02T10:47:26Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "392836",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1746182756000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 364416,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-05-02T10:45:56Z",
            "issueDateTime": "2025-05-02T10:45:56Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388241",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745584519000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 360192,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T12:35:19Z",
            "issueDateTime": "2025-04-25T12:35:19Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388240",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745584518000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 360192,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T12:35:18Z",
            "issueDateTime": "2025-04-25T12:35:18Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388238",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745584517000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 360192,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T12:35:17Z",
            "issueDateTime": "2025-04-25T12:35:17Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388237",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745584516000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 360192,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T12:35:16Z",
            "issueDateTime": "2025-04-25T12:35:16Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388233",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745584515000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 360192,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T12:35:15Z",
            "issueDateTime": "2025-04-25T12:35:15Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388232",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745584514000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 360192,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T12:35:14Z",
            "issueDateTime": "2025-04-25T12:35:14Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388223",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745584401000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 360192,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T12:33:21Z",
            "issueDateTime": "2025-04-25T12:33:21Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388203",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745582733000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  Coupon Series ID is invalid"
            },
            "rewardDetails": {
                "rewardId": 360179,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T12:05:33Z",
            "issueDateTime": "2025-04-25T12:05:33Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388183",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745582534000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 360155,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T12:02:14Z",
            "issueDateTime": "2025-04-25T12:02:14Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388182",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745582520000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  Coupon Series ID is invalid"
            },
            "rewardDetails": {
                "rewardId": 360155,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T12:02:00Z",
            "issueDateTime": "2025-04-25T12:02:00Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388173",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745582421000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  Coupon Series ID is invalid"
            },
            "rewardDetails": {
                "rewardId": 360155,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T12:00:21Z",
            "issueDateTime": "2025-04-25T12:00:21Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388172",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745582419000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  Coupon Series ID is invalid"
            },
            "rewardDetails": {
                "rewardId": 360155,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T12:00:19Z",
            "issueDateTime": "2025-04-25T12:00:19Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388169",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745582243000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 360155,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T11:57:23Z",
            "issueDateTime": "2025-04-25T11:57:23Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388168",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745582038000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 360155,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T11:53:58Z",
            "issueDateTime": "2025-04-25T11:53:58Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388167",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745581991000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 360154,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T11:53:11Z",
            "issueDateTime": "2025-04-25T11:53:11Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388166",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745581961000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 360153,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T11:52:41Z",
            "issueDateTime": "2025-04-25T11:52:41Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388165",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745581905000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 360152,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T11:51:45Z",
            "issueDateTime": "2025-04-25T11:51:45Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388164",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745581904000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 360152,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T11:51:44Z",
            "issueDateTime": "2025-04-25T11:51:44Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388163",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745581903000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 360152,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T11:51:43Z",
            "issueDateTime": "2025-04-25T11:51:43Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388162",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745581562000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 360151,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T11:46:02Z",
            "issueDateTime": "2025-04-25T11:46:02Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388161",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745581042000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 360150,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T11:37:22Z",
            "issueDateTime": "2025-04-25T11:37:22Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "388160",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1745581004000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 360147,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-25T11:36:44Z",
            "issueDateTime": "2025-04-25T11:36:44Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "387550",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1745494043000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 336588,
                "languageCode": "en",
                "name": "jogold",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-24T11:27:23Z",
            "issueDateTime": "2025-04-24T11:27:23Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "387549",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1745493306000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 336588,
                "languageCode": "en",
                "name": "jogold",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-24T11:15:06Z",
            "issueDateTime": "2025-04-24T11:15:06Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "380507",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1744611543000,
            "status": {
                "success": true,
                "code": 200,
                "message": "Reward issued successfully"
            },
            "rewardDetails": {
                "rewardId": 346354,
                "languageCode": "en",
                "name": "testreward2",
                "description": "testreward1",
                "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-14T06:19:03Z",
            "issueDateTime": "2025-04-14T06:19:03Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "371726",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1743505927000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 342860,
                "languageCode": "en",
                "name": "testreward1",
                "description": "testreward1",
                "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-01T11:12:07Z",
            "issueDateTime": "2025-04-01T11:12:07Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "371725",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1743505920000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 342860,
                "languageCode": "en",
                "name": "testreward1",
                "description": "testreward1",
                "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-01T11:12:00Z",
            "issueDateTime": "2025-04-01T11:12:00Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "371724",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1743505879000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 342860,
                "languageCode": "en",
                "name": "testreward1",
                "description": "testreward1",
                "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-01T11:11:19Z",
            "issueDateTime": "2025-04-01T11:11:19Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "371723",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1743505871000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 342860,
                "languageCode": "en",
                "name": "testreward1",
                "description": "testreward1",
                "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-01T11:11:11Z",
            "issueDateTime": "2025-04-01T11:11:11Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "371722",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1743505849000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 342860,
                "languageCode": "en",
                "name": "testreward1",
                "description": "testreward1",
                "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-04-01T11:10:49Z",
            "issueDateTime": "2025-04-01T11:10:49Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "370969",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1743401533000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 342860,
                "languageCode": "en",
                "name": "testreward1",
                "description": "testreward1",
                "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-03-31T06:12:12Z",
            "issueDateTime": "2025-03-31T06:12:13Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "369350",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1743169324000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 342860,
                "languageCode": "en",
                "name": "testreward1",
                "description": "testreward1",
                "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-03-28T13:42:04Z",
            "issueDateTime": "2025-03-28T13:42:04Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "369349",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1743169323000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 342860,
                "languageCode": "en",
                "name": "testreward1",
                "description": "testreward1",
                "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-03-28T13:42:03Z",
            "issueDateTime": "2025-03-28T13:42:03Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "369348",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1743169307000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 342860,
                "languageCode": "en",
                "name": "testreward1",
                "description": "testreward1",
                "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-03-28T13:41:47Z",
            "issueDateTime": "2025-03-28T13:41:47Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "369347",
            "rewardIssueRefId": "transactionNumber",
            "rewardTransactionDate": 1743169290000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 342860,
                "languageCode": "en",
                "name": "testreward1",
                "description": "testreward1",
                "termNConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",
                "termNConditionsUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html",
                "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",
                "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg",
                "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",
                "thumbnailUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg",
                "enabled": true,
                "groups": [],
                "rewardRank": 1
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-03-28T13:41:30Z",
            "issueDateTime": "2025-03-28T13:41:30Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "369245",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1743159829000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 342762,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-03-28T11:03:49Z",
            "issueDateTime": "2025-03-28T11:03:49Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "369240",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1743159788000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 342762,
                "languageCode": "en",
                "name": "jogoldnamechange check",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-03-28T11:03:08Z",
            "issueDateTime": "2025-03-28T11:03:08Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "362669",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1742321401000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 336588,
                "languageCode": "en",
                "name": "jogold",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-03-18T18:10:01Z",
            "issueDateTime": "2025-03-18T18:10:01Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "362340",
            "rewardIssueRefId": "107",
            "rewardTransactionDate": 1742283025000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 336588,
                "languageCode": "en",
                "name": "jogold",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-03-18T07:30:25Z",
            "issueDateTime": "2025-03-18T07:30:25Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "362339",
            "rewardIssueRefId": "1234",
            "rewardTransactionDate": 1742282837000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 336588,
                "languageCode": "en",
                "name": "jogold",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-03-18T07:27:17Z",
            "issueDateTime": "2025-03-18T07:27:17Z",
            "vendorId": null
        },
        {
            "rewardTransactionId": "362338",
            "rewardIssueRefId": "1234",
            "rewardTransactionDate": 1742282717000,
            "status": {
                "success": false,
                "code": 8004,
                "message": "fail to issue reward as  points are not redeemable"
            },
            "rewardDetails": {
                "rewardId": 336587,
                "languageCode": "en",
                "name": "jogold",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "groups": [],
                "rewardRank": null
            },
            "ownerType": null,
            "ownerId": "",
            "pointsRedemptionRefIds": null,
            "fulfillmentStatus": null,
            "redemptionType": "INTOUCH_REWARD",
            "eventDateTime": "2025-03-18T07:25:17Z",
            "issueDateTime": "2025-03-18T07:25:17Z",
            "vendorId": null
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 89,
        "totalPages": 1,
        "numberOfElements": 89,
        "first": true,
        "size": 100,
        "number": 0
    }
}
```

<br />

<HTMLBlock>{`
<style>
.InputGroupe2EvBGz2cnqy {
    display: flex;
    gap: 2px;
    position: relative;
}

.Button.APIRequest-example-button1DGMsfaOTVNW {
* Core working text behavior - don't change these *
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
    
* Only minimal visual updates *
    background: #1e2329;
    border: none;
    border-radius: 6px;
    color: #94a3b8;
    font-size: 13px;
}

* Keep original text handling *
.Button.APIRequest-example-button1DGMsfaOTVNW span,
.Button.APIRequest-example-button1DGMsfaOTVNW div {
    text-align: left;
    direction: ltr;
}

* Keep original hover behavior *
.Button.APIRequest-example-button1DGMsfaOTVNW:hover {
    width: auto;
    z-index: 10;
    background: #262b33;
}

* Simple active state *
.Button.APIRequest-example-button1DGMsfaOTVNW.APIRequest-example-button_activeXJeukHyaHZXB {
    z-index: 20;
    background: #2c333d;
    color: #ffffff;
}
</style>
`}</HTMLBlock>