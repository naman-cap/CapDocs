---
title: Get Product Attributes
excerpt: >-
  Retrieves the list of all product attributes of the org.



  Some attributes like price, item_sku, description, img_url would be common
  across organizations.
api:
  file: customer-v11.json
  operationId: get-product-attributes
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
### Response Parameters

| Parameter                       | Datatype | Description                                                                                                                                                |
| ------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                            | string   | Name of the attribute.                                                                                                                                     |
| label                           | string   | Label name of the attribute                                                                                                                                |
| is\_enum                        | enum     | Whether the attribute values are predefined values. `1` if enum type, `0` if not enum.                                                                     |
| type                            | string   | Datatype of the attribute value.                                                                                                                           |
| default\_attribute\_value\_name | string   | Default value of the attribute if any.                                                                                                                     |
| inventory\_item\_attributes     | string   | Name of the table (in the database) from which the attributes are retrieved.                                                                               |
| ou\_id                          | integer  | Indicates the ID of the OU. -1 indicates that the product belongs to a master org. This is applicable only if OU support for product inventory is enabled. |