---
title: Retrieve Request Details using Type and Subtype
excerpt: Allows you to retrieve request details with desired filters.
api:
  file: v2.json
  operationId: retrieve-transaction-customer-merge-request-details
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

curl: `https://{host}/v2/requests`

Example: `https://eu.api.capillarytech.com/v2/requests?requestType=CUSTOMER&requestSubType=DELETE&limit=10&offset=0&sort=ADDED_ON&order=DESC&source=WEB_ENGAGE`

# Response

* **type**: Displays the PII deletion request data type.
* **baseType**: Displays the PII deletion request action.
* **status**: Displays the PII deletion request status.
* **attribution**: Displays the attribution details of the PII deletion request data.
* **id**: Displays the PII deletion request ID.
* **customerDeletionDetails**: Displays the PII deletion request and scheduled time and status of the request.