---
title: Groups - Get all rewards group
excerpt: ''
api:
  file: v1.json
  operationId: get-group-rewards
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to retrieve details of all the reward groups available in the org.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|               |                             |
| :------------ | :-------------------------- |
| URI           | /api\_gateway/core/v1/group |
| HTTP method   | GET                         |
| Pagination    | Yes                         |
| Rate limit    | NA                          |
| Batch support | NA                          |

# API endpoint example

`https://eucrm.cc.capillarytech.com/api_gateway/core/v1/group`

# Request query parameters

| Parameters | Data type | Description                                                                                                                                  |
| :--------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| orderBy    | Enum      | Sort response based on order. Supported values: ASC and DESC. Default value: ASC.                                                            |
| active     | Boolean   | Indicates if the group is active.                                                                                                            |
| name       | String    | Name of the group. Enter the group name to retrieve group details.                                                                           |
| size       | Integer   | The number of items or records returned in a single API response.                                                                            |
| page       | Integer   | The amount of the data that you want to retrieve. Default value: 10.                                                                         |
| sortBy     | Enum      | Sorts the response based on the group rank. Supported values : `RANK`                                                                        |
| sortOn     | Enum      | Sorts the response based on the group rank and last updated on field.  Supported Fields: `RANK`, `LAST_UPDATED_ON`.  Default Value : `RANK`. |

<br />

```curl
https://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1/group?page=0&size=10&active=true&name=VIP&orderBy=ASC
```
```Text With sortOn=LAST_UPDATED_ON
curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/group?sortOn=LAST_UPDATED_ON' \
--header 'Authorization: Basic Z2VvcmdlLmpvaG5zb246OTg4OTU2NWI4ODVhMmY4ZWE1MTk1MjA2NWEwYTEzNzg=' \
--header 'Cookie: _cfuvid=_XMq7vU15Ra4rfJ4eowUt3bE5nF5uk07Qq9cb7Xe63c-1747204203136-0.0.1.1-604800000'
```

# Response parameters

| Parameter Name        | Data Type | Description                                                                       |
| --------------------- | --------- | --------------------------------------------------------------------------------- |
| id                    | Integer   | The unique identifier of the group.                                               |
| orgId                 | Integer   | The organization identifier the group belongs to.                                 |
| name                  | String    | The name of the group.                                                            |
| rank                  | Integer   | The numerical rank associated with the group.                                     |
| isActive              | Boolean   | Indicates if the group is active.                                                 |
| createdBy             | Integer   | The identifier of the user who created the group.                                 |
| createdOn             | Date      | Creation date and time of the field in Epoch format                               |
| createdOnDateTime     | String    | Creation date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)     |
| lastUpdatedOn         | Date      | Last updated date and time of the field in Epoch format                           |
| lastUpdatedOnDateTime | String    | Last updated date and time of the field in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |
| last                  | Boolean   | Indicates if the current page is the last page.                                   |
| totalElements         | Integer   | The total number of elements across all pages.                                    |
| totalPages            | Integer   | The total number of pages available.                                              |
| numberOfElements      | Integer   | The number of elements in the current page.                                       |
| first                 | Boolean   | Indicates if the current page is the first page.                                  |
| size                  | Integer   | The number of elements per page.                                                  |
| number                | Integer   | The current page number (zero-based).                                             |
| code                  | Integer   | The code associated with the operation status.                                    |
| message               | String    | A message describing the operation outcome.                                       |
| success               | Boolean   | Indicates if the operation was successful.                                        |

<br />

