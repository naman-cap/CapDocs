---
title: Get Transaction Details by Customer ID and Reward Transaction ID
excerpt: ''
api:
  file: v1.json
  operationId: get-reward-issue-transaction-details
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API retrieves the detailed information of a specific issued reward using the reward transaction ID.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# API Specification

|                        |                                                                                                 |
| :--------------------- | :---------------------------------------------------------------------------------------------- |
| URI                    | api\_gateway/rewards/core/v1/management/customer/`{customerId}`/issuals/`{rewardTransactionId}` |
| HTTP Method            | GET                                                                                             |
| Pagination             | No                                                                                              |
| Batch support          | No                                                                                              |
| Rate limit information | None                                                                                            |

<br />

# Request query parameter

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        **`couponCodeCase`**
      </td>

      <td>
        Enum
      </td>

      <td>
        This parameter helps retrieve the coupon code in the desired letter cases. By default, the system automatically converts the coupon code to uppercase.
        Supported Values: `LOWER`, `UPPER`, \`AS\_IT\_IS

        <br />

        `LOWER` - Converts the coupon code to lowercase.
        Example: `"ABCD1234"` → `"abcd1234"`

        <br />

        `UPPER` - Converts the coupon code to uppercase.
        Example: `"abcd1234"` → `"ABCD1234"`

        <br />

        `AS_IT_IS` - Returns the coupon code exactly as it was created.
        Example: `"abAB123"` → `"abAB123"`
      </td>
    </tr>
  </tbody>
</Table>

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/management/customer/383428154/issuals/84630`

# Request path parameters

| Parameter Name        | Data Type | Description                                                                                                       |
| --------------------- | --------- | ----------------------------------------------------------------------------------------------------------------- |
| customerId\*          | String    | Unique identifier of the customer. Ex: 112295                                                                     |
| rewardTransactionId\* | String    | Unique identifier of the reward transaction. The reward transaction is generated during the issual of the reward. |

<br />

```curl
curl --location 'https://crm-staging-new.cc.capillarytech.com/api_gateway/rewards/core/v1/management/customer/345635195/issuals/927488?couponCodeCase=AS_IT_IS' \
--header 'Authorization: Basic dGlsbGF1dG9fMTIzOjI3NDFlNjJiZTZiZTYyNGY2N2IwMGQxZDZhNWQ2MWJm'
```
```curl With couponCodeCase filter
curl --location 'https://crm-staging-new.cc.capillarytech.com/api_gateway/rewards/core/v1/management/customer/345635195/issuals/927488?couponCodeCase=AS_IT_IS' \
--header 'Authorization: Basic dGlsbGF1dG9fMTIzOjI3NDFlNjJiZTZiZTYyNGY2N2IwMGQxZDZhNWQ2MWJm'
```

# Response parameters

