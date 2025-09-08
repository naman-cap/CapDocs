---
title: Add Product Attributes
excerpt: Lets you add attributes to an existing product.
api:
  file: customer-v11.json
  operationId: add-product-attributes
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Request Body Parameters

```json Sample request
{
  "root": {
    "product": [
      {
        "attributes": {
          "attribute": {
            "is_enum": "1",
            "type": "Int",
            "default_attribute_value_name": "firstName_724872",
            "extraction_rule_data": "firstName_724872",
            "extraction_rule_type": "POS",
            "is_soft_enum": "1",
            "values": {
              "value": {
                "name": "test"
              }
            },
            "use_in_dump": "1",
            "name": "firstName_724872"
          }
        }
      }
    ]
  }
}
```
```json Sample request with OU code
{
  "root": {
    "product": [
      {
        "attributes": {
          "attribute": {
            "is_enum": "1",
            "type": "Int",
            "default_attribute_value_name": "firstName_724872",
            "extraction_rule_data": "firstName_724872",
            "extraction_rule_type": "POS",
            "ou_code":"tatacliq",
            "is_soft_enum": "1",
            "values": {
              "value": {
                "name": "test"
              }
            },
            "use_in_dump": "1",
            "name": "firstName_724872"
          }
        }
      }
    ]
  }
}
```

<br />

| Parameter                       | Datatype | Description                                                                                                                                                                                                                                                                                                |
| ------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| default\_attribute\_value\_name | string   | Default value for the attribute (when no value  is provided).                                                                                                                                                                                                                                              |
| extraction\_rule\_data          | string   |                                                                                                                                                                                                                                                                                                            |
| extraction\_rule\_type          | enum     | POS,                                                                                                                                                                                                                                                                                                       |
| is\_enum                        |          |                                                                                                                                                                                                                                                                                                            |
| is\_soft\_enum                  |          |                                                                                                                                                                                                                                                                                                            |
| label                           | string   | Label name for the attribute.                                                                                                                                                                                                                                                                              |
| name                            | string   | Name of the attribute.                                                                                                                                                                                                                                                                                     |
| ou\_code                        | string   | Identification code of the organisation unit. This is applicable only if OU support for product inventory is enabled.  For more information, see [OU support for product inventory](https://docs.capillarytech.com/docs/inventory-profiles#configuring-organisation-unit-ou-support-for-product-entities). |
| type                            | enum     |                                                                                                                                                                                                                                                                                                            |
| use\_in\_dump                   | enum     | Value: `1`                                                                                                                                                                                                                                                                                                 |
| values                          | obj      | Values of the attribute.                                                                                                                                                                                                                                                                                   |
| label                           | string   | Label name for the attribute value.                                                                                                                                                                                                                                                                        |
| name                            | string   | Name of the attribute value.                                                                                                                                                                                                                                                                               |

# Response parameters

| Parameter                                 | Description                                           |
| ----------------------------------------- | ----------------------------------------------------- |
| response                                  | The main object containing the API response data.     |
| response.status                           | The status information of the API response.           |
| response.status.success                   | Indicates if the API call was successful (true/false) |
| response.status.code                      | Numeric code indicating the response status.          |
| response.status.message                   | Message describing the status of the response.        |
| response.product                          | Object containing product-related information.        |
| response.product.attributes               | Object containing attributes related to the product.  |
| response.product.attributes.attribute     | Array of attribute objects.                           |
| attribute.name                            | The name of the attribute.                            |
| attribute.label                           | Label associated with the attribute.                  |
| attribute.is\_enum                        | Indicates if the attribute is an enumeration (1/0).   |
| attribute.type                            | The data type of the attribute.                       |
| attribute.ou\_code                        | Code related to the organizational unit.              |
| attribute.ou\_id                          | ID of the organizational unit.                        |
| attribute.extraction\_rule\_type          | Type of extraction rule for the attribute.            |
| attribute.extraction\_rule\_data          | Data associated with the extraction rule.             |
| attribute.is\_soft\_enum                  | Indicates if the attribute is a soft enumeration.     |
| attribute.use\_in\_dump                   | Indicates if the attribute is used in dumps.          |
| attribute.default\_attribute\_value\_name | Default value for the attribute.                      |
| attribute.values.value                    | Array of values associated with the attribute.        |
| value.name                                | The name of the value.                                |
| value.label                               | Label associated with the value.                      |
| attribute.item\_status                    | Status information about the attribute addition.      |
| attribute.item\_status.success            | Indicates if the attribute addition was successful.   |
| attribute.item\_status.code               | Numeric code indicating the status of the addition.   |
| attribute.item\_status.message            | Message describing the status of the addition.        |