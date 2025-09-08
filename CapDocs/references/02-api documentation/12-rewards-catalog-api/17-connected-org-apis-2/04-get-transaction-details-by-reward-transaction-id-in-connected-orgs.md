---
title: Get Transaction Details by Reward Transaction ID in Connected orgs
excerpt: >-
  This API is used to retrieve details of a specific reward transaction using
  reward transaction ID, in connected orgs.
api:
  file: v1.json
  operationId: get-transaction-details-by-reward-transaction-id-in-connected-orgs
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API retrieves the detailed information of a specific reward transaction using the reward transaction ID.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

> 🚧 **Warning**
>
> **Warning**
>
> Use this API exclusively for connected orgs. For other orgs, use this [API](https://docs.capillarytech.com/reference/get-reward-issue-transaction-details) instead.

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                                              |
| :--------------------- | :--------------------------------------------------------------------------- |
| URL                    | /api\_gateway/rewards/core/v1.1/reward-transactions`\{rewardTransactionId\}` |
| HTTP Method            | GET                                                                          |
| Pagination             | Yes                                                                          |
| Batch support          | No                                                                           |
| Rate limit information | None                                                                         |

# API endpoint example

\<https\://eu.api.capillarytech.com/api\_gateway/rewards/core/v1.1/reward-transactions/32787>

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
        `couponCodeCase`
      </td>

      <td>
        Enum
      </td>

      <td>
        This parameter helps retrieve the coupon code in the desired letter cases. By default, the system automatically converts the coupon code to uppercase.
        Supported Values: `LOWER`, `UPPER`, `AS_IT_IS`

        <br />

        `LOWER` - Converts the coupon code to lowercase. Example: `"ABCD1234"` → `"abcd1234"`

        <br />

        `UPPER` - Converts the coupon code to uppercase. Example: `"abcd1234"` → \`"ABCD1234"

        `AS_IT_IS`  - Returns the coupon code exactly as it was created. Example: `"abAB123"` → `"abAB123"`
      </td>
    </tr>
  </tbody>
</Table>

# Response parameters

| Parameter Name                | Description                                                                                                                                                             |
| :---------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`status`**                  | Contains the details of the operation.                                                                                                                                  |
| `success`                     | Indicates if the operation was successful.                                                                                                                              |
| `code`                        | HTTP status code of the operation.                                                                                                                                      |
| `message`                     | Message about the operation's outcome.                                                                                                                                  |
| **`data`**                    | Contains detailed information about the reward transaction.                                                                                                             |
| `rewardTransactionId`         | Unique identifier for the reward transaction. It is generated during the issuance of the reward.                                                                        |
| `-customerId`                 | Unique identifier for the customer.                                                                                                                                     |
| `-orgId`                      | Unique identifier for the organization.                                                                                                                                 |
| `-rewardIssueRefId`           | Reference ID for the reward issuance.                                                                                                                                   |
| `-rewardTransactionDate`      | Date and time of the reward transaction in milliseconds since epoch (Unix timestamp format).                                                                            |
| `-status`                     | Contains the status of the reward issuance.                                                                                                                             |
| `--success`                   | Indicates if the reward was issued successfully: `true` for successful, `false` for failed.                                                                             |
| `--code`                      | Status code for the reward issue transaction.                                                                                                                           |
| `--message`                   | Status message for the reward issue transaction, indicating if the reward issuance was successful.                                                                      |
| `-quantity`                   | Number of rewards issued.                                                                                                                                               |
| `-requestedQuantity`          | Represents the original reward quantity that was requested.                                                                                                             |
| `-groupRedemption`            | Indicates if the redemption is a group redemption.                                                                                                                      |
| `-rewardDetails`              | Contains details of the issued reward.                                                                                                                                  |
| `--rewardId`                  | Unique identifier of the reward.                                                                                                                                        |
| `--languageCode`              | Language code of the reward details. **Example**: `en` for English.                                                                                                     |
| `--name`                      | Name of the reward.                                                                                                                                                     |
| `--description`               | Description of the reward.                                                                                                                                              |
| `--rewardRank`                | Rank or position of the reward within its category or list.                                                                                                             |
| `--groups`                    | Specifies the group associated with the reward.                                                                                                                         |
| `--imageId`                   | Unique identifier for the image associated with the reward.                                                                                                             |
| `--imageUrl`                  | URL to the image associated with the reward.                                                                                                                            |
| `--intouchPoints`             | The number of intouch points associated with the reward.                                                                                                                |
| `--redemptionType`            | Gives the redemption type of the reward. **Example**: `MILES`.                                                                                                          |
| `--images`                    | A list of image details related to the reward.                                                                                                                          |
| `--name`                      | Name of the image.                                                                                                                                                      |
| `--altText`                   | Alternative text or description of the image.                                                                                                                           |
| `--id`                        | Identifier for internally stored images, generated when uploaded to the file service. Not applicable for external images.                                               |
| `--url`                       | URL of the image.                                                                                                                                                       |
| `--isExternal`                | Indicates if the image is hosted on an external server.                                                                                                                 |
| `--videos`                    | A list of videos associated with the reward.                                                                                                                            |
| `--name`                      | Name of the video.                                                                                                                                                      |
| `--altText`                   | Alternative text or description of the video.                                                                                                                           |
| `--id`                        | Identifier for internally stored images, generated when uploaded to the file service. Not applicable for external videos.                                               |
| `--url`                       | URL of the video.                                                                                                                                                       |
| `--isExternal`                | Indicates if the video is hosted on an external server.                                                                                                                 |
| `-pointsRedemption`           | Contains details of the points redemption process.                                                                                                                      |
| `--redeemedPoints`            | Number of points redeemed.                                                                                                                                              |
| `--pointsRedemptionRefId`     | Unique identifier generated each time rewards are issued. This field stores a list of these identifiers, allowing you to track multiple points redemption transactions. |
| `--status`                    | Status details of the points redemption.                                                                                                                                |
| `---success`                  | Indicates whether the points redemption was successful.                                                                                                                 |
| `---code`                     | A unique code representing the status of the points redemption.                                                                                                         |
| `---message`                  | A message providing information about the points redemption status. **Example**: `Points redeemed successfully.`                                                        |
| `-redemptionDetails`          | Contains details of the redemption process.                                                                                                                             |
| `--redemptionType`            | Gives the redemption type of the reward. **Example**: `INTOUCH_REWARD`.                                                                                                 |
| `--totalRedemptionValue`      | The total value of the redemption. **Example**: `10` miles.                                                                                                             |
| `-vouchers`                   | A list of vouchers associated with the redemption.                                                                                                                      |
| `vouchers.code`               | The unique code for the voucher. The casing of the coupon code is based on the `couponCodeCase` query parameter.                                                        |
| `vouchers.codeExpiry`         | The expiration date of the voucher. Format: "YYYY-MM-DD HH:MM:SS".                                                                                                      |
| `vouchers.codeExpiryDateTime` | The expiration date of the voucher in ISO 8601 format.                                                                                                                  |
| `-vendorRewards`              | Stores the vendor reward details.                                                                                                                                       |
| `--rewards`                   | Identifier for the vendor reward.                                                                                                                                       |
| `-customFields`               | Custom fields for additional information.                                                                                                                               |
| `-transactionCustomFields`    | Custom fields associated with the transaction.                                                                                                                          |
| `-ownerId`                    | Unique identifier of the owner. **Example**: `123`.                                                                                                                     |

<br />

```json Sample response
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
```Text With couponCodeCase filter
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