```json
{
    "status": {
        "success": true,
        "code": 12013,
        "message": "Get all groups fetched successfully"
    },
    "groupRoList": [
        {
            "id": 2412,
            "orgId": 100737,
            "name": "groupName066",
            "rank": 8,
            "isActive": true,
            "createdBy": 75155282,
            "createdOn": 1742180328000,
            "createdOnDateTime": "2025-03-17T02:58:48Z",
            "lastUpdatedBy": 75155282,
            "lastUpdatedOn": 1742180328000,
            "lastUpdatedOnDateTime": "2025-03-17T02:58:48Z"
        },
        {
            "id": 2295,
            "orgId": 100737,
            "name": "groupName016",
            "rank": 8,
            "isActive": true,
            "createdBy": 75155282,
            "createdOn": 1741942980000,
            "createdOnDateTime": "2025-03-14T09:03:00Z",
            "lastUpdatedBy": 75155282,
            "lastUpdatedOn": 1741942980000,
            "lastUpdatedOnDateTime": "2025-03-14T09:03:00Z"
        },
        {
            "id": 2270,
            "orgId": 100737,
            "name": "groupName013",
            "rank": 8,
            "isActive": true,
            "createdBy": 75155282,
            "createdOn": 1741887808000,
            "createdOnDateTime": "2025-03-13T17:43:28Z",
            "lastUpdatedBy": 75155282,
            "lastUpdatedOn": 1741887808000,
            "lastUpdatedOnDateTime": "2025-03-13T17:43:28Z"
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 3,
        "totalPages": 1,
        "numberOfElements": 3,
        "first": true,
        "size": 10,
        "number": 0
    }
}
```
```Text with sortOn=LAST_UPDATED_ON
{
    "status": {
        "success": true,
        "code": 12013,
        "message": "Get all groups fetched successfully"
    },
    "groupRoList": [
        {
            "id": 2270,
            "orgId": 100737,
            "name": "groupGOLD3",
            "rank": 8,
            "isActive": true,
            "createdBy": 75155282,
            "createdOn": 1741887808000,
            "createdOnDateTime": "2025-03-13T17:43:28Z",
            "lastUpdatedBy": 75155282,
            "lastUpdatedOn": 1741887808000,
            "lastUpdatedOnDateTime": "2025-03-13T17:43:28Z"
        },
        {
            "id": 2295,
            "orgId": 100737,
            "name": "groupName016",
            "rank": 8,
            "isActive": true,
            "createdBy": 75155282,
            "createdOn": 1741942980000,
            "createdOnDateTime": "2025-03-14T09:03:00Z",
            "lastUpdatedBy": 75155282,
            "lastUpdatedOn": 1741942980000,
            "lastUpdatedOnDateTime": "2025-03-14T09:03:00Z"
        },
        {
            "id": 2412,
            "orgId": 100737,
            "name": "groupName066",
            "rank": 8,
            "isActive": true,
            "createdBy": 75155282,
            "createdOn": 1742180328000,
            "createdOnDateTime": "2025-03-17T02:58:48Z",
            "lastUpdatedBy": 75155282,
            "lastUpdatedOn": 1742180328000,
            "lastUpdatedOnDateTime": "2025-03-17T02:58:48Z"
        },
        {
            "id": 2422,
            "orgId": 100737,
            "name": "dw",
            "rank": 8,
            "isActive": true,
            "createdBy": 75155282,
            "createdOn": 1742196639000,
            "createdOnDateTime": "2025-03-17T07:30:39Z",
            "lastUpdatedBy": 75155282,
            "lastUpdatedOn": 1743575719000,
            "lastUpdatedOnDateTime": "2025-04-02T06:35:19Z"
        },
        {
            "id": 3690,
            "orgId": 100737,
            "name": "Special Rewards",
            "rank": 6,
            "isActive": true,
            "createdBy": 75161973,
            "createdOn": 1744713561000,
            "createdOnDateTime": "2025-04-15T10:39:21Z",
            "lastUpdatedBy": 75161973,
            "lastUpdatedOn": 1744713561000,
            "lastUpdatedOnDateTime": "2025-04-15T10:39:21Z"
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 5,
        "totalPages": 1,
        "numberOfElements": 5,
        "first": true,
        "size": 10,
        "number": 0
    }
}
```
```Text orderBy=DESC
{
    "status": {
        "success": true,
        "code": 12013,
        "message": "Get all groups fetched successfully"
    },
    "groupRoList": [
        {
            "id": 2422,
            "orgId": 100737,
            "name": "dw",
            "rank": 8,
            "isActive": true,
            "createdBy": 75155282,
            "createdOn": 1742196639000,
            "createdOnDateTime": "2025-03-17T07:30:39Z",
            "lastUpdatedBy": 75155282,
            "lastUpdatedOn": 1743575719000,
            "lastUpdatedOnDateTime": "2025-04-02T06:35:19Z"
        },
        {
            "id": 2412,
            "orgId": 100737,
            "name": "groupName066",
            "rank": 8,
            "isActive": true,
            "createdBy": 75155282,
            "createdOn": 1742180328000,
            "createdOnDateTime": "2025-03-17T02:58:48Z",
            "lastUpdatedBy": 75155282,
            "lastUpdatedOn": 1742180328000,
            "lastUpdatedOnDateTime": "2025-03-17T02:58:48Z"
        },
        {
            "id": 2295,
            "orgId": 100737,
            "name": "groupName016",
            "rank": 8,
            "isActive": true,
            "createdBy": 75155282,
            "createdOn": 1741942980000,
            "createdOnDateTime": "2025-03-14T09:03:00Z",
            "lastUpdatedBy": 75155282,
            "lastUpdatedOn": 1741942980000,
            "lastUpdatedOnDateTime": "2025-03-14T09:03:00Z"
        },
        {
            "id": 2270,
            "orgId": 100737,
            "name": "groupName013",
            "rank": 8,
            "isActive": true,
            "createdBy": 75155282,
            "createdOn": 1741887808000,
            "createdOnDateTime": "2025-03-13T17:43:28Z",
            "lastUpdatedBy": 75155282,
            "lastUpdatedOn": 1741887808000,
            "lastUpdatedOnDateTime": "2025-03-13T17:43:28Z"
        },
        {
            "id": 3690,
            "orgId": 100737,
            "name": "Special Rewards",
            "rank": 6,
            "isActive": true,
            "createdBy": 75161973,
            "createdOn": 1744713561000,
            "createdOnDateTime": "2025-04-15T10:39:21Z",
            "lastUpdatedBy": 75161973,
            "lastUpdatedOn": 1744713561000,
            "lastUpdatedOnDateTime": "2025-04-15T10:39:21Z"
        }
    ],
    "pagingDto": {
        "last": true,
        "totalElements": 5,
        "totalPages": 1,
        "numberOfElements": 5,
        "first": true,
        "size": 10,
        "number": 0
    }
}
```

