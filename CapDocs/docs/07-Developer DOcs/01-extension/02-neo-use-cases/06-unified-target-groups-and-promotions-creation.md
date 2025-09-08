---
title: Unified Target Groups and Promotions Creation
deprecated: false
hidden: true
metadata:
  robots: index
---
## Use Case:

A brand wants to set up a user created target where the promotion is issued to the customer based on the target achievement.

## Solution

You can create a Neo dataflow by which you can :

* Collect the identifiers,
* Use the target group api to create the target
* Create promotion api to create promotion
* Validate the identifiers and enrol the user to target group
* Issue promotion based on the target achievement

## Creating Neo Dataflow

Create a Neo dataflow which is configured as a single API endpoint that orchestrates the creation of a Target Group, Promotion and the enrollment of a customer into both.

To access the dataflow, ensure you have access to the connectedOrgChild1 org (ID: 50398) and access to Neo.

The dataflow uses the following cURL:

```curl
curl --location 'https://crm-staging-new.cc.capillarytech.com/api_gateway/neo/api/v1/xto6x/execute/tesingOptumBhargav' \
--header 'x-cap-neo-block-log-level: debug' \
--header 'x-cap-neo-debug-enabled: true' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic YXV0b3N0b3JlMS50aWxsMS0xNzIxODM3NjM3OjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw' \
--data '[
    {
        "name" : "testBhargav1303",
        "startDate" : "2024-09-12T15:00:00.000Z",
        "endDate" : "2024-11-15T15:00:00.000Z",
        "behavioralEventName" : "test_multiplex",
        "identifierType" : "id",
        "identifierValue" : 346933507,
        "targetType" : "COUNT",
        "targetValue" : 2,
        "programId" : 1139,
        "expiryStrategyId" : 5138,
        "awardStrategyId" : 5137
    }
]'
```