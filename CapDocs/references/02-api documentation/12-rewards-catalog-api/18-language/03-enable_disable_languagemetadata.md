---
title: Enable Language for Rewards
excerpt: >-
  This API allows you to enable the language metadata for rewards for your
  organization.
api:
  file: ENABLE:DISABLE_language.yaml
  operationId: putApi_gatewayrewardscorev1metadatalanguage12statusenable
hidden: false
---
# Prerequisites

*   Authentication: Basic or OAuth credentials
*   Default access group

## Resource information

| Field       | Value                                                                              |
| ----------- | ---------------------------------------------------------------------------------- |
| URL         | `https\://{{eu}}/api\_gateway/rewards/core/v1/metadata/language/12/status/disable` |
| HTTP method | PUT                                                                                |
| Pagination  | NA                                                                                 |
| Rate limit  | NA                                                                                 |

## Example API cURL

```curl Enable
curl --location --request PUT 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/language/12/status/enable' \
--header 'Content-Type: application/json' \
--header 'Accept: */*' \
--header 'Authorization: Basic Z2VvcmdlLmpvaG5zb246OTg4OTU2NWI4ODVhMmY4ZWE1MTk1MjA2NWEwYTEzNzg=' \
--header 'Cookie: _cfuvid=Vo40i2sQt2b9D_BbvyU32Wbvu39g2t0iystT.W9RDJ0-1751522911573-0.0.1.1-604800000' \
--data ''
```

# Path parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Data Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Language code
      </td>

      <td>
        String
      </td>

      <td>
        Defines the language code for example: "en" ,"fr".
        Note : These languages codes are not the standard language codes and can be created for your organization as per the requirement.
      </td>
    </tr>
  </tbody>
</Table>

# Response parameters

| Parameter | Data Type | Description                                                        |
| :-------- | :-------- | :----------------------------------------------------------------- |
| status    | Object    | An object containing the status of the response.                   |
| success   | Boolean   | Indicates whether the request was successful.                      |
| code      | Integer   | A specific code indicating the result of the operation.            |
| message   | String    | A descriptive message providing more information about the status. |

```curl Response Sample
{
    "status": {
        "success": true,
        "code": 2016,
        "message": "Language updated successfully"
    }
}
```

# API specific error codes

| Code | Description                   | Reason                                                           |
| :--- | :---------------------------- | :--------------------------------------------------------------- |
| 2016 | Language updated successfully | The language status (disabled/enabled) was successfully updated. |
| 2104 | Language not found            | The specified language code does not exist.                      |
| 400  | Invalid Request               | The request parameters or format were invalid.                   |
| 404  | Resource not found            | The requested API endpoint or resource does not exist.           |
| 500  | UNEXPECTED\_ERROR             | An unexpected error occurred on the server.                      |

]