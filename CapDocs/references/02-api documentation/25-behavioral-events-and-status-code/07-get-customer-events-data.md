---
title: Get Customer Events
excerpt: Retrieves the details of all events of a specific customer.
api:
  file: v2.json
  operationId: get-customer-events
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Query parameter

| Parameter | Description                                                                                                                                                 |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope     | Use the scope `child` to retrieve the event details of a customer in a child org using the parent org till ID. This is applicable to a Connected org setup. |

# Response parameter

| Parameter                 | Description                                                                                                                                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data                      | A list of event details.                                                                                                                                                                                                                    |
| orgId                     | The organization's identification number.                                                                                                                                                                                                   |
| userId                    | The user's identification number.                                                                                                                                                                                                           |
| date                      | The date and time when the event occurred.                                                                                                                                                                                                  |
| eventName                 | Name of the event.                                                                                                                                                                                                                          |
| eventId                   | Unique identifier for the event.                                                                                                                                                                                                            |
| source                    | Source from which the event originated.                                                                                                                                                                                                     |
| tillCode                  | Code of the till where the event took place.                                                                                                                                                                                                |
| source\_till\_id          | Till ID of the till where the event took place.                                                                                                                                                                                             |
| source\_user\_id          | User ID from which the event was generated.                                                                                                                                                                                                 |
| additonalAttributes       | Additional details associated with the event.                                                                                                                                                                                               |
| uniqueId                  | Unique generated for the event when the Is Unique feature is enabled. Refer to the [Uniqueness check documentation](https://docs.capillarytech.com/docs/setup-test-behavioral-events#enabling-uniqueness-check) for more information.       |
| accountid                 | Account identification.                                                                                                                                                                                                                     |
| autoUpdateTimeStamp       | Time when the event was automatically updated.                                                                                                                                                                                              |
| brandname/brand           | Name of the brand.                                                                                                                                                                                                                          |
| browsername/browser\_name | Name of the browser where the event took place.                                                                                                                                                                                             |
| cartid/cartrefkey         | Unique identifier for the cart.                                                                                                                                                                                                             |
| categoryname/category     | Category under which the product/event falls.                                                                                                                                                                                               |
| city                      | City where the event took place.                                                                                                                                                                                                            |
| country                   | Country where the event took place.                                                                                                                                                                                                         |
| device                    | Type of device used during the event.                                                                                                                                                                                                       |
| id                        | Unique identifier.                                                                                                                                                                                                                          |
| ip                        | IP address from which the event originated.                                                                                                                                                                                                 |
| locationname              | Name of the location where the event took place.                                                                                                                                                                                            |
| osname/os\_name           | Name of the operating system.                                                                                                                                                                                                               |
| pageurl/page\_url         | URL of the page where the event occurred.                                                                                                                                                                                                   |
| productname/name          | Name of the product.                                                                                                                                                                                                                        |
| region                    | Region where the event took place.                                                                                                                                                                                                          |
| till                      | Till details.                                                                                                                                                                                                                               |
| variant                   | Variant details of the product.                                                                                                                                                                                                             |
| psiAttributes             | Object indicating if the field contains Protected Sensitive Information. For more information refer, [Classify Potentially Sensitive Information (PSI)](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi) |
| warnings                  | A list of warnings related to the response.                                                                                                                                                                                                 |
| errors                    | A list of errors related to the response.                                                                                                                                                                                                   |

```json Sample response
{
    "data": [
        {
            "orgId": 100737,
            "userId": 564590100,
            "date": "2025-05-08T08:56:57Z",
            "eventName": "TestingEvent_FE",
            "eventId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
            "source": "INSTORE",
            "tillCode": "rutuja_capillary",
            "displayName": "TestingEvent_FE",
            "additonalAttributes": {
                "accountId": null,
                "autoUpdateTimeStamp": 1746694617401,
                "customerId": "564590100",
                "displayName": "TestingEvent_FE",
                "eventDateTime": "1746694617000",
                "eventName": "TestingEvent_FE",
                "isDuplicate": false,
                "is_mongo_push": true,
                "orgId": 100737,
                "requestId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
                "source": "INSTORE",
                "source_till_id": 75155373,
                "source_user_id": 564590100,
                "uniqueId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
                "x-cap-lineage-id": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
                "x-cap-lineage-start": "1746694616212"
            },
            "psiAttributes": [],
            "uniqueId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3"
        },
        {
            "orgId": 100737,
            "userId": 564590100,
            "date": "2025-05-08T08:40:38Z",
            "eventName": "Event_Rutuja",
            "eventId": "330c3f0f-42ab-462f-9c77-dad0d132c663",
            "source": "INSTORE",
            "tillCode": "rutuja_capillary",
            "additonalAttributes": {
                "String": "75155373",
                "accountId": null,
                "autoUpdateTimeStamp": 1746693638140,
                "customerId": "564590100",
                "displayName": null,
                "eventDateTime": "1746693638000",
                "eventName": "Event_Rutuja",
                "isDuplicate": false,
                "is_mongo_push": true,
                "orgId": 100737,
                "ouTillCode": "rutuja_capillary",
                "requestId": "330c3f0f-42ab-462f-9c77-dad0d132c663",
                "source": "INSTORE",
                "source_till_id": 75155373,
                "source_user_id": 564590100,
                "uniqueId": "330c3f0f-42ab-462f-9c77-dad0d132c663",
                "x-cap-lineage-id": "330c3f0f-42ab-462f-9c77-dad0d132c663",
                "x-cap-lineage-start": "1746693637008"
            },
            "psiAttributes": [],
            "uniqueId": "330c3f0f-42ab-462f-9c77-dad0d132c663"
        },
        {
            "orgId": 100737,
            "userId": 564590100,
            "date": "2025-05-08T08:37:49Z",
            "eventName": "TestingEvent_FE_Rutuja",
            "eventId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
            "source": "INSTORE",
            "tillCode": "rutuja_capillary",
            "displayName": "TestingEvent_FE",
            "additonalAttributes": {
                "accountId": null,
                "autoUpdateTimeStamp": 1746693469553,
                "customerId": "564590100",
                "displayName": "TestingEvent_FE",
                "eventDateTime": "1746693469000",
                "eventName": "TestingEvent_FE_Rutuja",
                "isDuplicate": false,
                "is_mongo_push": true,
                "orgId": 100737,
                "requestId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
                "source": "INSTORE",
                "source_till_id": 75155373,
                "source_user_id": 564590100,
                "uniqueId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
                "x-cap-lineage-id": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
                "x-cap-lineage-start": "1746693468308"
            },
            "psiAttributes": [],
            "uniqueId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c"
        }
    ],
    "warnings": [],
    "errors": []
}
```