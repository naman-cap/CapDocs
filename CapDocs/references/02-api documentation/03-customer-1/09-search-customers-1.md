---
title: Search Customers
excerpt: >-
  Fetches customers from all sources using query string.  


  For example, you can fetch customers whose identifiers starting with 99455, or
  name that starts with ‘john’ and so on.
api:
  file: v2.json
  operationId: search-customers-1
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 📘 The keyword that you pass will be fetched automatically from all the sources. You do not need to explicitly specify the source type for this API.

### Request URL

`{host}/v2/customers/search?q={search keyword}`