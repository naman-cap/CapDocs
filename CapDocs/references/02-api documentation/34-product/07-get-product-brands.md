---
title: Get Product Brands
excerpt: Retrieves the details of all product brands created for the org.
api:
  file: customer-v11.json
  operationId: get-product-brands
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

| Parameter     | Datatype | Description                                                                                                                                                |
| ------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name          | string   | Name of the brand.                                                                                                                                         |
| label         | string   | Label name of the brand that appears on the user interface.                                                                                                |
| description   | string   | Description of the brand.                                                                                                                                  |
| parent\_name  | string   | Name of the parent brand. Applicable for child categories.                                                                                                 |
| parent\_label | string   | Label name of the parent brand.                                                                                                                            |
| ou\_id        | integer  | Indicates the ID of the OU. -1 indicates that the product belongs to a master org. This is applicable only if OU support for product inventory is enabled. |