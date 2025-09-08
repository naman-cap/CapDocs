---
title: Add Lead
excerpt: >-
  Adds a new lead. A new non-loyalty customer will be created if you pass a new
  customer identifier.
api:
  file: v2.json
  operationId: add-lead-1
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
### Request Body Parameters

| Parameter      | Data type | Description                                                                                                                                  |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| type           | enum      | Item or hierarchy for which the lead is generated. Values: `SKU`, `BRAND`, `CATEGORY`, or `CUSTOM`. Default value is SKU                     |
| leadFor\*      | string    | Name of SKU, brand or category based on the `type` specified                                                                                 |
| userId         | int       | Unique id of the customer associated to the lead. If this is left blank, then you need to pass idType and identifier as mandatory parameters |
| idType         | enum      | Specified identifier type either `EMAIL` or `MOBILE`                                                                                         |
| identifier     | string    | Value of the specified `idType`                                                                                                              |
| nextFollowUp   | date      | Next follow up date of the lead                                                                                                              |
| createdOn      | date-time | Date and time of lead creation in `YYYY-MM-DDThh:mm:ssTZD` format. Example: 2018-10-05T08:00:00+05:30                                        |
| createdBy      | int       | Entity id of the staff who creates the lead. <br /> Default value is the id of the entity from which the request has come                    |
| lastUpdatedOn  | date-time | Date and time when the lead is recently updated in `YYYY-MM-DDThh:mm:ssTZD` format                                                           |
| lastUpdatedBy  | int       | Entity id of the staff who recently updated the lead                                                                                         |
| extendedFields | obj       | Key-value pairs of extended fields and its values                                                                                            |
| orgSourceId    | enum      | Unique id of the org channel account. Default value is -1 for InStore account                                                                |
| lastFollowUp   |           | Date and time of recent follow up of the lead in `YYYY-MM-DDThh:mm:ssTZD` format                                                             |
| owner          | string    | Username of the staff user who is assigned to the lead                                                                                       |
| subStatus      | enum      | Current sub-status of the lead. Use only names that are created using `leads/substatus` API                                                  |

<br />

<Note title="Note">
To enable a specific language support for an org, contact the Platforms team to get the translations added to the database and activate translations for the org.
</Note>