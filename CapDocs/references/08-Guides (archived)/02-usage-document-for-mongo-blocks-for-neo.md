---
title: Mongo Block
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Introduction

The Mongo blocks provide MongoDB functionalities for the Neo UI, enabling the UI to directly get, insert, or update data. These blocks take input from either the Mongo block or the parent block, perform the required function, and then output the result to the next block. This document outlines the usage and purpose of these blocks.

Currently, there are two Mongo blocks:

* **Get block**:  The Get block executes a user-specified query against MongoDB and fetches data based on the query.
* **Put block**: The Put block inserts, updates, or upserts data into the database based on the specified query and query key.

# Mongo Blocks

There are two Mongo blocks currently available, the Get and Put blocks. 

## Get block

The Mongo GET block executes a user-specified query against MongoDB. It retrieves data based on the query. The fetched data is then passed as output to the next block in the dataflow.

The following are the fields in the Mongo Get block:

* **Mongo Collection Name\*** - Specifies the collection name.
* **Query\*** - Specifies the selection criteria for the lookup. If left blank, it will result in an error stating 'Invalid input query'.\
  **Syntax** - \{ "`fieldName": "fieldValue`" }\
  **Note**: DAO functions and expression handling are supported for the query.
* **Sort** - Specifies the fields for sorting. This parameter must include valid field and value pairs.
* **Limit** - Specifies the maximum number of elements to return. 

## Put block

The Put block allows you to perform data operations such as INSERT, UPDATE, or UPSERT directly to the database based on a specified query and query key. A parent or Mongo block provides input, processes the data, and then sends the result to the next block. This block is essential for modifying or adding new data entries within MongoDB during dataflow execution in Neo UI.

The following are the fields in the Mongo Put block:

* **Mongo Collection Name\*** - Specifies the collection name.
* **Mode\*** - Specifies if the processor should insert, update or upsert the content.
* **Query Key** - Specifies the key name used to build the update query criteria. It is applicable only for update mode and helps identify the document to update.
* **Query** - Lets you define a complete MongoDB query for the lookup operation, which performs an update or upsert. The update query in MongoDB specifies how the document should change.\
  **Syntax** : \{ $set: \{ "fieldName": "fieldValue" } }\
  **Note**: DAO functions and expression handling are supported for the query.

# Block Query Input

The Get and Put blocks examine the input and override the block query if a query parameter is present. When the input contains a query parameter, it replaces the block query.

**Syntax for query input**

* Get Block\
  getMongoSpecs?. query:\{ "fieldName": "fieldValue" }
* Put block\
  putMongoSpecs?. query:\{ "fieldName": "fieldValue" }

Here is an example of a response from a Get block fetching rules from the database with a specified limit.

