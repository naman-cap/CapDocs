---
title: Get event data
excerpt: Retrieves details of a specific events.
api:
  file: v2.json
  operationId: get-event-data
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 👍
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

-   Make sure that you have WRITE access to Behavioural events. For more information, refer to [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API endpoint example

`http://eu.api.capillarytech.com/v2/events/event_data?id=5aa2e5dc-2b84-4798-99a2-69dba75523ba`

# Query parameter

| Parameter Name | Description      |
| :------------- | :--------------- |
| id             | Id of the event. |

# Response parameter

| Parameter Name                      | Description                                                                                                                                                                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **clickEventsMeta**                 |                                                                                                                                                                                                                          |
| eventId                             | Unique identifier for the event.                                                                                                                                                                                         |
| eventName                           | Name of the event.                                                                                                                                                                                                       |
| actions                             | List of actions associated with the event.                                                                                                                                                                               |
| fields                              | List of fields associated with the event.                                                                                                                                                                                |
| orgId                               | Organization ID.                                                                                                                                                                                                         |
| status                              | Status of the event.                                                                                                                                                                                                     |
| testStatus                          | Test status of the event.                                                                                                                                                                                                |
| label                               | Label of the event.                                                                                                                                                                                                      |
| description                         | Description of the event.                                                                                                                                                                                                |
| date                                | Date associated with the event.                                                                                                                                                                                          |
| standardEvent                       | Boolean indicating if the event is a standard event.                                                                                                                                                                     |
| **fields (within clickEventsMeta)** |                                                                                                                                                                                                                          |
| name                                | Name of the field.                                                                                                                                                                                                       |
| type                                | Type of the field.                                                                                                                                                                                                       |
| attributes                          | Attributes associated with the field.                                                                                                                                                                                    |
| **attributes (within fields)**      |                                                                                                                                                                                                                          |
| accountId                           | Type of account ID.                                                                                                                                                                                                      |
| addCustomerIfNotExists              | Boolean indicating if a customer should be added if they don't exist.                                                                                                                                                    |
| identifierType                      | Type of identifier.                                                                                                                                                                                                      |
| isRequired                          | Boolean indicating if the field is required.                                                                                                                                                                             |
| source                              | Source of the field.                                                                                                                                                                                                     |
| regex                               | Regular expression associated with the field.                                                                                                                                                                            |
| isPsiData                           | Indicates if the custom field is sensitive data. Refer to the PSI data documentation for more [information on classifying PSI data](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi). |
| **transformerMappings**             |                                                                                                                                                                                                                          |
| defaultTransformerMapping           | Default transformer mapping.                                                                                                                                                                                             |
| webEngageTransformerMapping         | WebEngage transformer mapping.                                                                                                                                                                                           |