<br />

<HTMLBlock>{`
<style>
* Container: Flex layout for button group *
.InputGroupe2EvBGz2cnqy {
   display: flex;
   gap: 2px;* Small gap between buttons *
   position: relative;* Required for button z-index behavior *
}

* Button base styling *
.Button.APIRequest-example-button1DGMsfaOTVNW {
* Text truncation and expansion behavior *
   position: relative;
   width: 140px;* Default collapsed width *
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;* Shows "..." for truncated text *
   padding: 6px 12px;
   text-align: left;
   transition: width 0.2s ease-out;* Smooth width animation *
   z-index: 1;
   display: block;
   direction: ltr;
   unicode-bidi: embed;* Ensures proper text direction *
   padding-right: 20px;* Extra space for ellipsis *
   
* Visual styling *
   background: #1e2329;
   border: none;
   border-radius: 6px;
   color: #94a3b8;
   font-size: 13px;
}

* Ensures proper text alignment for nested elements *
.Button.APIRequest-example-button1DGMsfaOTVNW span,
.Button.APIRequest-example-button1DGMsfaOTVNW div {
   text-align: left;
   direction: ltr;
}

* Hover state: Expands button and shows full text *
.Button.APIRequest-example-button1DGMsfaOTVNW:hover {
   width: auto;* Expands to fit content *
   z-index: 10;* Ensures hover state shows above other buttons *
   background: #262b33;
}

* Active state: Currently selected button *
.Button.APIRequest-example-button1DGMsfaOTVNW.APIRequest-example-button_activeXJeukHyaHZXB {
   z-index: 20;* Highest z-index to stay on top *
   background: #2c333d;
   color: #ffffff;* White text for better contrast *
}
</style>
`}</HTMLBlock>