| Parameter                          | Data Type | Description                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status                             | string    | An array containing the status details of the reward issue transaction.                                                                                                                                                                                                                                                                                        |
| success                            | boolean   | Indicates whether the transaction was successful.                                                                                                                                                                                                                                                                                                              |
| code                               | string    | A unique code representing the status of the transaction.                                                                                                                                                                                                                                                                                                      |
| message                            | string    | A message providing details about the status of the transaction.                                                                                                                                                                                                                                                                                               |
| data                               | object    | Contains detailed information about the reward transaction.                                                                                                                                                                                                                                                                                                    |
| rewardTransactionId                | string    | Unique identifier for the reward transaction. The reward transaction is generated during the issual of the reward.                                                                                                                                                                                                                                             |
| customerId                         | long      | The ID of the customer associated with the reward transaction.                                                                                                                                                                                                                                                                                                 |
| orgId                              | long      | The ID of the organization associated with the transaction.                                                                                                                                                                                                                                                                                                    |
| rewardIssueRefId                   | string    | A reference ID for the reward issuance.                                                                                                                                                                                                                                                                                                                        |
| rewardTransactionDate              | long      | The timestamp of the reward transaction in milliseconds.                                                                                                                                                                                                                                                                                                       |
| status                             | object    | Status details of the reward issuance.                                                                                                                                                                                                                                                                                                                         |
| success                            | boolean   | Indicates whether the reward issuance was successful.                                                                                                                                                                                                                                                                                                          |
| -code                              | string    | A unique code representing the status of the reward issuance.                                                                                                                                                                                                                                                                                                  |
| -message                           | string    | A message providing additional information about the status of the reward issuance.                                                                                                                                                                                                                                                                            |
| -quantity                          | int       | The number of rewards issued.                                                                                                                                                                                                                                                                                                                                  |
| requestedQuantity                  | int       | This field represents the original quantity that was requested.                                                                                                                                                                                                                                                                                                |
| groupRedemption                    | boolean   | Indicates if the redemption is a group redemption.                                                                                                                                                                                                                                                                                                             |
| rewardDetails                      | object    | Contains details about the specific reward.                                                                                                                                                                                                                                                                                                                    |
| -rewardId                          | long      | The ID of the reward.                                                                                                                                                                                                                                                                                                                                          |
| -languageCode                      | string    | The language code for the reward details.                                                                                                                                                                                                                                                                                                                      |
| -name                              | string    | The name of the reward.                                                                                                                                                                                                                                                                                                                                        |
| -description                       | string    | A description of the reward.                                                                                                                                                                                                                                                                                                                                   |
| -rewardRank                        | int       | The rank of the reward.                                                                                                                                                                                                                                                                                                                                        |
| -groups                            | array     | A list of groups associated with the reward.                                                                                                                                                                                                                                                                                                                   |
| -imageId                           | string    | The ID of the reward image.                                                                                                                                                                                                                                                                                                                                    |
| -imageUrl                          | string    | The URL of the reward image.                                                                                                                                                                                                                                                                                                                                   |
| -intouchPoints                     | int       | The number of intouch points associated with the reward.                                                                                                                                                                                                                                                                                                       |
| -images                            | array     | A list of images associated with the reward.                                                                                                                                                                                                                                                                                                                   |
| --name                             | string    | Name of the image.                                                                                                                                                                                                                                                                                                                                             |
| --altText                          | string    | Alternative text or description of the image.                                                                                                                                                                                                                                                                                                                  |
| --id                               | string    | Identifier for internally stored images, generated when uploaded to the file service. Not applicable for external images.                                                                                                                                                                                                                                      |
| --url                              | string    | URL of the image.                                                                                                                                                                                                                                                                                                                                              |
| --isExternal                       | boolean   | Indicates if the image is hosted on an external server.                                                                                                                                                                                                                                                                                                        |
| -videos                            | array     | A list of videos associated with the reward.                                                                                                                                                                                                                                                                                                                   |
| --name                             | string    | Name of the video.                                                                                                                                                                                                                                                                                                                                             |
| --altText                          | string    | Alternative text or description of the video.                                                                                                                                                                                                                                                                                                                  |
| --id                               | string    | Identifier for internally stored videos, generated when uploaded to the file service. Not applicable for external videos.                                                                                                                                                                                                                                      |
| --url                              | string    | URL of the video.                                                                                                                                                                                                                                                                                                                                              |
| --isExternal                       | boolean   | Indicates if the video is hosted on an external server.                                                                                                                                                                                                                                                                                                        |
| pointsRedemption                   | object    | Details about the points redemption process.                                                                                                                                                                                                                                                                                                                   |
| -redeemedPoints                    | int       | The number of points redeemed.                                                                                                                                                                                                                                                                                                                                 |
| -pointsRedemptionRefId             | string    | A unique identifier generated each time rewards are issued. This field stores identifier, allowing you to track points redemption transaction.                                                                                                                                                                                                                 |
| -pointsRedemptionRefIds            | array     | A unique identifier generated each time rewards are issued. This field stores a list of these identifiers, allowing you to track multiple points redemption transactions.                                                                                                                                                                                      |
| status                             | object    | Status details of the points redemption.                                                                                                                                                                                                                                                                                                                       |
| success                            | boolean   | Indicates whether the points redemption was successful.                                                                                                                                                                                                                                                                                                        |
| code                               | string    | A unique code representing the status of the points redemption.                                                                                                                                                                                                                                                                                                |
| message                            | string    | A message providing additional information about the points redemption status.                                                                                                                                                                                                                                                                                 |
| redemptionDetails                  | array     | An array of objects specifying the details about the redemption process.                                                                                                                                                                                                                                                                                       |
| -redemptionType                    | string    | Specifies the category of reward redemption available. It indicates how users can redeem the reward.                                                                                                                                                                                                                                                           |
| -totalRedemptionValue              | double    | The total value of the redemption.                                                                                                                                                                                                                                                                                                                             |
| vouchers                           | array     | A list of vouchers associated with the redemption.                                                                                                                                                                                                                                                                                                             |
| vouchers.code                      | string    | The unique code for the voucher. Note: The casing of the coupon code is based on the `couponCodeCase` query parameter.                                                                                                                                                                                                                                         |
| vouchers.codeExpiry                | string    | The expiration date of the voucher. Format : "YYYY-MM-DD HH:MM:SS"                                                                                                                                                                                                                                                                                             |
| vouchers.codeExpiryDateTime        | string    | The expiration date of the voucher in ISO 8601 format.                                                                                                                                                                                                                                                                                                         |
| vendorRewards                      | object    | Contains vendor-specific reward details.                                                                                                                                                                                                                                                                                                                       |
| rewards                            | array     | A list of rewards issued by the vendor.                                                                                                                                                                                                                                                                                                                        |
| customFields                       | object    | Custom fields for additional information.                                                                                                                                                                                                                                                                                                                      |
| transactionCustomFields            | object    | Custom fields associated with the transaction.                                                                                                                                                                                                                                                                                                                 |
| fulfillmentDetails                 | object    | Fulfilment details associated with the reward.                                                                                                                                                                                                                                                                                                                 |
| fulfillmentDetailsAuditLog         | array     | Displays history of fulfilment statuses.                                                                                                                                                                                                                                                                                                                       |
| ownerId                            | string    | The ID of the owner associated with the reward transaction.                                                                                                                                                                                                                                                                                                    |
| eventLogId                         | string    | A plain string identifier used to identify the transaction associated with a reward issual.                                                                                                                                                                                                                                                                    |
| languageSpecificInfo               | object    | Contains language-specific details for the reward.                                                                                                                                                                                                                                                                                                             |
| languageSpecificInfo.richContentRO | object    | Rich content related to the reward, such as HTML or multimedia, enabled for display purposes. Use to provide formatted text.                                                                                                                                                                                                                                   |
| richContentRO.content              | string    | The HTML-formatted rich text content.                                                                                                                                                                                                                                                                                                                          |
| richContentRO.isEnabled            | boolean   | Indicates whether the rich text content is enabled. Possible Values: `true` or `false`                                                                                                                                                                                                                                                                         |
| defaultValue                       | string    | Default value if rich text content is not mapped to the reward. Required if `isMandatory` is set to `true`                                                                                                                                                                                                                                                     |
| vendorId                           | Integer   | Retrieves the rewards associated with a specific vendor.                                                                                                                                                                                                                                                                                                       |
| redemptionType                     | Integer   | Retrieves rewards based on their redemption type. \<br>\*\*Possible values: \*\*\`GAMES, AUCTION, CART\_PROMOTION, CASH\_WALLET, VENDOR\_ONLY\_REWARD, VOUCHER, CASH\_BACK, INTOUCH\_REWARD, PHYSICAL\_REWARD, CHARITY, MILES, GIFT\_CARD, SWEEPSTAKES, VENDOR\_INTOUCH\_REWARD, CARD\_DISC\`. Multiple redemptionType values can be filtered using comma (,). |

<br />

```json 200 OK
{
    "status": [
        {
            "success": true,
            "code": 200,
            "message": "Reward issue transactions details fetched successfully"
        }
    ],
    "data": {
        "rewardTransactionId": "94044",
        "customerId": 423931087,
        "orgId": 4000036,
        "rewardIssueRefId": "Transaction-1716621508000",
        "rewardTransactionDate": 1743528316000,
        "status": {
            "success": true,
            "code": 200,
            "message": "Reward issued successfully"
        },
        "quantity": 5,
        "requestedQuantity": 5,
        "groupRedemption": false,
        "rewardDetails": {
            "rewardId": 38879,
            "languageCode": "en",
            "name": " INTOUCH Enabled EN",
            "description": "Description EN",
            "groups": [],
            "imageId": "EXDR12987U",
            "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwpr%2FOgnDL192RMiujWeKSoQMAr4zTRpQbi0m0%2F%2BjJzAiB6BqPYE9rTP%2By3jtKNSlzkooZJnga%2BoOCHxkw3j0d8qirOAgiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDQ4NjQ1Njk4NjI2NiIMPVAwU9vBR8iQdFLtKqICRVh%2Bi7IQUjBVICNZy%2B%2B9x2HMkTgpGvZqBabeB%2FXe8i%2BhMEe%2F6YfUF3VFs%2FG0LXPdQLx82N7EH5%2B4ypCzP3%2BaTCRix7cYLRDxSa%2BgBO2mOHF2ZsC4S5Gk8Izbj7e0y7rMb%2BJ%2Ffd7UT%2FOeowYKo2gsHk3JB90DJr5zbXRjGjhVC8X19JZ%2BSm%2F68AKy15JnKFpLbHsDfXVicR088Xr7DBeQIP19hMNZDTdzheYYbjM6nQYpaCDVTJmItSkcHBsZohwNJqolt9PreCkyY16WN7g5Sogal%2FeNcS%2FqUAT9PEVHacTWdz4T1360Gfr8xHtz2IQoxlOzNR0di9PZFLIY4JVX%2BiBEDNWVzQnGNbtnEU5a%2BtLvLIUkTN76y3F3uSY9llsP75Awq%2FLBwAY6ngHRJdISAJ3mqfjfAbUGrHnMLR5YeQI%2BrusQTGqW%2BK4kwF2Ty2m80IakeuzpYWmHOQ8FwL7kOtHI02ugrxZqDhxw6jXKKkrU2rUnTUNaiGB6pN3qmZ17FUuqI8Yy0S1DxlekB7lKbL5fasuCN6FoO%2FJR2Q%2B0i2MAu4Xh0zcSmPcgmHN74LtBZ%2Fbn9%2Fq8xHwXMcY8rXJuoUBZyoPvF%2FeBqw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250429T070059Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXCQYYRKNLMTLQEB3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=2fff47e7e6a578849605a791bb9907c8e38d3796349b180483ff839d5241ddc8",
            "intouchPoints": 1,
            "redemptionType": "MILES",
            "vendorName": "test002",
            "vendorId": 38,
            "vendorRedemptionId": 2386,
            "vendorRedemptionName": "VENDOR REDEMPTION-Postman_Test",
            "images": [],
            "videos": []
        },
        "pointsRedemption": {
            "redeemedPoints": 5,
            "vendorName": "Points001",
            "pointsRedemptionRefId": "5kq5uP",
            "pointsRedemptionRefIds": [
                "5kq5uP"
            ],
            "status": {
                "success": true,
                "code": 200,
                "message": "Points redeemed successfully."
            },
            "vendorId": 47
        },
        "redemptionDetails": {
            "redemptionType": "MILES",
            "totalRedemptionValue": null
        },
        "vouchers": [],
        "vendorRewards": {
            "rewards": [
                {
                    "json": "{\"voucher\": \"1534699\", \"pointsRedeemed\": \"5\"}"
                },
                {
                    "json": "{\"voucher\": \"1534700\", \"pointsRedeemed\": \"5\"}"
                },
                {
                    "json": "{\"voucher\": \"1534701\", \"pointsRedeemed\": \"5\"}"
                },
                {
                    "json": "{\"voucher\": \"1534702\", \"pointsRedeemed\": \"5\"}"
                },
                {
                    "json": "{\"voucher\": \"1534703\", \"pointsRedeemed\": \"5\"}"
                }
            ]
        },
        "customFields": {
            "CF1_FALLBACK_1": "CF1_DV",
            "CF2_FALLBACK_1": "CF2_DV"
        },
        "richContentRO": {
            "RC__2": {
                "content": "RC__2_DV",
                "isEnabled": true
            },
            "RC__1": {
                "content": "RC__1_DV",
                "isEnabled": true
            }
        },
        "ownerId": "",
        "eventDateTime": "2025-04-01T17:25:16Z",
        "issueDateTime": "2025-04-01T17:25:16Z"
    }
}
```
```json With revenue metadata
{
    "status": [
        {
            "success": true,
            "code": 200,
            "message": "Reward issue transactions details fetched successfully"
        }
    ],
    "data": {
        "rewardTransactionId": "17337",
        "rewardIssueRefId": "transactionNumber",
        "rewardTransactionDate": 1709715033000,
        "status": {
            "success": true,
            "code": 200,
            "message": "Reward issued successfully"
        },
        "quantity": 1,
        "groupRedemption": false,
        "rewardDetails": {
            "rewardId": 6834,
            "languageCode": "en",
            "name": " INTOUCH Enabled",
            "description": "Description",
            "imageId": "EXDR12987U",
            "imageUrl": "https://s3.us-west-2.amazonaws.com/devenv-crm-solutionsvannnld9gg/marvel_automation/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDDP8T9uN3cAstrAKoyLcAcNt9HvLcn79YTO%2F0glMCtFy1d6wnZiNGBvp%2Ff3vSltITx7OfgQsbqGtn7DKigqaWAjvnbVWNuNqnDzjzpX1FrSi1rLMnsgCZft3iFKTm3hlhzWlzLz5vR8cFQT6zfSHBy21%2FmxihnYpezB4Lv3qmy%2B84YWo1m95XPHCzvI3Sm%2B2PjtDgHhUchz3u1kL1v%2Bet2ZXsrh2Ohr4L3D5gisp35DVA4DzbWaaciOyJaA2cn37atfcuoQp4zgmBLQ8d%2FfssP5DAhzjZaoQwWBuBNirWKNA%2FQvEG0cThifoIXwonNqgrwYyLY1rvytALzqJdLGfupaZmTIK3kBoOniOjE94ywZBz1MNF7LeEWLHWb%2BLJ18ziw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240306T085348Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNPPABXCPZ%2F20240306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=60b44f05b120b061bfaeca7233d610c8221daafdaa6fc9d134b3920afb1d95f3",
            "intouchPoints": 1,
            "intouchSeriesId": "1135336",
            "redemptionType": "INTOUCH_REWARD",
            "vendorName": null,
            "vendorId": null,
            "vendorRedemptionId": null,
            "vendorRedemptionName": null,
            "images": [],
            "videos": []
        },
        "pointsRedemption": {
            "redeemedPoints": 1,
            "vendorName": "Points vendor_1",
            "referenceId": null,
            "pointsRedemptionRefId": "0rjghc",
            "status": {
                "success": true,
                "code": 200,
                "message": "Points redeemed successfully."
            },
            "stageReferenceId": null,
            "vendorId": null,
            "requestBody": null,
            "responseBody": null,
            "headers": null
        },
        "pointsRedemptionCheck": null,
        "issueReward": null,
        "revokeReward": null,
        "constraintsCheck": null,
        "catalogPromotions": null,
        "appliedPromotions": null,
        "vouchers": [
            {
                "code": "XS35QH1HA1OFHP269NZ0H0UCIZSY7S22F2DMP",
                "revenueDetails": {
                    "brandCommission": 1.00,
                    "capillaryCommission": 0.00,
                    "affiliateCommission": 1.20,
                    "endCustomerCommission": 1.30
                }
            }
        ],
        "promotions": null,
        "customFields": {
            "0a17": "defaultValue",
            "2d8a": "defaultValue",
        },
        "ownerType": null,
        "ownerId": "",
        "groupName": null,
        "groupRank": null,
        "rewardRank": null
    }
}
```
```json With 'altText' for images and videos
{
    "status": [
        {
            "success": true,
            "code": 200,
            "message": "Reward issue transactions details fetched successfully"
        }
    ],
    "data": {
        "rewardTransactionId": "338926",
        "customerId": 564488660,
        "orgId": 100737,
        "rewardIssueRefId": "transactionNumber",
        "rewardTransactionDate": 1739180128000,
        "status": {
            "success": true,
            "code": 200,
            "message": "Reward issued successfully"
        },
        "quantity": 1,
        "requestedQuantity": 1,
        "groupRedemption": false,
        "rewardDetails": {
            "rewardId": 313501,
            "languageCode": "en",
            "name": " INTOUCH Enabled",
            "description": "Description",
            "groups": [],
            "imageId": "EXDR12987U",
            "imageUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/DOCDEMO/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJHMEUCIC8Xs6yX8y6blmci0kZQDe2tqRbrSW6Rcry4po63zWjzAiEA%2F8WeX2dFC%2BXx3JtDsR%2Fp0JPAPHu6eWR5C%2BGFDqjt3uIqvgII%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1MDI4MTI3NzkyNjciDO5Ey0oIbicQGNC6gyqSAjD%2B49V4wIjNaXnNQkKI%2FBmNSrk2FapUFU0FJIjeM3kmluN3pXF0bae%2BTZzZ4jJrEU%2FoJRKEI7o4htcWLyTE4BQnWjqDOw1PfQIgm86LJwzYsBQYXd%2FzlRAbQox4lUOd7jtab1WzNe0%2F%2FCZLHZukfu6Senf1xxF0FZ2unvGhZgTa78nuZ3M5AYkFCchZDTJfX0zZ0q0gBty1Jk3JR%2BsP%2Fso8t8i5lTegz05NGN%2F8fWqKuFwxqh3MdcjntEtRCZEYHRf2DV7NLk9hlxq0F%2BXlEgye4IjNkfQWO7h2LZQI9yRsknLaQLcSSKEwdnd90IAVieXq6d%2FiE2aOcB9HbbTXuQH06AHgzTrDi2JTQ0%2F61%2B%2FBdBowl%2Fe1vQY6nQFElWN4x9QnjC0xTX5Unq2ORocyPEpfuWdeejGz2GnzpQ7i95ylmK7XMW8pt2ZM%2Bi%2FyqkH1ty02Taib0fdUzGlbKE1MmzRjGCfV4x8FLov0L82qSEKLB%2FmHl1IL25CJxUGIRaxpf2KCYxRG%2BxxFHNwmx05TpfJfITUhuex%2FFEzD6CBCZhajymLDvDa0%2Fa%2B7Nt%2BK%2BSv5xSbJC8xRZ10E&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250213T045655Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXKEP2EMBY2B2CPB3%2F20250213%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=00b61012b33ca16ec7c967941ad527a4a4dd3828a6756818f839f9d2904edb3b",
            "intouchPoints": 0,
            "redemptionType": "PHYSICAL_REWARD",
            "images": [
                {
                    "name": "imageName",
                    "altText": "product picture",
                    "id": null,
                    "url": "mypic.com",
                    "isExternal": true
                }
            ],
            "videos": [
                {
                    "name": "videoName",
                    "altText": "product picture",
                    "id": null,
                    "url": "mypic.com",
                    "isExternal": true
                }
            ]
        },
        "pointsRedemption": {
            "redeemedPoints": 0,
            "pointsRedemptionRefIds": [
                null
            ],
            "status": {
                "success": true,
                "code": 200,
                "message": "Points redeemed successfully."
            }
        },
        "redemptionDetails": {
            "redemptionType": "PHYSICAL_REWARD",
            "totalRedemptionValue": null
        },
        "vouchers": [],
        "vendorRewards": {
            "rewards": [
                {
                    "json": "{}"
                }
            ]
        },
        "ownerId": ""
    }
}
```
```Text With couponCodeCase Filter
{
    "status": [
        {
            "success": true,
            "code": 200,
            "message": "Reward issue transactions details fetched successfully"
        }
    ],
    "data": {
        "rewardTransactionId": "927488",
        "customerId": 345635195,
        "orgId": 50339,
        "rewardIssueRefId": "1718950196",
        "rewardTransactionDate": 1747372097000,
        "status": {
            "success": true,
            "code": 200,
            "message": "Reward issued successfully"
        },
        "quantity": 1,
        "requestedQuantity": 1,
        "groupRedemption": false,
        "rewardDetails": {
            "rewardId": 139831,
            "languageCode": "en",
            "name": "english rewardName",
            "description": "hello",
            "groups": [],
            "imageId": "EXDR12987U",
            "imageUrl": "https://s3.amazonaws.com/crm-staging-new-solutions/AutomationBrandMarvel/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCIKtw%2BXC2TqRzite7DiaPtyN7p9934t66wn0xrNmDdLQIgWH7wtldcDVFMlTeA%2FH4GflOD3DNzGWmWKlRn49B0ce8qvwIIWhAFGgw0ODY0NTY5ODYyNjYiDM40FhBLlqqH%2FGFYbyqcAjhc5mR%2Fy%2B6e3wJPjC7lOa9uZq8irxGO3arNg%2FzSE1d2%2BSC0jYcfDNXBxqj%2Bl3YisF1mvLb8VgHs%2B%2BRPivnY2eazmqD066%2BYc4euOTSPtW3EcOgO4%2F4lG0FwLyxC%2BaV95%2BaY%2FMyU%2F%2Fj2cKisPSSbygnAJy8FvQQTjnbTJW1gaICAl4DVzj7OX4Va3gY7qG62JVj%2FEbT3KZzkz1NxAcDKCn1Fhtye7qkuRy4MuJak7FBrlzpWdhYCMQqUe1%2F%2BM92ojPt69tydhwP9fpAla3ra%2BGqlgeG7V8vD5YBetPWU2%2Fil1yA14nAL4kC53JVG%2BG293yJ1dKTsiOhU5DT5G%2F0WO53cX0Gbhgoimlfi7ftIhDoOQsqq92Pa9QQhp3AtMMLs1cEGOp0B4U67C6hM%2Fz44qEWwJv9H7cJVzAelJbFpcfOTBkzip9CMh2KYRu4wT4JugEj63Zz3%2FrcLcTEIKgO%2Fp6vYWgJ%2B9Ku7uLVFToTifX9LnfV6XiVOrfd29HG9Rb7MeQ44qGmsz6DWlQP11Noz4TeXD0HyaxMznFAluKxxDPJipw1mVKkNM1OTOXHUfv08tBhB8IGeiq03k8xJeKpzEn%2BNmw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250527T082522Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNPEDLZPZL%2F20250527%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0e8acc31cb787690f2cd746cf2421ed7be74aa7f947600fe826d65e8d4cc7fc7",
            "intouchPoints": 0,
            "intouchSeriesId": "96303",
            "redemptionType": "INTOUCH_REWARD",
            "images": [],
            "videos": []
        },
        "pointsRedemption": {
            "redeemedPoints": 0,
            "vendorName": "test004",
            "pointsRedemptionRefIds": [
                null
            ],
            "status": {
                "success": true,
                "code": 200,
                "message": "Points redeemed successfully."
            },
            "vendorId": 37
        },
        "redemptionDetails": {
            "redemptionType": "INTOUCH_REWARD",
            "totalRedemptionValue": null
        },
        "vouchers": [
            {
                "code": "UPPERlower003",
                "codeExpiry": "2025-06-15 00:00:00",
                "codeExpiryDateTime": "2025-06-15T00:00:00Z",
                "redemptionDetails": {
                    "redemptionType": "INTOUCH_REWARD",
                    "redemptionValue": null
                }
            }
        ],
        "vendorRewards": {
            "rewards": []
        },
        "customFields": {
            "CF1_451fda2c2025-05-26 21:02:59.928852": "defaultValue_1",
            "CF2_3a9ec2332025-05-26 21:02:59.928866": "defaultValue_2"
        },
        "richContentRO": {
            "ea3aa7c12025-05-27 13:55:15.791334": {
                "content": "<p>We know that January is a time when lots of us start to plan for our next holiday, giving us something to look forward to at the start of the year.&nbsp;</p>\\\\n<p>With that in mind, we'd like to introduce Santander Boosts members to The World Online, a&nbsp;private travel platform with 24/7 access to special rates and curated deals.&nbsp;</p>\\\\n<p>",
                "isEnabled": true
            },
            "b4a8723f2025-05-27 13:55:15.791359": {
                "content": "<ul>\r\n<li>Santander Boosts may include links to third-party content from participating retailers or promoters. We are not responsible for this content or any additional information they capture or seek, and links may not always work or be available.</li>\r\n<li>Access to the The World Online is exclusively available to Santander Boosts members that are a minimum of 18 years of age.</li>\r\n<li>Inventory is subject to availability.</li>\r\n<li>Santander Boosts members can view booking confirmation details, including cancellations. To do this, Santander Boosts members can find the offer under the 'Activated' tab in the 'My Offers' section of the navigation menu in Santander Boosts. Then click the 'Book and manage travel' button associated with the offer. This will redirect you to The World Online site, where you can click on the 'My Account' icon then click on 'Purchases' to View existing bookings.</li>",
                "isEnabled": true
            }
        },
        "ownerId": "",
        "eventDateTime": "2025-05-16T05:08:17Z",
        "issueDateTime": "2025-05-16T05:08:17Z"
    }
}
```

<br />

# API-specific error codes

| Error Code | Description                  |
| :--------- | :--------------------------- |
| 6004       | Reward not found or disabled |