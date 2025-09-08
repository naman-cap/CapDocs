---
title: Get Reward Transaction Details using Reward Transaction ID
excerpt: ''
api:
  file: v1.json
  operationId: get-transaction-details-by-reward-transaction-id
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API retrieves detailed information of an issued reward using the reward transaction ID.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                                           |
| :--------------------- | :------------------------------------------------------------------------ |
| URI                    | api\_gateway/rewards/core/v1/reward-transactions`\{rewardTransactionId\}` |
| HTTP Method            | GET                                                                       |
| Pagination             | No                                                                        |
| Batch support          | No                                                                        |
| Rate limit information | None                                                                      |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1.1/reward-transactions/32787`

# Headers

| Header               | Description                                                                                                                                                                                                                                                                                                                                                                                                               |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`DATA-SCOPE-ORG`** | List of Organization IDs                                                                                                                                                                                                                                                                                                                                                                                                  |
| **`DATA-SCOPE`**     | Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organization. Defining a scope ensures that the response contains only data from the respective organization. Supported headers: `SELF`, `OTHER`, and `ALL`. For more information, refer to connected orgs [data scopes](https://docs.capillarytech.com/reference/connected-orgs-data-scopes). |

# Request path parameters

| Parameters            | Data Type | Description                                                                                                                           |
| :-------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| rewardTransactionId\* | String    | Unique identifier of the reward transaction. The reward transaction is generated during the issual of the reward. **Example**: 327847 |

<br />

```curl
/curl --location 'http://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1.1/reward-transactions/<rewardTransactionId>' \
e--header 'DATA-SCOPE: OTHER' \
x--header 'DATA-SCOPE-ORG: 50672' \
--header 'Authorization: Basic a2FyXzE6MzE1MmQyMzRiNzA='
```
```Text With couponCodeCase filter
curl --location 'https://crm-staging-new.cc.capillarytech.com/api_gateway/rewards/core/v1.1/reward-transactions/927488?couponCodeCase=AS_IT_IS' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'DATA-SCOPE: ALL' \
--header 'Authorization: Basic dGlsbGF1dG9fMTIzOjI3NDFlNjJiZTZiZTYyNGY2N2IwMGQxZDZhNWQ2MWJm'
```

# Request Query Parameter

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
        This parameter helps retrieve the coupon code in the desired letter cases. By default, the system automatically converts the coupon code to uppercase. Supported values are: `LOWER`, `UPPER`, and `AS_IT_IS`.

        <br />

        **`LOWER`**: Converts the coupon code to lowercase.
        Example: "ABCD1234" → "abcd1234"

        <br />

        **`UPPER`**: Converts the coupon code to uppercase.
        Example: "abcd1234" → "ABCD1234"

        <br />

        **`AS_IT_IS`**: Returns the coupon code exactly as it was created.
        Example: "abAB123" → "abAB123"
      </td>
    </tr>
  </tbody>
</Table>

# Response Parameters

| Parameter                     | Data Type | Description                                                                                                                                                             |
| :---------------------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`status`**                  | object    | Contains the details of the operation.                                                                                                                                  |
| `success`                     | boolean   | Indicates if the operation was successful.                                                                                                                              |
| `code`                        | int       | HTTP status code of the operation.                                                                                                                                      |
| `message`                     | string    | Message about the operation's outcome.                                                                                                                                  |
| **`data`**                    | object    | Contains detailed information about the reward transaction.                                                                                                             |
| `rewardTransactionId`         | string    | Unique identifier for the reward transaction. It is generated during the issuance of the reward.                                                                        |
| `customerId`                  | long      | Unique identifier for the customer.                                                                                                                                     |
| `orgId`                       | long      | Unique identifier for the org.                                                                                                                                          |
| `rewardIssueRefId`            | string    | Reference ID for the reward issuance.                                                                                                                                   |
| `rewardTransactionDate`       | long      | Date and time of the reward transaction in milliseconds since epoch. It is in the Unix timestamp format.                                                                |
| **`status`**                  | object    | Contains the status of the reward issuance.                                                                                                                             |
| `success`                     | boolean   | Indicates if the reward was issued successfully, `true` for successful reward issuance and `false` for failed reward issuance.                                          |
| `code`                        | int       | Status code for the reward issue transaction.                                                                                                                           |
| `message`                     | string    | Status message for the reward issue transaction, indicating if the reward issuance was successful.                                                                      |
| `quantity`                    | int       | Number of rewards issued.                                                                                                                                               |
| `requestedQuantity`           | int       | Represents the original reward quantity that was requested.                                                                                                             |
| `groupRedemption`             | boolean   | Indicates if the redemption is a group redemption.                                                                                                                      |
| **`rewardDetails`**           | object    | Contains details of the issued reward.                                                                                                                                  |
| `rewardId`                    | long      | Unique identifier of the reward.                                                                                                                                        |
| `languageCode`                | string    | Language code of the reward details. **Example**: `en` for English.                                                                                                     |
| `name`                        | string    | Name of the reward.                                                                                                                                                     |
| `description`                 | string    | Description of the reward.                                                                                                                                              |
| `rewardRank`                  | int       | Rank or position of the reward within its category or list.                                                                                                             |
| `groups`                      | array     | Specifies the group associated with the reward.                                                                                                                         |
| `imageId`                     | string    | Unique identifier for the image associated with the reward.                                                                                                             |
| `imageUrl`                    | string    | URL to the image associated with the reward.                                                                                                                            |
| `intouchPoints`               | int       | The number of intouch points associated with the reward.                                                                                                                |
| `redemptionType`              | string    | Gives the redemption type of the reward. **Example**: `MILES`.                                                                                                          |
| `images`                      | array     | A list of image details related to the reward.                                                                                                                          |
| `name`                        | string    | Name of the image.                                                                                                                                                      |
| `altText`                     | string    | Alternative text or description of the image.                                                                                                                           |
| `id`                          | string    | Identifier for internally stored images, generated when uploaded to the file service. Not applicable for external images.                                               |
| `url`                         | string    | URL of the image.                                                                                                                                                       |
| `isExternal`                  | boolean   | Indicates if the image is hosted on an external server.                                                                                                                 |
| `videos`                      | array     | A list of videos associated with the reward.                                                                                                                            |
| `name`                        | string    | Name of the video.                                                                                                                                                      |
| `altText`                     | string    | Alternative text or description of the video.                                                                                                                           |
| `id`                          | string    | Identifier for internally stored videos, generated when uploaded to the file service. Not applicable for external videos.                                               |
| `url`                         | string    | URL of the video.                                                                                                                                                       |
| `isExternal`                  | boolean   | Indicates if the video is hosted on an external server.                                                                                                                 |
| **`pointsRedemption`**        | object    | Contains details of the points redemption process.                                                                                                                      |
| `redeemedPoints`              | int       | Number of points redeemed.                                                                                                                                              |
| `pointsRedemptionRefId`       | string    | Unique identifier generated each time rewards are issued. This field stores a list of these identifiers, allowing you to track multiple points redemption transactions. |
| **`status`**                  | object    | Status details of the points redemption.                                                                                                                                |
| `success`                     | boolean   | Indicates whether the points redemption was successful.                                                                                                                 |
| `code`                        | int       | A unique code representing the status of the points redemption.                                                                                                         |
| `message`                     | string    | A message providing information about the points redemption status. **Example**: `Points redeemed successfully.`                                                        |
| **`redemptionDetails`**       | object    | Contains details of the redemption process.                                                                                                                             |
| `redemptionType`              | string    | Gives the redemption type of the reward. **Example**: `INTOUCH_REWARD`.                                                                                                 |
| `totalRedemptionValue`        | double    | The total value of the redemption. **Example**: `10 miles`.                                                                                                             |
| **`vouchers`**                | array     | A list of vouchers associated with the redemption.                                                                                                                      |
| `vouchers.code`               | string    | The unique code for the voucher. Note: The casing of the coupon code is based on the `couponCodeCase` query parameter.                                                  |
| `vouchers.codeExpiry`         | string    | The expiration date of the voucher. Format: "YYYY-MM-DD HH:MM:SS"                                                                                                       |
| `vouchers.codeExpiryDateTime` | string    | The expiration date of the voucher in ISO 8601 format.                                                                                                                  |
| **`vendorRewards`**           | object    | Stores the vendor reward details.                                                                                                                                       |
| `rewards`                     | object    | Identifier for the vendor reward.                                                                                                                                       |
| **`customFields`**            | object    | Custom fields for additional information.                                                                                                                               |
| **`transactionCustomFields`** | object    | Custom fields associated with the transaction.                                                                                                                          |
| `ownerId`                     | long      | Unique identifier of the owner. **Example**: `123`.                                                                                                                     |
| `ownerType`                   | string    | Type of the owner.                                                                                                                                                      |
| `fulfillmentStatus`           | string    | Status of fulfillment.                                                                                                                                                  |
| `eventDateTime`               | string    | Event date and time.                                                                                                                                                    |
| `issueDateTime`               | string    | Issue date and time.                                                                                                                                                    |
| `vendorId`                    | long      | Identifier for the vendor.                                                                                                                                              |
| `vendorName`                  | string    | Name of the vendor associated with points redemption.                                                                                                                   |
| `pointsRedemptionRefIds`      | array     | List of reference IDs for points redemption.                                                                                                                            |
| `codeExpiry`                  | string    | Expiry date of the voucher code.                                                                                                                                        |
| `codeExpiryDateTime`          | string    | Expiry date and time of the voucher code in ISO format.                                                                                                                 |
| `redemptionValue`             | double    | Value of the redemption associated with the voucher.                                                                                                                    |
| **`richContentRO`**           | object    | Contains rich content details.                                                                                                                                          |

<br />

```Text Sample response
{
    "status": [
        {
            "success": true,
            "code": 200,
            "message": "Reward issue transactions details fetched successfully"
        }
    ],
    "data": {
        "rewardTransactionId": "327847",
        "customerId": 555738346,
        "orgId": 100458,
        "rewardIssueRefId": "transactionNumber",
        "rewardTransactionDate": 1737629567000,
        "status": {
            "success": true,
            "code": 200,
            "message": "Reward issued successfully"
        },
        "quantity": 1,
        "requestedQuantity": 1,
        "groupRedemption": false,
        "rewardDetails": {
            "rewardId": 295211,
            "languageCode": "en",
            "name": "Donate to Charity : Help us brighten a child's day!",
            "description": "Redeem you points and donate to Charity, 1 Point = 1 AED",
            "rewardRank": 1,
            "groups": [],
            "imageId": "5d05ccb2-6f5b-4b58-ad90-b97647c86784",
            "imageUrl": "https://eucrm-solutions.s3.amazonaws.com/rewards/1aba92d2-28bc-44dc-9dc9-00fbf662.jpg",
            "intouchPoints": 0,
            "redemptionType": "MILES",
            "images": [],
            "videos": []
        },
        "pointsRedemption": {
            "redeemedPoints": 30,
            "pointsRedemptionRefId": "kLZgHE",
            "pointsRedemptionRefIds": [
                "kLZgHE"
            ],
            "status": {
                "success": true,
                "code": 200,
                "message": "Points redeemed successfully."
            }
        },
        "redemptionDetails": {
            "redemptionType": "MILES",
            "totalRedemptionValue": 10
        },
        "vouchers": [],
        "vendorRewards": {
            "rewards": [
                {
                    "json": "{}"
                }
            ]
        },
        "customFields": {
            "A": "1"
        },
        "transactionCustomFields": {
            "testdate": "2020-01-01 01:01:01"
        },
        "ownerId": ""
    }
}
```
```json With couponCodeCase filter
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
            "imageUrl": "https://s3.amazonaws.com/crm-staging-new-solutions/AutomationBrandMarvel/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE%2BeRWPDz0XYx7IjQEri%2F%2FpzAhgGJvwXWBc7mSOrRaokAiEAu1INaG1iTdyTeXZpI%2BZ%2BsNEI7VdoVdG1J53VmL4XhGAqvwIIWhAFGgw0ODY0NTY5ODYyNjYiDDcco1G%2BCL1zwPK2YCqcAvsLh13E3dAKtZs5Ru9O3VO8xXheuSsjubDb6csrxpnOT2cQsVnN3ma8Q1Pw7oG83pY717SdEVaRP951tkv9XwGgiB3sNCL1cs1AwLf2BDRvLvrb24PKzcJG3iQszRjFMHpujBuAiJt53AzY9Qy%2F6WlOXCRuuMVlUMeGdQNforRTTAkujk3kUtpsNzc%2B6gzDl04Gv2mlaznSAXweADW0cS6ajn79loWUlnaITZIwjJQUVxm4xgxFtki0%2BEhS%2FS1LnxHH3riQ%2Fixza0%2BvoHoQME8EbVXDEADWuS3ZeSVw50rQtult00p%2BIwjZt7IyM4RC0Xmh5lwKeZOcaKyhu762jyGRBgH8veMlXKTNNdfxvzqfV1ddB0x1hgbAIIYDMIz61cEGOp0BSEegrOVeFJSjbBOTD%2Fy2W1l0cN6PCvrap9NRmv3ws8pdbS89nSgPYdzF8hv6t%2F4fALargH1mUSahDGLUhSgmMH%2FcCIoXSb2iL4kJRycgr9j98hRQiJvdxh%2BHHIMimrvmDqpPzxOyZ0Ee7WDrSW9h1qsP5YD12cWAuU4hFvuM%2By077e1crCfa7EeNQHg2rKY04IvkxahZmvpcxVg9Dw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250527T085416Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXCQYYRKNHNOLXL4J%2F20250527%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c2a7ac120eddfac2cebd3ddd16dc2c8453af7598a923ee8b7591db92b931e107",
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
            "CF2_eebced882025-05-27 13:57:18.344501": "defaultValue_2",
            "CF1_50a6f4cf2025-05-27 13:57:18.344487": "defaultValue_1"
        },
        "richContentRO": {},
        "ownerId": "",
        "eventDateTime": "2025-05-16T05:08:17Z",
        "issueDateTime": "2025-05-16T05:08:17Z"
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
   background: #1e2329;
   border: none;
   border-radius: 6px;
   color: #94a3b8;
   font-size: 13px;
}

.Button.APIRequest-example-button1DGMsfaOTVNW span,
.Button.APIRequest-example-button1DGMsfaOTVNW div {
   text-align: left;
   direction: ltr;
}

.Button.APIRequest-example-button1DGMsfaOTVNW:hover {
   width: auto;
   z-index: 10;
   background: #262b33;
}

.Button.APIRequest-example-button1DGMsfaOTVNW.APIRequest-example-button_activeXJeukHyaHZXB {
   z-index: 20;
   background: #2c333d;
   color: #ffffff;
}
</style>
`}</HTMLBlock>