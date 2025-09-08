---
title: Commmunication
deprecated: false
hidden: true
metadata:
  robots: index
---
## Communication message

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "name": "communicationMessageUndelivered",
  "description": "Schema for communication message undelivered events",
  "type": "object",
  "javaInterfaces": [
    "com.capillary.eventNotification.bo.BaseEvent"
  ],
  "extends": {
    "$ref": "commonEvent.json"
  },
  "allOf": [
    {
      "$ref": "commonEvent.json"
    }
  ],
  "properties": {
    "eventName": {
      "type": "string",
      "default": "communicationMessageUndelivered"
    },
    "eventSearchKey" : {
      "type" : "string",
      "default" : ""
    },
    "data": {
      "javaType": "com.capillary.eventNotification.bo.CommunicationMessageUndeliveredAttributes",
      "type": "object",
      "required": [
        "deliveryFailureStatus",
        "deliveryFailureReason",
        "errorDescription",
        "errorCode",
        "baseAttributes"
      ],
      "properties": {
        "deliveryFailureStatus": {
          "type": "string",
          "enum": [
            "TIMEOUT",
            "RETRY_TIMEOUT",
            "HARD_BOUNCED",
            "SOFT_BOUNCED",
            "DND_BLOCKED",
            "NDNC_BLOCKED",
            "FAILED",
            "CREDIT_LIMIT_EXCEEDED",
            "RATE_LIMIT_EXCEEDED",
            "EMAIL_BODY_EMPTY",
            "MARKED_SPAM",
            "UNKNOWN",
            "NOT_DELIVERED"
          ]
        },
        "deliveryFailureReason": {
          "type": "string"
        },
        "errorDescription": {
          "type": "string"
        },
        "errorCode": {
          "type": "string"
        },
        "baseAttributes": {
          "$ref": "./internal/communicationMessageBaseAttribute.json"
        }
      }
    }
  }
}
```