---
title: Get user group customer tracker details
excerpt: >-
  This API enables you to retrieve tracker details of a customer in a user
  group.
api:
  file: v2.json
  operationId: get-user-group-customer-tracker-details
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

\{host}/v2/customers/userEntityTrackers?\{query parameters}

Example: `https://eu.api.capillarytech.com/v2/customers/userEntityTrackers?type=USERGROUP2&identifierType=id&identifierValue=93257&source=INSTORE`

# Query parameters

| Parameter       | Type   | Description                                                                                                                                                        |
| --------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| type            | string | Type of entity tracker. In this case, it is always USERGROUP2.                                                                                                     |
| identifierType  | string | Type of identifier. Supported values for identifiers are [`id` (`userGroupId`)](https://docs.capillarytech.com/reference/add-group), `externalId`, `primaryUserId` |
| identifierValue | string | Value of the identifier.                                                                                                                                           |
| source          | string | Supported customer source                                                                                                                                          |

# Response parameters

| Parameter       | Description                                                                  |
| --------------- | ---------------------------------------------------------------------------- |
| pagination      | Pagination details for the data.                                             |
| data            | Array containing tracked entity data.                                        |
| id              | Unique identifier for the tracked entity.                                    |
| name            | Name of the tracked entity.                                                  |
| conditionId     | Identifier for the condition associated with the tracker.                    |
| value           | Value associated with the tracker.                                           |
| updatedOn       | Date when the tracker was last updated, in ISO YYYY-MM-DD HH:MM:SS.s format. |
| conditionName   | Name of the associated condition.                                            |
| periodStartDate | Start date of the tracking period, in ISO YYYY-MM-DD HH:MM:SS.s format.      |
| periodEndDate   | End date of the tracking period, in ISO YYYY-MM-DD HH:MM:SS.s format.        |
| warnings        | Array containing warning messages.                                           |
| errors          | Array containing error messages.                                             |

## API Specific Error Code

| Code | Reason                                                                                 | Description                                                   |
| :--- | :------------------------------------------------------------------------------------- | :------------------------------------------------------------ |
| 1645 | group details passed are not valid.                                                    | The group details provided are invalid.                       |
| 1099 | Error fetching tracker data for customer.                                              | The system was unable to fetch tracker data for the customer. |
| 1647 | Get trackers entity type not set/invalid. supported types include USERGROUP2,CUSTOMER. | The provided entity type is invalid or unsupported.           |