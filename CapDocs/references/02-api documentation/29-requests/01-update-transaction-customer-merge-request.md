---
title: Update Request
excerpt: Update transaction or customer merge requests.
api:
  file: request-v2.json
  operationId: update-transaction-customer-merge-request
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows you to update the request to one of the following statuses:

* APPROVED – Approves the request.
* REJECTED – Rejects the request.
* CUSTOM – Sets a custom intermediate status.\
  **Note**:  The `CUSTOM`   status is not supported for Customer Merge requests.

> ❗️ You cannot approve a request that is REJECTED. To approve a rejected request, first change its status to PENDING, and then change it to APPROVED.

# Transaction Request

This API is to update the transaction request only. To update regular transactions, see the[ Update regular transaction API](https://docs.capillarytech.com/reference/update-transaction).

# Customer Merge Request

Customer Merge requests can be modified in standard organizations, organizations with dual eligibility enabled, and connected organizations.\
In a [connected organization](https://docs.capillarytech.com/docs/organization-management#connected-organizations-connected-orgs) setup, only the parent organization can modify the status of a request. Any request initiated from a child organization is blocked.

# API Endpoint

`<https://{host}/v2/requests>`

# Prerequisites

*   Authentication - Basic or OAuth authentication
*   Access group resource -  Write permission on Requests resource group

# Resource information

|                       |             |
| :-------------------- | :---------- |
| URI                   | v2/requests |
| HTTP method           | PUT         |
| Pagination supported? | NA          |
| Rate limit            | NA          |
| Batch support         | NA          |

# Request Body Parameters

| Parameter      | Data Type | Description                                                                                                                                                                 |
| :------------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **type**\*     | Enum      | The type of request. **Values**: `TRANSACTION` - For transaction request, `CHANGE_IDENTIFIER` - For customer merge request.                                                 |
| **baseType**\* | Enum      | The base type of the request. **Values**: `REGULAR_TXN_ADD` - For transaction request, `MERGE` - For customer merge request.                                                |
| **id**\*       | Long      | The unique identifier of the request, generated during the [POST call to add the request](https://docs.capillarytech.com/reference/add-request-transaction-customer-merge). |
| **status**\*   | Enum      | The status to which the request should be changed. **Values**: `APPROVED`, `REJECTED`, `CUSTOM`.                                                                            |
| **comments**   | String    | Additional comments or notes related to the request. **Example**: `Working`.                                                                                                |

<br />

```json Approve Transaction Request
 '[
  {
    "type": "TRANSACTION",
    "baseType": "REGULAR_TXN_ADD",
    "id": 1031558,
    "status": "APPROVED",
    "comments": "Test"
  }
]'
```
```json Approve Customer Merge Request
	curl --location --request PUT 'https://eu.api.capillarytech.com/v2/requests' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic ZGlTdlYTI0YTYyZTZm' \
--header 'Cookie: _cfuvid=EWw7Wfz8Ouj54ZVF2cPldbObmSaOCCsfBD._qxSWZoM-1744468652196-0.0.1.1-604800000' \
--data '[{
    "type": "CHANGE_IDENTIFIER",
    "baseType": "MERGE",
    "status": "APPROVED", 
    "id": 13030101
}]'
```
```json Approve Customer Merge Request from Parent Org
	curl --location --request PUT 'https://eu.api.capillarytech.com/v2/requests' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic ZGlTdlYTI0YTYyZTZm' \
--header 'Cookie: _cfuvid=EWw7Wfz8Ouj54ZVF2cPldbObmSaOCCsfBD._qxSWZoM-1744468652196-0.0.1.1-604800000' \
--data '[{
    "type": "CHANGE_IDENTIFIER",
    "baseType": "MERGE",
    "status": "APPROVED", 
    "id": 13029191
}]'
```
```json Approve Customer Merge Request from Child Org
	curl --location --request PUT 'https://eu.api.capillarytech.com/v2/requests' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic ZGlTdlYTI0YTYyZTZm' \
--header 'Cookie: _cfuvid=EWw7Wfz8Ouj54ZVF2cPldbObmSaOCCsfBD._qxSWZoM-1744468652196-0.0.1.1-604800000' \
--data '[{
    "type": "CHANGE_IDENTIFIER",
    "baseType": "MERGE",
    "status": "APPROVED", 
    "id": 13029723
}]'
```

<br />

# Response parameters

| **Parameter** | **Data Type** | **Description**                                                                        |
| :------------ | :------------ | :------------------------------------------------------------------------------------- |
| response      | Array         | List of responses for each request processed.                                          |
| -entityId     | Long          | Unique identifier of the request.                                                      |
| -warnings     | Array         | List of warnings encountered for the request, if any.                                  |
| -errors       | Array         | List of errors encountered for the request, if any.                                    |
| -- status     | Boolean       | Indicates whether the API call was successful or not. Success- `True`Failure - `False` |
| -- code       | Integer       | Error code explaining the reason for failure.                                          |
| -- message    | String        | Error message describing the issue.                                                    |
| totalCount    | Integer       | Total number of requests that were processed.                                          |
| failureCount  | Integer       | Number of requests that failed during processing.                                      |

<br />

```json Approved Transaction Reponse
{
    "response": [
        {
            "entityId": 1031558,
            "result": true,
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 0
}
```
```json Approved Customer Merge Response
{
    "response": [
        {
            "entityId": 13030101,
            "result": true,
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 0
}
```
```json Approved Customer Merge Response for Parent Org
{
    "response": [
        {
            "entityId": 13029191,
            "result": true,
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 0
}
```
```json Approval Blocked Response for Customer Merge Update from Child Org
{
    "response": [
        {
            "entityId": 13029723,
            "errors": [
                {
                    "status": false,
                    "code": 9021,
                    "message": "Request Add/Update is blocked for the org"
                }
            ]
        }
    ],
    "totalCount": 1,
    "failureCount": 1
}
```

<br />

# Error Codes

| Error Codes | Description                               | Reason                                          |
| :---------- | :---------------------------------------- | :---------------------------------------------- |
| 9050        | Request not found                         | Incorrect request ID                            |
| 9021        | Request Add/Update is blocked for the org | Request originates from the child organization. |

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