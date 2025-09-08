---
title: Get details of all requests
excerpt: This API enables you to retrieve details of the all requests.
api:
  file: v1.json
  operationId: get-all-requests
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

<br />

# API endpoint example

`https://crm-nightly-new.cc.capillarytech.com/api_gateway/v2/request-workflow/requests?userId=232134&sortBy=startDate&sortOrder=asc&conceptId=&zoneId=&storeId=&startDate=2023-10-03&endDate=&states=AdminTask,failed,approved&limit=5&PageNo=&requestType=CUSTOMER-STATUS-CHANGE`

# Prerequisites

*   Authentication: Basic or OAuth credentials
*   Default access group

# Resource information

|                        |                                            |
| :--------------------- | :----------------------------------------- |
| URI                    | /api\_gateway/v2/request-workflow/requests |
| HTTP Method            | GET                                        |
| Pagination             | Yes                                        |
| Batch support          | No                                         |
| Rate limit information | None                                       |

<br />

# Request query parameters

| Parameter   | Type    | Description                                                                                                                                             |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId      | Integer | User ID of the customer to whom the request was created. For example, mobile number, external ID, and email.                                            |
| sortBy      | String  | Specifies the field by which results are sorted. Supported values -  `startDate `and `endDate`                                                          |
| sortOrder   | Enum    | Specifies the sorting order (ascending/descending). The supported values are asc and desc.                                                              |
| conceptId   | String  | Filters requests by concept ID.                                                                                                                         |
| zoneId      | String  | Filters requests by zone ID.                                                                                                                            |
| storeId     | String  | Filters requests by store ID.                                                                                                                           |
| startDate   | String  | Specifies the start date for the date range (YYYY-MM-DD format).                                                                                        |
| endDate     | String  | Specifies the end date for the date range (YYYY-MM-DD format).                                                                                          |
| states      | Enum    | Filters requests by their states. The supported values are approved and rejected.                                                                       |
| limit       | Integer | Specifies the maximum number of results to return.                                                                                                      |
| PageNo      | Integer | Specifies the page number for pagination.                                                                                                               |
| requestType | Enum    | Filters requests by their type. Supported values -CUSTOMER-STATUS-CHANGE, POINTS-REDEMPTION, POINTS-REDEMPTION,GOODWILL-POINTS, EARN-BADGE, ISSUE-BADGE |
| tillId      | String  | Filters requests by till ID.                                                                                                                            |

# Response parameters

| Parameter                     | Type    | Description                                                                                                                                                                                      |
| ----------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| requestId                     | String  | Unique identifier for the request.                                                                                                                                                               |
| userId                        | Integer | ID of the user associated with the request.                                                                                                                                                      |
| userName                      | String  | Username of the user associated with the request.                                                                                                                                                |
| requestType                   | String  | Type of the request (e.g., customer-status-change).                                                                                                                                              |
| state                         | String  | Current state/status of the request (e.g., approved, AdminTask).                                                                                                                                 |
| startTime                     | String  | Timestamp indicating the start time of the request.                                                                                                                                              |
| endTime                       | String  | Timestamp indicating the end time of the request.                                                                                                                                                |
| IntouchAPITask-Payload        | Object  | Payload containing details of the Intouch API task.                                                                                                                                              |
| ValidateMakerAccess\_Output   | Boolean | Output of validating maker access.                                                                                                                                                               |
| ValidatePayload\_Output       | Boolean | Output of validating payload.                                                                                                                                                                    |
| AdminTask-Payload             | Object  | Payload containing details of the admin task.                                                                                                                                                    |
| AdminTask\_Output             | String  | Output of the admin task.                                                                                                                                                                        |
| IntouchAPITask\_Output        | Object  | Output of the Intouch API task.                                                                                                                                                                  |
| ValidateCheckerAccess\_Output | Boolean | Output of validating checker access.                                                                                                                                                             |
| pagination                    | Object  | Information about pagination for the retrieved requests. Total elements display the total number of requests retrieved. Number of elements display the number of elements in the displayed page. |

