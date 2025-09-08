---
title: Add Labels
excerpt: >-
  Lets you add a new customer tag to the organization. You cannot add tags
  beyond the limit set for the org. 


  You can set the label limit at the org level using the API `POST
  organization/configs` in the parameter `ORG_MAX_LABEL_COUNT`
api:
  file: v2.json
  operationId: add-labels
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Prerequisites

Before using this API, make sure the label limit for your organization is properly configured.

The label limit controls the maximum number of labels (tags) that can be created or assigned. This helps manage labels effectively and avoid errors.

This limit must be set using the organization configs API by specifying the `ORG_MAX_LABEL_COUNT` parameter. There is no option to set this limit through the user interface.

If you try to add more labels than the set limit, the system will block the request and return an error, such as "Org max Label count exceed".

> 👍 Note
>
> For detailed information about the APIs and for hands-on testing, refer to the [API overview](https://docs.capillarytech.com/reference/apioverview) documentation and step-by-step guide on[ making your first API call.](https://docs.capillarytech.com/reference/make-your-first-api-call)

# Prerequisites

*   Basic Authentication
*   Default access group

## Resource information

|                        |                      |
| :--------------------- | :------------------- |
| URL                    | /organization/labels |
| HTTP Method            | GET                  |
| Pagination             | No                   |
| Batch support          | No                   |
| Rate limit information | None                 |

# API Endpoint

`https://eu.api.capillarytech.com/v2/organization/labels`

# Request Body Parameters

| Parameter    | Datatype | Description                                                             |
| ------------ | -------- | ----------------------------------------------------------------------- |
| orgLabels\*  | Array    | List of labels to be added. Each object must include the fields below.  |
| -name\*      | String   | Name of the label or tag. Recommended max length: 50 characters.        |
| -description | String   | Short description of the label. Recommended max length: 255 characters. |

# Response Body Parameters

| Parameter | Datatype        | Description                                                                                      |
| --------- | --------------- | ------------------------------------------------------------------------------------------------ |
| entity\*  | Integer         | ID of the created or updated entity.                                                             |
| warnings  | Array of string | List of warnings returned by the system. When no warnings are present, this array will be empty. |

# Error Code

| Error Code | Message               | Description                                                                                                                  |
| ---------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 200        | OK                    | Request processed successfully. The entity was created or updated without errors.                                            |
| 400        | Bad Request           | The request is invalid. Possible reasons include missing required parameters, invalid input data, or malformed request body. |
| 401        | Unauthorized          | Authentication failed or the API token is missing or invalid.                                                                |
| 403        | Forbidden             | Access is not allowed due to insufficient permissions.                                                                       |
| 404        | Not Found             | The requested resource was not found.                                                                                        |
| 409        | Conflict              | The request could not be completed due to a conflict with the current state of the resource.                                 |
| 500        | Internal Server Error | An unexpected error occurred on the server side.                                                                             |
| 33003      | Invalid Array         | The request body contains an empty array. At least one valid object is required in the array.                                |