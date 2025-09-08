---
title: Create a Vendor (OLD)
excerpt: Creates a new vendor in the rewards system.
api:
  file: vendor-api.json
  operationId: createVendor
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
A vendor is an external third-party brand that you can use to fulfil your rewards. This API allows you to define vendor details, add images and videos, and display them in your reward catalogue.

# API Error Codes

| Code | Description           | Reason                                    |
| :--- | :-------------------- | :---------------------------------------- |
| 5007 | Vendor already exists | Vendor with the same name already exists. |
| 3004 | Brand not found       | `brandId` provided is invalid.            |
