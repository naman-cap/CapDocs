---
title: Send retro request
excerpt: >-
  This API can be used to send request asking to convert a 'not-interested'
  transaction to a 'interested' transaction.
api:
  file: customer-v11.json
  operationId: send-retro-request
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API helps in sending the request to convert a 'not-interested' transaction to an 'interested' transaction.

**API URL:** `https://{{host}}//v1.1/request/add`

**Request body:**

```Text Request body
{  
   "root":{  
      "request":[  
         {  
            "customer":{  
               "mobile":"918815774701",  
               "external_id":"",  
               "id":"",  
               "email":""  
            },  
            "old_type":"NOT_INTERESTED",  
            "transaction_id":"7632110",  
            "new_type":"REGULAR",  
            "base_type":"RETRO",  
            "reference_id":"ref345",  
            "type":"TRANSACTION_UPDATE",  
            "misc_info":""  
         }  
      ]  
   }  
}\`
```

Customer: Any identifier of the customer.

Transaction Id: Id of the 'not-interested' transaction.