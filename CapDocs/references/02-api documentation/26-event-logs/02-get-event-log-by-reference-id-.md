---
title: Get Event Log (by Reference ID)
excerpt: >-
  Retrieves the details of a specific event call based on the reference ID of
  the request.
api:
  file: v3.json
  operationId: get-event-log-by-reference-id-
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
**refID:** You can retrieve the reference ID from the response of the [Get event log by request ID API](https://docs.capillarytech.com/reference/get-event-log-by-reference-id-).  Reference ID is a combination of \{orgId}\{uniqueId}. For example, for a transactionAdd event it is \{orgId}\{transactionId}, for a customerAdd event, it is \{orgId}\{userId}, for points redemption it is \{orgId}\{redemptionId}.\
**Example url:**  [https://eu.intouch.api.capillarytech.com/v3/webHooks/eventLog/refId/2000089\_123563158](https://eu.intouch.api.capillarytech.com/v3/webHooks/eventLog/refId/2000089_123563158)