```json
{
    "data": [
        {
            "requestId": "e7ee80b5-62a4-11ee-aa6d-0aaee4e533d2",
            "userId": 232134,
            "userName": "tomswayer@tipent.com",
            "requestType": "customer-status-change",
            "state": "AdminTask",
            "startTime": "2023-10-04T16:28:10",
            "endTime": null,
            "details": {
                "IntouchAPITask-Payload": {
                    "hostname": "<https://crm-nightly-new.cc.capillarytech.com>",
                    "path": "/v2/customers/lookup/status",
                    "method": "PUT",
                    "pathParams": {},
                    "queryParams": {
                        "source": "INSTORE",
                        "accountId": "",
                        "use_async": "false",
                        "identifierName": "mobile",
                        "identifierValue": "919780375690"
                    },
                    "body": {
                        "reason": "testing",
                        "label": "Active"
                    },
                    "headers": {
                        "Authorization": "Basic cHVuLjAxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw",
                        "content-type": "application/json"
                    }
                },
                "ValidateMakerAccess_Output": true,
                "ValidatePayload_Output": true
            }
        },
        {
            "requestId": "08c70313-62a5-11ee-aa6d-0aaee4e533d2",
            "userId": 232134,
            "userName": "tomswayer@tipent.com",
            "requestType": "customer-status-change",
            "state": "approved",
            "startTime": "2023-10-04T16:29:05",
            "endTime": "2023-10-04T16:29:23",
            "details": {
                "IntouchAPITask-Payload": {
                    "hostname": "<https://crm-nightly-new.cc.capillarytech.com>",
                    "path": "/v2/customers/lookup/status",
                    "method": "PUT",
                    "pathParams": {},
                    "queryParams": {
                        "source": "INSTORE",
                        "accountId": "",
                        "use_async": "false",
                        "identifierName": "mobile",
                        "identifierValue": "919780375690"
                    },
                    "body": {
                        "reason": "testing",
                        "label": "Active"
                    },
                    "headers": {
                        "Authorization": "Basic cHVuLjAxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw",
                        "content-type": "application/json"
                    }
                },
                "AdminTask-Payload": {
                    "actionDecision": "approved",
                    "actionMessage": "approving the request"
                },
                "ValidateMakerAccess_Output": true,
                "AdminTask_Output": "approved",
                "ValidatePayload_Output": true,
                "IntouchAPITask_Output": {
                    "status": 200.0,
                    "headers": {
                        "Date": [
                            "Wed, 04 Oct 2023 10:59:19 GMT"
                        ],
                        "Content-Type": [
                            "application/json; charset=UTF-8"
                        ],
                        "Content-Length": [
                            "15"
                        ],
                        "Connection": [
                            "keep-alive"
                        ],
                        "X-Application-Context": [
                            "application:1900"
                        ],
                        "Host": [
                            "intouch-api-64f99fb8b7-lkzjb"
                        ],
                        "uri_path": [
                            "/v2/customers\{id\}/status"
                        ],
                        "org_id": [
                            "51251"
                        ],
                        "status_code": [
                            "200"
                        ],
                        "success": [
                            "1"
                        ],
                        "fail": [
                            "0"
                        ],
                        "X-CAP-REQUEST-ID": [
                            "a63f9c30427bd4ce9843d599df00cef7"
                        ],
                        "till": [
                            "pun.01"
                        ],
                        "X-Cap-RequestID": [
                            "a63f9c30427bd4ce9843d599df00cef7"
                        ],
                        "X-Frame-Options": [
                            "SAMEORIGIN",
                            "SAMEORIGIN"
                        ]
                    },
                    "body": {
                        "warnings": []
                    }
                },
                "ValidateCheckerAccess_Output": true
            }
        },
        {
            "requestId": "113cff87-62a5-11ee-aa6d-0aaee4e533d2",
            "userId": 232134,
            "userName": "tomswayer@tipent.com",
            "requestType": "customer-status-change",
            "state": "approved",
            "startTime": "2023-10-04T16:29:19",
            "endTime": "2023-10-04T16:42:25",
            "details": {
                "IntouchAPITask-Payload": {
                    "hostname": "<https://crm-nightly-new.cc.capillarytech.com>",
                    "path": "/v2/customers/lookup/status",
                    "method": "PUT",
                    "pathParams": {},
                    "queryParams": {
                        "source": "INSTORE",
                        "accountId": "",
                        "use_async": "false",
                        "identifierName": "mobile",
                        "identifierValue": "919780375690"
                    },
                    "body": {
                        "reason": "testing",
                        "label": "Suspended"
                    },
                    "headers": {
                        "Authorization": "Basic cHVuLjAxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw",
                        "content-type": "application/json"
                    }
                },
                "AdminTask-Payload": {
                    "actionDecision": "approved",
                    "actionMessage": "approving the request"
                },
                "ValidateMakerAccess_Output": true,
                "AdminTask_Output": "approved",
                "ValidatePayload_Output": true,
                "IntouchAPITask_Output": {
                    "status": 200.0,
                    "headers": {
                        "Date": [
                            "Wed, 04 Oct 2023 11:12:25 GMT"
                        ],
                        "Content-Type": [
                            "application/json; charset=UTF-8"
                        ],
                        "Content-Length": [
                            "15"
                        ],
                        "Connection": [
                            "keep-alive"
                        ],
                        "X-Application-Context": [
                            "application:1900"
                        ],
                        "Host": [
                            "intouch-api-64f99fb8b7-lkzjb"
                        ],
                        "uri_path": [
                            "/v2/customers\{id\}/status"
                        ],
                        "org_id": [
                            "51251"
                        ],
                        "status_code": [
                            "200"
                        ],
                        "success": [
                            "1"
                        ],
                        "fail": [
                            "0"
                        ],
                        "X-CAP-REQUEST-ID": [
                            "b7131d8f40441dbefd65d24a0c56fe93"
                        ],
                        "till": [
                            "pun.01"
                        ],
                        "X-Cap-RequestID": [
                            "b7131d8f40441dbefd65d24a0c56fe93"
                        ],
                        "X-Frame-Options": [
                            "SAMEORIGIN",
                            "SAMEORIGIN"
                        ]
                    },
                    "body": {
                        "warnings": []
                    }
                },
                "ValidateCheckerAccess_Output": true
            }
        }
    ],
    "pagination": {
        "totalElements": 3,
        "totalPages": 1,
        "numberOfElements": 3,
        "number": 0
    }
}

```