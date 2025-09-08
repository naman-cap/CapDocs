---
title: Update User Group
excerpt: Lets you update an existing user group details.
api:
  file: v2.json
  operationId: update-user-group
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# API endpoint

[https://eu.api.capillarytech.com/v2/userGroup2](https://eu.api.capillarytech.com/v2/userGroup2)

# Prerequisites

-   Authentication: Basic or OAuth authentication 
-   Access group resource: Read and write access to the `User Group` resource

# Resource information

|                        |                |
| :--------------------- | :------------- |
| URI                    | /v2/userGroup2 |
| HTTP Method            | PUT            |
| Pagination             | No             |
| Batch support          | No             |
| Rate limit information | NA             |

# Query parameters

| Query Parameter | Type    | Description                                                                                                                                                                                                                                                                       |
| --------------- | :------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id\*            | integer | Unique ID of the user group, identical to the entity ID.  **Note**: One of the parameters marked \* is mandatory.                                                                                                                                                                 |
| externalId\*    | string  | External ID of the group. **Note**: One of the parameters marked \* is mandatory.                                                                                                                                                                                                 |
| extendedFields  | array   | Array containing the [extended fields](https://docs.capillarytech.com/docs/data-entities#extended-fields)  and their corresponding values, enabled for specific verticals within the organisation.  Each extended field must be valid and created under the `usergroup2` entity. |
| groupName       | string  | Name of the group. The maximum number of allowed characters is 50.                                                                                                                                                                                                                |
| maxGroupSize    | integer | Maximum size (members) of the group. The maximum group size is as defined by the product configuration `CONF_MAX_FLEET_GROUP_SIZE`. If this configuration is not set, the default maximum size is 30,000.                                                                         |

```curl Sample PUT request with extended fields
{
    "id": "51334",
    "maxGroupSize": 110,
    "extendedFields": {
        "platinum": "35"
    }
}
```

# Response parameters

| Parameter                  | Description                                                                                                                                                                                           |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                         | Unique identifier for the entity.                                                                                                                                                                     |
| groupName                  | Name of the group being updated.                                                                                                                                                                      |
| maxGroupSize               | Maximum size (members) of the group.                                                                                                                                                                  |
| extendedFields             | An array containing the [extended fields](https://docs.capillarytech.com/docs/data-entities#extended-fields) and their corresponding values, enabled for specific verticals within the organisation. |
| entityType                 | Type of entity.                                                                                                                                                                                       |
| promisedPointsScheduleList | This is an array containing objects of promised points scheduled for the user.                                                                                                                        |
| triggerBasedPointsList     | This is an array containing objects of points based on specific triggers or conditions.                                                                                                               |
| warnings                   | This is an array that contains warning messages, if any.                                                                                                                                              |

```json Sample response with extended fields
{
    "id": 51334,
    "groupName": "natwest14",
    "maxGroupSize": 110,
    "extendedFields": {
        "platinum": 35
    },
    "warnings": []
}
```

# API-specific error codes

|       |                                                                 |
| :---- | :-------------------------------------------------------------- |
| 1632  | Group ID, externalD, or primary userID  is not valid            |
| 91016 | This is a warning indicating the extended fields are incorrect. |
| 91017 | This is a warning indicating the extended fields are incorrect. |