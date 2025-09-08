---
title: Get Product Sizes
excerpt: Retrieves the list of all configured product sizes.
api:
  file: customer-v11.json
  operationId: get-product-sizes
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Response Parameters

| Parameter             | Datatype | Description                                                                                                                                                |
| --------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                  | string   | Name of the size                                                                                                                                           |
| label                 | string   | Label name of the size.                                                                                                                                    |
| canonical_name        | string   | "M"                                                                                                                                                        |
| description           | string   | Description of the size as in the database.                                                                                                                |
| size_family           | string   | Family size to which the size belongs to.                                                                                                                  |
| type                  | string   | Type associated to the size.                                                                                                                               |
| parent_canonical_name | string   | CNAME or reference name provided to a specific size.                                                                                                       |
| ou_id                 | integer  | Indicates the ID of the OU. -1 indicates that the product belongs to a master org. This is applicable only if OU support for product inventory is enabled. |