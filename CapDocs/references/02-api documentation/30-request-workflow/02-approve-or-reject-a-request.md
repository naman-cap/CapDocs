---
title: Approve or reject a request
excerpt: This API enables you to approve or reject a request
api:
  file: v1.json
  operationId: approve-or-reject-a-request
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

# API endpoint example

`[https://eucrm.cc.capillarytech.com/api_gateway/v2/request-workflow/CUSTOMER-STATUS-CHANGE`

# Prerequisites

*   Authentication: Basic or OAuth credentials
*   Default access group
*   Checker access (CanCheckRequest) - Contact the access team for the access.

# Resource information

|                        |                                                    |
| :--------------------- | :------------------------------------------------- |
| URI                    | /api\_gateway/v2/request-workflow`\{requestType\}` |
| HTTP Method            | PUT                                                |
| Pagination             | No                                                 |
| Batch support          | No                                                 |
| Rate limit information | None                                               |

# Header information

|                       |                                                                                                                         |
| :-------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| X-CAP-API-AUTH-ORG-ID | Organization ID                                                                                                         |
| X-CAP-UI-AUTH-TOKEN   | A JSON Web Token (JWT) used for intouch user authentication. CanCheckRequest access is required to generate this token. |

# Path parameter

| Parameter   | Value                                                                                                                   |
| :---------- | :---------------------------------------------------------------------------------------------------------------------- |
| requestType | Supported values: CUSTOMER-STATUS-CHANGE, POINTS-REDEMPTION, POINTS-REDEMPTION,GOODWILL-POINTS, EARN-BADGE, ISSUE-BADGE |

# Request body parameters

| Parameter            | Type   | Description                                                                            |
| :------------------- | :----- | :------------------------------------------------------------------------------------- |
| requestId\*          | String | A unique identifier for the request. This is generated during creation of a request.   |
| actionName\*         | String | The name or type of administrative action. For example, adminTask.                     |
| payload\*            | Object | The payload object containing administrative task data.                                |
| -AdminTask-Payload\* | Object | The payload specific to the administrative task.                                       |
| -- actionDecision\*  | Enum   | The decision made on the administrative action. Supported values - approved, rejected. |
| -- actionMessage\*   | String | A message or note accompanying the decision. For example, approving the request.       |

<br />

```
{
   "requestId":"d9df3b65-62a7-11ee-aa6d-0aaee4e533d2",
   "actionName":"AdminTask",
   "payload":{
      "AdminTask-Payload":{
         "actionDecision":"approved",
         "actionMessage":"approving the request"
      }
   }
}

```

<br />

# Response parameters

| Parameter                        | Type    | Description                                                                              |
| :------------------------------- | :------ | :--------------------------------------------------------------------------------------- |
| data                             | Object  | The main data object containing request details.                                         |
| -requestId                       | String  | A unique identifier for the request that was created during the creation of the request. |
| -userId                          | Integer | The ID of the user associated with the request.                                          |
| -userName                        | String  | The username of the user making the request.                                             |
| -requestType                     | String  | The type of request (e.g., customer-status-change).                                      |
| -state                           | String  | The current state of the request (e.g., approved, rejected).                             |
| -startTime                       | String  | The timestamp indicating when the request started.                                       |
| -endTime                         | String  | The timestamp indicating when the request ended.                                         |
| -details                         | Object  | Additional details about the request.                                                    |
| -- IntouchAPITask-Payload        | Object  | Payload specific to the Intouch API task.                                                |
| -- AdminTask-Payload             | Object  | Payload specific to the administrative task.                                             |
| -- ValidateMakerAccess\_Output   | Boolean | The output of the validation process for maker access.                                   |
| -- AdminTask\_Output             | String  | The output of the administrative task.                                                   |
| -- ValidatePayload\_Output       | Boolean | The output of the validation process for payload.                                        |
| -- IntouchAPITask\_Output        | Object  | The output of the Intouch API task.                                                      |
| -- ValidateCheckerAccess\_Output | Boolean | The output of the validation process for checker access.                                 |

<br />

