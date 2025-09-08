---
title: Post Event
excerpt: Lets you post the behavioral event.
api:
  file: webhook.json
  operationId: post-event
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use this API to post the event that you have created. To know more about testing and publishing a new event, refer \[Test & Publish Event\](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/)

# API endpoint example

\<[https://spd6hzcltl.execute-api.eu-west-1.amazonaws.com/eucrm/webhooks/d61233f75191444e73a577bbbd4c26eb](https://spd6hzcltl.execute-api.eu-west-1.amazonaws.com/eucrm/webhooks/d61233f75191444e73a577bbbd4c26eb)>

# Prerequisites

*   [Create a behavioural event](https://docs.capillarytech.com/docs/behavioral-loyalty)
*   [Configure webhook URL](https://docs.capillarytech.com/docs/add-webhook-integration)

# Resource information

|                       |                         |
| :-------------------- | :---------------------- |
| URI                   | `{webhooksUrl}/{host}/` |
| HTTP method           | POST                    |
| Pagination supported? | NA                      |
| Rate limit            | NA                      |
| Batch support         | NA                      |

# Example request body parameters

Consider you have an event 'be\_reserved' used for reserving rooms in a hotel. It utilizes customer information and stay details. The parameters below are for the event's attributes 'be\_reserved'.

**Note:** The parameters change according to the attributes of the event.

| Parameter Name (Parameters marked with \* are mandatory) | Data Type | Description                                                                                                                                                                                    |
| -------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| age\*                                                    | Double    | Age of the customer.                                                                                                                                                                           |
| customer\_id\*                                           | String    | Mobile number of the customer.                                                                                                                                                                 |
| event\_name\*                                            | String    | Name of the event.                                                                                                                                                                             |
| external\_event\_id\*                                    | String    | External identifier for Behavioral Events. This identifier allows brands to pass their unique identifiers for each event they send to the Customer Data Platform.                              |
| hotel\_name\*                                            | String    | Name of the hotel where the customer wants to reserve rooms.                                                                                                                                   |
| room\_nights\*                                           | Enum      | Number of nights the room is reserved.                                                                                                                                                         |
| eventDateTime                                            | String    | Standard attribute that captures the event processing time. See [Standard Attributes](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/standard-attributes) for more details. |

```json Sample request
curl --location 'https://spd6hzcltl.execute-api.eu-west-1.amazonaws.com/eucrm/webhooks/d61233f75191444e73a577bbbd4c26eb' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic dGVzdF9kaXY2OWZmZmRkYg==' \
--data '{
"age":20,
"customer_id":"9933772255",
"event_name":"be_reserved",
"external_event_id":"RAND121",
"hotel_name":"Indiranagar",
"room_nights":"12",
"eventDateTime":"2024-04-11 12:00:00"
}'
```

# Response parameters

| Parameter Name | Data Type | Description                                              |
| :------------- | :-------- | :------------------------------------------------------- |
| status         | Object    | Object containing the status of the event.               |
| -code          | Number    | Status code indicating the result of the POST operation. |
| -message       | String    | Message describing the status of the event.              |
| requestId      | String    | Unique ID for the POST operation.                        |

```json
{
    "status": {
        "code": 1100,
        "message": "Event is pushed to transformation state"
    },
    "requestId": "defc955f-ebca-4f14-b8d7-e2b885b3f370"
}
```