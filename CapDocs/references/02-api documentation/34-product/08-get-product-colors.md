---
title: Get Product Colors
excerpt: Retrieves the details of all product colors configured for the org.
api:
  file: customer-v11.json
  operationId: get-product-colors
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

| Parameter | Datatype | Description                                                                                                                                                |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name      | string   | Name of the color.                                                                                                                                         |
| pallette  | string   | Hex code of the color..                                                                                                                                    |
| ou\_id    | integer  | Indicates the ID of the OU. -1 indicates that the product belongs to a master org. This is applicable only if OU support for product inventory is enabled. |