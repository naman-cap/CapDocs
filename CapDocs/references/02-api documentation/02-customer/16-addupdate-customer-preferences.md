---
title: Add/Update Customer Preferences
excerpt: >-
  Preferences are custom fields created under the preferences category which
  helps in capturing specific interests of a customer. Example: favorite color,
  favorite brand. This API allows you to set or update preferences of a
  customer.
api:
  file: customer-v11.json
  operationId: addupdate-customer-preferences
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Example request

```json Sample request Add/Update customer preference
curl --location 'https://eu.api.capillarytech.com/v1.1/customer/preferences?format=json' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--data-raw '{
    "root": {
        "customer": [
            {
                "mobile": "7744876415",
                "email": "rutuja.hatwar@capillarytech.com",
                
                
                "store": {
                    "code": "doc123",
                    "id": "75152715"
                } 
                
                
                
                
                
                
                
                
                
                
                
                
            }
        ]
    }
}'
```

<br />

## Request Body Parameters

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Type
      </th>

      <th>
        Required
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        root*
      </td>

      <td>
        object
      </td>

      <td>
        Yes
      </td>

      <td>
        Root object containing customer data.
      </td>
    </tr>

    <tr>
      <td>
        * customer*
      </td>

      <td>
        array
      </td>

      <td>
        Yes
      </td>

      <td>
        Array of customer objects. At least one customer object is required.
      </td>
    </tr>

    <tr>
      <td>
        * mobile*
      </td>

      <td>
        string
      </td>

      <td>
        Yes
      </td>

      <td>
        Customer's mobile number.
      </td>
    </tr>

    <tr>
      <td>
        * email
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        Customer's email address.
      </td>
    </tr>

    <tr>
      <td>
        * external_id
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        External identifier for the customer (optional).
      </td>
    </tr>

    <tr>
      <td>
        * user_id
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        Unique user ID for the customer (optional).
      </td>
    </tr>

    <tr>
      <td>
        * store
      </td>

      <td>
        object
      </td>

      <td>
        Optional
      </td>

      <td>
        Store details object.
      </td>
    </tr>

    <tr>
      <td>
        -- code*
      </td>

      <td>
        string
      </td>

      <td>
        Yes
      </td>

      <td>
        Store code to which the customer belongs.
      </td>
    </tr>

    <tr>
      <td>
        -- id*
      </td>

      <td>
        string
      </td>

      <td>
        Yes
      </td>

      <td>
        Store ID. Unique identifier for the store associated with the customer. Pass the internal store ID configured in your system.
      </td>
    </tr>

    <tr>
      <td>
        * custom_fields
      </td>

      <td>
        object
      </td>

      <td>
        Optional
      </td>

      <td>
        Object containing custom field data (optional).
      </td>
    </tr>

    <tr>
      <td>
        -- field
      </td>

      <td>
        array
      </td>

      <td>
        Optional
      </td>

      <td>
        Array of custom field objects. Each defines additional attribute information.
      </td>
    </tr>

    <tr>
      <td>
        --- name*
      </td>

      <td>
        string
      </td>

      <td>
        Yes
      </td>

      <td>
        Name of the custom field.
      </td>
    </tr>

    <tr>
      <td>
        --- value*
      </td>

      <td>
        string
      </td>

      <td>
        Yes
      </td>

      <td>
        Value for the custom field. Write string values directly (e.g., `"Blue"`) or pass JSON array as a string if multiple values are needed (e.g., `"[\"puma\", \"nike\"]"`).
      </td>
    </tr>
  </tbody>
</Table>

## Example response

```json Sample response add/update customer preferences
{
    "response": {
        "status": {
            "success": "false",
            "code": 500,
            "message": "All requests have failed due to errors"
        },
        "customer": [
            {
                "mobile": "917744876415",
                "email": "rutuja.hatwar@capillarytech.com",
                "external_id": "",
                "store": {
                    "status": "SUCCESS",
                    "id": "75152715",
                    "code": "doc123",
                    "name": "DocStore"
                },
                "custom_fields": {
                    "field": []
                },
                "item_status": {
                    "success": "false",
                    "code": 999999,
                    "message": "",
                    "warnings": {}
                }
            }
        ]
    }
}
```

<br />

# API Specific Error Code

| Error Code | Description              | Reason                                                                                                                    |
| ---------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| **999999** | Unexpected server error. | Returned when an unhandled or unknown error occurs during request processing. Used as a fallback for unexpected failures. |
| **400**    | Bad request.             | Triggered when required fields are missing or request body is malformed.                                                  |
| **401**    | Unauthorized.            | Authentication failed or missing authorization header.                                                                    |
| **403**    | Forbidden.               | User does not have permission to perform this operation.                                                                  |
| **404**    | Customer not found.      | Passed identifier (e.g., mobile, email) does not match any customer record.                                               |
| **409**    | Conflict.                | Duplicate or conflicting data detected in the request.                                                                    |
| **422**    | Unprocessable entity.    | Input is semantically incorrect (e.g., invalid email format, unsupported store code).                                     |
| **500**    | Internal server error.   | Server encountered an error while processing the request.                                                                 |
