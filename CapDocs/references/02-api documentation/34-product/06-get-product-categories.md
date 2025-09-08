---
title: Get Product Categories
excerpt: Retrieves the details of all product categories.
api:
  file: customer-v11.json
  operationId: get-product-categories
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
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