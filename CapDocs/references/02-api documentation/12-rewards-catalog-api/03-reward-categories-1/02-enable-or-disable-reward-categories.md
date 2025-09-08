---
title: Enable or Disable Reward Categories
excerpt: Enable or disable a particular reward category.
api:
  file: v1.json
  operationId: enable-or-disable-reward-categories
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API lets you enable or disable a particular reward category. A Reward Category is a metadata attribute used to classify rewards into predefined groups based on their nature or purpose. For example, categories can include fashion, electronics, or groceries.

# Prerequisites

*   Authentication - Basic or OAuth authentication details
*   Default access group
*   Brand ID
*   Category ID

# Resource Information

|                   |                                                                                                  |
| :---------------- | :----------------------------------------------------------------------------------------------- |
| **URL**           | `/api_gateway/rewards/core/v1/metadata/category/   {categoryid}/status/{action}/brand/{brandid}` |
| **HTTP Method**   | `PUT`                                                                                            |
| **Pagination**    | `NA`                                                                                             |
| **Rate limit**    | `NA`                                                                                             |
| **Batch support** | `NA`                                                                                             |

# API Endpoint Example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/category/129/status/enable/brand/55`

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/category/129/status/disable/brand/55`

# Request Path Parameters

| Parameter (Parameters marked with \* are mandatory) | Data Type | Description                                                                                                                                                                                           |
| :-------------------------------------------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `categoryId*`                                       | Integer   | Unique identifier for the reward category that needs to be enabled or disabled. It is generated when a reward category is created.                                                                    |
| `brandId*`                                          | Long      | Unique identifier for the brand under which the reward category is associated. To retrieve brandId, refer to the [Retrieve Brand ID API](https://docs.capillarytech.com/reference/retrieve-brand-id). |
| `action*`                                           | Enum      | Action to be performed. **Supported values:** `enable` or `disable`. Enable - To enable the reward category. Disable - To disable the reward category.                                                |

<br />

```curl Sample Request For Enabling Reward Category
curl --location --request PUT 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/category/129/status/enable/brand/55' \
--header 'Content-Type: application/json' \
--header 'Accept: */*' \
--header 'Authorization: Basic Ymxpc3M6MWYjNzU5MWI1NzY='
```
```curl Sample Request For Disabling Reward Category
curl --location --request PUT 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/category/129/status/disable/brand/55' \
--header 'Content-Type: application/json' \
--header 'Accept: */*' \
--header 'Authorization: Basic Ymxpc3M6MWY5OzU5MWI1NzY=' \
--header 'Cookie: _cfuvid=01ByJlrmtNbRIQOhhldILHP3lz5mNj3NHtc7Tkf5cH0-1733290794337-0.0.1.1-604800000'
```

# Response parameters

| Parameter | Data Type | Description                                                                                          |
| --------- | --------- | ---------------------------------------------------------------------------------------------------- |
| status    | Object    | Contains information about the success or failure of the API call.                                   |
| -success  | Boolean   | Indicates whether the operation was successful. **Values:** `true` or `false`.                       |
| -code     | Integer   | Status code indicating the result of the operation. **Example:** `2006` for success.                 |
| -message  | String    | Descriptive message about the result of the operation. **Example:** `Category updated successfully.` |

<br />

```json Sample Response
{
    "status": {
        "success": true,
        "code": 2006,
        "message": "Category updated successfully"
    }
}
```

<br />

# API error codes

| Error Code | Message            | Description        |
| :--------- | :----------------- | :----------------- |
| 3004       | Brand not found    | Invalid brandId    |
| 2004       | Category not found | Invalid categoryId |

<br />

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