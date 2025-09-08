---
title: Add Product
excerpt: Allows you to add product to the inventory.
api:
  file: customer-v11.json
  operationId: add-product
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 📘 Enabling OU support for product entities
>
> To enable OU support for product entities, you need to create a JIRA ticket and enable the config `CONF_OU_LEVEL_PRODUCTS_ENABLED`. For more information, see [Configuring Organisation Unit (OU) support for product entities](https://docs.capillarytech.com/docs/inventory-profiles#configuring-organisation-unit-ou-support-for-product-entities).

# Request Body Parameters

```json Sample request
{
  "root": {
    "product": [{
      "sku": "SKU40",
      "ean": "",
      "price": "7000",
      "description": "adding sample product",
      "long_description": "Sample description",
      "img_url": "https://nightly.capillary.in/productManagement/Colors/img.jpg",
      "size": { "name": "Medium" },
      "style": { "name": "slimFit" },
      "brand": { "name": "Lee" },
      "color": { "name": "blue" },
      "category": { "name": "HANDBAG(S)" },
      "attributes": {
        "attribute": [
          {
            "name": "weight",
            "value": "100g"
          },
          {
            "name": "sampleName",
            "value": "samplevalue"
          }
        ]
      }
    },
   {
      "sku": "Levis-015",
      "ean": "Levis-015",
      "price": "22",
      "description": [],
      "img_url": [],
      "size": {
         "name": "abcd",
         "type": "type1"
      },
      "#text": ">",
      "style": {
         "name": "testcode"
      },
      "category": {
         "name": "test1"
      },
      "attributes": {
         "attribute": {
            "name": "Jeans",
            "value": "Levis13"
         }
      }
   },
   {
      "sku": "Levis-014",
      "ean": "Levis-014",
      "price": "22",
      "description": [],
      "img_url": [],
      "size": {
         "name": "abcd",
         "type": "type1"
      },
      "#text": ">",
      "style": {
         "name": "testcode"
      },
      "category": {
         "name": "test1"
      },
      "attributes": {
         "attribute": {
            "name": "Jeans",
            "value": "Levis13"
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
    "product": [{
      "sku": "SKU19",
      "ean": "",
      "price": "5000",
      "description": "OU Product 15",
      "long_description": "OU Product 14",
      "ou_code": "tatacliq",
      "size": { "name": "Small" },
      "style": { "name": "slim" },
      "brand": { "name": "Peter" },
      "color": { "name": "Green" },
      "category": { "name": "HANDBAG(S)" }    }
    ]
  }
}
```

<br />

| Parameter         | Datatype  | Description                                                                                                                                                                                                                                                                                                |
| ----------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| product\*         | array-obj | list of products to add.                                                                                                                                                                                                                                                                                   |
| sku\*             | string    | SKU of the product to add.                                                                                                                                                                                                                                                                                 |
| ean               | string    | European article number of the product.                                                                                                                                                                                                                                                                    |
| price\*           | double    | Price of the product.                                                                                                                                                                                                                                                                                      |
| description       | string    | Brief description of the product.                                                                                                                                                                                                                                                                          |
| returnable        | boolean   | Pass `true` if the item is allowed to return post purchase. You also need to mention `returnableDays`. Default value is `false`.                                                                                                                                                                           |
| returnableDays    | int       | Number of days in which the item can be returned after purchasing. Default value is `-1` (no limit).                                                                                                                                                                                                       |
| long\_description | string    | Detailed description of the product.                                                                                                                                                                                                                                                                       |
| ou\_code          | string    | Identification code of the organisation unit. This is applicable only if OU support for product inventory is enabled.  For more information, see [OU support for product inventory](https://docs.capillarytech.com/docs/inventory-profiles#configuring-organisation-unit-ou-support-for-product-entities). |
| img\_url          | string    | URL of the product image.                                                                                                                                                                                                                                                                                  |
| size              | obj       | Size of the product in name:value pairs.                                                                                                                                                                                                                                                                   |
| style             | obj       | Product style in name:value pairs.                                                                                                                                                                                                                                                                         |
| type              | string    | Size type.                                                                                                                                                                                                                                                                                                 |
| brand             | obj       | Pass a valid brand name (as per the database) of the product.                                                                                                                                                                                                                                              |
| color             | obj       | Pass a valid product color (as per the database) .                                                                                                                                                                                                                                                         |
| category          | obj       | Pass a valid product category name ((as per the database).                                                                                                                                                                                                                                                 |
| attributes        | obj       | Other product attributes in name-value pairs.                                                                                                                                                                                                                                                              |

> 📘
>
> Parameters marked with \* are mandatory. Values of product attributes such as style, size, brand, type, color, and category should have been configured for the org.  You can set these on the Organization Settings page on InTouch.

# Response Parameters

| Parameter   | Datatype  | Description                                                   |
| ----------- | --------- | ------------------------------------------------------------- |
| item\_id    | long      | Unique ID of the product generated by the system.             |
| name        | string    | Name of the entry.                                            |
| label       | string    | UI name of the specific entry (style, color, category, brand) |
| added\_on   | date-time | Date and time of the product addition.                        |
| description | string    | Description of the specific entry as in the database.         |
| ou\_code    | string    | Identification code of the organisation unit.                 |
| ou\_id      | Integer   | Identification number of the organisation unit.               |