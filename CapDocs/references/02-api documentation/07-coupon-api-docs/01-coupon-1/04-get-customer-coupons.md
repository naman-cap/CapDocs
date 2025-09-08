---
title: Get Customer Coupons
excerpt: >-
  Retrieves the details of coupons (issued, redeemed, expired) of a specific
  customer.
api:
  file: customer-v11.json
  operationId: get-customer-coupons
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Example Request

```curl curl
curl --location 'eu.api.capillarytech.com/v1.1/customer/coupons?sort_order=asc&id=98662653&order_by=valid_till' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlc3RvmV0aWxs3NuZWUyMzoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==' \
--header 'Cookie: _cfuvid=xzAo0ziCGXK3EWiG3v7Lhkr6E6morcjBcGXEX257hQo-1734668678093-0.0.1.1-604800000'
```