```json
[
    {
        "_id": "66225edcd532f012c077db44",
        "refId": "93ce56c2-c0ee-4874-995e-ae59aadab62c",
        "namespace": 10,
        "__v": 0,
        "active": true,
        "blocks": [
            {
                "name": "handleValidateFailures",
                "type": "Script",
                "relations": [],
                "config": {
                    "script": "import dao from \"neo/dao\";\nimport logger from \"neo/logger\";\n\nconst {\n  getIn,\n  getOut\n} = dao;\n\nconst randString = () => {\n  return `$genRand(8)-$genRand(4)-$genRand(4)-$genRand(4)-$genRand(4)$genRand(4)$genRand(4)`\n};\n\nconst genRand = (len) => {\n  return Math.random().toString(36).substring(2, len + 2);\n};\n\nconst failedResponse = (developerMessage, userMessage, responseCode, httpStatusCode, error, requestId) => {\n  return {\n    \"isError\": true,\n    \"data\": null,\n    \"developerMessage\": developerMessage,\n    \"userMessage\": userMessage,\n    \"moreInfo\": null,\n    \"responseCode\": responseCode,\n    \"httpStatusCode\": httpStatusCode,\n    \"errors\": error,\n    \"requestId\": requestId\n  }\n};\n\nconst validateErrorResponse = (object, key, errorMessage, value, isVisible, isError, developerMessages, userMessages, responseCode, httpStatusCode) => {\n  const messageParams = {\n    \"object\": object,\n    \"key\": key,\n    \"value\": value,\n    \"isVisible\": isVisible,\n    \"errorMessage\": errorMessage\n  }\n  const resp = {\n    \"isError\": true,\n    \"data\": null,\n    \"developerMessage\": developerMessages,\n    \"userMessage\": userMessages,\n    \"moreInfo\": null,\n    \"responseCode\": responseCode,\n    \"httpStatusCode\": httpStatusCode,\n    \"errors\": object === null ? null: messageParams,\n    \"requestId\": randString()\n  }\n  return resp\n};\n\n\nconst script = {\n\n  execute: () => {\n    const resp = getIn();\n    const message = resp?.error?.validate[0]?.message;\n    let message2 = \"\";\n    if (resp?.error?.validate[1]) {\n      message2 = resp?.error?.validate[1]?.message;\n    }\n    let validation = {\n      isError: false\n    };\n    // let validation = resp;\n    const property,\n      keyword = message.split(\".\");\n\n    if (message === \"fromMemberEmail.isNotEmpty\") {\n      validation = failedResponse(\"Invalid member or card search criteria provided.\", \"Invalid member or card search criteria provided.\", 10507, 400, null, randString());\n    }\n    if (message === \"toMemberEmail.isNotEmpty\") {\n      validation = failedResponse(\"Invalid member or card search criteria provided.\", \"Invalid member or card search criteria provided.\", 10507, 400, null, randString());\n    }\n    if (message === \"fromMemberEmail.format\") {\n      validation = validateErrorResponse('fromMember', 'fromMember.Email', \"Email is invalid.\", getOut()?.queryParams[\"fromMember.email\"], true, true, null, \"Sorry, there was a problem. Please see errors.\", 10501, 400);\n    }\n    if (message === \"toMemberEmail.format\") {\n      validation = validateErrorResponse('toMember', 'toMember.Email', \"Email is invalid.\", getOut()?.queryParams[\"toMember.email\"], true, true, null, \"Sorry, there was a problem. Please see errors.\", 10501, 400);\n    }\n    if (message === \"fromMemberEmail.isNotEmpty\" && message2 === \"toMemberEmail.isNotEmpty\") {\n      validation = failedResponse(\"No search values provided\", \"Invalid member or card search criteria provided.\", 10507, 400, null, randString());\n    }\n    if (message === \"body.minProperties\") {\n      validation = failedResponse(\"Expected request body not provided.\", \"The application has encountered an error. Please try again later.\", 10400, 400, null, randString());\n    }\n    if (message === \"transferCards.type\" || message === \"transferRewards.type\" || message === \"mergeTiers.type\") {\n      validation = validateErrorResponse('', '', \"The supplied value is invalid.\", '', true, true, null, \"Sorry, there was a problem. Please see errors.\", 10501, 400);\n    }\n\n    return {\n      body: validation,\n      status: 400\n    }\n  }\n}\n\nexport {\n  script as default\n  }"
                },
                "source": false
            },
            {
                "name": "setdata",
                "type": "Script",
                "relations": [
                    {
                        "name": "3_Q742i6E0",
                        "to": "getMemberRequestByEmail",
                        "expression": "*",
                        "status": []
                    }
                ],
                "config": {
                    "script": "import dao from \"neo/dao\";\nimport logger from \"neo/logger\";\n\nconst {\n  getBody,\n  getEffectiveHeaders,\n  getIn,\n  getOut,\n  getApiRequest\n} = dao;\n\nconst script = {\n\n  execute: () => {\n\n    return {\n      headers: getEffectiveHeaders(),\n      queryParams: {\n        \"identifierName\": \"email\",\n        \"identifierValue\": getApiRequest()?.queryParams[\"fromMember.email\"]\n      }\n    };\n\n  }\n}\n\nexport {\n  script as default\n  }"
                },
                "source": false
            },
            {
                "name": "getMemberRequestByEmail",
                "type": "ApiRequest",
                "relations": [
                    {
                        "name": "3_Q742i6E0",
                        "to": "ThrowError",
                        "expression": "(getBody() && getBody().errors && getBody().errors.length > 0 && getBody().errors[0].code == 8015)",
                        "status": []
                    },
                    {
                        "expression": "(getBody() && getBody().warnings && getBody().warnings.length > 0 && getBody().warnings[0].code == 8069)",
                        "name": "_432Wx1dgW",
                        "to": "ThrowError1",
                        "status": []
                    },
                    {
                        "expression": "!(getBody() && getBody().errors && getBody().errors.length > 0 && getBody() && getBody().warnings && getBody().warnings.length > 0)",
                        "name": "XqulDEBiiI",
                        "to": "setData1",
                        "status": []
                    }
                ],
                "config": {
                    "method": "GET",
                    "url": "https://north-america.api.capillarytech.com/v2/customers/lookup/customerDetails",
                    "queryParams": {
                        "source": "INSTORE",
                        "embed": "POINTS,CUSTOMERSTATUS"
                    }
                },
                "source": false
            },
            {
                "name": "ThrowError",
                "type": "Script",
                "relations": [],
                "config": {
                    "script": "import dao from \"neo/dao\";\nimport logger from \"neo/logger\";\n\nconst {\n  getIn\n} = dao;\n\nconst randString = () => {\n  return `$genRand(8)-$genRand(4)-$genRand(4)-$genRand(4)-$genRand(4)$genRand(4)$genRand(4)`\n}\n\nconst genRand = (len) => {\n  return Math.random().toString(36).substring(2, len + 2);\n}\n\nconst script = {\n\n  execute: () => {\n\n    return {\n      body:{\n      \"isError\": true,\n      \"data\": null,\n      \"developerMessage\": \"Your search did not return any members.\",\n      \"userMessage\": \"Your search did not return any members.\",\n      \"moreInfo\": null,\n      \"responseCode\": 10504,\n      \"httpStatusCode\": 404,\n      \"errors\": null,\n      \"requestId\": randString()\n      },\n      status:404\n    };\n\n  }\n}\n\nexport {\n  script as default\n  }"
                },
                "source": false
            },
            {
                "name": "setData1",
                "type": "Script",
                "relations": [
                    {
                        "name": "BdMDf3FLBI",
                        "to": "getMemberByEmailService",
                        "expression": "*",
                        "status": []
                    }
                ],
                "config": {
                    "script": "import dao from \"neo/dao\";\nimport logger from \"neo/logger\";\n\nconst {\n  getBody,\n  getEffectiveHeaders,\n  getIn,\n  getOut,\n  getApiRequest\n} = dao;\n\nconst script = {\n\n  execute: () => {\n\n    return {\n      body: {\n        body: getBody(),\n        body2: getIn()\n      },\n      headers: getEffectiveHeaders(),\n      queryParams: {\n        \"identifierName\": \"email\",\n        \"identifierValue\": getApiRequest()?.queryParams[\"toMember.email\"]\n      }\n    };\n\n  }\n}\n\nexport {\n  script as default\n  }"
                },
                "source": false
            },
            {
                "name": "getMemberByEmailService",
                "type": "ApiRequest",
                "relations": [
                    {
                        "name": "BdMDf3FLBI",
                        "to": "throwError2",
                        "expression": "(getBody() && getBody().errors && getBody().errors.length > 0 && getBody().errors[0].code == 8015)",
                        "status": []
                    },
                    {
                        "expression": "(getBody() && getBody().warnings && getBody().warnings.length > 0 && getBody().warnings[0].code == 8069)",
                        "name": "9Nq0XMm2kI",
                        "to": "throwError3",
                        "status": []
                    },
                    {
                        "expression": "!(getBody() && getBody().errors && getBody().errors.length > 0 && getBody() && getBody().warnings && getBody().warnings.length > 0)",
                        "name": "e4IFESNSoI",
                        "to": "setData2",
                        "status": []
                    }
                ],
                "config": {
                    "method": "GET",
                    "url": "https://north-america.api.capillarytech.com/v2/customers/lookup/customerDetails",
                    "queryParams": {
                        "source": "INSTORE",
                        "embed": "POINTS,CUSTOMERSTATUS"
                    }
                },
                "source": false
            },
            {
                "name": "throwError3",
                "type": "Script",
                "relations": [],
                "config": {
                    "script": "import dao from \"neo/dao\";\nimport logger from \"neo/logger\";\n\nconst {\n  getIn\n} = dao;\n\nconst randString = () => {\n  return `$genRand(8)-$genRand(4)-$genRand(4)-$genRand(4)-$genRand(4)$genRand(4)$genRand(4)`\n}\n\nconst genRand = (len: number) => {\n  return Math.random().toString(36).substring(2, len + 2);\n}\n\nconst script = {\n\n  execute: () => {\n\n    const fromMember = getOut()?.queryParams[\"fromMember.email\"];\n\n    return {\n      \"isError\": true,\n      \"data\": null,\n      \"developerMessage\": `From-member with email $fromMember is in an invalid status.`,\n      \"userMessage\": `From-member with email $fromMember is in an invalid status.`,\n      \"moreInfo\": null,\n      \"responseCode\": 12122,\n      \"httpStatusCode\": 404,\n      \"errors\": error,\n      \"requestId\": randString()\n    };\n\n  }\n}\n\nexport {\n  script as default\n  }"
                },
                "source": false
            },
            {
                "name": "throwError2",
                "type": "Script",
                "relations": [],
                "config": {
                    "script": "import dao from \"neo/dao\";\nimport logger from \"neo/logger\";\n\nconst {\n  getIn\n} = dao;\n\nconst randString = () => {\n  return `$genRand(8)-$genRand(4)-$genRand(4)-$genRand(4)-$genRand(4)$genRand(4)$genRand(4)`\n}\n\nconst genRand = (len: number) => {\n  return Math.random().toString(36).substring(2, len + 2);\n}\n\nconst script = {\n\n  execute: () => {\n\n    return {\n      \"isError\": true,\n      \"data\": null,\n      \"developerMessage\": \"Your search did not return any members.\",\n      \"userMessage\": \"Your search did not return any members.\",\n      \"moreInfo\": null,\n      \"responseCode\": 10504,\n      \"httpStatusCode\": 404,\n      \"errors\": error,\n      \"requestId\": randString()\n    };\n\n  }\n}\n\nexport {\n  script as default\n  }"
                },
                "source": false
            },
            {
                "name": "ThrowError1",
                "type": "Script",
                "relations": [],
                "config": {
                    "script": "import dao from \"neo/dao\";\nimport logger from \"neo/logger\";\n\nconst {\n  getIn,\n  getApiRequest\n} = dao;\n\nconst randString = () => {\n  return `$genRand(8)-$genRand(4)-$genRand(4)-$genRand(4)-$genRand(4)$genRand(4)$genRand(4)`\n}\n\nconst genRand = (len) => {\n  return Math.random().toString(36).substring(2, len + 2);\n}\n\nconst script = {\n\n  execute: () => {\n\n    const fromMember = getApiRequest()?.queryParams[\"fromMember.email\"];\n\n    return {\n      body:{\n      \"isError\": true,\n      \"data\": null,\n      \"developerMessage\": `$fromMember`,\n      \"userMessage\": `From-member with email $fromMember is in an invalid status.`,\n      \"moreInfo\": null,\n      \"responseCode\": 12122,\n      \"httpStatusCode\": 404,\n      \"errors\": null,\n      \"requestId\": randString()\n      },\n      status:404\n      };\n\n  }\n}\n\nexport {\n  script as default\n  }"
                },
                "source": false
            },
            {
                "name": "setData2",
                "type": "Script",
                "relations": [
                    {
                        "name": "efInSVVYXw",
                        "to": "mergeMember",
                        "expression": "*",
                        "status": []
                    }
                ],
                "config": {
                    "script": "import dao from \"neo/dao\";\nimport logger from \"neo/logger\";\n\nconst {\n  getBody,\n  getEffectiveHeaders,\n  getIn,\n  getOut,\n  getApiRequest\n} = dao;\n\nconst script = {\n\n  execute: () => {\n\n    const fromMember = getApiRequest()?.queryParams[\"fromMember.email\"];\n    const toMember = getApiRequest()?.queryParams[\"toMember.email\"];\n\n    return {\n      body: {\n        \"root\": {\n          \"request\": {\n            \"customer\": {\n              \"email\": fromMember\n            },\n            \"comments\": \"Merging the member\",\n            \"reason\": `Merging member $toMember(victim) to $fromMember(survivor)`,\n            \"type\": \"CHANGE_IDENTIFIER\",\n            \"base_type\": \"MERGE\",\n            \"points\": \"500\",\n            \"misc_info\": {\n              \"target_customer\": {\n                \"email\": toMember\n              }\n            }\n          }\n        }\n      },\n      headers: getEffectiveHeaders()\n    };\n\n  }\n}\n\nexport {\n  script as default\n  }"
                },
                "source": false
            },
            {
                "name": "mergeMember",
                "type": "ApiRequest",
                "relations": [
                    {
                        "name": "efInSVVYXw",
                        "to": "setData3",
                        "expression": "(getStatus() === 200)",
                        "status": []
                    },
                    {
                        "expression": "!(getStatus() === 200)",
                        "name": "JnbxBvoBYY",
                        "to": "failureResp",
                        "status": []
                    }
                ],
                "config": {
                    "method": "POST",
                    "url": "https://north-america.intouch.capillarytech.com/v1.1/request/add",
                    "queryParams": {
                        "client_auto_approve": true,
                        "program_id": "1158"
                    },
                    "headers": {
                        "Content-Type": "application/json"
                    }
                },
                "source": false
            },
            {
                "name": "setData3",
                "type": "Script",
                "relations": [
                    {
                        "name": "efInSVVYXw",
                        "to": "getMemberByEmailService1",
                        "expression": "*",
                        "status": []
                    }
                ],
                "config": {
                    "script": "import dao from \"neo/dao\";\nimport logger from \"neo/logger\";\n\nconst {\n  getBody,\n  getEffectiveHeaders,\n  getIn,\n  getOut,\n  getApiRequest\n} = dao;\n\nconst script = {\n\n  execute: () => {\n    return {\n      headers: getEffectiveHeaders(),\n      queryParams: {\n        \"identifierName\": \"email\",\n        \"identifierValue\": getApiRequest()?.queryParams[\"toMember.email\"]\n      }\n    };\n\n  }\n}\n\nexport {\n  script as default\n  }"
                },
                "source": false
            },
            {
                "name": "getMemberByEmailService1",
                "type": "ApiRequest",
                "relations": [
                    {
                        "name": "efInSVVYXw",
                        "to": "getResp",
                        "expression": "*",
                        "status": []
                    }
                ],
                "config": {
                    "method": "GET",
                    "url": "https://north-america.api.capillarytech.com/v2/customers/lookup/customerDetails",
                    "queryParams": {
                        "source": "INSTORE",
                        "embed": "POINTS,CUSTOMERSTATUS"
                    }
                },
                "source": false
            },
            {
                "name": "getResp",
                "type": "Script",
                "relations": [],
                "config": {
                    "script": "import dao from \"neo/dao\";\nimport logger from \"neo/logger\";\n\nconst {\n  getBody,\n  getEffectiveHeaders,\n  getIn,\n  getApiRequest\n} = dao;\n\nconst easternDate = (date) => {\n  let newDate = date.split('')\n  newDate[21] = '5'\n  let eastern = newDate.join('')\n  return eastern\n};\nconst addChicagoOffset = (date) => {\n  return `$date-05:00`;\n}\n\nconst script = {\n\n  execute: () => {\n    const isCreate = false;\n    const res = getBody();\n    const request_id = getIn().headers['x-cap-request-id'];\n    const memberChilds = [];\n    const booleanFields = 'is_legacy',\n      'email_optin',\n      'sms_optin',\n      'sms_optinmkt',\n      'push_optin',\n      'sms_optingym',\n      'sms_optinmktgym',\n      'push_optingym',\n      'email_optingym',\n      'sms_optinsnj',\n      'sms_optinmktsnj',\n      'push_optinsnj',\n      'email_optinsnj',\n      'sms_optinpjp',\n      'sms_optinmktpjp',\n      'push_optinpjp',\n      'email_optinpjp';\n    const otpInDate = 'email_optindate',\n      'push_optindate',\n      'sms_optinmktdate',\n      'sms_consentchangedt',\n      'email_optingymdate',\n      'push_optingymdate',\n      'sms_optinmktgymdate',\n      'sms_optingymdate',\n      'email_optinsnjdate',\n      'push_optinsnjdate',\n      'sms_optinmktsnjdate',\n      'sms_optinsnjdate',\n      'email_optinpjpdate',\n      'push_optinpjpdate',\n      'sms_optinmktpjpdate',\n      'sms_optinpjpdate';\n    const capTCPData = {\n      country_of_residence: {\n        'United States': 'USA',\n        'Canada': 'CA'\n      },\n      acquisition_channel: {\n        'POS': 1,\n        'MPOS': 2,\n        'Web': 3,\n        'Mobile Web': 4,\n        'Mobile App': 5,\n        'Mobile APP GYM': 6,\n        'Mobile APP SNJ': 7,\n        'Mobile APP PJP': 8\n      }\n    };\n    const capTcpMapping = {\n      'firstName': 'firstName',\n      'lastName': 'lastName',\n      'dob': 'birthDate',\n      'email': 'email',\n      'primary_phone': 'phone',\n      'zip': 'zipCode',\n      'acquisition_channel': 'memberSource',\n      'gender': 'gender',\n      'enrollment_store': 'enrollmentStore',\n      'date_of_joining': 'enrollDate',\n      'is_legacy': 'isLegacy',\n      'electivebonus_count': 'electiveBonusCount',\n      'elective_bonuscount': 'electiveBonusCount',\n      'email_optin': 'emailOptIn',\n      'sms_optin': 'smsOptIn',\n      'sms_optinmkt': 'smsOptInMkt',\n      'push_optin': 'pushOptIn',\n      'email_optindate': 'emailOptInDate',\n      'push_optindate': 'pushOptInDate',\n      'sms_optinmktdate': 'sMSOptInMktDate',\n      'sms_consentchangedt': 'smsConsentChangeDate',\n      'shopper_type': 'shopperType',\n      'favorite_store': 'favoriteStore',\n      'preferred_brand': 'brandCode',\n      'sms_optingym': 'smsOptInGym',\n      'sms_optinmktgym': 'smsOptInMktGym',\n      'push_optingym': 'pushOptInGym',\n      'email_optingym': 'emailOptInGym',\n      'email_optingymdate': 'emailOptInGymDate',\n      'push_optingymdate': 'pushOptInGymDate',\n      'sms_optinmktgymdate': 'smsOptInMktGymDate',\n      'sms_optingymdate': 'smsOptInGymDate',\n      'sms_optinsnj': 'smsOptInSnj',\n      'sms_optinmktsnj': 'smsOptInMktSnj',\n      'push_optinsnj': 'pushOptInSnj',\n      'email_optinsnj': 'emailOptInSnj',\n      'email_optinsnjdate': 'emailOptInSnjDate',\n      'push_optinsnjdate': 'pushOptInSnjDate',\n      'sms_optinmktsnjdate': 'smsOptInMktSnjDate',\n      'sms_optinsnjdate': 'smsOptInSnjDate',\n      'sms_optinpjp': 'smsOptInPjp',\n      'sms_optinmktpjp': 'smsOptInMktPjp',\n      'push_optinpjp': 'pushOptInPjp',\n      'email_optinpjp': 'emailOptInPjp',\n      'email_optinpjpdate': 'emailOptInPjpDate',\n      'push_optinpjpdate': 'pushOptInPjpDate',\n      'sms_optinmktpjpdate': 'smsOptInMktPjpDate',\n      'sms_optinpjpdate': 'smsOptInPjpDate',\n      'address_type': 'addressType',\n      'addressline_one': 'addressLineOne',\n      'addressline_two': 'addressLineTwo',\n      'state': 'stateOrProvince',\n      'city': 'city',\n      'country_of_residence': 'country',\n      'home_phone': 'homePhone',\n      'is_primary': 'isPrimary',\n      'child1': 'firstname',\n      'cardnumber': 'cardNumber',\n      'seriesid': 'cardType',\n      'profilecomplete_date': 'profileCompleteDate',\n      'update_source': 'updateSource',\n      'update_sourcedate': 'updateSourceDate',\n      'legacy_accountno': 'legacyAccountNo',\n      'plcc_deferred': 'receviedAsPLCCDeferred',\n      'is_primary_address': 'isPrimary',\n      'externalId': 'cardNumber',\n      'mobile_phone': 'mobilePhone',\n      'address_id': 'addressID',\n      'countryofresidence': 'country'\n\n    };\n    const memberAddress = {\n      \"id\": 2004980065,\n      \"isPrimary\": null,\n      \"addressID\": null,\n      \"addressLineOne\": null,\n      \"addressLineTwo\": null,\n      \"stateOrProvince\": null,\n      \"city\": null,\n      \"zipOrPostalCode\": null,\n      \"country\": null,\n      \"addressType\": null,\n      \"homePhone\": null,\n      \"mobilePhone\": null\n    }\n\n    const data = {\n      \"isError\": false,\n      \"data\": {\n        \"birthDate\": null,\n        \"changedBy\": null,\n        \"createDate\": null,\n        \"failedPasswordAttemptCount\": 0,\n        \"firstName\": null,\n        \"id\": null,\n        \"isEmployee\": null,\n        \"lastActivityDate\": null,\n        \"lastName\": \"King\",\n        \"memberCloseDate\": null,\n        \"memberCreateDate\": null,\n        \"memberStatus\": \"Active\",\n        \"mergedToMember\": null,\n        \"middleName\": null,\n        \"namePrefix\": null,\n        \"nameSuffix\": null,\n        \"newStatus\": null,\n        \"newStatusEffectiveDate\": null,\n        \"passwordChangeRequired\": false,\n        \"passwordExpireDate\": null,\n        \"preferredLanguage\": null,\n        \"email\": null,\n        \"phone\": null,\n        \"zipCode\": null,\n        \"resetCode\": null,\n        \"resetCodeDate\": null,\n        \"statusChangeDate\": null,\n        \"statusChangeReason\": null,\n        \"updateDate\": null,\n        \"username\": null,\n        \"alternateId\": null,\n        cards: [],\n        attributeSets: {\n          memberDetails: [{\n            \"id\": 2301973694,\n            \"emailAddressMailable\": null,\n            \"memberStatusCode\": null,\n            \"directMailOptInDate\": null,\n            \"emailOptIn\": null,\n            \"addressLineThree\": null,\n            \"addressLineFour\": null,\n            \"county\": null,\n            \"country\": null,\n            \"addressMailable\": null,\n            \"secondaryEmailAddress\": null,\n            \"directMailOptIn\": null,\n            \"emailOptInDate\": null,\n            \"smsOptIn\": null,\n            \"smsDoubleOptInComplete\": null,\n            \"facebookOptIn\": null,\n            \"twitterOptIn\": null,\n            \"enrollDate\": null,\n            \"memberSource\": null,\n            \"securityQuestion\": null,\n            \"securityAnswer\": null,\n            \"favoriteStore\": null,\n            \"termsAndConditionsAgreed\": null,\n            \"zipOrPostalCode\": null,\n            \"city\": null,\n            \"homePhone\": null,\n            \"smsConsentChangeDate\": null,\n            \"facebookOptInDate\": null,\n            \"twitterOptInDate\": null,\n            \"gender\": null,\n            \"addressLineTwo\": null,\n            \"addressLineOne\": null,\n            \"stateOrProvince\": null,\n            \"mobilePhoneCountryCode\": null,\n            \"mobilePhone\": null,\n            \"workPhone\": null,\n            \"enrollmentStore\": null,\n            \"isLegacy\": false,\n            \"electiveBonusCount\": 0,\n            \"pushOptIn\": null,\n            \"pushOptInDate\": null,\n            \"profileCompleteDate\": null,\n            \"smsOptInMkt\": null,\n            \"sMSOptInMktDate\": null,\n            \"updateSource\": null,\n            \"updateSourceDate\": null,\n            \"legacyAccountNo\": null,\n            \"shopperType\": null,\n            \"emailOptInGymDate\": null,\n            \"brandCode\": \"TCP\",\n            \"emailOptInGym\": null,\n            \"smsOptInGymDate\": null,\n            \"pushOptInGym\": null,\n            \"pushOptInGymDate\": null,\n            \"smsOptInMktGym\": null,\n            \"smsOptInMktGymDate\": null,\n            \"smsOptInGym\": null,\n            \"receivedAsPLCCDeferred\": null,\n            \"smsOptInMktSnj\": null,\n            \"smsOptInMktSnjDate\": null,\n            \"smsOptInSnj\": null,\n            \"smsOptInSnjDate\": null,\n            \"emailOptInSnj\": null,\n            \"emailOptInSnjDate\": null,\n            \"pushOptInSnj\": null,\n            \"pushOptInSnjDate\": null,\n            \"smsOptInMktPjp\": null,\n            \"smsOptInMktPjpDate\": null,\n            \"smsOptInPjp\": null,\n            \"smsOptInPjpDate\": null,\n            \"emailOptInPjp\": null,\n            \"emailOptInPjpDate\": null,\n            \"pushOptInPjp\": null,\n            \"pushOptInPjpDate\": null\n          }\n        }]\n      },\n      \"developerMessage\": \"\",\n      \"userMessage\": \"Success\",\n      \"moreInfo\": null,\n      \"responseCode\": 10000,\n      \"httpStatusCode\": 200,\n      \"errors\": null,\n      \"requestId\": request_id\n    }\n    const isFailed = {\n      \"isError\": true,\n      \"data\": null,\n      \"developerMessage\": \"Your search did not return any members.\",\n      \"userMessage\": \"Your search did not return any members.\",\n      \"moreInfo\": null,\n      \"responseCode\": 10504,\n      \"httpStatusCode\": 404,\n      \"errors\": null,\n      \"requestId\": request_id\n    }\n    if (res && res.id) {\n      data.data['id'] = res.id\n      res.profiles.forEach((item, i) => {\n        if (item.firstName) {\n          data.data['firstName'] = item.firstName\n        }\n        if (item.lastName) {\n          data.data['lastName'] = item.lastName\n        }\n        if (item.attribution && item.attribution.createDate) {\n          data.data.attributeSets[0].memberDetails[0]['enrollDate'] = easternDate(item.attribution.createDate)\n          data.data['memberCreateDate'] = easternDate(item.attribution.createDate)\n          data.data['createDate'] = easternDate(item.attribution.createDate)\n          data.data['updateDate'] = easternDate(item.attribution.createDate)\n        }\n        if (item.identifiers.length > 0) {\n          item.identifiers.forEach((identifier) => {\n            if (capTcpMapping[identifier.type]) {\n              if (identifier.type == 'externalId') {\n                const cards = {\n                  \"cardType\": 1,\n                  \"changedBy\": null,\n                  \"createDate\": easternDate(res.profiles[0].attribution.createDate),\n                  \"dateIssued\": easternDate(res.profiles[0].attribution.createDate),\n                  \"dateRegistered\": easternDate(res.profiles[0].attribution.createDate),\n                  \"expirationDate\": null,\n                  \"memberId\": res.id,\n                  \"isPrimary\": true,\n                  \"linkKey\": null,\n                  \"cardNumber\": identifier.value,\n                  \"newStatus\": null,\n                  \"newStatusEffectiveDate\": null,\n                  \"status\": \"Active\",\n                  \"statusChangeReason\": null,\n                  \"updateDate\": res.profiles[0].attribution.modifiedDate,\n                  \"id\": 132629550,\n                  \"attributeSets\": null\n                }\n                data.data.cards.push(cards)\n              } else {\n                data.data[capTcpMapping[identifier.type]] = identifier.value\n              }\n            }\n          })\n        }\n        if (Object.keys(item.fields).length > 0) {\n          for (const key in (item.fields)) {\n            const memberChild = {\n              \"id\": new Date().valueOf(),\n              \"firstName\": null,\n              \"birthMonth\": null,\n              \"birthYear\": null,\n              \"gender\": null,\n              \"birthDay\": null,\n              \"statusCode\": 0\n            }\n            if (key == 'primary_phone') {\n              data.data[capTcpMapping[key]] = item.fields[key]\n\n            } else if (key == 'child_one' || key == 'child_two' || key == 'child_three' || key == 'child_four') {\n\n              const childs = item.fields[key].split('|')\n\n              childs.forEach((key, index) => {\n                let value = key.split(':')\n                if (value[0] == 'birthMonth' || value[0] == 'birthYear' || value[0] == 'birthDay' || value[0] == 'statusCode') {\n                  memberChild[value[0]] = parseInt(value[1])\n                } else {\n                  memberChild[value[0]] = value[1]\n                }\n              })\n              memberChilds.push(memberChild)\n              // memberChild\n\n            } else if (key == 'mobile_phone') {\n              memberAddress[0][capTcpMapping[key]] = item.fields[key] || null\n              data.data.attributeSets[0].memberDetails[0][capTcpMapping[key]] = item.fields[key] || null\n            } else if (key == 'address_type' || key == 'home_phone' || key == 'addressline_one' || key == 'addressline_two' || key == 'address_id') {\n              memberAddress[0][capTcpMapping[key]] = item.fields[key] || null\n              if (key == 'addressline_one' || key == 'addressline_two') {\n                data.data.attributeSets[0].memberDetails[0][capTcpMapping[key]] = item.fields[key] || null\n              }\n            } else if (key == 'is_primary_address') {\n              memberAddress[0][capTcpMapping[key]] = JSON.parse(item.fields[key])\n            } else if (booleanFields.includes(key)) {\n              if (item.fields[key] == 'true' || item.fields[key] == 'false') {\n                data.data.attributeSets[0].memberDetails[0][capTcpMapping[key]] = JSON.parse(item.fields[key])\n              }\n            } else if (otpInDate.includes(key)) {\n              if (item.fields[key] !== undefined) {\n                data.data.attributeSets[0].memberDetails[0][capTcpMapping[key]] = addChicagoOffset(item.fields[key])\n              }\n            } else if (key == 'electivebonus_count') {\n              data.data.attributeSets[0].memberDetails[0][capTcpMapping[key]] = parseInt(item.fields[key])\n            } else if (capTcpMapping[key]) {\n              data.data.attributeSets[0].memberDetails[0][capTcpMapping[key]] = item.fields[key] || null\n            }\n          }\n        }\n      });\n      if (Object.keys(res.extendedFields).length > 0) {\n        for (const key in (res.extendedFields)) {\n          if (key == 'zip') {\n            data.data[capTcpMapping[key]] = res.extendedFields[key];\n            memberAddress[0]['zipOrPostalCode'] = res.extendedFields[key];\n          } else if (key == 'dob') {\n            data.data[capTcpMapping[key]] = easternDate(res.extendedFields[key]);\n          } else if (key == 'state' || key == 'city' || key == 'zip') {\n            memberAddress[0][capTcpMapping[key]] = res.extendedFields[key]\n            if (key == 'city') {\n              data.data.attributeSets[0].memberDetails[0][capTcpMapping[key]] = res.extendedFields[key]\n            }\n          } else if (key == 'country_of_residence') {\n            memberAddress[0][capTcpMapping[key]] = capTCPData[key][res.extendedFields[key]] || null\n            data.data.attributeSets[0].memberDetails[0][capTcpMapping[key]] = capTCPData[key][res.extendedFields[key]] || null\n          } else {\n            if (capTcpMapping[key]) {\n              data.data.attributeSets[0].memberDetails[0][capTcpMapping[key]] = res.extendedFields[key]\n              if (capTcpMapping[key]) {\n                data.data.attributeSets[0].memberDetails[0][capTcpMapping[key]] = res.extendedFields[key]\n                if (capTcpMapping[key] == 'country' || capTcpMapping[key] == 'memberSource') {\n                  data.data.attributeSets[0].memberDetails[0][capTcpMapping[key]] = capTCPData[key][res.extendedFields[key]] || null\n                }\n              }\n            }\n          }\n        }\n      }\n      if (res.cardDetails.length > 0) {\n        res.cardDetails.forEach((card) => {\n          const cardDetails = {\n            \"cardType\": 2,\n            \"changedBy\": null,\n            \"createDate\": card.issuedDate,\n            \"dateIssued\": card.issuedDate,\n            \"dateRegistered\": card.issuedDate,\n            \"expirationDate\": null,\n            \"memberId\": res.id,\n            \"isPrimary\": false,\n            \"linkKey\": null,\n            \"cardNumber\": card.cardNumber,\n            \"newStatus\": null,\n            \"newStatusEffectiveDate\": null,\n            \"status\": capCards[card.statusInfo.status],\n            \"statusChangeReason\": null,\n            \"updateDate\": card.issuedDate,\n            \"id\": card.cardId,\n            \"attributeSets\": null\n          }\n          data.data.cards.push(cardDetails)\n        })\n\n      }\n      if (isCreate) {\n        data.data.attributeSets[0].memberDetails[0]['yearToDateSpend'] = res.loyaltyInfo?.lifetimePurchases || 0.00;\n      }\n      if (memberAddress[0].addressID) {\n        data.data.attributeSets[0].memberAddress = memberAddress;\n      }\n\n      data.data.attributeSets[0].memberChildren = memberChilds.length > 1 ? memberChilds: memberChilds[0]\n      data.userMessage = `Members have been successfully merged.`;\n      data.responseCode = 12007\n      return data\n    } else {\n      return isFailed;\n    }\n  }\n}\n\nexport {\n  script as default\n  }"
                },
                "source": false
            },
            {
                "name": "failureResp",
                "type": "Script",
                "relations": [],
                "config": {
                    "script": "import dao from \"neo/dao\";\nimport logger from \"neo/logger\";\n\nconst {\n  getIn,\n  getOut,\n  getBody\n} = dao;\n\nconst script = {\n\n  execute: () => {\n\n    const data = getBody();\n\n    return {\n      data\n    };\n\n  }\n}\n\nexport {\n  script as default\n  }"
                },
                "source": false
            },
            {
                "name": "setBody",
                "type": "Script",
                "relations": [
                    {
                        "name": "memgeMemberValidation",
                        "to": "mergeMemberValidation",
                        "expression": "!(props)",
                        "status": []
                    }
                ],
                "config": {
                    "script": "import dao from \"neo/dao\";\nimport logger from \"neo/logger\";\n\nconst {\n  getBody,\n  getEffectiveHeaders,\n  getIn,\n  getOut,\n  getApiRequest\n} = dao;\n\nconst script = {\n\n  execute: () => {\n\n    var body = getBody();\n    if (body.transferCards === undefined) {\n      body.transferCards = true;\n    }\n    if (body.transferRewards === undefined) {\n      body.transferRewards = true;\n    }\n    if (body.mergeTiers === undefined) {\n      body.mergeTiers = true;\n    }\n\n\n    return {\n      body: getApiRequest()\n    };\n\n  }\n}\n\nexport {\n  script as default\n  }"
                },
                "source": true
            },
            {
                "name": "mergeMemberValidation",
                "type": "Schema",
                "relations": [
                    {
                        "name": "3_Q742i6E0",
                        "to": "setdata",
                        "expression": "!(getValidateError()?.length)",
                        "status": []
                    },
                    {
                        "expression": "(getValidateError()?.length)",
                        "name": "dOflbkHZ_5",
                        "to": "handleValidateFailures",
                        "status": []
                    }
                ],
                "config": {
                    "script": "const schema = {\n  definitions: \n\n  ,\n  spec: {\n    \"type\": \"object\",\n    \"properties\": {\n      \"queryParams\": {\n        \"type\": \"object\",\n        \"properties\": {\n          \"fromMember.email\": {\n            \"type\": \"string\",\n            \"format\": \"email\",\n            \"isNotEmpty\": true,\n            \"errorMessage\": {\n              \"isNotEmpty\": \"fromMemberEmail.isNotEmpty\",\n              \"format\": \"fromMemberEmail.format\"\n            }\n          },\n          \"toMember.email\": {\n            \"type\": \"string\",\n            \"format\": \"email\",\n            \"isNotEmpty\": true,\n            \"errorMessage\": {\n              \"isNotEmpty\": \"toMemberEmail.isNotEmpty\",\n              \"format\": \"toMemberEmail.format\"\n            }\n          }\n        },\n        \"required\": \"fromMember.email\",\n          \"toMember.email\"\n      },\n      \"body\": {\n        \"type\": \"object\",\n        \"minProperties\": 1,\n        \"properties\": {\n          \"transferCards\": {\n            \"type\": \"boolean\",\n            \"errorMessage\": {\n              \"type\": \"transferCards.type\"\n            }\n          },\n          \"transferRewards\": {\n            \"type\": \"boolean\",\n            \"errorMessage\": {\n              \"type\": \"transferRewards.type\"\n            }\n          },\n          \"mergeTiers\": {\n            \"type\": \"boolean\",\n            \"errorMessage\": {\n              \"type\": \"mergeTiers.type\"\n            }\n          }\n        },\n        required: \"transferCards\",\n          \"transferRewards\",\n          \"mergeTiers\",\n        \"errorMessage\": {\n          \"minProperties\": \"body.minProperties\",\n        }\n      }\n    },\n    \"required\": \"body\"\n  }\n\n}\n\n\nexport {\n  schema as default\n  }"
                },
                "source": false
            }
        ],
        "createdAt": "2024-04-19T12:09:00.358Z",
        "method": "POST",
        "name": "Post Merge",
        "relations": [
            {
                "name": "3_Q742i6E0",
                "to": "getMemberRequestByEmail",
                "expression": "*",
                "status": [],
                "from": "setdata"
            },
            {
                "name": "3_Q742i6E0",
                "to": "ThrowError",
                "expression": "(getBody() && getBody().errors && getBody().errors.length > 0 && getBody().errors[0].code == 8015)",
                "status": [],
                "from": "getMemberRequestByEmail"
            },
            {
                "expression": "(getBody() && getBody().warnings && getBody().warnings.length > 0 && getBody().warnings[0].code == 8069)",
                "name": "_432Wx1dgW",
                "to": "ThrowError1",
                "status": [],
                "from": "getMemberRequestByEmail"
            },
            {
                "expression": "!(getBody() && getBody().errors && getBody().errors.length > 0 && getBody() && getBody().warnings && getBody().warnings.length > 0)",
                "name": "XqulDEBiiI",
                "to": "setData1",
                "status": [],
                "from": "getMemberRequestByEmail"
            },
            {
                "name": "BdMDf3FLBI",
                "to": "getMemberByEmailService",
                "expression": "*",
                "status": [],
                "from": "setData1"
            },
            {
                "name": "BdMDf3FLBI",
                "to": "throwError2",
                "expression": "(getBody() && getBody().errors && getBody().errors.length > 0 && getBody().errors[0].code == 8015)",
                "status": [],
                "from": "getMemberByEmailService"
            },
            {
                "expression": "(getBody() && getBody().warnings && getBody().warnings.length > 0 && getBody().warnings[0].code == 8069)",
                "name": "9Nq0XMm2kI",
                "to": "throwError3",
                "status": [],
                "from": "getMemberByEmailService"
            },
            {
                "expression": "!(getBody() && getBody().errors && getBody().errors.length > 0 && getBody() && getBody().warnings && getBody().warnings.length > 0)",
                "name": "e4IFESNSoI",
                "to": "setData2",
                "status": [],
                "from": "getMemberByEmailService"
            },
            {
                "name": "efInSVVYXw",
                "to": "mergeMember",
                "expression": "*",
                "status": [],
                "from": "setData2"
            },
            {
                "name": "efInSVVYXw",
                "to": "setData3",
                "expression": "(getStatus() === 200)",
                "status": [],
                "from": "mergeMember"
            },
            {
                "expression": "!(getStatus() === 200)",
                "name": "JnbxBvoBYY",
                "to": "failureResp",
                "status": [],
                "from": "mergeMember"
            },
            {
                "name": "efInSVVYXw",
                "to": "getMemberByEmailService1",
                "expression": "*",
                "status": [],
                "from": "setData3"
            },
            {
                "name": "efInSVVYXw",
                "to": "getResp",
                "expression": "*",
                "status": [],
                "from": "getMemberByEmailService1"
            },
            {
                "name": "memgeMemberValidation",
                "to": "mergeMemberValidation",
                "expression": "!(props)",
                "status": [],
                "from": "setBody"
            },
            {
                "name": "3_Q742i6E0",
                "to": "setdata",
                "expression": "!(getValidateError()?.length)",
                "status": [],
                "from": "mergeMemberValidation"
            },
            {
                "expression": "(getValidateError()?.length)",
                "name": "dOflbkHZ_5",
                "to": "handleValidateFailures",
                "status": [],
                "from": "mergeMemberValidation"
            }
        ],
        "updatedAt": "2024-04-19T12:09:00.358Z",
        "url": "merge"
    }
]
```
