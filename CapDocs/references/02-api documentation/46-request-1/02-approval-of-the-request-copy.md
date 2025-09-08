---
title: Approval of the request
excerpt: ''
api:
  file: customer-v11.json
  operationId: approval-of-the-request-copy
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API helps in approving the request to convert a 'not-interested' transaction to an 'interested' transaction. One important point to remember here is, same credentials cannot be used to "send the approval request" and "approving the request".

**API URL:** `https://{{host}}//v1.1/request/approve`

**Request body:**

```Text Request body
{
  "root": {
    "request": [{
      "type": "TRANSACTION_UPDATE",
      "base_type": "RETRO",
      "id": "1404900",
      "points": "200.0",
      "updated_comments": "Seems to a valid request. hence approving"
    }]
  }
}
```