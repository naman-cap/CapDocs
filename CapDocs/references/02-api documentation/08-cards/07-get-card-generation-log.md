---
title: Get Card Generation Log
excerpt: >-
  Retrieves the log of cards generated under a card series, along with the
  fileHandle using which you can download the history from S3 server.
api:
  file: v2.json
  operationId: get-card-generation-log
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 👍 Note
>
> For detailed information about the APIs and for hands-on testing, refer to the [API overview](https://docs.capillarytech.com/reference/apioverview) documentation and step-by-step guide on[ making your first API call.](https://docs.capillarytech.com/reference/make-your-first-api-call)

# Prerequisites

*   Basic Authentication
*   Default access group

## Resource information

| URI                   | v2/card/generation/logs |
| :-------------------- | :---------------------- |
| HTTP method           | GET                     |
| Authentication        | Basic                   |
| Pagination supported? | NO                      |
| Rate limit            | YES                     |
| Batch support         | NO                      |

## Example request

```json Sample request
curl --location 'https://eu.api.capillarytech.com/v2/card/generation/logs?format=json&seriesId=169' \
--header 'accept: application/json' \
--header 'authorization: Basic cnV0dWphX2NhcGlsbGFyeTo='
```

## Query parameters

| Field    | Type    | Required | Description                                                          |
| :------- | :------ | :------- | :------------------------------------------------------------------- |
| seriesId | integer | Optional | Unique identification number of the card series to retrieve the log. |

<br />

# Response Parameter

| Parameter       | Data Type | Description                                                                  |
| --------------- | --------- | ---------------------------------------------------------------------------- |
| **entity**      | Array     | Array containing the details of the card series.                             |
| **seriesName**  | String    | Name of the card series for which the cards were generated.                  |
| **seriesCode**  | String    | Code identifying the card series.                                            |
| **count**       | Integer   | Number of cards generated in this batch.                                     |
| **createdBy**   | Integer   | User ID of the person who initiated the card generation request.             |
| **date**        | String    | Date and time when the generation request was processed, in ISO 8601 format. |
| **description** | String    | Optional description provided for the generation batch.                      |
| **fileHandle**  | String    | Unique identifier for the generated card file.                               |
| **id**          | Integer   | Unique identifier for the card generation log entry.                         |
| **orgId**       | Integer   | Unique identifier for the organization.                                      |
| **seriesId**    | Integer   | Unique identifier for the card series.                                       |