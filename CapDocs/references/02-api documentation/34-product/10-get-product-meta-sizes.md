---
title: Get Product Meta Sizes
excerpt: Retrieves details of all product meta-sizes.
api:
  file: customer-v11.json
  operationId: get-product-meta-sizes
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Query parameters

| Parameter       | Description                                                                                                                                                                                               |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| include\_id     | Retrieves category ids of eachmeta  size fetched.                                                                                                                                                         |
| name            | Retrieves details of specific size details based on the meta size name passed.                                                                                                                            |
| canonical\_name | Retrieves the details of a specific meta-size based on the CName. Canonical names are reference name provided to a specific size.                                                                         |
| size\_family    | Retrieve sizes of a specified meta-size family. Supports only predefined values.                                                                                                                          |
| type            | Retrieve meta-sizes of a specific type.                                                                                                                                                                   |
| id              | Retrieve the details of a specific meta-size based on the size id passed.                                                                                                                                 |
| limit           | Retrieve the details of a specific meta-size based on the size id passed.                                                                                                                                 |
| offset          | Entries to be ignored from the top.                                                                                                                                                                       |
| ou\_code        | Identifier code of the organisation.                                                                                                                                                                      |
| fetch\_type     | ALL - Fetches details of product associated with both master org and org unit. ORG-Fetches details of products associated with master ORG. SCOPE-Fetches details of products associated with an org unit. |

# Response Parameters

| Parameter                   | Description                                     |
| --------------------------- | ----------------------------------------------- |
| response.status.success     | Indicates if the request was successful.        |
| response.status.code        | Status code for the response.                   |
| response.status.message     | Message associated with request status.         |
| response.product.item       | List of product items retrieved.                |
| .item\_id                   | Unique ID of the item.                          |
| .sku                        | Stock Keeping Unit of the item.                 |
| .item\_ean                  | European Article Number or barcode of the item. |
| .price                      | Price of the item.                              |
| .img\_url                   | URL of item's image.                            |
| .in\_stock                  | Indicates if item is in stock.                  |
| .description                | Short description of the item.                  |
| .long\_description          | Longer description of the item (if available).  |
| .size                       | Size of the item (if available).                |
| .style                      | Style of the item (if available).               |
| .brand                      | Brand of the item (if available).               |
| .color                      | Color of the item (if available).               |
| .category                   | Category of the item (if available).            |
| .attributes                 | Additional attributes of item (if available).   |
| .attributes.attribute.name  | Name of the attribute (e.g., "Color", "Size").  |
| .attributes.attribute.value | Value of attribute (e.g., "Black", "XXL").      |
| .added\_on                  | Date and time when the item was added.          |
| .item\_status.status        | Indicates if item retrieval was successful.     |
| .item\_status.code          | Status code for the item retrieval.             |
| .item\_status.message       | Message associated with item retrieval status.  |