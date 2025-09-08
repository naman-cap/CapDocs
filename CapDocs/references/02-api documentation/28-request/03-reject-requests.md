---
title: Reject Requests
excerpt: >-
  Allows rejecting requests that are in pending status. You can use this API
  only when the auto-approval configurations are not enabled for your
  organization. Also, you cannot reject force approval requests made using
  `client_auto_approve=true`.
api:
  file: customer-v11.json
  operationId: reject-requests
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Request Body Parameters

| Parameter    | Datatype | Description                                                                                                                                    |
| ------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| id\*         | long     | Reference id of the request that you want to reject.                                                                                           |
| type\*       | enum     | Type of request. Value: `CHANGE_IDENTIFIER`, `GOODWILL`, `TRANSACTION_UPDATE`.                                                                 |
| base\_type\* | enum     | Sub-type of the request. Value: If `type=CHANGE_IDENTIFIER`, base\_type could be `MOBILE`, `EMAIL`, `EXTERNAL_ID`, `MERGE`, or `REALLOCATION`. |

If `type=GOODWILL`, base\_type will be `POINTS`, or `COUPONS`.