```json Customer identifier change
{
    "data": {
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
                    "identifierValue": "919887766554"
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
                        "/v2/customers/{id}/status"
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
}

```
```json Points redemption
{
    "data": {
        "requestId": "d9df3b65-62a7-11ee-aa6d-0aaee4e533d2",
        "userId": 232134,
        "userName": "tomswayer@tipent.com",
        "requestType": "points-redemption",
        "state": "failed",
        "startTime": "2023-10-04T16:49:14",
        "endTime": "2023-10-04T16:49:58",
        "details": {
            "IntouchAPITask-Payload": {
                "hostname": "<https://crm-nightly-new.cc.capillarytech.com>",
                "path": "/v1.1/points/redeem",
                "method": "POST",
                "pathParams": {},
                "queryParams": {
                    "skip_validation": "true",
                    "format": "json"
                },
                "body": {
                    "root": {
                        "redeem": {
                            "points_redeemed": "100",
                            "customer": {
                                "mobile": "919887766554"
                            },
                            "redemption_time": "2020-04-15 23:01:46",
                            "transaction_number": "numbr892723330323421971280",
                            "notes": "Redemption by SMS",
                            "external_reference_number": "ACR-583523332039150121"
                        }
                    }
                },
                "headers": {
                    "Authorization": "Basic aW5kLjE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=",
                    "content-type": "application/json",
                    "X-CAP-CLIENT-SIGNATURE": "jatin"
                }
            },
            "AdminTask-Payload": {
                "actionDecision": "approved",
                "actionMessage": "approving the points redemption request"
            },
            "ValidateMakerAccess_Output": true,
            "AdminTask_Output": "approved",
            "ValidatePayload_Output": true,
            "IntouchAPITask_Output": {
                "status": 200.0,
                "headers": {
                    "Date": [
                        "Wed, 04 Oct 2023 11:19:58 GMT"
                    ],
                    "Content-Type": [
                        "application/json;charset=UTF-8"
                    ],
                    "Content-Length": [
                        "640"
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
                        "/v1.1/points/redeem"
                    ],
                    "org_id": [
                        "51250"
                    ],
                    "status_code": [
                        "744"
                    ],
                    "success": [
                        "0"
                    ],
                    "fail": [
                        "1"
                    ],
                    "X-CAP-REQUEST-ID": [
                        "73af50154417526c8efea43cba314c0d"
                    ],
                    "till": [
                        "ind.1"
                    ],
                    "X-Cap-RequestID": [
                        "73af50154417526c8efea43cba314c0d"
                    ],
                    "X-Frame-Options": [
                        "SAMEORIGIN",
                        "SAMEORIGIN"
                    ]
                },
                "body": {
                    "response": {
                        "status": {
                            "success": "false",
                            "code": 500.0,
                            "message": "All requests have failed due to errors"
                        },
                        "responses": {
                            "points": {
                                "mobile": "919887766554",
                                "email": "tomswayer@mail.com",
                                "external_id": "XYPZ0063",
                                "user_id": "382332518",
                                "points_redeemed": "100",
                                "redemption_purpose": "",
                                "redeemed_value": 0.0,
                                "side_effects": {
                                    "effect": []
                                },
                                "item_status": {
                                    "success": "false",
                                    "code": 744.0,
                                    "message": "Reference number already exists"
                                }
                            }
                        }
                    }
                }
            },
            "ValidateCheckerAccess_Output": true
        }
    }
}

```
```json Issue goodwilll
{
    "data": {
        "requestId": "ffcf19fb-a3fd-11ee-9fa7-4650f67465b8",
        "userId": 232134,
        "userName": "tomswayer@tipent.com",
        "requestType": "goodwill-points",
        "state": "approved",
        "startTime": "2023-12-26T20:19:40",
        "endTime": "2023-12-26T20:20:00",
        "details": {
            "IntouchAPITask-Payload": {
                "hostname": "http://internal-intouch-api.default:1900",
                "path": "/internal/goodwill/",
                "method": "POST",
                "pathParams": {},
                "queryParams": {},
                "body": {
                    "referenceId": "ref_id_1299314173",
                    "reason": "reason",
                    "baseType": "POINTS",
                    "programId": 2739,
                    "awardingTillId": 50682616,
                    "earningEntityType": "CUSTOMER",
                    "earningEntityId": 382332518,
                    "points": 20,
                    "source": "API"
                },
                "headers": {
                    "Authorization": "Basic aW5kLjE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=",
                    "content-type": "application/json",
                    "X-CAP-API-AUTH-ORG-ID": "51250"
                }
            },
            "AdminTask-Payload": {
                "actionDecision": "approved",
                "actionMessage": "approving the goodwill points request"
            },
            "ValidateMakerAccess_Output": true,
            "AdminTask_Output": "approved",
            "IntouchAPITask_Output": {
                "status": 201,
                "headers": {
                    "Date": [
                        "Tue, 26 Dec 2023 14:49:59 GMT"
                    ],
                    "X-Application-Context": [
                        "application:1900"
                    ],
                    "Content-Type": [
                        "application/json; charset=UTF-8"
                    ],
                    "Host": [
                        "internal-intouch-api-a-6667977874-jlzm4"
                    ],
                    "uri_path": [
                        "/internal/goodwill"
                    ],
                    "org_id": [
                        "51250"
                    ],
                    "status_code": [
                        ""
                    ],
                    "success": [
                        "0"
                    ],
                    "fail": [
                        "0"
                    ],
                    "X-CAP-REQUEST-ID": [
                        "13451b8b-a22c-4938-aeda-f62318854762"
                    ],
                    "till": [
                        "ind.1"
                    ],
                    "X-Cap-RequestID": [
                        "13451b8b-a22c-4938-aeda-f62318854762"
                    ],
                    "Content-Length": [
                        "30"
                    ],
                    "Connection": [
                        "close"
                    ],
                    "Server": [
                        "Jetty(9.2.14.v20151106)"
                    ]
                },
                "body": {
                    "createdId": 38,
                    "warnings": []
                }
            },
            "ValidatePayload_Output": true,
            "ValidateCheckerAccess_Output": true
        }
    }
}
```
```json Earn badge
{
    "data": {
        "requestId": "ef1bc378-a4d4-11ee-b2a9-462516199fc5",
        "userId": 232134,
        "userName": "tomswayer@tipent.com",
        "requestType": "earn-badge",
        "state": "approved",
        "startTime": "2023-12-27T21:58:14",
        "endTime": "2023-12-27T21:58:21",
        "details": {
            "IntouchAPITask-Payload": {
                "hostname": "https://crm-nightly-new.cc.capillarytech.com",
                "path": "/api_gateway/v1/badges/customer/earn",
                "method": "POST",
                "pathParams": {},
                "body": {
                    "triggeredBy": {
                        "ownerType": "Goodwill_Module",
                        "referenceId": "123"
                    },
                    "customerId": 382477526,
                    "requestId": "0f932928-9878-441c-a78e-c1d32235534q",
                    "badgeMetaId": "658c50761c4c2b12732c3ec6"
                },
                "headers": {
                    "Authorization": "Basic YWIxMjQ6MjVkNTVhZDI4M2FhNDAwYWY0NjRjNzZkNzEzYzA3YWQ=",
                    "content-type": "application/json"
                }
            },
            "AdminTask-Payload": {
                "actionDecision": "approved",
                "actionMessage": "approving the earn badge request"
            },
            "ValidateMakerAccess_Output": true,
            "AdminTask_Output": "approved",
            "ValidatePayload_Output": true,
            "IntouchAPITask_Output": {
                "status": 200,
                "headers": {
                    "Date": [
                        "Wed, 27 Dec 2023 16:28:21 GMT"
                    ],
                    "Content-Type": [
                        "application/json"
                    ],
                    "Transfer-Encoding": [
                        "chunked"
                    ],
                    "Connection": [
                        "keep-alive"
                    ],
                    "X-CAP-REQUEST-ID": [
                        "0afcf403bd41fa4a8502ac6d4e6f476d"
                    ],
                    "X-Frame-Options": [
                        "SAMEORIGIN",
                        "SAMEORIGIN"
                    ]
                },
                "body": {
                    "data": {
                        "badgeMetaId": "658c50761c4c2b12732c3ec6",
                        "customerId": 382477526,
                        "earnedBadgeId": "658c50a51c4c2b12732c3ec7",
                        "expiresOn": 1.704904101782875E9
                    },
                    "errors": [],
                    "warnings": []
                }
            },
            "ValidateCheckerAccess_Output": true
        }
    }
}
```
```json Issue badge (Enrol customers to badge)
{
    "data": {
        "requestId": "23e06c3e-a5c3-11ee-9a63-9ab214749657",
        "userId": 232134,
        "userName": "tomswayer@tipent.com",
        "requestType": "issue-badge",
        "state": "approved",
        "startTime": "2023-12-29T02:23:23",
        "endTime": "2023-12-29T02:23:39",
        "details": {
            "IntouchAPITask-Payload": {
                "hostname": "https://crm-nightly-new.cc.capillarytech.com",
                "path": "/api_gateway/v1/badges/badgeMeta/customer/issueBulk",
                "method": "POST",
                "pathParams": {},
                "body": {
                    "triggeredBy": {
                        "ownerType": "Goodwill_Module",
                        "referenceId": "134"
                    },
                    "customers": [
                        113460811
                    ],
                    "requestId": "e7requestd62c5ec5d115a2859228cefd9ee8cgh",
                    "badgeMetaId": "658de01c823d1b70aabcfaae"
                },
                "headers": {
                    "Authorization": "Basic YWIxMjQ6MjVkNTVhZDI4M2FhNDAwYWY0NjRjNzZkNzEzYzA3YWQ=",
                    "content-type": "application/json"
                }
            },
            "AdminTask-Payload": {
                "actionDecision": "approved",
                "actionMessage": "approving the issue badge request"
            },
            "ValidateMakerAccess_Output": true,
            "AdminTask_Output": "approved",
            "ValidatePayload_Output": true,
            "IntouchAPITask_Output": {
                "status": 200,
                "headers": {
                    "Date": [
                        "Thu, 28 Dec 2023 20:53:38 GMT"
                    ],
                    "Content-Type": [
                        "application/json"
                    ],
                    "Transfer-Encoding": [
                        "chunked"
                    ],
                    "Connection": [
                        "keep-alive"
                    ],
                    "X-CAP-REQUEST-ID": [
                        "bf8189d95bdcb0696baee686f953ae75"
                    ],
                    "X-Frame-Options": [
                        "SAMEORIGIN",
                        "SAMEORIGIN"
                    ]
                },
                "body": {
                    "data": {
                        "badgeMetaId": "658de01c823d1b70aabcfaae",
                        "triggeredBy": {
                            "ownerType": "Goodwill_Module",
                            "referenceId": "134"
                        },
                        "expiresOn": 1.703883200896E9,
                        "issuedBadges": [
                            {
                                "customerId": 113460811,
                                "issuedId": "658de052823d1b70aabcfaaf"
                            }
                        ],
                        "requestId": "e7requestd62c5ec5d115a2859228cefd9ee8cgh"
                    },
                    "errors": [],
                    "warnings": []
                }
            },
            "ValidateCheckerAccess_Output": true
        }
    }
}
```
```json Retro transaction
{
    "data": {
        "requestId": "48e1fabf-0570-11ef-9651-c27f077a65a1",
        "userId": 232134,
        "userName": "tomswayer@tipent.com",
        "requestType": "retro-transaction",
        "state": "approved",
        "startTime": "2024-04-28T20:32:08",
        "endTime": "2024-04-28T20:32:12",
        "details": {
            "IntouchAPITask-Payload": {
                "hostname": "https://crm-nightly-new.cc.capillarytech.com",
                "path": "/v2/transactions/retro",
                "method": "PUT",
                "pathParams": {},
                "queryParams": {},
                "body": {
                    "oldType": "NOT_INTERESTED",
                    "newType": "REGULAR",
                    "transactionId": 7652290,
                    "customerId": 382553857,
                    "extendedFields": {
                        "checkout_date": "2021-12-27T18:38:43+08:00"
                    },
                    "customFields": {
                        "pankaj3": "singh3"
                    },
                    "notes": "Test Transaction"
                },
                "headers": {
                    "Authorization": "Basic Y20uMjoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                    "content-type": "application/json",
                    "X-CAP-CLIENT-SIGNATURE": "pankaj"
                }
            },
            "ValidateMakerAccess_Output": true,
            "ValidatePayload_Output": true,
            "IntouchAPITask_Output": {
                "status": 201,
                "headers": {
                    "Date": [
                        "Sun, 28 Apr 2024 15:02:12 GMT"
                    ],
                    "Content-Type": [
                        "application/json; charset=UTF-8"
                    ],
                    "Content-Length": [
                        "50"
                    ],
                    "Connection": [
                        "keep-alive"
                    ],
                    "X-Application-Context": [
                        "application:1900"
                    ],
                    "Host": [
                        "intouch-api-a-5f59d44df9-gz2n8"
                    ],
                    "uri_path": [
                        "/v2/transactions/retro"
                    ],
                    "org_id": [
                        "0"
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
                    "line_items_count": [
                        "1"
                    ],
                    "X-CAP-REQUEST-ID": [
                        "6c622182f218feb8ce374a3971331521"
                    ],
                    "till": [
                        "cm.2"
                    ],
                    "X-Cap-RequestID": [
                        "6c622182f218feb8ce374a3971331521"
                    ],
                    "X-Frame-Options": [
                        "SAMEORIGIN",
                        "SAMEORIGIN"
                    ]
                },
                "body": {
                    "createdId": 2151569902,
                    "warnings": [],
                    "errors": []
                }
            }
        }
    }
}
```