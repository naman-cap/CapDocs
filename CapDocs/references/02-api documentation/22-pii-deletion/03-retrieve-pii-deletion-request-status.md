---
title: Retrieve request status of PII deletion
excerpt: Allows you to retrieve status of the PII deletion request that you raised.
api:
  file: v2.json
  operationId: retrieve-pii-deletion-request-status
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Request

curl: `https://{host}/v2/requests/{id}`

# Response

* **type**: Displays the PII deletion request data type.
* **baseType**:  Displays the PII deletion request action.
* **status**: Displays the PII deletion request status.
* **attribution**: Displays the attribution details of the PII deletion request data.
* **id**:  Displays the PII deletion request ID.
* **customerDeletionDetails**: Displays the PII deletion request and scheduled time and status of the request.