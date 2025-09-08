---
title: Get Org Entities
excerpt: >-
  Retrieves the details of zones, stores, store servers, concepts or TILLs
  configured for the current organization. By default, it fetches up to 200
  entities.
api:
  file: customer-v11.json
  operationId: get-org-entities
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Request parameter

| Parameter                     | Type    | Description                                                                                                                                                                                                                                             |
| :---------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **type**\*                    | Enum    | Pass the entity type of which you want to retrieve the details. Value: STORE, STR\_SERVER (store server), TILL, ZONE, CONCEPT. Pass example, pass STORE to retrieve store details. The maximum number of stores that can be fetched at once is 500.     |
| **scope**                     | Enum    | Pass STORE\_CUSTOM\_FIELDS or ZONE\_CUSTOM\_FIELDS to retrieve the list of store level or zone level custom fields. TILL\_CUSTOM\_FIELDS - To retrieve details of till specific custom fields.                                                          |
| **id**                        | long    | Pass an entity id as in the org\_entities table (in database) to get the details of that particular entity.                                                                                                                                             |
| **parent\_identifier\_type**  | enum    | Parent entity type to fetch its child entities. Values: STORE\_CODE, STORE\_ID, STORE\_EXTERNAL\_ID, CONCEPT\_CODE, CONCEPT\_ID.                                                                                                                        |
| **parent\_identifier\_value** | string  | Pass the respective identifier value. For example, parent\_identifier\_type=CONCEPT\_CODE\&parent\_identifier\_value=supermarket.                                                                                                                       |
| **include\_parent**           | boolean | Pass true to retrieve the details of the parent entity (parent zone or concept). This is applicable only for type zone or concept.                                                                                                                      |
| **sub\_entities\_count**      | int     | Limit the number of sub-entities to retrieve for each entity.                                                                                                                                                                                           |
| **details**                   | enum    | Pass basic to see only basic information excluding currency, time-zone, and language information.                                                                                                                                                       |
| **exclude\_locale**           | boolean | Pass 1 to exclude time zone details (timezones), 0 to retrieve timezones > base\_timezone details of an entity. Default value is 0.                                                                                                                     |
| **start\_id**                 | long    | Fetches entities that are above the offset number you pass. Offset is the position of the entity in the db record. The value is assigned based on the sequence of creation. For example, start\_id=10 retrieves all the entities from record number 11. |
| **limit**                     | int     | Limit the number of entities to retrieve. Default value is 500.                                                                                                                                                                                         |
| **modified\_since**           | date    | Retrieves the entities that are modified on or after a specific date. Pass the date in YYYY-MM-DD format.                                                                                                                                               |
| **active\_only**              | boolean | Pass true to retrieve the list of only active stores.                                                                                                                                                                                                   |

# Response parameter

| Parameter                               | Data Type | Description                                                                   |
| --------------------------------------- | --------- | ----------------------------------------------------------------------------- |
| response.pagination.limit               | Integer   | Maximum number of items returned per page.                                    |
| response.pagination.offset              | Integer   | Offset for the starting record of the result.                                 |
| response.pagination.total               | Integer   | Total number of entities found.                                               |
| response.status.success                 | Boolean   | Indicates if the request was successful.                                      |
| response.status.code                    | Integer   | Status code for the response.                                                 |
| response.status.message                 | String    | Message describing the status of the request.                                 |
| entity.id                               | String    | Unique identifier for the store.                                              |
| entity.is\_active                       | Boolean   | Indicates if the store is active (1 = Yes).                                   |
| entity.code                             | String    | Code representing the store.                                                  |
| entity.name                             | String    | Name of the store.                                                            |
| entity.description                      | String    | Description of the store.                                                     |
| entity.last\_updated\_by                | String    | Identifier of the user who last updated the entity.                           |
| entity.last\_updated\_on                | String    | Date and time when the entity was last updated.                               |
| entity.custom\_fields.field             | Object    | Custom fields associated with the entity. Each field contains name and value. |
| entity.time\_zone\_id                   | String    | Identifier for the store's timezone.                                          |
| entity.currency\_id                     | String    | Identifier for the store's currency.                                          |
| entity.language\_id                     | String    | Identifier for the store's language.                                          |
| entity.timezones.base\_timezone.label   | String    | Label for the base timezone of the store.                                     |
| entity.timezones.base\_timezone.offset  | String    | Offset for the base timezone of the store.                                    |
| entity.currencies.base\_currency.symbol | String    | Symbol for the base currency of the store.                                    |
| entity.currencies.base\_currency.label  | String    | Label for the base currency of the store.                                     |
| entity.language\_code                   | String    | Code representing the store's language.                                       |
| entity.language\_locale                 | String    | Locale associated with the store's language.                                  |
| entity.languages.base\_language.lang    | String    | Base language of the store.                                                   |
| entity.languages.base\_language.locale  | String    | Locale of the base language of the store.                                     |
| entity.external\_id                     | String    | External identifier for the store.                                            |
| entity.external\_id\_1                  | String    | Additional external identifier for the store.                                 |
| entity.external\_id\_2                  | String    | Another additional external identifier for the store.                         |
| entity.mobile                           | String    | Mobile number associated with the store.                                      |
| entity.channel                          | String    | Channel where the store operates (e.g., instore).                             |
| entity.land\_line                       | String    | Landline number associated with the store.                                    |
| entity.email                            | String    | Email address associated with the store.                                      |
| entity.address                          | String    | Address of the store.                                                         |
| entity.location.latitude                | Double    | Latitude coordinate of the store's location.                                  |
| entity.location.longitude               | Double    | Longitude coordinate of the store's location.                                 |
| entity.type                             | String    | Type of the entity (e.g., STORE).                                             |